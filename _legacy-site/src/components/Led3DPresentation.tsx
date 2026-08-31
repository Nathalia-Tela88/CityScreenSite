"use client";

import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, Html } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const OBSIDIAN = "#060709";
const SIGNAL = "#ff2233";

const MODULE_GRID = 4;
const MODULE_SIZE = 1.18;
const MODULE_GAP = 0.03;
const PIXELS_PER_MODULE = 6;
const PIXEL_COUNT = MODULE_GRID * MODULE_GRID * PIXELS_PER_MODULE * PIXELS_PER_MODULE;

const PANEL_SPAN = MODULE_GRID * (MODULE_SIZE + MODULE_GAP);
const HALF = PANEL_SPAN / 2;

type LayerId = "modules" | "cabinet" | "hub";

type LayerSpec = {
  id: LayerId;
  index: string;
  title: string;
  subtitle: string;
  body: string;
  callout: string;
  specs: { label: string; value: string }[];
  restZ: number;
  explodedZ: number;
  labelY: number;
};

const layers: LayerSpec[] = [
  {
    id: "modules",
    index: "01",
    title: "Magnetic LED modules",
    subtitle: "Front layer",
    body: "Eight neodymium pins per module, lifted from the face with a suction tool. Front service swaps a failure in under sixty seconds.",
    callout: "Front-service · 60-second module swap",
    specs: [
      { label: "Module pitch", value: "0.6 – 10 mm" },
      { label: "Retention", value: "8 × neodymium pins" },
      { label: "Access", value: "Front, tool-assisted" },
    ],
    restZ: 0.42,
    explodedZ: 3.7,
    labelY: 1,
  },
  {
    id: "cabinet",
    index: "02",
    title: "Die-cast aluminium cabinet",
    subtitle: "Structural layer",
    body: "Single-piece die-cast frame held to 0.05 mm flatness. Quick-lock cams draw cabinets into plane on a quarter-turn — no shims, no tools.",
    callout: "Quick-lock install · quarter-turn cams",
    specs: [
      { label: "Construction", value: "Single-piece die-cast" },
      { label: "Flatness", value: "± 0.05 mm" },
      { label: "Lock action", value: "Quarter-turn cam" },
    ],
    restZ: 0,
    explodedZ: 0,
    labelY: -1,
  },
  {
    id: "hub",
    index: "03",
    title: "Power supply & receiving card hub",
    subtitle: "Internal layer",
    body: "Dual redundant supplies and a hot-swap receiving card on a shared backplane, both replaceable from the front once modules are lifted.",
    callout: "N+1 redundancy · hot-swap receiving card",
    specs: [
      { label: "Supplies", value: "2 × PSU, N+1" },
      { label: "Receiving card", value: "Hot-swap, backup path" },
      { label: "Fasteners", value: "Captive, front-access" },
    ],
    restZ: -0.42,
    explodedZ: -3.7,
    labelY: 1,
  },
];

type Progress = { current: number; hover: LayerId | null };

const noopSubscribe = () => () => {};

function subscribeToWide(onChange: () => void) {
  const query = window.matchMedia("(min-width: 1024px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// Deterministic layout so the receiving-card components stay put across renders.
function seeded(index: number) {
  const value = Math.sin(index * 127.1) * 43758.5453;
  return value - Math.floor(value);
}

function LedModules({ progress }: { progress: React.RefObject<Progress> }) {
  const group = React.useRef<THREE.Group>(null);
  const pixels = React.useRef<THREE.InstancedMesh>(null);
  const plates = React.useRef<THREE.InstancedMesh>(null);
  const magnets = React.useRef<THREE.InstancedMesh>(null);

  const layout = React.useMemo(() => {
    const modulePositions: [number, number][] = [];
    const pixelPositions: [number, number][] = [];
    const step = MODULE_SIZE + MODULE_GAP;
    const pixelStep = (MODULE_SIZE - 0.18) / PIXELS_PER_MODULE;

    for (let mx = 0; mx < MODULE_GRID; mx++) {
      for (let my = 0; my < MODULE_GRID; my++) {
        const originX = -HALF + step * (mx + 0.5);
        const originY = -HALF + step * (my + 0.5);
        modulePositions.push([originX, originY]);

        for (let px = 0; px < PIXELS_PER_MODULE; px++) {
          for (let py = 0; py < PIXELS_PER_MODULE; py++) {
            pixelPositions.push([
              originX + pixelStep * (px - (PIXELS_PER_MODULE - 1) / 2),
              originY + pixelStep * (py - (PIXELS_PER_MODULE - 1) / 2),
            ]);
          }
        }
      }
    }
    return { modulePositions, pixelPositions };
  }, []);

  React.useLayoutEffect(() => {
    const matrix = new THREE.Matrix4();

    if (plates.current) {
      layout.modulePositions.forEach(([x, y], i) => {
        matrix.makeTranslation(x, y, 0);
        plates.current!.setMatrixAt(i, matrix);
      });
      plates.current.instanceMatrix.needsUpdate = true;
    }

    if (magnets.current) {
      const inset = MODULE_SIZE / 2 - 0.2;
      let i = 0;
      layout.modulePositions.forEach(([x, y]) => {
        for (const dx of [-inset, inset]) {
          for (const dy of [-inset, inset]) {
            matrix.makeTranslation(x + dx, y + dy, -0.085);
            magnets.current!.setMatrixAt(i++, matrix);
          }
        }
      });
      magnets.current.instanceMatrix.needsUpdate = true;
    }

    if (pixels.current) {
      layout.pixelPositions.forEach(([x, y], i) => {
        matrix.makeTranslation(x, y, 0.05);
        pixels.current!.setMatrixAt(i, matrix);
      });
      pixels.current.instanceMatrix.needsUpdate = true;
    }
  }, [layout]);

  const color = React.useMemo(() => new THREE.Color(), []);
  const zRef = React.useRef(layers[0].restZ);

  useFrame((state, delta) => {
    const { current, hover } = progress.current;
    const target =
      THREE.MathUtils.lerp(layers[0].restZ, layers[0].explodedZ, current) +
      (hover === "modules" ? 0.55 : 0);
    zRef.current = THREE.MathUtils.damp(zRef.current, target, 4, delta);
    if (group.current) group.current.position.z = zRef.current;

    const mesh = pixels.current;
    if (!mesh) return;
    const time = state.clock.elapsedTime;
    const dimmed = hover && hover !== "modules" ? 0.28 : 1;

    for (let i = 0; i < PIXEL_COUNT; i++) {
      const [x, y] = layout.pixelPositions[i];
      const wave =
        0.5 +
        0.5 * Math.sin(time * 1.7 + x * 0.9 + y * 0.55) *
          Math.cos(time * 0.9 - y * 0.7);
      const intensity = (0.25 + wave * 1.75) * dimmed;
      // Green/blue scale off the clamped red so peaks stay red instead of blowing out pink.
      const red = Math.min(intensity, 1);
      color.setRGB(intensity, red * 0.09, red * 0.12);
      mesh.setColorAt(i, color);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <instancedMesh
        ref={plates}
        args={[undefined, undefined, MODULE_GRID * MODULE_GRID]}
        castShadow
      >
        <boxGeometry args={[MODULE_SIZE, MODULE_SIZE, 0.1]} />
        <meshStandardMaterial color="#101013" metalness={0.55} roughness={0.62} />
      </instancedMesh>

      <instancedMesh
        ref={magnets}
        args={[undefined, undefined, MODULE_GRID * MODULE_GRID * 4]}
      >
        <cylinderGeometry args={[0.055, 0.055, 0.08, 12]} />
        <meshStandardMaterial
          color="#9a9a9e"
          metalness={1}
          roughness={0.28}
          emissive={SIGNAL}
          emissiveIntensity={0.12}
        />
      </instancedMesh>

      <instancedMesh ref={pixels} args={[undefined, undefined, PIXEL_COUNT]}>
        <boxGeometry args={[0.085, 0.085, 0.02]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

function CabinetFrame({ progress }: { progress: React.RefObject<Progress> }) {
  const group = React.useRef<THREE.Group>(null);
  const zRef = React.useRef(0);

  const beams = React.useMemo(() => {
    const t = 0.16;
    const rails: { pos: [number, number, number]; size: [number, number, number] }[] = [
      { pos: [0, HALF - t / 2, 0], size: [PANEL_SPAN, t, 0.72] },
      { pos: [0, -HALF + t / 2, 0], size: [PANEL_SPAN, t, 0.72] },
      { pos: [-HALF + t / 2, 0, 0], size: [t, PANEL_SPAN - t * 2, 0.72] },
      { pos: [HALF - t / 2, 0, 0], size: [t, PANEL_SPAN - t * 2, 0.72] },
      { pos: [0, 0, 0], size: [PANEL_SPAN - t * 2, 0.1, 0.6] },
      { pos: [0, 0, 0], size: [0.1, PANEL_SPAN - t * 2, 0.6] },
    ];
    return rails;
  }, []);

  const cams = React.useMemo(() => {
    const offset = HALF - 0.08;
    const along = PANEL_SPAN / 4;
    const list: [number, number, number][] = [];
    for (const s of [-along, along]) {
      list.push([s, offset, 0.2], [s, -offset, 0.2], [offset, s, 0.2], [-offset, s, 0.2]);
    }
    return list;
  }, []);

  useFrame((_, delta) => {
    const { current, hover } = progress.current;
    const target = hover === "cabinet" ? 0.4 : 0;
    zRef.current = THREE.MathUtils.damp(zRef.current, target, 4, delta);
    if (group.current) {
      group.current.position.z = zRef.current;
      group.current.rotation.z = THREE.MathUtils.damp(
        group.current.rotation.z,
        current * 0.02,
        3,
        delta,
      );
    }
  });

  return (
    <group ref={group}>
      {beams.map((beam, i) => (
        <mesh key={i} position={beam.pos} castShadow receiveShadow>
          <boxGeometry args={beam.size} />
          <meshStandardMaterial
            color="#74747a"
            metalness={0.88}
            roughness={0.28}
          />
        </mesh>
      ))}

      {cams.map((position, i) => (
        <group key={i} position={position}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.11, 0.11, 0.14, 20]} />
            <meshStandardMaterial color="#1c1c20" metalness={0.85} roughness={0.4} />
          </mesh>
          <mesh position={[0, 0, 0.08]}>
            <torusGeometry args={[0.085, 0.016, 8, 24]} />
            <meshStandardMaterial
              color={SIGNAL}
              emissive={SIGNAL}
              emissiveIntensity={2.2}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      <mesh position={[0, 0, -0.34]} receiveShadow>
        <boxGeometry args={[PANEL_SPAN - 0.32, PANEL_SPAN - 0.32, 0.04]} />
        <meshStandardMaterial color="#2a2a2f" metalness={0.75} roughness={0.5} />
      </mesh>
    </group>
  );
}

function PowerHub({ progress }: { progress: React.RefObject<Progress> }) {
  const group = React.useRef<THREE.Group>(null);
  const led = React.useRef<THREE.MeshStandardMaterial>(null);
  const zRef = React.useRef(layers[2].restZ);

  const chips = React.useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: -1.05 + seeded(i * 4 + 1) * 2.1,
        y: -0.5 + seeded(i * 4 + 2) * 1,
        w: 0.09 + seeded(i * 4 + 3) * 0.2,
        h: 0.07 + seeded(i * 4 + 4) * 0.12,
      })),
    [],
  );

  useFrame((state, delta) => {
    const { current, hover } = progress.current;
    const target =
      THREE.MathUtils.lerp(layers[2].restZ, layers[2].explodedZ, current) -
      (hover === "hub" ? 0.55 : 0);
    zRef.current = THREE.MathUtils.damp(zRef.current, target, 4, delta);
    if (group.current) group.current.position.z = zRef.current;
    if (led.current) {
      led.current.emissiveIntensity =
        1.6 + Math.sin(state.clock.elapsedTime * 4) * 1.2;
    }
  });

  return (
    <group ref={group}>
      <mesh receiveShadow>
        <boxGeometry args={[PANEL_SPAN - 0.4, PANEL_SPAN - 0.4, 0.08]} />
        <meshStandardMaterial color="#202024" metalness={0.8} roughness={0.42} />
      </mesh>

      {[-1.28, 1.28].map((x) => (
        <group key={x} position={[x, 1.2, 0.32]}>
          <mesh castShadow>
            <boxGeometry args={[1.5, 1.05, 0.5]} />
            <meshStandardMaterial color="#82828a" metalness={0.9} roughness={0.28} />
          </mesh>
          {Array.from({ length: 7 }, (_, i) => (
            <mesh key={i} position={[-0.6 + i * 0.2, 0, 0.27]}>
              <boxGeometry args={[0.055, 0.85, 0.06]} />
              <meshStandardMaterial color="#16161a" metalness={0.6} roughness={0.7} />
            </mesh>
          ))}
          <mesh position={[0, -0.62, 0.14]}>
            <boxGeometry args={[0.7, 0.12, 0.22]} />
            <meshStandardMaterial color="#1f1f24" metalness={0.5} roughness={0.75} />
          </mesh>
        </group>
      ))}

      <group position={[0, -0.95, 0.3]}>
        <mesh castShadow>
          <boxGeometry args={[2.6, 1.3, 0.06]} />
          <meshStandardMaterial color="#5c0f18" metalness={0.3} roughness={0.6} />
        </mesh>
        {chips.map((chip, i) => (
          <mesh key={i} position={[chip.x, chip.y, 0.06]}>
            <boxGeometry args={[chip.w, chip.h, 0.055]} />
            <meshStandardMaterial color="#34343a" metalness={0.55} roughness={0.55} />
          </mesh>
        ))}
        <mesh position={[0, 0.15, 0.08]}>
          <boxGeometry args={[0.5, 0.5, 0.09]} />
          <meshStandardMaterial color="#66666e" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[1.05, 0.48, 0.08]}>
          <boxGeometry args={[0.16, 0.16, 0.06]} />
          <meshStandardMaterial
            ref={led}
            color={SIGNAL}
            emissive={SIGNAL}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        {[-0.75, -0.25, 0.25, 0.75].map((x) => (
          <mesh key={x} position={[x, -0.5, 0.1]}>
            <boxGeometry args={[0.34, 0.14, 0.14]} />
            <meshStandardMaterial color="#f0f0f2" metalness={0.2} roughness={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Annotation({
  layer,
  progress,
  active,
  onHover,
}: {
  layer: LayerSpec;
  progress: React.RefObject<Progress>;
  active: boolean;
  onHover: (id: LayerId | null) => void;
}) {
  const group = React.useRef<THREE.Group>(null);
  const zRef = React.useRef(layer.restZ);
  const [visible, setVisible] = React.useState(false);
  const above = layer.labelY > 0;

  useFrame((_, delta) => {
    const { current, hover } = progress.current;
    const target =
      THREE.MathUtils.lerp(layer.restZ, layer.explodedZ, current) +
      (hover === layer.id ? Math.sign(layer.explodedZ || 1) * 0.5 : 0);
    zRef.current = THREE.MathUtils.damp(zRef.current, target, 4, delta);
    if (group.current) group.current.position.z = zRef.current;
    const next = current > 0.32;
    setVisible((was) => (was === next ? was : next));
  });

  return (
    <group ref={group} position={[0, layer.labelY * (HALF + 0.7), layer.restZ]}>
      <Html zIndexRange={[30, 0]} style={{ pointerEvents: "none" }}>
        <div
          onMouseEnter={() => onHover(layer.id)}
          onMouseLeave={() => onHover(null)}
          className={cn(
            "w-[178px] -translate-x-1/2 transition-opacity duration-500",
            above ? "-translate-y-full" : "",
            visible ? "opacity-100 [&>*]:pointer-events-auto" : "opacity-0",
          )}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-signal shadow-[0_0_10px_#ff2233]" />
            <span className="h-px w-7 shrink-0 bg-gradient-to-r from-signal to-signal/10" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-signal/70 uppercase">
              {layer.index}
            </span>
          </div>
          <div
            className={cn(
              "mt-2 rounded-md border bg-obsidian/90 px-3 py-2.5 backdrop-blur-md transition-colors",
              active
                ? "border-signal/60 shadow-[0_0_28px_-8px_#ff2233]"
                : "border-signal/20",
            )}
          >
            <p className="font-heading text-[11px] leading-tight font-semibold text-foreground">
              {layer.title}
            </p>
            <p className="mt-1.5 font-mono text-[9px] leading-relaxed text-signal/80">
              {layer.callout}
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}

function Scene({
  progress,
  hovered,
  onHover,
  showAnnotations,
}: {
  progress: React.RefObject<Progress>;
  hovered: LayerId | null;
  onHover: (id: LayerId | null) => void;
  showAnnotations: boolean;
}) {
  const rig = React.useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!rig.current) return;
    const { current } = progress.current;
    const pointerX = state.pointer.x * 0.12;
    const pointerY = state.pointer.y * 0.08;
    rig.current.rotation.y = THREE.MathUtils.damp(
      rig.current.rotation.y,
      -0.5 - current * 0.42 + pointerX,
      3,
      delta,
    );
    rig.current.rotation.x = THREE.MathUtils.damp(
      rig.current.rotation.x,
      0.18 - current * 0.05 - pointerY,
      3,
      delta,
    );
  });

  return (
    <>
      <color attach="background" args={[OBSIDIAN]} />
      <fog attach="fog" args={[OBSIDIAN, 14, 30]} />

      <ambientLight intensity={0.75} />
      <directionalLight position={[6, 8, 8]} intensity={2.6} castShadow />
      <directionalLight position={[-8, 3, 4]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-6, 2, 5]} intensity={60} color={SIGNAL} distance={26} />
      <pointLight position={[7, -3, -4]} intensity={45} color="#ff5a4a" distance={24} />

      <Environment resolution={128}>
        <Lightformer
          intensity={3.4}
          position={[0, 4, 6]}
          scale={[12, 3, 1]}
          color={SIGNAL}
        />
        <Lightformer
          intensity={2.4}
          position={[-7, 0, 3]}
          scale={[3, 9, 1]}
          color="#ffd9d9"
        />
        <Lightformer intensity={2} position={[7, -2, 4]} scale={[5, 5, 1]} color="#ffffff" />
      </Environment>

      <group ref={rig}>
        <LedModules progress={progress} />
        <CabinetFrame progress={progress} />
        <PowerHub progress={progress} />
        {showAnnotations
          ? layers.map((layer) => (
              <Annotation
                key={layer.id}
                layer={layer}
                progress={progress}
                active={hovered === layer.id}
                onHover={onHover}
              />
            ))
          : null}
      </group>

      <ContactShadows
        position={[0, -HALF - 1.4, 0]}
        opacity={0.55}
        scale={18}
        blur={2.6}
        far={9}
        color="#000000"
      />

      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.72}
          luminanceSmoothing={0.28}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.24} darkness={0.85} />
      </EffectComposer>
    </>
  );
}

export function Led3DPresentation() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const progress = React.useRef<Progress>({ current: 0, hover: null });
  const [hovered, setHovered] = React.useState<LayerId | null>(null);
  const [step, setStep] = React.useState(0);
  const reduceMotion = useReducedMotion();

  const mounted = React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const wide = React.useSyncExternalStore(
    subscribeToWide,
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const eased = Math.min(1, Math.max(0, (value - 0.08) / 0.62));
    progress.current.current = eased;
    setStep(eased < 0.02 ? 0 : eased < 0.55 ? 1 : 2);
  });

  const handleHover = React.useCallback((id: LayerId | null) => {
    progress.current.hover = id;
    setHovered(id);
  }, []);

  return (
    <section
      id="hardware"
      ref={sectionRef}
      className="relative h-[340vh] bg-obsidian"
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)]">
        <div aria-hidden className="absolute inset-0 grid-etch opacity-25" />

        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] gap-4 px-6 py-6 lg:grid-cols-[minmax(0,23rem)_minmax(0,1fr)] lg:grid-rows-1 lg:gap-10 lg:py-10">
          <div className="z-10 flex min-h-0 flex-col justify-center gap-5 overflow-y-auto">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
                Hardware architecture
              </p>
              <h2 className="mt-2.5 font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
                Three layers.
                <br />
                <span className="text-signal">One serviceable surface.</span>
              </h2>
              <p className="mt-3 hidden max-w-sm text-xs leading-relaxed text-muted-foreground lg:block">
                Scroll to separate the assembly, or hover a layer to isolate it.
              </p>
            </div>

            <div className="hidden gap-2.5 lg:grid">
              {layers.map((layer, index) => (
                <motion.button
                  key={layer.id}
                  type="button"
                  onMouseEnter={() => handleHover(layer.id)}
                  onMouseLeave={() => handleHover(null)}
                  onFocus={() => handleHover(layer.id)}
                  onBlur={() => handleHover(null)}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={cn(
                    "rounded-lg border bg-obsidian/70 p-3.5 text-left backdrop-blur-md transition-all",
                    hovered === layer.id
                      ? "border-signal/60 shadow-[0_0_32px_-10px_#ff2233]"
                      : "border-signal/15 hover:border-signal/35",
                    step > 0 && index <= step ? "opacity-100" : "opacity-60",
                  )}
                >
                  <span className="font-mono text-[9px] tracking-[0.2em] text-signal uppercase">
                    {layer.index} / {layer.subtitle}
                  </span>
                  <p className="mt-1 font-heading text-[13px] font-semibold">
                    {layer.title}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                    {layer.body}
                  </p>
                  <dl className="mt-2.5 grid gap-0.5">
                    {layer.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-baseline justify-between gap-3 border-t border-signal/10 pt-1"
                      >
                        <dt className="font-mono text-[10px] text-muted-foreground uppercase">
                          {spec.label}
                        </dt>
                        <dd className="font-mono text-[10px] text-foreground">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative min-h-0">
            {mounted ? (
              <Canvas
                shadows
                dpr={[1, 1.75]}
                gl={{ antialias: true, powerPreference: "high-performance" }}
                camera={{ position: [0, 0.4, 20], fov: 30 }}
              >
                <Scene
                  progress={progress}
                  hovered={hovered}
                  onHover={handleHover}
                  showAnnotations={wide}
                />
              </Canvas>
            ) : null}
          </div>

          <div className="pointer-events-auto absolute inset-x-6 bottom-6 flex gap-2 overflow-x-auto lg:hidden">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="min-w-[190px] shrink-0 rounded-lg border border-signal/20 bg-obsidian/80 p-3 backdrop-blur-md"
              >
                <span className="font-mono text-[9px] tracking-[0.2em] text-signal uppercase">
                  {layer.index} / {layer.subtitle}
                </span>
                <p className="mt-1 font-heading text-xs font-semibold">
                  {layer.title}
                </p>
                <p className="mt-1.5 font-mono text-[9px] leading-relaxed text-signal/70">
                  {layer.callout}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Led3DPresentation;

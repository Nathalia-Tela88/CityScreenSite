import { seriesByPlatform, type Series } from "@/lib/series";

/**
 * The series grouped by platform, for the chip lists and grids.
 *
 * Derived from lib/series.ts rather than duplicated, so the names on a card
 * and the names on their own pages can never disagree.
 */
export type Model = Series;

export const modelsBySlug: Record<string, Model[]> = seriesByPlatform;

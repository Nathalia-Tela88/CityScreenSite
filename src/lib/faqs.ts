export type FaqItem = { q: string; a: string };
export type FaqGroup = { topic: string; items: FaqItem[] };

/* Copy lifted verbatim from the original build. It is specific, plainly
   written and clearly came from someone who does this work — worth keeping
   word for word rather than rewriting into marketing prose. */

export const homeFaqs: FaqItem[] = [
  {
    q: "Do I need a permit?",
    a: "Almost certainly yes. Any permanent outdoor sign requires municipal approval. We handle the entire submission package including stamped structural and electrical drawings. You sign the application. We manage the rest.",
  },
  {
    q: "What is the lead time?",
    a: "Standard lead time is eight to twelve weeks from deposit to delivery. Custom fabrication or large-scale DOOH deployments may extend that. We will give you a firm date in the quote, not an estimate.",
  },
  {
    q: "What software runs it?",
    a: "We supply and configure NovaStar or Brompton processing. The content management software is licensed to you. We train your team on-site during handover. If you can run a PowerPoint, you can run the display.",
  },
  {
    q: "What does the warranty cover?",
    a: "Five years on parts and labour for every panel we supply. The warranty covers manufacturing defects, premature pixel failure beyond the acceptable ISO threshold, and power supply faults. It does not cover physical impact damage.",
  },
  {
    q: "Do you offer financing?",
    a: "We work with several Portuguese equipment financing partners. Terms typically range from twenty-four to sixty months. We can include the financing application with your quote package if you request it.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    q: "What is the lead time?",
    a: "Typical lead time from signed order to installation is six to eight weeks. This includes structural engineering, permitting, fabrication and testing. Rush timelines can be discussed for rental and event deployments.",
  },
  {
    q: "How does site assessment work?",
    a: "An engineer visits your location to measure sightlines, ambient light and structural mounting points. We document power and data pathways. You receive a full report with pixel pitch and brightness recommendations within three business days.",
  },
  {
    q: "What do you need for a quote?",
    a: "We need the approximate display size, intended viewing distance and whether the installation is indoor or outdoor. A site address and a few photos of the proposed location help us return an accurate budget. The form on this page captures everything we require.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes. We manage the full permit application with your municipality including structural drawings sealed by an engineer certified by the Ordem dos Engenheiros. This is standard in every fixed installation quote.",
  },
  {
    q: "What warranty do you offer?",
    a: "Our standard warranty covers parts and labour for three years. The real differentiator is lifetime service. We answer the phone, we stock spares in Setúbal and we dispatch a technician when you need one.",
  },
];

export const doohFaqs: FaqItem[] = [
  {
    q: "What permits are required?",
    a: "Outdoor signage in Portugal requires municipal sign permits and may need an Infraestruturas de Portugal permit near national roads. CityScreen manages the full permit application, including structural drawings sealed by an engineer certified by the Ordem dos Engenheiros. We handle the process from submission to approval.",
  },
  {
    q: "How bright must it be?",
    a: "Direct sunlight demands a minimum of 5,000 nits for readable content. Our DOOH panels deliver up to 10,000 nits with automatic ambient light sensors that adjust output to meet municipal luminance bylaws. This prevents glare complaints while maintaining visibility.",
  },
  {
    q: "What about power consumption?",
    a: "A typical 14×48-foot roadside billboard draws between 40 and 60 amps at 240 V under full white load. Actual consumption is lower due to content variation and brightness modulation. We provide detailed load calculations for your electrical contractor and utility service application.",
  },
  {
    q: "How does connectivity work?",
    a: "Each display connects via cellular modem or hardwired fibre to our cloud-based CMS. You schedule creative, build playlists, and monitor panel health from a single dashboard. The system sends automatic alerts for any fault before it affects playback.",
  },
  {
    q: "Is 24/7 operation covered?",
    a: "Yes. Our warranty covers continuous operation including all components, power supplies, and receiving cards. We stock replacement modules in our Setúbal warehouse. A service call typically happens within 24 hours, and we do not prorate coverage based on operating hours.",
  },
];

export const rentalFaqs: FaqItem[] = [
  {
    q: "Do you support cross-rentals?",
    a: "Yes. We regularly supply inventory to other AV companies when their own stock is committed. Panels arrive calibrated and flight-cased, ready to integrate with your existing rig.",
  },
  {
    q: "What is the lead time?",
    a: "Standard deployments require two weeks' notice. Large-scale festival builds may need four weeks for pre-production engineering and structural review. We always confirm availability within 24 hours of your inquiry.",
  },
  {
    q: "Is an on-site technician required?",
    a: "We include a CityScreen technician for the first day of build and show day as standard. For complex curved or multi-wall deployments, we recommend a dedicated tech for the full run. Your crew handles the rest.",
  },
  {
    q: "What is the weather contingency?",
    a: "All LRM panels carry an IP65 front rating for direct rain exposure. For mixed inventory outdoor shows, we provide a detailed wind-loading analysis and a rapid-strike plan if conditions exceed safe operating limits.",
  },
  {
    q: "What playback systems are compatible?",
    a: "Our processors accept standard SDI and HDMI inputs. We have tested compatibility with Barco E2, Analog Way Aquilon, and Resolume systems. NovaStar and Brompton processing are available depending on the series.",
  },
];

export const warrantyFaqs: FaqItem[] = [
  {
    q: "What is your average response time?",
    a: "We respond to service calls within four hours during business days. Critical failures on outdoor digital displays are addressed same-day. Our Setúbal-based technicians are never more than a short drive from your site.",
  },
  {
    q: "How far do you travel?",
    a: "Our service radius covers the Lisboa and Setúbal district, door to door. We do not subcontract. A CityScreen technician in a company vehicle arrives at your location every time.",
  },
  {
    q: "Is after-hours support available?",
    a: "Yes. We provide 24/7 emergency support for rental and staging clients during active events. Fixed installation clients receive priority scheduling during standard business hours with after-hours call-out available under service level agreements.",
  },
  {
    q: "Is the warranty transferable?",
    a: "The standard warranty stays with the original installation site. If you sell the property, we can transfer the remaining coverage to the new owner. Contact us to complete the paperwork before the sale closes.",
  },
  {
    q: "What SLA do rental clients get?",
    a: "Rental clients operate under a dedicated service level agreement guaranteeing on-site spares and a technician during the event. We stage backup modules at the venue. If a panel fails mid-show, we swap it before the audience notices.",
  },
];

/** The /faq page, grouped by the stage of the job the question comes up in. */
export const faqGroups: FaqGroup[] = [
  {
    topic: "Permits",
    items: [
      {
        q: "Do I need a permit?",
        a: "Almost certainly. Every município in Portugal has its own sign regulations governing size, brightness, and location. We manage the entire permit application on your behalf, from initial drawings to final approval.",
      },
      {
        q: "How long does approval take?",
        a: "Typical municipal review runs four to eight weeks. Complex sites or those requiring minor variances can extend the timeline. We submit early and follow up relentlessly.",
      },
      {
        q: "What about national roads?",
        a: "Displays visible from a national road (IP or IC) require an Infraestruturas de Portugal permit. This is a separate application with strict criteria on messaging and dwell time. We handle it.",
      },
      {
        q: "Who prepares the drawings?",
        a: "Our engineering team produces stamped site plans, elevation drawings, and structural calculations. Nothing is outsourced. The package is complete when it lands on the planner's desk.",
      },
      {
        q: "Can you get denied?",
        a: "Yes. Some sites simply will not comply. We tell you that before you spend a dollar. Our site assessment identifies fatal flaws early so you can walk away clean.",
      },
    ],
  },
  {
    topic: "Timeline",
    items: [
      {
        q: "How long from order?",
        a: "A standard fixed installation runs ten to fourteen weeks from signed contract to commissioning. Custom fabrication or complex structural work adds time. We give you a firm schedule at deposit.",
      },
      {
        q: "What affects the schedule?",
        a: "Permit review is the biggest variable. Steel lead times and weather windows for outdoor pours also matter. We build float into the timeline for these known unknowns.",
      },
      {
        q: "Can you rush it?",
        a: "Sometimes. We carry inventory on common module types and can accelerate fabrication for a fee. But we will not cut corners on engineering review or municipal process.",
      },
      {
        q: "What happens on install day?",
        a: "A crew arrives with the pre-built structure, panels, and cabling. Most installations complete in one to three days. We do not leave until the display is calibrated and you have signed off.",
      },
      {
        q: "When can I use it?",
        a: "The display is operational at commissioning. We train your team on the content software that same day. You can be running creative before the truck leaves the lot.",
      },
    ],
  },
  {
    topic: "Content",
    items: [
      {
        q: "What software runs it?",
        a: "We supply NovaStar or Brompton control systems depending on the application. Both are industry standards. The software installs on any Windows machine and connects over your local network.",
      },
      {
        q: "Is it hard to update?",
        a: "No. If you can build a PowerPoint slide, you can manage the display. Drag and drop images or video into a playlist and hit publish. We train your staff until they are comfortable.",
      },
      {
        q: "Can I schedule content?",
        a: "Yes. Set dayparting rules for morning, afternoon, and evening. Schedule campaigns weeks in advance. The system runs unattended once configured.",
      },
      {
        q: "What about remote access?",
        a: "The controller sits on your network. Access it from any PC on that network or via secure VPN. We can also monitor display health remotely as part of a service agreement.",
      },
      {
        q: "Do you make content?",
        a: "We do not. We focus on the hardware and its performance. We can recommend several Lisboa-based creative shops who understand the pixel pitch and resolution of your specific display.",
      },
    ],
  },
  {
    topic: "Warranty",
    items: [
      {
        q: "What does warranty cover?",
        a: "Our standard warranty covers parts and labour on the LED modules, power supplies, and receiving cards for five years. The steel structure carries a ten-year structural warranty. Terms are in plain English.",
      },
      {
        q: "What is lifetime service?",
        a: "After the warranty expires, we do not disappear. We stock modules for every system we have ever installed. Our service trucks are on the road in the Lisboa and Setúbal district daily. You pay for parts and labour at a pre-agreed rate.",
      },
      {
        q: "How fast is response?",
        a: "We guarantee a technician on site within 48 hours for any critical failure during the warranty period. Most issues are diagnosed remotely and resolved same-day. We carry spare modules in our Setúbal warehouse.",
      },
      {
        q: "What voids it?",
        a: "Physical damage, unauthorized modifications, or failure to maintain the display per our guidelines. The maintenance schedule is simple and we walk you through it at handover.",
      },
      {
        q: "Is it transferable?",
        a: "Yes. If you sell the building, the warranty transfers to the new owner. We just need written notice. The display is a capital asset and we treat it that way.",
      },
    ],
  },
  {
    topic: "Financing",
    items: [
      {
        q: "Do you offer leasing?",
        a: "Yes. We work with several Portuguese equipment finance companies to structure operating leases or capital leases. Terms typically run 36 to 60 months with a buyout option at the end.",
      },
      {
        q: "What about municipalities?",
        a: "Municipal procurement often requires a different approach. We can structure the project to align with your fiscal year budgeting and have experience with public tender purchasing in Portugal.",
      },
      {
        q: "Is there a credit check?",
        a: "For leasing, yes. The finance company handles underwriting. Approval is typically fast for established businesses and institutions. We can provide a quote for outright purchase at any time.",
      },
      {
        q: "What are typical rates?",
        a: "Rates depend on the term, structure, and your credit profile. We do not quote rates until we understand the project scope. Expect competitive equipment finance terms comparable to a vehicle lease.",
      },
      {
        q: "Can I pay in stages?",
        a: "Our standard payment schedule is deposit, progress billing at fabrication, and final payment at commissioning. We can tailor this for approved institutional buyers.",
      },
    ],
  },
  {
    topic: "Engineering",
    items: [
      {
        q: "Do I need an engineer?",
        a: "Yes. Portuguese building regulations require a certified engineer to stamp structural drawings for any permanent outdoor display. Our in-house engineer handles this. It is not an extra line item.",
      },
      {
        q: "What about wind load?",
        a: "Every outdoor structure is engineered for the specific wind region per Portuguese building regulations. We calculate gust factors, exposure, and importance category. The steel is sized accordingly.",
      },
      {
        q: "What power do I need?",
        a: "We provide a full electrical load calculation during design. Most commercial displays require a dedicated 208 V or 600 V circuit. We coordinate with your electrician to ensure the panel has capacity.",
      },
      {
        q: "Can it go on my wall?",
        a: "Sometimes. We need to assess the existing structure. A masonry wall with proper anchoring can often support a lighter display. We will not hang weight on something we have not evaluated.",
      },
      {
        q: "Who pours the footing?",
        a: "We contract local concrete crews we trust. The footing spec comes from our engineer. We inspect the formwork and rebar before the pour. The foundation is not where you save money.",
      },
    ],
  },
];

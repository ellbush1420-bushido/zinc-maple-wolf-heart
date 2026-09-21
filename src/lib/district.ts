import { cubeStanza, pirrStanza, type CubePick, type PirrState } from "@/lib/engines";

export type Category = "marketing" | "security" | "creative" | "protocol";
export type BuildingId = "growth" | "lotus" | "persona" | "canon" | "meta";
export type Psyche = "sentinel" | "maker" | "herald";
export type View = "city" | "building" | "hydra";

export type IconName =
  | "search"
  | "users"
  | "trend"
  | "alert"
  | "spark"
  | "eye"
  | "chart"
  | "target"
  | "rocket"
  | "mail"
  | "globe"
  | "leads"
  | "follow"
  | "flask"
  | "pen"
  | "clapper"
  | "layout"
  | "mic"
  | "map"
  | "flag"
  | "cpu"
  | "cog"
  | "wallet"
  | "headset"
  | "calendar"
  | "inbox"
  | "list"
  | "meet"
  | "repeat"
  | "shield"
  | "lock"
  | "book"
  | "image"
  | "branch"
  | "file";

export type Skill = {
  id: string;
  code: string;
  name: string;
  program: string;
  category: Category;
  building: BuildingId;
  icon: IconName;
  blurb: string;
  duties: { title: string; detail: string; icon: IconName }[];
  pipeline: string[];
  stanza: (intent: string, others: string[]) => string;
};

export type Building = {
  id: BuildingId;
  lot: string;
  name: string;
  jarvis: string;
  jarvisLine: string;
  category: Category;
  kicker: string;
  line: string;
  accent: string;
  body: string;
  art: string;
  skillIds: string[];
};

export const PSYCHE: { id: Psyche; name: string; job: string }[] = [
  { id: "sentinel", name: "Sentinel", job: "Holds the constraint. Watches the edge." },
  { id: "maker", name: "Maker", job: "Builds the artifact. Stays on the floor." },
  { id: "herald", name: "Herald", job: "Takes it public. Does not hunt." },
];

export const SKILLS: Skill[] = [
  {
    id: "m-research",
    code: "G-01",
    name: "Market Research",
    program: "SIGNAL-DESK",
    category: "marketing",
    building: "growth",
    icon: "search",
    blurb: "Finds what customers actually want.",
    duties: [
      { icon: "users", title: "Customers", detail: "Jobs and language" },
      { icon: "search", title: "Competitors", detail: "Who already owns it" },
      { icon: "alert", title: "Pain", detail: "Where they stall" },
    ],
    pipeline: ["Raw data", "Insight"],
    stanza: (intent, others) =>
      `Signal desk on “${intent}”. Audience language pulled. Gaps vs ${others.join(" + ") || "the stack"} marked. No spend authorized.`,
  },
  {
    id: "m-strategy",
    code: "G-02",
    name: "Strategist",
    program: "GAME-PLAN",
    category: "marketing",
    building: "growth",
    icon: "map",
    blurb: "Turns insight into a winning sequence.",
    duties: [
      { icon: "target", title: "Offer", detail: "What we sell next" },
      { icon: "globe", title: "Channels", detail: "Where it shows" },
      { icon: "flag", title: "Goals", detail: "Clear numbers" },
    ],
    pipeline: ["Insight", "Plan"],
    stanza: (intent) =>
      `Game plan for “${intent}”: one offer, two channels, one number. Corp still cannot task Kestrel.`,
  },
  {
    id: "m-social",
    code: "G-03",
    name: "Social Engine",
    program: "SOCIAL-BELT",
    category: "marketing",
    building: "growth",
    icon: "leads",
    blurb: "Posts, threads, follow-ups. Public copy only.",
    duties: [
      { icon: "pen", title: "Posts", detail: "Short public copy" },
      { icon: "follow", title: "Follow-up", detail: "Reply paths" },
      { icon: "repeat", title: "Cadence", detail: "Daily belt" },
    ],
    pipeline: ["Draft", "Post", "Follow-up"],
    stanza: (intent) =>
      `Social belt for “${intent}”: 3 posts, 1 thread, 1 follow-up. No hunt tickets. Human gates spend.`,
  },
  {
    id: "m-ads",
    code: "G-04",
    name: "Ad Lab",
    program: "AD-LAB",
    category: "marketing",
    building: "growth",
    icon: "flask",
    blurb: "Concepts and tests. Human review before spend.",
    duties: [
      { icon: "layout", title: "Angles", detail: "Hooks that survive a skim" },
      { icon: "flask", title: "Tests", detail: "Variants before money" },
      { icon: "flag", title: "Gate", detail: "Spend stays authorized" },
    ],
    pipeline: ["Concept", "Test", "Gate"],
    stanza: (intent) =>
      `Ad lab holds two variants for “${intent}”. Spend locked until you authorize.`,
  },
  {
    id: "m-watch",
    code: "G-05",
    name: "Growth Watch",
    program: "WATCH-LOOP",
    category: "marketing",
    building: "growth",
    icon: "eye",
    blurb: "Measures what ran. Kills what failed.",
    duties: [
      { icon: "chart", title: "Worked", detail: "Lift and time-to-lead" },
      { icon: "alert", title: "Failed", detail: "Kill list" },
      { icon: "repeat", title: "Next", detail: "Patch the brief" },
    ],
    pipeline: ["Data", "Insight", "Repeat"],
    stanza: (intent) =>
      `Watch loop on “${intent}”: keep the winner, kill the mute, queue one patch.`,
  },
  {
    id: "s-shield",
    code: "L-01",
    name: "Privacy Shield",
    program: "ASP-SHIELD",
    category: "security",
    building: "lotus",
    icon: "shield",
    blurb: "ASP / privacy-shield product floor.",
    duties: [
      { icon: "shield", title: "Shield", detail: "Default deny on public lots" },
      { icon: "lock", title: "Gate", detail: "HUD does not copy out" },
      { icon: "eye", title: "Watch", detail: "Surface only" },
    ],
    pipeline: ["Scope", "Shield", "QA"],
    stanza: (intent) =>
      `Privacy shield spec for “${intent}”: public-safe surface, private core, no HUD on sale lots.`,
  },
  {
    id: "s-threat",
    code: "L-02",
    name: "Threat Desk",
    program: "THREAT-DESK",
    category: "security",
    building: "lotus",
    icon: "alert",
    blurb: "Incident intake. Corp cannot call hunts.",
    duties: [
      { icon: "inbox", title: "Intake", detail: "What crossed the line" },
      { icon: "map", title: "Map", detail: "Which floor is exposed" },
      { icon: "flag", title: "Hold", detail: "Human authorize on action" },
    ],
    pipeline: ["Intake", "Map", "Hold"],
    stanza: (intent) =>
      `Threat desk files “${intent}”. Lotus Duty will not task Growth or Persona. Hold for you.`,
  },
  {
    id: "s-programs",
    code: "L-03",
    name: "Hydra Security Programs",
    program: "HYDRA-SEC",
    category: "security",
    building: "lotus",
    icon: "cpu",
    blurb: "Packs security programs. Human seats the heads.",
    duties: [
      { icon: "cpu", title: "Program", detail: "One module, one floor" },
      { icon: "lock", title: "Bind", detail: "Does not leave Lotus" },
      { icon: "flag", title: "Authorize", detail: "You seat the loadout" },
    ],
    pipeline: ["Spec", "Pack", "Authorize"],
    stanza: (intent) =>
      `Security program “${intent}”: module list, threat model, authorize-to-run. Mini Hydra may borrow this skill — the program stays on L-03.`,
  },
  {
    id: "s-incident",
    code: "L-04",
    name: "Incident Floor",
    program: "INCIDENT",
    category: "security",
    building: "lotus",
    icon: "headset",
    blurb: "Live response desk. Receipts only.",
    duties: [
      { icon: "headset", title: "Duty", detail: "Lotus on the line" },
      { icon: "list", title: "Log", detail: "What moved" },
      { icon: "repeat", title: "Close", detail: "Stamp and file" },
    ],
    pipeline: ["Detect", "Contain", "Close"],
    stanza: (intent) =>
      `Incident packet for “${intent}”: contain, notify Aegis, close with receipt. No marketing overlay on this floor.`,
  },
  {
    id: "s-clearance",
    code: "L-05",
    name: "Clearance",
    program: "CLEARANCE",
    category: "security",
    building: "lotus",
    icon: "lock",
    blurb: "Who may see the HUD. Public lots stay dark.",
    duties: [
      { icon: "lock", title: "Clear", detail: "Owner / citadel only" },
      { icon: "eye", title: "Split", detail: "Public-safe vs vault-off" },
      { icon: "flag", title: "Refuse", detail: "Sale lots get no HUD" },
    ],
    pipeline: ["Ask", "Clear", "Refuse"],
    stanza: (intent) =>
      `Clearance on “${intent}”: owner HUD yes, public teaser maybe, full program never on a sale lot.`,
  },
  {
    id: "c-persona",
    code: "P-01",
    name: "Persona",
    program: "PERSONA-LOCK",
    category: "creative",
    building: "persona",
    icon: "users",
    blurb: "Locks a face, voice, and brief. Originals only.",
    duties: [
      { icon: "users", title: "Face", detail: "One locked identity" },
      { icon: "mic", title: "Voice", detail: "Register and rules" },
      { icon: "file", title: "Brief", detail: "What they may say" },
    ],
    pipeline: ["Lock", "Voice", "Brief"],
    stanza: (intent) =>
      `Persona lock for “${intent}”: original adult identity, voice rules, no marketplace face.`,
  },
  {
    id: "c-rivalry",
    code: "P-02",
    name: "Rivalry Matrix",
    program: "RIVAL-GRID",
    category: "creative",
    building: "persona",
    icon: "branch",
    blurb: "Relationships, rivals, alliances. Graph, not gossip.",
    duties: [
      { icon: "branch", title: "Edges", detail: "Who pulls whom" },
      { icon: "users", title: "Seats", detail: "Cast on the grid" },
      { icon: "alert", title: "Heat", detail: "Where conflict lives" },
    ],
    pipeline: ["Cast", "Edges", "Heat"],
    stanza: (intent) =>
      `Rivalry matrix for “${intent}”: 4 nodes, 6 edges, one heat line. Herald may pitch it; Sentinel may fence it.`,
  },
  {
    id: "c-pirr",
    code: "P-03",
    name: "PIRR Companion",
    program: "PIRR / VIDY",
    category: "creative",
    building: "persona",
    icon: "headset",
    blurb: "Hydra companion Vidy. Persona, identity, relationship, rivalry — four cells, one walk.",
    duties: [
      { icon: "users", title: "P · I", detail: "Face and voice lock" },
      { icon: "branch", title: "R · R", detail: "Bond and heat" },
      { icon: "headset", title: "Vidy", detail: "Companion walks the four" },
    ],
    pipeline: ["Lock", "Bond", "Walk"],
    stanza: (intent) =>
      `PIRR engine on “${intent}”. Vidy holds face, voice, bond, heat. Originals only. Companion does not hunt.`,
  },
  {
    id: "c-lore",
    code: "K-01",
    name: "Lore Generation",
    program: "LORE-PRESS",
    category: "creative",
    building: "canon",
    icon: "book",
    blurb: "Canon pages. What is true in this world.",
    duties: [
      { icon: "book", title: "Canon", detail: "What is true here" },
      { icon: "pen", title: "Page", detail: "One scene, one law" },
      { icon: "flag", title: "Bind", detail: "Does not break seated lock" },
    ],
    pipeline: ["Canon", "Page", "Bind"],
    stanza: (intent) =>
      `Lore page for “${intent}”: origin, law, one image cue. Stays on Canon House until Hydra borrows it.`,
  },
  {
    id: "c-bible",
    code: "K-02",
    name: "Story Bible",
    program: "BIBLE",
    category: "creative",
    building: "canon",
    icon: "list",
    blurb: "World rails: timeline, laws, who may speak.",
    duties: [
      { icon: "map", title: "World", detail: "Places and eras" },
      { icon: "list", title: "Laws", detail: "What cannot change" },
      { icon: "users", title: "Cast", detail: "Who is allowed on the page" },
    ],
    pipeline: ["World", "Laws", "Cast"],
    stanza: (intent) =>
      `Story bible for “${intent}”: one world, three laws, named cast. Writers stay inside the rails.`,
  },
  {
    id: "c-scene",
    code: "K-03",
    name: "Scene Desk",
    program: "SCENE-DESK",
    category: "creative",
    building: "canon",
    icon: "clapper",
    blurb: "One scene at a time. Dialogue, beat, exit.",
    duties: [
      { icon: "clapper", title: "Beat", detail: "What happens" },
      { icon: "mic", title: "Line", detail: "Who says it" },
      { icon: "flag", title: "Exit", detail: "Where the scene lands" },
    ],
    pipeline: ["Beat", "Line", "Exit"],
    stanza: (intent) =>
      `Scene desk on “${intent}”: one beat, two lines, one exit. No marketplace voice.`,
  },
  {
    id: "c-art",
    code: "K-04",
    name: "Lore Art",
    program: "LORE-ART",
    category: "creative",
    building: "canon",
    icon: "image",
    blurb: "Plates for designers: maps, marks, stills that bind to canon.",
    duties: [
      { icon: "image", title: "Plate", detail: "Map, mark, or still" },
      { icon: "layout", title: "Crop", detail: "Page, poster, or social" },
      { icon: "book", title: "Bind", detail: "Must match K-01" },
    ],
    pipeline: ["Plate", "Crop", "Bind"],
    stanza: (intent) =>
      `Lore art for “${intent}”: 3 plates (map, mark, still). Original only. No marketplace likeness.`,
  },
  {
    id: "c-booklet",
    code: "K-05",
    name: "E-booklet Compiler",
    program: "BOOKLET",
    category: "creative",
    building: "canon",
    icon: "file",
    blurb: "Compiles bible + scenes + plates into a saleable booklet packet.",
    duties: [
      { icon: "file", title: "Spine", detail: "Chapters in order" },
      { icon: "layout", title: "Plate", detail: "Cover and inner sheet" },
      { icon: "lock", title: "SKU", detail: "Packet law" },
    ],
    pipeline: ["Spine", "Plate", "SKU"],
    stanza: (intent) =>
      `Booklet compiler on “${intent}”: cover line, 5 inner plates, SKU band. Ready for Herald if seated.`,
  },
  {
    id: "c-cube",
    code: "K-06",
    name: "Hydra 9×9×9",
    program: "HYDRA-999",
    category: "creative",
    building: "canon",
    icon: "cpu",
    blurb: "Story, scenario, resolution. Nine on each axis. 729 cells. Hydra writes the page.",
    duties: [
      { icon: "book", title: "Story", detail: "Nine rails" },
      { icon: "clapper", title: "Scenario", detail: "Nine pressures" },
      { icon: "flag", title: "Resolution", detail: "Nine closings" },
    ],
    pipeline: ["Story", "Scenario", "Resolution"],
    stanza: (intent) =>
      `Nine-cube on “${intent}”: pick story, scenario, resolution. One cell of 729. Original world. No marketplace face.`,
  },
  {
    id: "c-image",
    code: "P-05",
    name: "Image Generator",
    program: "IMAGE-9",
    category: "creative",
    building: "persona",
    icon: "image",
    blurb: "Compiles Image-9 stills for a floor job. Original art.",
    duties: [
      { icon: "image", title: "Still", detail: "Orange-wire or locked face" },
      { icon: "layout", title: "Frame", detail: "Poster, plate, or social" },
      { icon: "flag", title: "Nine", detail: "Intent before generate" },
    ],
    pipeline: ["Intent", "Frame", "Still"],
    stanza: (intent) =>
      `Image-9 stills for “${intent}”: 3 frames (mark, product, social crop). No marketplace likeness.`,
  },
  {
    id: "c-landing",
    code: "P-06",
    name: "Landing Page Creator",
    program: "LANDING",
    category: "creative",
    building: "persona",
    icon: "layout",
    blurb: "Public-safe page for a packet. No HUD copy.",
    duties: [
      { icon: "layout", title: "Page", detail: "Hero, proof, ask" },
      { icon: "pen", title: "Copy", detail: "Public-safe only" },
      { icon: "rocket", title: "Ship", detail: "Hand to Growth if seated" },
    ],
    pipeline: ["Hero", "Proof", "Ask"],
    stanza: (intent) =>
      `Landing for “${intent}”: hero line, three proofs, one ask. Public lot — HUD withheld.`,
  },
  {
    id: "d-protocol",
    code: "M-01",
    name: "District Meta OS Protocol",
    program: "META-OS",
    category: "protocol",
    building: "meta",
    icon: "cpu",
    blurb: "The two-floor law of the district. How lots, Hydra, levy, and packages bind.",
    duties: [
      { icon: "list", title: "Law", detail: "Lots, floors, heads, levy" },
      { icon: "lock", title: "Bind", detail: "Programs stay on their floors" },
      { icon: "flag", title: "Clear", detail: "Public lots do not receive the HUD" },
    ],
    pipeline: ["Law", "Bind", "Clear"],
    stanza: (intent) =>
      `Meta OS protocol on “${intent}”: four houses, two-floor protocol lot, Mini Hydra max three, Aegis levy on sale. Package may be sent.`,
  },
  {
    id: "d-package",
    code: "M-02",
    name: "Package Dispatch",
    program: "DISPATCH",
    category: "protocol",
    building: "meta",
    icon: "file",
    blurb: "Compiles protocol + set specs into one sendable packet.",
    duties: [
      { icon: "file", title: "Compile", detail: "Protocol and the Hydra sets" },
      { icon: "mail", title: "Send", detail: "Download the packet" },
      { icon: "lock", title: "Strip", detail: "HUD withheld. Public-safe copy." },
    ],
    pipeline: ["Compile", "Strip", "Send"],
    stanza: (intent) =>
      `Dispatch packet for “${intent}”: protocol, ambassador, influencer, cyber freelancer, canon writer. One file. Ready to send.`,
  },
];

export const SKILL_INDEX: Record<string, Skill> = Object.fromEntries(
  SKILLS.map((s) => [s.id, s]),
);

export const BUILDINGS: Building[] = [
  {
    id: "growth",
    lot: "B4",
    name: "Growth House",
    jarvis: "Voss",
    jarvisLine: "Campaigns and public copy. Cannot task Lotus hunts.",
    category: "marketing",
    kicker: "B4 · Jarvis Voss",
    line: "Growth House",
    accent: "markets the packet.",
    body: "Research, plan, social, ads, watch. One program per floor. Aegis routes. Voss files.",
    art: "/art/tower.jpg",
    skillIds: ["m-research", "m-strategy", "m-social", "m-ads", "m-watch"],
  },
  {
    id: "lotus",
    lot: "B5",
    name: "Black Lotus Security",
    jarvis: "Lotus Duty",
    jarvisLine: "Shields, programs, incidents. Cannot call Growth hunts.",
    category: "security",
    kicker: "B5 · Jarvis Lotus Duty",
    line: "Black Lotus",
    accent: "holds the shield.",
    body: "Privacy shield, threat desk, Hydra security programs, incident, clearance. Corp stays off Kestrel.",
    art: "/art/security.jpg",
    skillIds: ["s-shield", "s-threat", "s-programs", "s-incident", "s-clearance"],
  },
  {
    id: "persona",
    lot: "B3",
    name: "Persona Annex",
    jarvis: "Archivist",
    jarvisLine: "Locks faces, rivalry, PIRR companion Vidy, stills, landings. Originals only.",
    category: "creative",
    kicker: "B3 · Jarvis Archivist",
    line: "Persona Annex",
    accent: "makes the face.",
    body: "Persona, rivalry matrix, PIRR companion (Vidy), image generator, landing page creator.",
    art: "/art/persona.jpg",
    skillIds: ["c-persona", "c-rivalry", "c-pirr", "c-image", "c-landing"],
  },
  {
    id: "canon",
    lot: "B2",
    name: "Canon House",
    jarvis: "Scribe",
    jarvisLine: "Lore, bible, scenes, lore art, booklets, 9×9×9 cube. Writers and designers.",
    category: "creative",
    kicker: "B2 · Jarvis Scribe",
    line: "Canon House",
    accent: "holds the story.",
    body: "Lore generation, story bible, scene desk, lore art, e-booklet, Hydra 9×9×9. One program per floor. Scribe files. Hydra borrows.",
    art: "/art/canon.jpg",
    skillIds: ["c-lore", "c-bible", "c-scene", "c-art", "c-booklet", "c-cube"],
  },
  {
    id: "meta",
    lot: "B0",
    name: "District Meta OS",
    jarvis: "Clerk",
    jarvisLine: "Holds the protocol. Compiles the sendable package.",
    category: "protocol",
    kicker: "B0 · Jarvis Clerk · two floors",
    line: "District Meta OS",
    accent: "binds the package.",
    body: "Two floors only. Protocol is the law. Dispatch compiles it with the Hydra sets and sends one packet.",
    art: "/art/meta.jpg",
    skillIds: ["d-protocol", "d-package"],
  },
];

export const BUILDING_INDEX: Record<BuildingId, Building> = Object.fromEntries(
  BUILDINGS.map((b) => [b.id, b]),
) as Record<BuildingId, Building>;

export function skillsFor(building: BuildingId): Skill[] {
  const b = BUILDING_INDEX[building];
  return b.skillIds.map((id) => SKILL_INDEX[id]);
}

const FACE = new Set(["c-persona", "c-image", "c-landing", "c-pirr"]);
const CHANNEL = new Set(["m-social", "m-ads", "m-watch", "m-strategy"]);
const LORE = new Set(["c-lore", "c-booklet", "c-bible", "c-scene", "c-art", "c-cube"]);
const SHIELD = new Set(["s-shield", "s-programs", "s-clearance", "s-threat", "s-incident"]);

export type Loop = {
  id: string;
  name: string;
  kicker: string;
  blurb: string;
  beats: string[];
};

export const LOOPS: Loop[] = [
  {
    id: "ambassador",
    name: "Brand Ambassadorship",
    kicker: "Automated circuit",
    blurb: "Face locked. Channel live. Hydra runs the whole ambassadorship until you pull the heads.",
    beats: [
      "Lock the public face and voice",
      "Compile stills and the landing",
      "Post the daily circuit",
      "Watch replies and file to Voss",
      "Herald only. Do not hunt.",
    ],
  },
  {
    id: "influencer",
    name: "Influencer Circuit",
    kicker: "Personal brand loop",
    blurb: "Stills, posts, gated tests. Hydra runs the personal brand until you pull the heads.",
    beats: [
      "Compile original stills",
      "Post the daily belt",
      "Hold two ad angles. Spend gated.",
      "No marketplace likeness.",
    ],
  },
  {
    id: "cyber-freelance",
    name: "Cyber Freelancer",
    kicker: "Security desk for hire",
    blurb: "Program pack, threat intake, public-safe page. Hydra runs the freelance desk. No hunts.",
    beats: [
      "Pack one security module",
      "Intake and hold for the client",
      "Public page: hero, proof, ask",
      "HUD withheld on the sale lot",
      "Lotus Duty will not task Growth hunts",
    ],
  },
  {
    id: "shield-drop",
    name: "Shield Drop",
    kicker: "Security product loop",
    blurb: "A shield program with its own marks, then a public launch. Mixed house.",
    beats: [
      "Bind the privacy constraint",
      "Make original marks",
      "Carry the drop on social",
      "File the receipt to Aegis",
    ],
  },
  {
    id: "lore-press",
    name: "Lore Press",
    kicker: "Canon to public",
    blurb: "Canon pages compiled, then posted. Scribe makes. Growth carries.",
    beats: [
      "Hold canon",
      "Compile the booklet",
      "Post one page",
      "Do not invent a marketplace face",
    ],
  },
  {
    id: "canon-desk",
    name: "Canon Desk",
    kicker: "Writer loop",
    blurb: "Bible, scenes, booklet. Stays on Canon House until Herald is seated.",
    beats: [
      "Lock the world rails",
      "Write one scene",
      "Compile the booklet",
      "No marketplace voice",
    ],
  },
  {
    id: "vidy",
    name: "Vidy Companion",
    kicker: "PIRR lock",
    blurb: "Face, rivalry, and Vidy walk together. Companion holds the four cells.",
    beats: [
      "Lock the original face",
      "Map bond and heat",
      "Vidy walks PIRR",
      "No marketplace likeness",
    ],
  },
  {
    id: "nine-cube",
    name: "Hydra 9×9×9",
    kicker: "Story cube",
    blurb: "One cell of 729. Story, scenario, resolution. Scribe files the page.",
    beats: [
      "Pick the story rail",
      "Press the scenario",
      "Close on a resolution",
      "Compile the page",
    ],
  },
  {
    id: "mix",
    name: "Open Mix",
    kicker: "Custom triune",
    blurb: "Any three floor skills. Hydra borrows. Programs stay on their floors.",
    beats: ["Constrain", "Build", "Carry"],
  },
];

export const LOOP_INDEX: Record<string, Loop> = Object.fromEntries(
  LOOPS.map((l) => [l.id, l]),
);

function hasAny(ids: Set<string>, pool: Set<string>) {
  for (const id of ids) if (pool.has(id)) return true;
  return false;
}

export function matchLoop(skillIds: string[]): Loop {
  const packed = [...skillIds.filter(Boolean)].sort().join("|");
  for (const p of PRELOADS) {
    if ([...p.skillIds].sort().join("|") === packed) return LOOP_INDEX[p.loopId];
  }
  const ids = new Set(skillIds.filter(Boolean));
  const face = hasAny(ids, FACE);
  const channel = hasAny(ids, CHANNEL);
  const lore = hasAny(ids, LORE);
  const shield = hasAny(ids, SHIELD);
  if (shield && (face || lore) && channel) return LOOP_INDEX["shield-drop"];
  if (face && channel) return LOOP_INDEX.ambassador;
  if (lore && channel) return LOOP_INDEX["lore-press"];
  if (ids.has("c-cube")) return LOOP_INDEX["nine-cube"];
  if (ids.has("c-pirr")) return LOOP_INDEX.vidy;
  if (lore) return LOOP_INDEX["canon-desk"];
  return LOOP_INDEX.mix;
}

export type PreloadSpec = {
  lane: string;
  for: string;
  cadence: string;
  duties: [string, string, string];
  outputs: string[];
  gates: string[];
  forbids: string[];
};

export type Preload = {
  id: string;
  loopId: string;
  name: string;
  skillIds: readonly [string, string, string];
  intent: string;
  spec: PreloadSpec;
};

export const PRELOADS: Preload[] = [
  {
    id: "ambassador",
    loopId: "ambassador",
    name: "Ambassador",
    skillIds: ["c-persona", "m-social", "m-watch"],
    intent: "ambassador circuit for an original product",
    spec: {
      lane: "Herald circuit",
      for: "Brand ambassadors who need a locked original face and a public belt that runs without a hunt.",
      cadence: "Daily posts. Weekly keep/kill. Face lock holds until you pull the head.",
      duties: [
        "P-01 Persona — lock one adult identity, voice register, and what they may say.",
        "G-03 Social Engine — 3 posts, 1 thread, 1 follow-up. Public copy only.",
        "G-05 Growth Watch — measure lift, kill the mute, queue one patch.",
      ],
      outputs: [
        "Persona lock (face, voice, brief)",
        "Social packet (posts, thread, follow-up)",
        "Watch receipt (keep / kill / next)",
      ],
      gates: [
        "You authorize spend. Hydra does not buy ads.",
        "Original identity only. No marketplace face.",
        "Human gates any change to the lock.",
      ],
      forbids: [
        "No hunt tickets. Lotus is not on this loop.",
        "No HUD copy on a sale lot.",
        "Herald carries. Sentinel does not pursue.",
      ],
    },
  },
  {
    id: "influencer",
    loopId: "influencer",
    name: "Influencer",
    skillIds: ["c-image", "m-social", "m-ads"],
    intent: "personal brand stills, daily posts, gated ad tests",
    spec: {
      lane: "Personal brand loop",
      for: "Creators who make their own stills, post a daily belt, and test paid angles with spend locked.",
      cadence: "Stills on intent. Posts daily. Ad variants held until you open the gate.",
      duties: [
        "P-05 Image Generator — 3 original frames: mark, product, social crop.",
        "G-03 Social Engine — daily belt. Short public copy. Reply paths.",
        "G-04 Ad Lab — two angles, one test plan. Spend stays authorized.",
      ],
      outputs: [
        "Image-9 stills (mark / product / crop)",
        "Social belt for the week",
        "Two ad variants, unspent",
      ],
      gates: [
        "Spend locked until you authorize.",
        "No marketplace likeness. Original art only.",
        "Intent is named before Image-9 runs.",
      ],
      forbids: [
        "No live ad spend from this chassis.",
        "No borrowed Persona face unless you seat P-01 yourself.",
        "No hunt overlay on the belt.",
      ],
    },
  },
  {
    id: "cyber-freelance",
    loopId: "cyber-freelance",
    name: "Cyber freelancer",
    skillIds: ["s-programs", "s-threat", "c-landing"],
    intent: "freelance security desk with a public-safe intake page",
    spec: {
      lane: "Security desk for hire",
      for: "Independent operators selling one security program with intake and a public-safe page. No hunts.",
      cadence: "Intake as it lands. Program stays packed until you authorize. Page stays public-safe.",
      duties: [
        "L-03 Hydra Security Programs — one module, threat model, authorize-to-run.",
        "L-02 Threat Desk — intake, map the exposed floor, hold for you.",
        "P-06 Landing — hero, three proofs, one ask. HUD withheld.",
      ],
      outputs: [
        "Security program spec (module list + model)",
        "Threat hold with receipt",
        "Public landing (hero / proof / ask)",
      ],
      gates: [
        "You seat the loadout. Hydra does not self-authorize.",
        "Corp cannot call hunts from this desk.",
        "Full HUD never ships on the sale lot.",
      ],
      forbids: [
        "Lotus Duty will not task Growth.",
        "No Kestrel. No hunt tickets.",
        "Public page is teaser only — program stays on L-03.",
      ],
    },
  },
  {
    id: "canon-writer",
    loopId: "canon-desk",
    name: "Canon writer",
    skillIds: ["c-bible", "c-scene", "c-booklet"],
    intent: "story bible, scenes, compiled booklet for an original world",
    spec: {
      lane: "Writer desk",
      for: "Writers who need locked world rails, one scene at a time, and a booklet that ships without a hunt.",
      cadence: "Bible first. Scenes on intent. Booklet when the spine holds.",
      duties: [
        "K-02 Story Bible — world, three laws, named cast.",
        "K-03 Scene Desk — one beat, two lines, one exit.",
        "K-05 E-booklet Compiler — cover, inner plates, SKU.",
      ],
      outputs: [
        "Story bible (world / laws / cast)",
        "Scene packet (beat, lines, exit)",
        "Booklet spine ready for Herald",
      ],
      gates: [
        "Original world only. No marketplace voice.",
        "Persona lock stays on B3 unless you seat P-01.",
        "Scribe files. Hydra borrows.",
      ],
      forbids: [
        "No hunt overlay on the page.",
        "No HUD on a sale lot.",
        "Herald may carry the booklet. Sentinel does not pursue.",
      ],
    },
  },
  {
    id: "lore-designer",
    loopId: "canon-desk",
    name: "Lore designer",
    skillIds: ["c-lore", "c-art", "c-booklet"],
    intent: "canon pages, lore plates, compiled booklet for designers",
    spec: {
      lane: "Designer desk",
      for: "Lore and art designers who bind stills to canon and compile a public-safe booklet.",
      cadence: "Canon first. Plates on intent. Booklet when plates bind.",
      duties: [
        "K-01 Lore Generation — origin, law, one image cue.",
        "K-04 Lore Art — map, mark, still. Original only.",
        "K-05 E-booklet Compiler — cover, inner plates, SKU.",
      ],
      outputs: [
        "Canon page (origin / law / cue)",
        "Three lore plates (map / mark / still)",
        "Booklet spine ready for Herald",
      ],
      gates: [
        "Plates must match K-01.",
        "No marketplace likeness.",
        "Intent named before Lore Art runs.",
      ],
      forbids: [
        "No product stills from P-05 unless you seat it.",
        "No HUD copy on the lot.",
        "No hunt tickets.",
      ],
    },
  },
  {
    id: "vidy",
    loopId: "vidy",
    name: "Vidy",
    skillIds: ["c-persona", "c-rivalry", "c-pirr"],
    intent: "PIRR companion lock for an original adult identity",
    spec: {
      lane: "Companion circuit",
      for: "Operators who need Vidy to walk persona, identity, relationship, and rivalry as one lock.",
      cadence: "Lock the four cells. Vidy holds until you pull the head.",
      duties: [
        "P-01 Persona — original adult face, voice, brief.",
        "P-02 Rivalry Matrix — bond and heat on the grid.",
        "P-03 PIRR Companion — Vidy walks the four cells.",
      ],
      outputs: [
        "Persona lock",
        "Rivalry grid (nodes and heat)",
        "Vidy companion receipt",
      ],
      gates: [
        "Original identity only. No marketplace face.",
        "Human gates any change to the lock.",
        "Companion does not hunt.",
      ],
      forbids: [
        "No hunt tickets.",
        "No HUD copy on a sale lot.",
        "Vidy will not task Lotus.",
      ],
    },
  },
  {
    id: "nine-cube",
    loopId: "nine-cube",
    name: "9×9×9",
    skillIds: ["c-cube", "c-scene", "c-booklet"],
    intent: "story cube cell compiled to a scene and booklet",
    spec: {
      lane: "Story cube",
      for: "Writers who pick one cell of 729, write the scene, and compile the page.",
      cadence: "Lock the cell. Scene on intent. Booklet when the spine holds.",
      duties: [
        "K-06 Hydra 9×9×9 — story, scenario, resolution.",
        "K-03 Scene Desk — one beat, two lines, one exit.",
        "K-05 E-booklet Compiler — cover, inner plates, SKU.",
      ],
      outputs: [
        "Cube cell (address / 729)",
        "Scene packet",
        "Booklet spine",
      ],
      gates: [
        "Original world only.",
        "All three axes must lock before the page.",
        "Scribe files. Hydra borrows.",
      ],
      forbids: [
        "No marketplace face.",
        "No hunt overlay on the page.",
        "HUD withheld on the sale lot.",
      ],
    },
  },
];

export function sameSet(a: (string | null)[], b: readonly string[]) {
  const left = a.filter(Boolean).slice().sort().join("|");
  const right = [...b].slice().sort().join("|");
  return left.length > 0 && left === right;
}

export function preloadFor(skillIds: (string | null)[]): Preload | undefined {
  return PRELOADS.find((p) => sameSet(skillIds, p.skillIds));
}

export function compileDistrictPackage(opts?: {
  hydra?: Preload;
  serial?: number;
  intent?: string;
}): string {
  const levyPct = Math.round(HOUSE_LEVY * 100);
  const lines: string[] = [
    "DISTRICT META OS PROTOCOL",
    "Aegis District · B0 · two floors · Jarvis Clerk",
    "Public-safe packet. HUD withheld.",
    "",
    "0. SCOPE",
    "This protocol binds the citadel: four houses, one two-floor Meta OS lot,",
    "Mini Hydra Zeta (max three heads), Aegis on the rail, Jarvises on their lots.",
    "One program per floor. Programs do not leave their floors. Hydra only borrows.",
    "",
    "1. LOTS",
    "B4  Growth House         Jarvis Voss         marketing floors",
    "B5  Black Lotus Security Jarvis Lotus Duty   security floors",
    "B3  Persona Annex        Jarvis Archivist    persona · rivalry · PIRR/Vidy",
    "B2  Canon House          Jarvis Scribe       lore · 9×9×9 cube",
    "B0  District Meta OS     Jarvis Clerk        protocol · package  (two floors)",
    "",
    "2. FLOORS — META OS",
    "M-01  District Meta OS Protocol   META-OS    the law",
    "M-02  Package Dispatch            DISPATCH   compile and send",
    "",
    "3. MINI HYDRA",
    "Chassis is quarter-scale. Three heads: Sentinel, Maker, Herald.",
    "Seat any mix from security, creative, marketing, or protocol.",
    "Right combo becomes a loop. List the chassis and it leaves the dock.",
    `Empty chassis next. Aegis levy ${levyPct}% of ask. Owner take is the rest.`,
    "Sold hydras do not copy this HUD.",
    "",
    "4. SETS — SENDABLE SPECS",
  ];

  for (const p of PRELOADS) {
    const codes = p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ");
    lines.push(
      "",
      `4.${PRELOADS.indexOf(p) + 1}  ${p.name.toUpperCase()}  ·  ${p.spec.lane}`,
      `Heads  ${codes}`,
      p.spec.for,
      `Cadence  ${p.spec.cadence}`,
      "Heads:",
      ...p.spec.duties.map((d, i) => `  ${PSYCHE[i].name}. ${d}`),
      "Outputs:",
      ...p.spec.outputs.map((o) => `  - ${o}`),
      "Gates:",
      ...p.spec.gates.map((o) => `  - ${o}`),
      "Will not:",
      ...p.spec.forbids.map((o) => `  - ${o}`),
    );
  }

  lines.push(
    "",
    "5. PACKAGE LAW",
    "Dispatch compiles this protocol and the set specs into one file.",
    "Strip HUD. Public-safe copy only. Recipient does not receive the citadel.",
    "Jarvis Clerk stamps. Aegis files.",
    "",
    "6. CLEARANCE",
    "Owner / citadel: full HUD.",
    "Public teaser: maybe.",
    "Sale lot: never this HUD.",
  );

  if (opts?.hydra) {
    const p = opts.hydra;
    lines.push(
      "",
      "7. SEATED CHASSIS (this send only)",
      `Z-${String(opts.serial ?? 1).padStart(2, "0")}  ${p.name}  ·  ${p.spec.lane}`,
      opts.intent ? `Intent  ${opts.intent}` : "",
      p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + "),
    );
  }

  const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
  lines.push("", `Receipt  AG-EQ / META-OS / DISPATCH / ${stamp} / Shadow Hand`, "");
  return lines.filter((l) => l !== undefined).join("\n");
}

export const HOUSE_LEVY = 0.18;

export type Quote = {
  ask: number;
  levy: number;
  ownerTake: number;
  pct: number;
};

export function quoteSale(ask: number): Quote {
  const clean = Math.max(0, Math.round(ask));
  const levy = Math.round(clean * HOUSE_LEVY);
  return { ask: clean, levy, ownerTake: clean - levy, pct: HOUSE_LEVY };
}

export function appraise(skillIds: string[]): number {
  const skills = skillIds.map((id) => SKILL_INDEX[id]).filter(Boolean);
  if (skills.length !== 3) return 400;
  const cats = new Set(skills.map((s) => s.category));
  let n = 420 + cats.size * 160;
  const loop = matchLoop(skillIds);
  if (loop.id === "ambassador") n += 240;
  if (loop.id === "influencer") n += 220;
  if (loop.id === "cyber-freelance") n += 210;
  if (loop.id === "shield-drop") n += 200;
  if (loop.id === "lore-press") n += 120;
  if (loop.id === "canon-desk") n += 160;
  if (loop.id === "vidy") n += 200;
  if (loop.id === "nine-cube") n += 180;
  return n;
}

export type Listing = {
  id: string;
  serial: number;
  skillIds: string[];
  loopId: string;
  ask: number;
  levy: number;
  ownerTake: number;
  listedAt: string;
  soldAt?: string;
};

export type BuildLock = {
  id: string;
  skillIds: string[];
  intent: string;
  loopId: string;
  lockedAt: string;
};

export type FleetClone = {
  id: string;
  serial: number;
  skillIds: string[];
  loopId: string;
  stampedAt: string;
};

export type FleetState = {
  lock: BuildLock | null;
  running: boolean;
  produced: number;
  hold: FleetClone[];
};

export const FLEET_HOLD = 12;
export const FLEET_BEAT_MS = 1400;

export const EMPTY_FLEET: FleetState = {
  lock: null,
  running: false,
  produced: 0,
  hold: [],
};

export function makeLock(skillIds: string[], intent: string): BuildLock | null {
  if (skillIds.filter(Boolean).length !== MAX_HEADS) return null;
  const loop = matchLoop(skillIds);
  return {
    id: `lock-${Date.now()}`,
    skillIds,
    intent,
    loopId: loop.id,
    lockedAt: new Date().toISOString(),
  };
}

export type Packet = {
  intent: string;
  stamp: string;
  seats: { psyche: Psyche; skill: Skill }[];
  lines: { psyche: Psyche; title: string; body: string }[];
  combined: string;
  receipt: string;
  loop: Loop;
};

export function compileZeta(
  intent: string,
  skillIds: string[],
  extras?: { pirr?: PirrState; cube?: CubePick },
): Packet | null {
  const filled = skillIds.map((id) => SKILL_INDEX[id]).filter(Boolean);
  if (filled.length !== 3) return null;
  const seats = PSYCHE.map((p, i) => ({ psyche: p.id, skill: filled[i] }));
  const names = filled.map((s) => s.name);
  const loop = matchLoop(skillIds);
  const lines = seats.map(({ psyche, skill }, i) => {
    const others = names.filter((_, j) => j !== i);
    let body = skill.stanza(intent, others);
    if (skill.id === "c-pirr" && extras?.pirr) body = pirrStanza(extras.pirr, intent);
    if (skill.id === "c-cube" && extras?.cube) body = cubeStanza(extras.cube, intent);
    return {
      psyche,
      title: `${PSYCHE[i].name} · ${skill.code} ${skill.name}`,
      body,
    };
  });
  const cats = [...new Set(filled.map((s) => s.category))];
  const combined =
    loop.id === "mix"
      ? `Mini Hydra Zeta mixed ${cats.join(" / ")} on “${intent}”. ${filled[0].name} constrains, ${filled[1].name} builds, ${filled[2].name} carries it.`
      : `Mini Hydra Zeta is running ${loop.name} on “${intent}”. ${loop.blurb}`;
  const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
  return {
    intent,
    stamp,
    seats,
    lines,
    combined,
    loop,
    receipt: `AG-EQ / HYDRA / Z-${String(filled.length)} / ${loop.id.toUpperCase()} / ${filled.map((s) => s.code).join("+")} / ${stamp}`,
  };
}

export const MAX_HEADS = 3;

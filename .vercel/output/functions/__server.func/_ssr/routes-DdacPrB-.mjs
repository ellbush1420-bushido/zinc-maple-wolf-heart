import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Cog, C as Globe, D as FileText, E as Flag, F as Bell, I as ArrowRight, M as ChartLine, N as Calendar, O as Eye, P as BookOpen, S as Headphones, T as FlaskConical, _ as Lock, a as TrendingUp, b as Inbox, c as Shield, d as Repeat, f as PenLine, g as Mail, h as Map, i as TriangleAlert, j as Clapperboard, k as Cpu, l as Search, m as Megaphone, n as Wallet, o as Target, p as Mic, r as Users, s as Sparkles, t as X, u as Rocket, v as ListChecks, w as GitBranch, x as Image, y as LayoutTemplate } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DdacPrB-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY_PIRR = {
	persona: "",
	identity: "",
	relationship: "",
	rivalry: ""
};
var PIRR_CELLS = [
	{
		id: "persona",
		code: "P",
		label: "Persona",
		hint: "Locked adult face"
	},
	{
		id: "identity",
		code: "I",
		label: "Identity",
		hint: "Voice and what they may say"
	},
	{
		id: "relationship",
		code: "R1",
		label: "Relationship",
		hint: "Who sits with them"
	},
	{
		id: "rivalry",
		code: "R2",
		label: "Rivalry",
		hint: "Who pulls against"
	}
];
function pirrFilled(p) {
	return PIRR_CELLS.every((c) => p[c.id].trim().length > 0);
}
function vidyLine(p) {
	const face = p.persona.trim();
	const id = p.identity.trim();
	const rel = p.relationship.trim();
	const riv = p.rivalry.trim();
	const n = [
		face,
		id,
		rel,
		riv
	].filter(Boolean).length;
	if (n === 0) return "Vidy idle. Four cells vacant. Lock a face before I walk.";
	if (n < 4) return `Vidy holding ${n}/4. ${face || "No face"} · ${id || "no voice"} · ${rel || "no bond"} · ${riv || "no heat"}.`;
	return `Vidy online. ${face} locked. Voice: ${id}. ${rel} at the table. ${riv} on the heat line. Originals only.`;
}
var STORIES = [
	{
		id: 1,
		name: "Return",
		line: "They come back to a place that kept the score."
	},
	{
		id: 2,
		name: "Breach",
		line: "A sealed floor opens. Something walks in."
	},
	{
		id: 3,
		name: "Vow",
		line: "A word is spoken that cannot be unsaid."
	},
	{
		id: 4,
		name: "Exile",
		line: "The gate shuts behind them. No HUD on the road."
	},
	{
		id: 5,
		name: "Ascent",
		line: "They climb a house that was not theirs."
	},
	{
		id: 6,
		name: "Fracture",
		line: "One law splits. Two truths claim the page."
	},
	{
		id: 7,
		name: "Harvest",
		line: "What was planted comes due."
	},
	{
		id: 8,
		name: "Witness",
		line: "Someone saw it. The record will not sleep."
	},
	{
		id: 9,
		name: "Forge",
		line: "They make the thing that will outlast them."
	}
];
var SCENARIOS = [
	{
		id: 1,
		name: "Gate",
		line: "A threshold, one keeper, one ask."
	},
	{
		id: 2,
		name: "Debt",
		line: "A ledger with a name already written."
	},
	{
		id: 3,
		name: "Mask",
		line: "A face that is not the lock."
	},
	{
		id: 4,
		name: "Trial",
		line: "Proof demanded in public."
	},
	{
		id: 5,
		name: "Split",
		line: "Two allies, one floor, no shared brief."
	},
	{
		id: 6,
		name: "Siege",
		line: "The lot is surrounded. Time is the weapon."
	},
	{
		id: 7,
		name: "Quiet",
		line: "No one speaks. The page still moves."
	},
	{
		id: 8,
		name: "Flood",
		line: "Too much signal. The desk cannot hold."
	},
	{
		id: 9,
		name: "Ledger",
		line: "Every choice is already priced."
	}
];
var RESOLUTIONS = [
	{
		id: 1,
		name: "Bind",
		line: "The vow holds. The floor stays shut."
	},
	{
		id: 2,
		name: "Cut",
		line: "The edge is named. Something is let go."
	},
	{
		id: 3,
		name: "Mercy",
		line: "The price is waived. The record remains."
	},
	{
		id: 4,
		name: "Price",
		line: "They pay. The house files the receipt."
	},
	{
		id: 5,
		name: "Reveal",
		line: "The mask drops. Canon updates."
	},
	{
		id: 6,
		name: "Seal",
		line: "The breach closes. Watch stays on."
	},
	{
		id: 7,
		name: "Scatter",
		line: "The cast leaves. One page survives."
	},
	{
		id: 8,
		name: "Hold",
		line: "No win. The line is held until dawn."
	},
	{
		id: 9,
		name: "Yield",
		line: "They give the floor. The law does not."
	}
];
var EMPTY_CUBE = {
	story: 0,
	scenario: 0,
	resolution: 0
};
function cubeAddress(c) {
	if (!c.story || !c.scenario || !c.resolution) return null;
	return `${c.story}·${c.scenario}·${c.resolution}`;
}
function cubeIndex(c) {
	if (!c.story || !c.scenario || !c.resolution) return null;
	return (c.story - 1) * 81 + (c.scenario - 1) * 9 + c.resolution;
}
function compileCube(c, intent) {
	const s = STORIES[c.story - 1];
	const n = SCENARIOS[c.scenario - 1];
	const r = RESOLUTIONS[c.resolution - 1];
	if (!s || !n || !r) return null;
	return [
		`HYDRA-999  cell ${cubeAddress(c)}  /  ${cubeIndex(c)} of 729`,
		`Story      ${s.id} ${s.name} — ${s.line}`,
		`Scenario   ${n.id} ${n.name} — ${n.line}`,
		`Resolution ${r.id} ${r.name} — ${r.line}`,
		`Intent     ${intent.trim() || "(unnamed)"}`,
		`${s.name} meets ${n.name}. ${r.name} closes the page. Original world only. No marketplace face.`
	].join("\n");
}
function cubeStanza(c, intent) {
	if (!compileCube(c, intent)) return `Nine-cube idle on “${intent}”. Pick story, scenario, resolution (9×9×9).`;
	const s = STORIES[c.story - 1];
	const n = SCENARIOS[c.scenario - 1];
	const r = RESOLUTIONS[c.resolution - 1];
	return `Cell ${cubeAddress(c)} (${cubeIndex(c)}/729) for “${intent}”: ${s.name} / ${n.name} / ${r.name}.`;
}
function pirrStanza(p, intent) {
	if (!pirrFilled(p)) return `PIRR hold on “${intent}”. Vidy needs face, voice, bond, heat before the companion walks.`;
	return `Vidy companion on “${intent}”: ${p.persona} / ${p.identity}. Bond ${p.relationship}. Heat ${p.rivalry}.`;
}
var PSYCHE = [
	{
		id: "sentinel",
		name: "Sentinel",
		job: "Holds the constraint. Watches the edge."
	},
	{
		id: "maker",
		name: "Maker",
		job: "Builds the artifact. Stays on the floor."
	},
	{
		id: "herald",
		name: "Herald",
		job: "Takes it public. Does not hunt."
	}
];
var SKILLS = [
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
			{
				icon: "users",
				title: "Customers",
				detail: "Jobs and language"
			},
			{
				icon: "search",
				title: "Competitors",
				detail: "Who already owns it"
			},
			{
				icon: "alert",
				title: "Pain",
				detail: "Where they stall"
			}
		],
		pipeline: ["Raw data", "Insight"],
		stanza: (intent, others) => `Signal desk on “${intent}”. Audience language pulled. Gaps vs ${others.join(" + ") || "the stack"} marked. No spend authorized.`
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
			{
				icon: "target",
				title: "Offer",
				detail: "What we sell next"
			},
			{
				icon: "globe",
				title: "Channels",
				detail: "Where it shows"
			},
			{
				icon: "flag",
				title: "Goals",
				detail: "Clear numbers"
			}
		],
		pipeline: ["Insight", "Plan"],
		stanza: (intent) => `Game plan for “${intent}”: one offer, two channels, one number. Corp still cannot task Kestrel.`
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
			{
				icon: "pen",
				title: "Posts",
				detail: "Short public copy"
			},
			{
				icon: "follow",
				title: "Follow-up",
				detail: "Reply paths"
			},
			{
				icon: "repeat",
				title: "Cadence",
				detail: "Daily belt"
			}
		],
		pipeline: [
			"Draft",
			"Post",
			"Follow-up"
		],
		stanza: (intent) => `Social belt for “${intent}”: 3 posts, 1 thread, 1 follow-up. No hunt tickets. Human gates spend.`
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
			{
				icon: "layout",
				title: "Angles",
				detail: "Hooks that survive a skim"
			},
			{
				icon: "flask",
				title: "Tests",
				detail: "Variants before money"
			},
			{
				icon: "flag",
				title: "Gate",
				detail: "Spend stays authorized"
			}
		],
		pipeline: [
			"Concept",
			"Test",
			"Gate"
		],
		stanza: (intent) => `Ad lab holds two variants for “${intent}”. Spend locked until you authorize.`
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
			{
				icon: "chart",
				title: "Worked",
				detail: "Lift and time-to-lead"
			},
			{
				icon: "alert",
				title: "Failed",
				detail: "Kill list"
			},
			{
				icon: "repeat",
				title: "Next",
				detail: "Patch the brief"
			}
		],
		pipeline: [
			"Data",
			"Insight",
			"Repeat"
		],
		stanza: (intent) => `Watch loop on “${intent}”: keep the winner, kill the mute, queue one patch.`
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
			{
				icon: "shield",
				title: "Shield",
				detail: "Default deny on public lots"
			},
			{
				icon: "lock",
				title: "Gate",
				detail: "HUD does not copy out"
			},
			{
				icon: "eye",
				title: "Watch",
				detail: "Surface only"
			}
		],
		pipeline: [
			"Scope",
			"Shield",
			"QA"
		],
		stanza: (intent) => `Privacy shield spec for “${intent}”: public-safe surface, private core, no HUD on sale lots.`
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
			{
				icon: "inbox",
				title: "Intake",
				detail: "What crossed the line"
			},
			{
				icon: "map",
				title: "Map",
				detail: "Which floor is exposed"
			},
			{
				icon: "flag",
				title: "Hold",
				detail: "Human authorize on action"
			}
		],
		pipeline: [
			"Intake",
			"Map",
			"Hold"
		],
		stanza: (intent) => `Threat desk files “${intent}”. Lotus Duty will not task Growth or Persona. Hold for you.`
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
			{
				icon: "cpu",
				title: "Program",
				detail: "One module, one floor"
			},
			{
				icon: "lock",
				title: "Bind",
				detail: "Does not leave Lotus"
			},
			{
				icon: "flag",
				title: "Authorize",
				detail: "You seat the loadout"
			}
		],
		pipeline: [
			"Spec",
			"Pack",
			"Authorize"
		],
		stanza: (intent) => `Security program “${intent}”: module list, threat model, authorize-to-run. Mini Hydra may borrow this skill — the program stays on L-03.`
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
			{
				icon: "headset",
				title: "Duty",
				detail: "Lotus on the line"
			},
			{
				icon: "list",
				title: "Log",
				detail: "What moved"
			},
			{
				icon: "repeat",
				title: "Close",
				detail: "Stamp and file"
			}
		],
		pipeline: [
			"Detect",
			"Contain",
			"Close"
		],
		stanza: (intent) => `Incident packet for “${intent}”: contain, notify Aegis, close with receipt. No marketing overlay on this floor.`
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
			{
				icon: "lock",
				title: "Clear",
				detail: "Owner / citadel only"
			},
			{
				icon: "eye",
				title: "Split",
				detail: "Public-safe vs vault-off"
			},
			{
				icon: "flag",
				title: "Refuse",
				detail: "Sale lots get no HUD"
			}
		],
		pipeline: [
			"Ask",
			"Clear",
			"Refuse"
		],
		stanza: (intent) => `Clearance on “${intent}”: owner HUD yes, public teaser maybe, full program never on a sale lot.`
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
			{
				icon: "users",
				title: "Face",
				detail: "One locked identity"
			},
			{
				icon: "mic",
				title: "Voice",
				detail: "Register and rules"
			},
			{
				icon: "file",
				title: "Brief",
				detail: "What they may say"
			}
		],
		pipeline: [
			"Lock",
			"Voice",
			"Brief"
		],
		stanza: (intent) => `Persona lock for “${intent}”: original adult identity, voice rules, no marketplace face.`
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
			{
				icon: "branch",
				title: "Edges",
				detail: "Who pulls whom"
			},
			{
				icon: "users",
				title: "Seats",
				detail: "Cast on the grid"
			},
			{
				icon: "alert",
				title: "Heat",
				detail: "Where conflict lives"
			}
		],
		pipeline: [
			"Cast",
			"Edges",
			"Heat"
		],
		stanza: (intent) => `Rivalry matrix for “${intent}”: 4 nodes, 6 edges, one heat line. Herald may pitch it; Sentinel may fence it.`
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
			{
				icon: "users",
				title: "P · I",
				detail: "Face and voice lock"
			},
			{
				icon: "branch",
				title: "R · R",
				detail: "Bond and heat"
			},
			{
				icon: "headset",
				title: "Vidy",
				detail: "Companion walks the four"
			}
		],
		pipeline: [
			"Lock",
			"Bond",
			"Walk"
		],
		stanza: (intent) => `PIRR engine on “${intent}”. Vidy holds face, voice, bond, heat. Originals only. Companion does not hunt.`
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
			{
				icon: "book",
				title: "Canon",
				detail: "What is true here"
			},
			{
				icon: "pen",
				title: "Page",
				detail: "One scene, one law"
			},
			{
				icon: "flag",
				title: "Bind",
				detail: "Does not break seated lock"
			}
		],
		pipeline: [
			"Canon",
			"Page",
			"Bind"
		],
		stanza: (intent) => `Lore page for “${intent}”: origin, law, one image cue. Stays on Canon House until Hydra borrows it.`
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
			{
				icon: "map",
				title: "World",
				detail: "Places and eras"
			},
			{
				icon: "list",
				title: "Laws",
				detail: "What cannot change"
			},
			{
				icon: "users",
				title: "Cast",
				detail: "Who is allowed on the page"
			}
		],
		pipeline: [
			"World",
			"Laws",
			"Cast"
		],
		stanza: (intent) => `Story bible for “${intent}”: one world, three laws, named cast. Writers stay inside the rails.`
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
			{
				icon: "clapper",
				title: "Beat",
				detail: "What happens"
			},
			{
				icon: "mic",
				title: "Line",
				detail: "Who says it"
			},
			{
				icon: "flag",
				title: "Exit",
				detail: "Where the scene lands"
			}
		],
		pipeline: [
			"Beat",
			"Line",
			"Exit"
		],
		stanza: (intent) => `Scene desk on “${intent}”: one beat, two lines, one exit. No marketplace voice.`
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
			{
				icon: "image",
				title: "Plate",
				detail: "Map, mark, or still"
			},
			{
				icon: "layout",
				title: "Crop",
				detail: "Page, poster, or social"
			},
			{
				icon: "book",
				title: "Bind",
				detail: "Must match K-01"
			}
		],
		pipeline: [
			"Plate",
			"Crop",
			"Bind"
		],
		stanza: (intent) => `Lore art for “${intent}”: 3 plates (map, mark, still). Original only. No marketplace likeness.`
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
			{
				icon: "file",
				title: "Spine",
				detail: "Chapters in order"
			},
			{
				icon: "layout",
				title: "Plate",
				detail: "Cover and inner sheet"
			},
			{
				icon: "lock",
				title: "SKU",
				detail: "Packet law"
			}
		],
		pipeline: [
			"Spine",
			"Plate",
			"SKU"
		],
		stanza: (intent) => `Booklet compiler on “${intent}”: cover line, 5 inner plates, SKU band. Ready for Herald if seated.`
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
			{
				icon: "book",
				title: "Story",
				detail: "Nine rails"
			},
			{
				icon: "clapper",
				title: "Scenario",
				detail: "Nine pressures"
			},
			{
				icon: "flag",
				title: "Resolution",
				detail: "Nine closings"
			}
		],
		pipeline: [
			"Story",
			"Scenario",
			"Resolution"
		],
		stanza: (intent) => `Nine-cube on “${intent}”: pick story, scenario, resolution. One cell of 729. Original world. No marketplace face.`
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
			{
				icon: "image",
				title: "Still",
				detail: "Orange-wire or locked face"
			},
			{
				icon: "layout",
				title: "Frame",
				detail: "Poster, plate, or social"
			},
			{
				icon: "flag",
				title: "Nine",
				detail: "Intent before generate"
			}
		],
		pipeline: [
			"Intent",
			"Frame",
			"Still"
		],
		stanza: (intent) => `Image-9 stills for “${intent}”: 3 frames (mark, product, social crop). No marketplace likeness.`
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
			{
				icon: "layout",
				title: "Page",
				detail: "Hero, proof, ask"
			},
			{
				icon: "pen",
				title: "Copy",
				detail: "Public-safe only"
			},
			{
				icon: "rocket",
				title: "Ship",
				detail: "Hand to Growth if seated"
			}
		],
		pipeline: [
			"Hero",
			"Proof",
			"Ask"
		],
		stanza: (intent) => `Landing for “${intent}”: hero line, three proofs, one ask. Public lot — HUD withheld.`
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
			{
				icon: "list",
				title: "Law",
				detail: "Lots, floors, heads, levy"
			},
			{
				icon: "lock",
				title: "Bind",
				detail: "Programs stay on their floors"
			},
			{
				icon: "flag",
				title: "Clear",
				detail: "Public lots do not receive the HUD"
			}
		],
		pipeline: [
			"Law",
			"Bind",
			"Clear"
		],
		stanza: (intent) => `Meta OS protocol on “${intent}”: four houses, two-floor protocol lot, Mini Hydra max three, Aegis levy on sale. Package may be sent.`
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
			{
				icon: "file",
				title: "Compile",
				detail: "Protocol and the Hydra sets"
			},
			{
				icon: "mail",
				title: "Send",
				detail: "Download the packet"
			},
			{
				icon: "lock",
				title: "Strip",
				detail: "HUD withheld. Public-safe copy."
			}
		],
		pipeline: [
			"Compile",
			"Strip",
			"Send"
		],
		stanza: (intent) => `Dispatch packet for “${intent}”: protocol, ambassador, influencer, cyber freelancer, canon writer. One file. Ready to send.`
	}
];
var SKILL_INDEX = Object.fromEntries(SKILLS.map((s) => [s.id, s]));
var BUILDINGS = [
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
		skillIds: [
			"m-research",
			"m-strategy",
			"m-social",
			"m-ads",
			"m-watch"
		]
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
		skillIds: [
			"s-shield",
			"s-threat",
			"s-programs",
			"s-incident",
			"s-clearance"
		]
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
		skillIds: [
			"c-persona",
			"c-rivalry",
			"c-pirr",
			"c-image",
			"c-landing"
		]
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
		skillIds: [
			"c-lore",
			"c-bible",
			"c-scene",
			"c-art",
			"c-booklet",
			"c-cube"
		]
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
		skillIds: ["d-protocol", "d-package"]
	}
];
var BUILDING_INDEX = Object.fromEntries(BUILDINGS.map((b) => [b.id, b]));
function skillsFor(building) {
	return BUILDING_INDEX[building].skillIds.map((id) => SKILL_INDEX[id]);
}
var FACE = /* @__PURE__ */ new Set([
	"c-persona",
	"c-image",
	"c-landing",
	"c-pirr"
]);
var CHANNEL = /* @__PURE__ */ new Set([
	"m-social",
	"m-ads",
	"m-watch",
	"m-strategy"
]);
var LORE = /* @__PURE__ */ new Set([
	"c-lore",
	"c-booklet",
	"c-bible",
	"c-scene",
	"c-art",
	"c-cube"
]);
var SHIELD = /* @__PURE__ */ new Set([
	"s-shield",
	"s-programs",
	"s-clearance",
	"s-threat",
	"s-incident"
]);
var LOOP_INDEX = Object.fromEntries([
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
			"Herald only. Do not hunt."
		]
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
			"No marketplace likeness."
		]
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
			"Lotus Duty will not task Growth hunts"
		]
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
			"File the receipt to Aegis"
		]
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
			"Do not invent a marketplace face"
		]
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
			"No marketplace voice"
		]
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
			"No marketplace likeness"
		]
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
			"Compile the page"
		]
	},
	{
		id: "mix",
		name: "Open Mix",
		kicker: "Custom triune",
		blurb: "Any three floor skills. Hydra borrows. Programs stay on their floors.",
		beats: [
			"Constrain",
			"Build",
			"Carry"
		]
	}
].map((l) => [l.id, l]));
function hasAny(ids, pool) {
	for (const id of ids) if (pool.has(id)) return true;
	return false;
}
function matchLoop(skillIds) {
	const packed = [...skillIds.filter(Boolean)].sort().join("|");
	for (const p of PRELOADS) if ([...p.skillIds].sort().join("|") === packed) return LOOP_INDEX[p.loopId];
	const ids = new Set(skillIds.filter(Boolean));
	const face = hasAny(ids, FACE);
	const channel = hasAny(ids, CHANNEL);
	const lore = hasAny(ids, LORE);
	if (hasAny(ids, SHIELD) && (face || lore) && channel) return LOOP_INDEX["shield-drop"];
	if (face && channel) return LOOP_INDEX.ambassador;
	if (lore && channel) return LOOP_INDEX["lore-press"];
	if (ids.has("c-cube")) return LOOP_INDEX["nine-cube"];
	if (ids.has("c-pirr")) return LOOP_INDEX.vidy;
	if (lore) return LOOP_INDEX["canon-desk"];
	return LOOP_INDEX.mix;
}
var PRELOADS = [
	{
		id: "ambassador",
		loopId: "ambassador",
		name: "Ambassador",
		skillIds: [
			"c-persona",
			"m-social",
			"m-watch"
		],
		intent: "ambassador circuit for an original product",
		spec: {
			lane: "Herald circuit",
			for: "Brand ambassadors who need a locked original face and a public belt that runs without a hunt.",
			cadence: "Daily posts. Weekly keep/kill. Face lock holds until you pull the head.",
			duties: [
				"P-01 Persona — lock one adult identity, voice register, and what they may say.",
				"G-03 Social Engine — 3 posts, 1 thread, 1 follow-up. Public copy only.",
				"G-05 Growth Watch — measure lift, kill the mute, queue one patch."
			],
			outputs: [
				"Persona lock (face, voice, brief)",
				"Social packet (posts, thread, follow-up)",
				"Watch receipt (keep / kill / next)"
			],
			gates: [
				"You authorize spend. Hydra does not buy ads.",
				"Original identity only. No marketplace face.",
				"Human gates any change to the lock."
			],
			forbids: [
				"No hunt tickets. Lotus is not on this loop.",
				"No HUD copy on a sale lot.",
				"Herald carries. Sentinel does not pursue."
			]
		}
	},
	{
		id: "influencer",
		loopId: "influencer",
		name: "Influencer",
		skillIds: [
			"c-image",
			"m-social",
			"m-ads"
		],
		intent: "personal brand stills, daily posts, gated ad tests",
		spec: {
			lane: "Personal brand loop",
			for: "Creators who make their own stills, post a daily belt, and test paid angles with spend locked.",
			cadence: "Stills on intent. Posts daily. Ad variants held until you open the gate.",
			duties: [
				"P-05 Image Generator — 3 original frames: mark, product, social crop.",
				"G-03 Social Engine — daily belt. Short public copy. Reply paths.",
				"G-04 Ad Lab — two angles, one test plan. Spend stays authorized."
			],
			outputs: [
				"Image-9 stills (mark / product / crop)",
				"Social belt for the week",
				"Two ad variants, unspent"
			],
			gates: [
				"Spend locked until you authorize.",
				"No marketplace likeness. Original art only.",
				"Intent is named before Image-9 runs."
			],
			forbids: [
				"No live ad spend from this chassis.",
				"No borrowed Persona face unless you seat P-01 yourself.",
				"No hunt overlay on the belt."
			]
		}
	},
	{
		id: "cyber-freelance",
		loopId: "cyber-freelance",
		name: "Cyber freelancer",
		skillIds: [
			"s-programs",
			"s-threat",
			"c-landing"
		],
		intent: "freelance security desk with a public-safe intake page",
		spec: {
			lane: "Security desk for hire",
			for: "Independent operators selling one security program with intake and a public-safe page. No hunts.",
			cadence: "Intake as it lands. Program stays packed until you authorize. Page stays public-safe.",
			duties: [
				"L-03 Hydra Security Programs — one module, threat model, authorize-to-run.",
				"L-02 Threat Desk — intake, map the exposed floor, hold for you.",
				"P-06 Landing — hero, three proofs, one ask. HUD withheld."
			],
			outputs: [
				"Security program spec (module list + model)",
				"Threat hold with receipt",
				"Public landing (hero / proof / ask)"
			],
			gates: [
				"You seat the loadout. Hydra does not self-authorize.",
				"Corp cannot call hunts from this desk.",
				"Full HUD never ships on the sale lot."
			],
			forbids: [
				"Lotus Duty will not task Growth.",
				"No Kestrel. No hunt tickets.",
				"Public page is teaser only — program stays on L-03."
			]
		}
	},
	{
		id: "canon-writer",
		loopId: "canon-desk",
		name: "Canon writer",
		skillIds: [
			"c-bible",
			"c-scene",
			"c-booklet"
		],
		intent: "story bible, scenes, compiled booklet for an original world",
		spec: {
			lane: "Writer desk",
			for: "Writers who need locked world rails, one scene at a time, and a booklet that ships without a hunt.",
			cadence: "Bible first. Scenes on intent. Booklet when the spine holds.",
			duties: [
				"K-02 Story Bible — world, three laws, named cast.",
				"K-03 Scene Desk — one beat, two lines, one exit.",
				"K-05 E-booklet Compiler — cover, inner plates, SKU."
			],
			outputs: [
				"Story bible (world / laws / cast)",
				"Scene packet (beat, lines, exit)",
				"Booklet spine ready for Herald"
			],
			gates: [
				"Original world only. No marketplace voice.",
				"Persona lock stays on B3 unless you seat P-01.",
				"Scribe files. Hydra borrows."
			],
			forbids: [
				"No hunt overlay on the page.",
				"No HUD on a sale lot.",
				"Herald may carry the booklet. Sentinel does not pursue."
			]
		}
	},
	{
		id: "lore-designer",
		loopId: "canon-desk",
		name: "Lore designer",
		skillIds: [
			"c-lore",
			"c-art",
			"c-booklet"
		],
		intent: "canon pages, lore plates, compiled booklet for designers",
		spec: {
			lane: "Designer desk",
			for: "Lore and art designers who bind stills to canon and compile a public-safe booklet.",
			cadence: "Canon first. Plates on intent. Booklet when plates bind.",
			duties: [
				"K-01 Lore Generation — origin, law, one image cue.",
				"K-04 Lore Art — map, mark, still. Original only.",
				"K-05 E-booklet Compiler — cover, inner plates, SKU."
			],
			outputs: [
				"Canon page (origin / law / cue)",
				"Three lore plates (map / mark / still)",
				"Booklet spine ready for Herald"
			],
			gates: [
				"Plates must match K-01.",
				"No marketplace likeness.",
				"Intent named before Lore Art runs."
			],
			forbids: [
				"No product stills from P-05 unless you seat it.",
				"No HUD copy on the lot.",
				"No hunt tickets."
			]
		}
	},
	{
		id: "vidy",
		loopId: "vidy",
		name: "Vidy",
		skillIds: [
			"c-persona",
			"c-rivalry",
			"c-pirr"
		],
		intent: "PIRR companion lock for an original adult identity",
		spec: {
			lane: "Companion circuit",
			for: "Operators who need Vidy to walk persona, identity, relationship, and rivalry as one lock.",
			cadence: "Lock the four cells. Vidy holds until you pull the head.",
			duties: [
				"P-01 Persona — original adult face, voice, brief.",
				"P-02 Rivalry Matrix — bond and heat on the grid.",
				"P-03 PIRR Companion — Vidy walks the four cells."
			],
			outputs: [
				"Persona lock",
				"Rivalry grid (nodes and heat)",
				"Vidy companion receipt"
			],
			gates: [
				"Original identity only. No marketplace face.",
				"Human gates any change to the lock.",
				"Companion does not hunt."
			],
			forbids: [
				"No hunt tickets.",
				"No HUD copy on a sale lot.",
				"Vidy will not task Lotus."
			]
		}
	},
	{
		id: "nine-cube",
		loopId: "nine-cube",
		name: "9×9×9",
		skillIds: [
			"c-cube",
			"c-scene",
			"c-booklet"
		],
		intent: "story cube cell compiled to a scene and booklet",
		spec: {
			lane: "Story cube",
			for: "Writers who pick one cell of 729, write the scene, and compile the page.",
			cadence: "Lock the cell. Scene on intent. Booklet when the spine holds.",
			duties: [
				"K-06 Hydra 9×9×9 — story, scenario, resolution.",
				"K-03 Scene Desk — one beat, two lines, one exit.",
				"K-05 E-booklet Compiler — cover, inner plates, SKU."
			],
			outputs: [
				"Cube cell (address / 729)",
				"Scene packet",
				"Booklet spine"
			],
			gates: [
				"Original world only.",
				"All three axes must lock before the page.",
				"Scribe files. Hydra borrows."
			],
			forbids: [
				"No marketplace face.",
				"No hunt overlay on the page.",
				"HUD withheld on the sale lot."
			]
		}
	}
];
function sameSet(a, b) {
	const left = a.filter(Boolean).slice().sort().join("|");
	const right = [...b].slice().sort().join("|");
	return left.length > 0 && left === right;
}
function preloadFor(skillIds) {
	return PRELOADS.find((p) => sameSet(skillIds, p.skillIds));
}
function compileDistrictPackage(opts) {
	const lines = [
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
		`Empty chassis next. Aegis levy ${Math.round(HOUSE_LEVY * 100)}% of ask. Owner take is the rest.`,
		"Sold hydras do not copy this HUD.",
		"",
		"4. SETS — SENDABLE SPECS"
	];
	for (const p of PRELOADS) {
		const codes = p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ");
		lines.push("", `4.${PRELOADS.indexOf(p) + 1}  ${p.name.toUpperCase()}  ·  ${p.spec.lane}`, `Heads  ${codes}`, p.spec.for, `Cadence  ${p.spec.cadence}`, "Heads:", ...p.spec.duties.map((d, i) => `  ${PSYCHE[i].name}. ${d}`), "Outputs:", ...p.spec.outputs.map((o) => `  - ${o}`), "Gates:", ...p.spec.gates.map((o) => `  - ${o}`), "Will not:", ...p.spec.forbids.map((o) => `  - ${o}`));
	}
	lines.push("", "5. PACKAGE LAW", "Dispatch compiles this protocol and the set specs into one file.", "Strip HUD. Public-safe copy only. Recipient does not receive the citadel.", "Jarvis Clerk stamps. Aegis files.", "", "6. CLEARANCE", "Owner / citadel: full HUD.", "Public teaser: maybe.", "Sale lot: never this HUD.");
	if (opts?.hydra) {
		const p = opts.hydra;
		lines.push("", "7. SEATED CHASSIS (this send only)", `Z-${String(opts.serial ?? 1).padStart(2, "0")}  ${p.name}  ·  ${p.spec.lane}`, opts.intent ? `Intent  ${opts.intent}` : "", p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + "));
	}
	const stamp = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19);
	lines.push("", `Receipt  AG-EQ / META-OS / DISPATCH / ${stamp} / Shadow Hand`, "");
	return lines.filter((l) => l !== void 0).join("\n");
}
var HOUSE_LEVY = .18;
function quoteSale(ask) {
	const clean = Math.max(0, Math.round(ask));
	const levy = Math.round(clean * HOUSE_LEVY);
	return {
		ask: clean,
		levy,
		ownerTake: clean - levy,
		pct: HOUSE_LEVY
	};
}
function appraise(skillIds) {
	const skills = skillIds.map((id) => SKILL_INDEX[id]).filter(Boolean);
	if (skills.length !== 3) return 400;
	let n = 420 + new Set(skills.map((s) => s.category)).size * 160;
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
var FLEET_BEAT_MS = 1400;
var EMPTY_FLEET = {
	lock: null,
	running: false,
	produced: 0,
	hold: []
};
function makeLock(skillIds, intent) {
	if (skillIds.filter(Boolean).length !== 3) return null;
	const loop = matchLoop(skillIds);
	return {
		id: `lock-${Date.now()}`,
		skillIds,
		intent,
		loopId: loop.id,
		lockedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function compileZeta(intent, skillIds, extras) {
	const filled = skillIds.map((id) => SKILL_INDEX[id]).filter(Boolean);
	if (filled.length !== 3) return null;
	const seats = PSYCHE.map((p, i) => ({
		psyche: p.id,
		skill: filled[i]
	}));
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
			body
		};
	});
	const cats = [...new Set(filled.map((s) => s.category))];
	const combined = loop.id === "mix" ? `Mini Hydra Zeta mixed ${cats.join(" / ")} on “${intent}”. ${filled[0].name} constrains, ${filled[1].name} builds, ${filled[2].name} carries it.` : `Mini Hydra Zeta is running ${loop.name} on “${intent}”. ${loop.blurb}`;
	const stamp = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").slice(0, 19);
	return {
		intent,
		stamp,
		seats,
		lines,
		combined,
		loop,
		receipt: `AG-EQ / HYDRA / Z-${String(filled.length)} / ${loop.id.toUpperCase()} / ${filled.map((s) => s.code).join("+")} / ${stamp}`
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BuildingPlate({ building, highlight, onSelect }) {
	const floors = skillsFor(building.id);
	const n = floors.length;
	const topStart = 17;
	const h = 66 / n;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto w-fit max-w-full overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative", building.id === "meta" && "plate-zoom"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: building.art,
				alt: `${building.name} wireframe`,
				className: "block h-auto max-h-[min(28rem,calc(100dvh-13.5rem))] w-auto max-w-full"
			}), floors.map((floor, i) => {
				const hot = highlight === floor.id;
				const dim = highlight !== "none" && highlight !== floor.id;
				const inset = 22 + i * .7;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onSelect(floor),
					"aria-label": `${floor.code} ${floor.name}`,
					"aria-pressed": hot,
					className: cn("floor-hotspot", hot && "is-hot", dim && "is-dim"),
					style: {
						top: `${topStart + i * h}%`,
						height: `${h}%`,
						left: `${inset}%`,
						right: `${inset}%`
					}
				}, floor.id);
			})]
		})
	});
}
var MAP = {
	search: Search,
	users: Users,
	trend: TrendingUp,
	alert: TriangleAlert,
	spark: Sparkles,
	eye: Eye,
	chart: ChartLine,
	target: Target,
	rocket: Rocket,
	mail: Mail,
	globe: Globe,
	leads: Megaphone,
	follow: Bell,
	flask: FlaskConical,
	pen: PenLine,
	clapper: Clapperboard,
	layout: LayoutTemplate,
	mic: Mic,
	map: Map,
	flag: Flag,
	cpu: Cpu,
	cog: Cog,
	wallet: Wallet,
	headset: Headphones,
	calendar: Calendar,
	inbox: Inbox,
	list: ListChecks,
	meet: Calendar,
	repeat: Repeat,
	shield: Shield,
	lock: Lock,
	book: BookOpen,
	image: Image,
	branch: GitBranch,
	file: FileText
};
function DutyIcon({ name }) {
	const Icon = MAP[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "size-3.5",
		strokeWidth: 1.6
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 border font-medium uppercase tracking-[0.14em] transition-[color,background-color,border-color,transform] duration-(--motion-quick) ease-(--ease-out) active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			default: "border-signal bg-signal text-bg hover:bg-signal-hot",
			line: "border-line bg-transparent text-paper hover:border-signal hover:text-signal",
			ghost: "border-transparent bg-transparent text-mute hover:text-paper"
		},
		size: {
			default: "h-11 px-4 text-xs",
			sm: "h-9 px-3 text-2xs",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function PirrDesk({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs uppercase tracking-[0.2em] text-mute",
				children: "PIRR · Vidy companion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-paper",
				children: vidyLine(value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: PIRR_CELLS.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "border border-line p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-2xs uppercase tracking-[0.16em] text-signal",
							children: [
								cell.code,
								" · ",
								cell.label
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-2xs text-mute",
							children: cell.hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: value[cell.id],
							onChange: (e) => onChange({
								...value,
								[cell.id]: e.target.value
							}),
							placeholder: cell.hint,
							className: "mt-2 h-11 w-full border border-line bg-elevated px-2 text-xs text-paper outline-none placeholder:text-mute focus:border-signal"
						})
					]
				}, cell.id))
			})
		]
	});
}
function Axis({ title, cells, selected, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-2xs uppercase tracking-[0.18em] text-mute",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-1",
		children: cells.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick(c.id),
			className: cn("h-11 px-1 text-2xs uppercase tracking-[0.08em]", selected === c.id ? "bg-signal text-bg" : "border border-line text-mute hover:text-paper"),
			children: [
				c.id,
				" ",
				c.name
			]
		}, c.id))
	})] });
}
function NineCube({ value, intent, onChange }) {
	const addr = cubeAddress(value);
	const page = compileCube(value, intent);
	const idx = cubeIndex(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs uppercase tracking-[0.2em] text-mute",
				children: "HYDRA-999 · story × scenario × resolution"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-mute",
				children: addr ? `Cell ${addr} · ${idx} of 729` : "Pick one on each axis. 9 × 9 × 9."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Axis, {
				title: "Story",
				cells: STORIES,
				selected: value.story,
				onPick: (id) => onChange({
					...value,
					story: id
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Axis, {
				title: "Scenario",
				cells: SCENARIOS,
				selected: value.scenario,
				onPick: (id) => onChange({
					...value,
					scenario: id
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Axis, {
				title: "Resolution",
				cells: RESOLUTIONS,
				selected: value.resolution,
				onPick: (id) => onChange({
					...value,
					resolution: id
				})
			}),
			page ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "overflow-auto border border-line p-3 font-sans text-xs leading-relaxed whitespace-pre-wrap text-paper",
				children: page
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-mute",
				children: "Cube idle until all three axes lock."
			}),
			addr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "line",
				className: "w-fit",
				onClick: () => onChange({
					story: 0,
					scenario: 0,
					resolution: 0
				}),
				children: "Clear cell"
			}) : null
		]
	});
}
function MiniHydraFigure({ slots, running, serial, size = "bay" }) {
	const lit = slots.filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative mx-auto shrink-0", size === "city" ? "w-24" : "w-36"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/mini-hydra.jpg",
				alt: "Mini Hydra Zeta chassis",
				className: cn("mx-auto w-full object-contain", size === "city" ? "max-h-24" : "max-h-36", running && "hydra-run")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex justify-center gap-1",
				children: PSYCHE.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: p.name,
					className: cn("size-1.5", slots[i] ? "bg-signal" : "border border-line bg-transparent")
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-center font-mono text-2xs tabular-nums uppercase tracking-[0.16em] text-mute",
				children: [
					"Z-",
					String(serial).padStart(2, "0"),
					" · ",
					lit,
					"/3"
				]
			})
		]
	});
}
var CX = 100;
var CY = 100;
function polar(r, deg) {
	const a = (deg - 90) * Math.PI / 180;
	return [+(CX + r * Math.cos(a)).toFixed(2), +(CY + r * Math.sin(a)).toFixed(2)];
}
/** Compact mill-cut star for the header plate — wide blades so it holds at 28px. */
var MARK_WEDGES = Array.from({ length: 12 }, (_, i) => {
	const a = i * 30;
	const long = i % 2 === 0;
	const half = long ? 11.2 : 8.4;
	const inner = 20;
	const outer = long ? 96 : 74;
	const [x1, y1] = polar(inner, a);
	const [x2, y2] = polar(outer, a - half);
	const [x3, y3] = polar(outer, a + half);
	return `M${x1} ${y1}L${x2} ${y2}L${x3} ${y3}Z`;
});
/** 12 mill-cut wedges. Even indices are the long industrial blades. */
var FIELD_WEDGES = Array.from({ length: 12 }, (_, i) => {
	const a = i * 30;
	const long = i % 2 === 0;
	const half = long ? 6.4 : 4.8;
	const inner = 22;
	const outer = long ? 92 : 70;
	const [x1, y1] = polar(inner, a);
	const [x2, y2] = polar(outer, a - half);
	const [x3, y3] = polar(outer, a + half);
	return `M${x1} ${y1}L${x2} ${y2}L${x3} ${y3}Z`;
});
var TICKS = Array.from({ length: 72 }, (_, i) => {
	const a = i * 5;
	const major = i % 6 === 0;
	const mid = i % 3 === 0;
	const [x1, y1] = polar(major ? 94 : mid ? 96.2 : 97.4, a);
	const [x2, y2] = polar(99.4, a);
	return {
		x1,
		y1,
		x2,
		y2,
		w: major ? 1.1 : .55
	};
});
var CROSS = [[...polar(8, 0), ...polar(88, 0)], [...polar(8, 90), ...polar(88, 90)]];
function Sunburst({ className, variant = "mark" }) {
	const field = variant === "field";
	const wedges = field ? FIELD_WEDGES : MARK_WEDGES;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 200",
		className: cn("text-signal", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: "currentColor",
				children: wedges.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d }, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "currentColor",
				strokeLinecap: "square",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "16.5",
						strokeWidth: field ? 1.4 : 3.2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "10",
						strokeWidth: field ? 1.1 : 2.6
					}),
					field ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "28",
						strokeWidth: "0.7"
					}) : null,
					field ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "99.4",
						strokeWidth: "0.9"
					}) : null,
					field ? TICKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: t.x1,
						y1: t.y1,
						x2: t.x2,
						y2: t.y2,
						strokeWidth: t.w
					}, `${t.x1}-${t.y1}`)) : null,
					field ? CROSS.map(([x1, y1, x2, y2]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1,
						y1,
						x2,
						y2,
						strokeWidth: "0.55"
					}, `${x1}-${y1}`)) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: CX,
				cy: CY,
				r: field ? 3.6 : 5,
				fill: "currentColor"
			})
		]
	});
}
function SunburstField({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("sunburst-plate", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunburst, {
			variant: "field",
			className: "sunburst-orbit size-full"
		})
	});
}
var CATS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "security",
		label: "Security"
	},
	{
		id: "creative",
		label: "Creative"
	},
	{
		id: "marketing",
		label: "Marketing"
	},
	{
		id: "protocol",
		label: "Protocol"
	}
];
function HydraBay({ slots, intent, packet, running, serial, ask, listings, sold, locked, fleet, focus, onIntent, onSeat, onClear, onRun, onAsk, onList, onClaim, onLoadSet, onSend, onLock, onUnlock, onShip, onHalt, onReleaseHold, pirr, cube, onPirr, onCube }) {
	const filled = slots.filter(Boolean).length;
	const seated = new Set(slots.filter(Boolean));
	const [cat, setCat] = (0, import_react.useState)("all");
	const [pane, setPane] = (0, import_react.useState)(focus ?? "bay");
	const pool = SKILLS.filter((s) => cat === "all" || s.category === cat);
	const quote = quoteSale(ask);
	const levyPct = Math.round(HOUSE_LEVY * 100);
	const seatedPreload = preloadFor(slots);
	const packetPreload = packet ? preloadFor(packet.seats.map((s) => s.skill.id)) : void 0;
	(0, import_react.useEffect)(() => {
		if (focus) setPane(focus);
	}, [focus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1 border-b border-line px-5 py-2 sm:px-6",
			children: [
				["bay", "Bay"],
				["yard", "Yard"],
				["fleet", "Fleet"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setPane(id),
				className: cn("px-3 py-2 text-2xs uppercase tracking-[0.16em]", pane === id ? "bg-signal text-bg" : "text-mute hover:text-paper"),
				children: [
					label,
					id === "yard" && listings.length ? ` ${listings.length}` : "",
					id === "fleet" && fleet.hold.length ? ` ${fleet.hold.length}` : ""
				]
			}, id))
		}), pane === "yard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yard, {
			listings,
			sold,
			onClaim
		}) : pane === "fleet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetDeck, {
			fleet,
			onHalt,
			onShip,
			onReleaseHold,
			canShip: locked && filled === 3
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col gap-5 lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-w-0 flex-1 flex-col gap-4 overflow-hidden px-5 py-5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunburstField, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-kicker uppercase tracking-[0.22em] text-signal",
						children: ["B1 · Mini Hydra OS · chassis Z-", String(serial).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl leading-[0.9] uppercase tracking-wide sm:text-display",
								children: ["Build your", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-signal",
									children: "Hydra OS"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 max-w-prose text-sm text-mute",
								children: [
									"Three heads. One loop. Seat any mix from security, creative, or marketing. Right combo — ambassador, influencer, cyber, canon writer, lore designer — runs itself. List it and the chassis leaves. You assemble the next one. Aegis takes ",
									levyPct,
									"%."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 border border-line p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniHydraFigure, {
								slots,
								running,
								serial,
								size: "bay"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: PRELOADS.map((p) => {
							const active = sameSet(slots, p.skillIds);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									if (locked) return;
									onLoadSet([...p.skillIds], p.intent);
								},
								className: cn("px-3 py-2 text-2xs uppercase tracking-[0.16em]", active ? "bg-signal text-bg" : "text-mute hover:text-paper"),
								children: p.name
							}, p.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetSpec, {
						preload: seatedPreload,
						onLoad: (p) => onLoadSet([...p.skillIds], p.intent)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-3",
						children: PSYCHE.map((p, i) => {
							const skill = SKILLS.find((s) => s.id === slots[i]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xs uppercase tracking-[0.18em] text-signal",
											children: p.name
										}), skill && !locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "text-mute hover:text-paper",
											onClick: () => onClear(i),
											"aria-label": `Clear ${p.name}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-3.5",
												strokeWidth: 1.6
											})
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-2xs text-mute",
										children: p.job
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs uppercase tracking-[0.12em]",
										children: skill ? `${skill.code} ${skill.name}` : "Vacant"
									})
								]
							}, p.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-2xs uppercase tracking-[0.18em] text-mute",
						children: ["Intent", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							readOnly: locked,
							value: intent,
							onChange: (e) => onIntent(e.target.value),
							placeholder: "ambassador circuit for an original product",
							className: "mt-2 h-11 w-full border border-line bg-elevated px-3 text-sm text-paper outline-none placeholder:text-mute focus:border-signal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onRun,
						disabled: running || filled !== 3 || !intent.trim(),
						className: "w-fit",
						children: "Run Mini Hydra Zeta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xs uppercase tracking-[0.18em] text-mute",
								children: locked ? "Build locked · ship to fleet" : "Lock this build"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-mute",
								children: [
									"A locked three-head stencil ships to the fleet ship. The press then stamps copies on its own. Hold max ",
									12,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "line",
									className: "w-fit",
									onClick: onUnlock,
									children: "Unlock"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "line",
									className: "w-fit",
									disabled: filled !== 3,
									onClick: onLock,
									children: "Lock build"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "w-fit",
									disabled: !locked || filled !== 3,
									onClick: () => {
										onShip();
										setPane("fleet");
									},
									children: "Ship to fleet"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xs uppercase tracking-[0.18em] text-mute",
								children: [
									"List this chassis · Aegis levy ",
									levyPct,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-3 block text-2xs uppercase tracking-[0.16em] text-mute",
								children: ["Ask ₡", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 0,
									value: ask,
									onChange: (e) => onAsk(Number(e.target.value)),
									className: "mt-2 h-11 w-full border border-line bg-elevated px-3 font-mono text-sm tabular-nums text-paper outline-none focus:border-signal"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-2xs tabular-nums text-mute",
								children: [
									"Levy ₡",
									quote.levy,
									" · you take ₡",
									quote.ownerTake
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xs text-mute",
								children: "Sold hydras leave the dock. Empty chassis next. Skills stay on their floors."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								className: "mt-3 w-fit",
								disabled: filled !== 3 || quote.ask <= 0,
								onClick: () => {
									onList();
									setPane("yard");
								},
								children: "List Mini Hydra"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								className: "mt-3 w-fit",
								onClick: onSend,
								children: "Send Meta OS package"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 overflow-auto border-t border-line px-5 py-5 lg:border-l lg:border-t-0 sm:px-6",
				children: [
					seatedPreload ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetSpecBody, { preload: seatedPreload }) : null,
					seated.has("c-pirr") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PirrDesk, {
							value: pirr,
							onChange: onPirr
						})
					}) : null,
					seated.has("c-cube") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NineCube, {
							value: cube,
							intent,
							onChange: onCube
						})
					}) : null,
					packet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xs uppercase tracking-[0.2em] text-mute",
								children: ["Zeta packet · ", packet.loop.name]
							}),
							packetPreload ? null : packet.loop.beats.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border border-line px-3 py-2 text-xs uppercase tracking-[0.12em]",
								children: b
							}, b)),
							packet.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xs uppercase tracking-[0.14em] text-signal",
									children: line.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-mute",
									children: line.body
								})]
							}, line.psyche)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed",
								children: packet.combined
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-2xs tabular-nums text-signal",
								children: packet.receipt
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs text-mute",
						children: "Seat three skills. Name an intent. Run. Or load a specced set."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-1",
						children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCat(c.id),
							className: cn("px-3 py-2 text-2xs uppercase tracking-[0.16em]", cat === c.id ? "bg-signal text-bg" : "text-mute hover:text-paper"),
							children: c.label
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: pool.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillPick, {
							skill: s,
							seated: seated.has(s.id),
							full: filled >= 3 || locked,
							onSeat
						}, s.id))
					})
				]
			})]
		})]
	});
}
function SetSpec({ preload, onLoad }) {
	if (!preload) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-line px-3 py-2 text-2xs uppercase tracking-[0.18em] text-mute",
			children: "Set specs"
		}), PRELOADS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onLoad(p),
			className: "flex w-full flex-col gap-1 border-b border-line px-3 py-3 text-left last:border-b-0 hover:bg-signal-dim",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs uppercase tracking-[0.16em] text-signal",
					children: p.spec.lane
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg uppercase leading-none",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-mute",
					children: p.spec.for
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-2xs tabular-nums text-mute",
					children: p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")
				})
			]
		}, p.id))]
	});
	const { spec } = preload;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-signal p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-2xs uppercase tracking-[0.18em] text-signal",
				children: ["Spec · ", spec.lane]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-xl uppercase leading-none",
				children: preload.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-mute",
				children: spec.for
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-mono text-2xs tabular-nums text-mute",
				children: preload.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xs text-mute",
				children: spec.cadence
			})
		]
	});
}
function SetSpecBody({ preload }) {
	const { spec } = preload;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 border border-line p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-2xs uppercase tracking-[0.18em] text-signal",
				children: ["Detailed spec · ", preload.name]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-2xs uppercase tracking-[0.16em] text-mute",
				children: "Heads"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: PSYCHE.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-xs leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "uppercase tracking-[0.12em] text-signal",
							children: [p.name, "."]
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mute",
							children: spec.duties[i]
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecLists, { spec })
		]
	});
}
function SpecLists({ spec }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid gap-3 sm:grid-cols-3",
		children: [
			["Outputs", spec.outputs],
			["Gates", spec.gates],
			["Will not", spec.forbids]
		].map(([label, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xs uppercase tracking-[0.16em] text-mute",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-1",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-2xs leading-relaxed text-paper",
				children: row
			}, row))
		})] }, label))
	});
}
function FleetDeck({ fleet, onHalt, onShip, onReleaseHold, canShip }) {
	const lock = fleet.lock;
	const codes = lock?.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ");
	const full = fleet.hold.length >= 12;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 gap-6 overflow-auto px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-[0.22em] text-signal",
				children: "Fleet ship · press"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-display text-4xl leading-[0.9] uppercase tracking-wide sm:text-display",
				children: ["Lock. Ship.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-signal",
					children: "Mass produce."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-prose text-sm text-mute",
				children: "A locked three-head build ships here. The press stamps that stencil on its own until you halt or the hold fills."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/fleet.jpg",
				alt: "Fleet dropship",
				className: cn("mt-5 w-full object-contain", "max-h-80", fleet.running && "hydra-run")
			}),
			lock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 border border-signal p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-2xs uppercase tracking-[0.18em] text-signal",
						children: [
							fleet.running ? "Press live" : "Stencil docked",
							" ·",
							" ",
							LOOP_INDEX[lock.loopId]?.name ?? lock.loopId
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs tabular-nums",
						children: codes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-mute",
						children: lock.intent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-2xs tabular-nums text-mute",
						children: [
							"Stamped ",
							fleet.produced,
							" · hold ",
							fleet.hold.length,
							"/",
							12,
							full ? " · hold full" : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [fleet.running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							onClick: onHalt,
							children: "Halt press"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onShip,
							disabled: full,
							children: "Start press"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							onClick: onReleaseHold,
							disabled: fleet.hold.length === 0,
							children: "Release hold to yard"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-xs text-mute",
				children: ["No stencil. Lock a three-head build on the bay, then ship. ", canShip ? "Lock is ready." : ""]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-2xs uppercase tracking-[0.2em] text-mute",
			children: "Hold"
		}), fleet.hold.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-mute",
			children: "Empty. The press fills this when live."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: fleet.hold.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xs uppercase tracking-[0.16em] text-signal",
					children: [
						"Z-",
						String(c.serial).padStart(2, "0"),
						" · ",
						LOOP_INDEX[c.loopId]?.name ?? c.loopId
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-2xs tabular-nums text-mute",
					children: c.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")
				})]
			}, c.id))
		})] })]
	});
}
function Yard({ listings, sold, onClaim }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-2xs uppercase tracking-[0.2em] text-mute",
			children: "On the yard"
		}), listings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-mute",
			children: "No chassis listed. Load three heads, then list."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-2xs uppercase tracking-[0.16em] text-signal",
						children: [
							"Z-",
							String(l.serial).padStart(2, "0"),
							" · ",
							LOOP_INDEX[l.loopId]?.name ?? l.loopId
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-xs tabular-nums",
						children: [
							"Ask ₡",
							l.ask,
							" · levy ₡",
							l.levy,
							" · take ₡",
							l.ownerTake
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xs text-mute",
						children: l.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-fit",
						size: "sm",
						onClick: () => onClaim(l.id),
						children: "Buyer claims it"
					})
				]
			}, l.id))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-2xs uppercase tracking-[0.2em] text-mute",
			children: "Sold · levy kept"
		}), sold.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-mute",
			children: "Nothing claimed yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: sold.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xs uppercase tracking-[0.16em] text-signal",
					children: [
						"Z-",
						String(l.serial).padStart(2, "0"),
						" sold"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-xs tabular-nums text-mute",
					children: [
						"₡",
						l.ask,
						" · Aegis ₡",
						l.levy,
						" · owner ₡",
						l.ownerTake
					]
				})]
			}, l.id))
		})] })]
	});
}
function SkillPick({ skill, seated, full, onSeat }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: seated || full,
		onClick: () => onSeat(skill.id),
		className: cn("flex gap-3 border border-line p-3 text-left", seated ? "border-signal bg-signal-dim" : "hover:border-signal", full && !seated && "opacity-40"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 shrink-0 items-center justify-center border border-signal text-signal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutyIcon, { name: skill.icon })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-2xs uppercase tracking-[0.16em] text-signal",
				children: skill.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs uppercase tracking-[0.12em]",
				children: skill.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-2xs text-mute",
				children: skill.category
			})
		] })]
	});
}
function Pipeline({ steps, pulse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-wrap items-center gap-2",
		children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("border border-line px-3 py-2 text-2xs uppercase tracking-[0.16em] text-mute", pulse === i && "border-signal bg-signal text-bg"),
				children: step
			}), i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "size-3.5 text-signal",
				strokeWidth: 1.5
			}) : null]
		}, step))
	});
}
var STORE = "aegis-district-v5";
function Home() {
	const [view, setView] = (0, import_react.useState)("city");
	const [buildingId, setBuildingId] = (0, import_react.useState)("lotus");
	const [skillId, setSkillId] = (0, import_react.useState)(null);
	const [slots, setSlots] = (0, import_react.useState)([
		null,
		null,
		null
	]);
	const [intent, setIntent] = (0, import_react.useState)("ambassador circuit for an original product");
	const [packet, setPacket] = (0, import_react.useState)(null);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [serial, setSerial] = (0, import_react.useState)(1);
	const [ask, setAsk] = (0, import_react.useState)(800);
	const [listings, setListings] = (0, import_react.useState)([]);
	const [sold, setSold] = (0, import_react.useState)([]);
	const [locked, setLocked] = (0, import_react.useState)(false);
	const [fleet, setFleet] = (0, import_react.useState)(EMPTY_FLEET);
	const [pirr, setPirr] = (0, import_react.useState)(EMPTY_PIRR);
	const [cube, setCube] = (0, import_react.useState)(EMPTY_CUBE);
	const [hydraFocus, setHydraFocus] = (0, import_react.useState)("bay");
	const [log, setLog] = (0, import_react.useState)(["Aegis online. Four lots live. Mini Hydra empty. Fleet dark."]);
	const serialRef = (0, import_react.useRef)(1);
	const building = BUILDING_INDEX[buildingId];
	const floors = skillsFor(buildingId);
	const skill = skillId ? SKILL_INDEX[skillId] : void 0;
	(0, import_react.useEffect)(() => {
		serialRef.current = serial;
	}, [serial]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORE);
			if (!raw) return;
			const s = JSON.parse(raw);
			if (s.view) setView(s.view);
			if (s.buildingId && BUILDING_INDEX[s.buildingId]) setBuildingId(s.buildingId);
			if (s.skillId) setSkillId(s.skillId);
			if (Array.isArray(s.slots) && s.slots.length === 3) setSlots(s.slots);
			if (s.intent) setIntent(s.intent);
			if (typeof s.serial === "number") setSerial(s.serial);
			if (typeof s.ask === "number") setAsk(s.ask);
			if (Array.isArray(s.listings)) setListings(s.listings);
			if (Array.isArray(s.sold)) setSold(s.sold);
			if (typeof s.locked === "boolean") setLocked(s.locked);
			if (s.fleet) setFleet({
				...EMPTY_FLEET,
				...s.fleet,
				running: false
			});
			if (s.pirr) setPirr({
				...EMPTY_PIRR,
				...s.pirr
			});
			if (s.cube) setCube({
				...EMPTY_CUBE,
				...s.cube
			});
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			const s = {
				view,
				buildingId,
				skillId,
				slots,
				intent,
				serial,
				ask,
				listings,
				sold,
				locked,
				fleet: {
					...fleet,
					running: false
				},
				pirr,
				cube
			};
			localStorage.setItem(STORE, JSON.stringify(s));
		} catch {}
	}, [
		view,
		buildingId,
		skillId,
		slots,
		intent,
		serial,
		ask,
		listings,
		sold,
		locked,
		fleet,
		pirr,
		cube
	]);
	function note(line) {
		setLog((prev) => [line, ...prev].slice(0, 8));
	}
	function openBuilding(id) {
		setBuildingId(id);
		setSkillId(null);
		setView("building");
		const b = BUILDING_INDEX[id];
		note(`Aegis routed you to ${b.lot} ${b.name}. Jarvis ${b.jarvis} is on the floor.`);
	}
	function selectSkill(next) {
		setSkillId(next.id);
		note(`${building.jarvis}: ${next.code} ${next.name} bound. Program ${next.program} does not leave this floor.`);
	}
	function seatSkill(id) {
		if (locked) {
			note("Build is locked. Unlock to reseat.");
			return;
		}
		setSlots((prev) => {
			const i = prev.findIndex((x) => x == null);
			if (i < 0) return prev;
			if (prev.includes(id)) return prev;
			const next = [...prev];
			next[i] = id;
			const ids = next.filter(Boolean);
			if (ids.length === 3) setAsk(appraise(ids));
			return next;
		});
		const s = SKILL_INDEX[id];
		note(`Hydra seated ${s.code} ${s.name}. ${3 - slots.filter(Boolean).length - 1} open.`);
	}
	function clearSeat(index) {
		if (locked) {
			note("Build is locked. Unlock to reseat.");
			return;
		}
		setSlots((prev) => {
			const next = [...prev];
			next[index] = null;
			return next;
		});
		note("Hydra seat cleared.");
	}
	function runZeta() {
		if (running) return;
		const pkt = compileZeta(intent.trim(), slots.filter(Boolean), {
			pirr,
			cube
		});
		if (!pkt) {
			note("Image-9 hold. Seat three skills and name an intent.");
			return;
		}
		setRunning(true);
		window.setTimeout(() => {
			setPacket(pkt);
			setRunning(false);
			note(`Zeta complete. ${pkt.loop.name}. ${pkt.receipt}`);
		}, 700);
	}
	function loadSet(ids, nextIntent) {
		if (locked) {
			note("Build is locked. Unlock to load a set.");
			return;
		}
		const next = ids.slice(0, 3);
		setSlots(next);
		setAsk(appraise(next));
		setPacket(null);
		if (nextIntent) setIntent(nextIntent);
		setView("hydra");
		note(`Set seated. ${matchLoop(next).name} armed. Run or list.`);
	}
	function listHydra() {
		const ids = slots.filter(Boolean);
		if (ids.length !== 3) {
			note("Cannot list an empty chassis. Seat three heads.");
			return;
		}
		const q = quoteSale(ask);
		if (q.ask <= 0) return;
		const loop = matchLoop(ids);
		const listing = {
			id: `z-${serial}-${Date.now()}`,
			serial,
			skillIds: ids,
			loopId: loop.id,
			ask: q.ask,
			levy: q.levy,
			ownerTake: q.ownerTake,
			listedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setListings((prev) => [listing, ...prev]);
		setSlots([
			null,
			null,
			null
		]);
		setPacket(null);
		setSerial((n) => n + 1);
		setAsk(800);
		note(`Z-${String(serial).padStart(2, "0")} listed at ₡${q.ask}. Aegis levy ₡${q.levy} held. Empty chassis docked. Assemble the next one.`);
	}
	function claimHydra(id) {
		const listing = listings.find((l) => l.id === id);
		if (!listing) return;
		setListings((prev) => prev.filter((l) => l.id !== id));
		setSold((prev) => [{
			...listing,
			soldAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev]);
		note(`Buyer claimed Z-${String(listing.serial).padStart(2, "0")}. Aegis kept ₡${listing.levy}. Owner take ₡${listing.ownerTake}.`);
	}
	function sendPackage() {
		const hydra = preloadFor(slots);
		const text = compileDistrictPackage({
			hydra,
			serial,
			intent: intent.trim() || void 0
		});
		const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "DISTRICT-META-OS-PROTOCOL.txt";
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
		note(hydra ? `Clerk dispatched Meta OS package with ${hydra.name} seated. HUD stripped.` : "Clerk dispatched Meta OS package. Protocol + three sets. HUD stripped.");
	}
	function lockBuild() {
		const ids = slots.filter(Boolean);
		if (ids.length !== 3) {
			note("Seat three heads before lock.");
			return;
		}
		setLocked(true);
		note(`Build locked. ${matchLoop(ids).name}. Ship to fleet to mass produce.`);
	}
	function unlockBuild() {
		setLocked(false);
		note("Build unlocked. Fleet stencil stays if already shipped.");
	}
	function shipToFleet() {
		if (fleet.lock && !locked) {
			if (fleet.hold.length >= 12) {
				note("Fleet hold full. Release to yard first.");
				return;
			}
			setFleet((f) => ({
				...f,
				running: true
			}));
			setHydraFocus("fleet");
			note("Fleet press live. Stamping the docked stencil.");
			return;
		}
		const lock = makeLock(slots.filter(Boolean), intent.trim());
		if (!lock || !locked) {
			note("Lock a three-head build first, then ship.");
			return;
		}
		setFleet((f) => ({
			lock,
			running: true,
			produced: f.produced,
			hold: f.hold
		}));
		setHydraFocus("fleet");
		note(`Stencil ${lock.loopId} shipped to fleet ship. Press live. Autonomous stamp.`);
	}
	function haltPress() {
		setFleet((f) => ({
			...f,
			running: false
		}));
		note("Fleet press halted.");
	}
	function releaseHold() {
		if (fleet.hold.length === 0) return;
		const listed = fleet.hold.map((c) => {
			const q = quoteSale(appraise(c.skillIds));
			return {
				id: `z-${c.serial}-${c.id}`,
				serial: c.serial,
				skillIds: c.skillIds,
				loopId: c.loopId,
				ask: q.ask,
				levy: q.levy,
				ownerTake: q.ownerTake,
				listedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
		});
		const n = listed.length;
		setListings((prev) => [...listed, ...prev]);
		setFleet((f) => ({
			...f,
			hold: []
		}));
		note(`Released ${n} fleet clones to the yard. Levy applies on claim.`);
	}
	(0, import_react.useEffect)(() => {
		if (!fleet.running || !fleet.lock) return;
		const t = window.setInterval(() => {
			setFleet((f) => {
				if (!f.lock || !f.running) return f;
				if (f.hold.length >= 12) return {
					...f,
					running: false
				};
				const serialNow = serialRef.current;
				serialRef.current = serialNow + 1;
				setSerial(serialRef.current);
				const clone = {
					id: `c-${serialNow}-${Date.now()}`,
					serial: serialNow,
					skillIds: f.lock.skillIds,
					loopId: f.lock.loopId,
					stampedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				const hold = [...f.hold, clone];
				const full = hold.length >= 12;
				return {
					...f,
					hold,
					produced: f.produced + 1,
					running: !full
				};
			});
		}, FLEET_BEAT_MS);
		return () => window.clearInterval(t);
	}, [fleet.running, fleet.lock?.id]);
	const seatedCount = slots.filter(Boolean).length;
	const status = (0, import_react.useMemo)(() => {
		return `AEGIS // ${view === "city" ? "CITADEL" : view === "hydra" ? "HYDRA" : building.lot} // HEADS ${seatedCount}/3 // ${running ? "LOOP" : "READY"}`;
	}, [
		view,
		building.lot,
		seatedCount,
		running
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col bg-bg text-paper lg:h-dvh lg:overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 flex-wrap items-center gap-2 border-b border-line px-4 py-3 sm:gap-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center border border-signal text-signal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunburst, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg uppercase leading-none tracking-[0.14em]",
							children: "Aegis District"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-2xs uppercase tracking-[0.18em] text-mute",
							children: status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto flex shrink-0 gap-1",
						children: [
							["city", "District"],
							["building", "Lot"],
							["hydra", "Hydra"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setView(id);
								if (id === "hydra") {
									setHydraFocus("bay");
									note("Mini Hydra bay open. Max three. You authorize.");
								}
								if (id === "city") note("Citadel view. Four lots. Aegis watching.");
							},
							className: cn("px-3 py-2 text-2xs uppercase tracking-[0.16em]", view === id ? "bg-signal text-bg" : "text-mute hover:text-paper"),
							children: label
						}, id))
					})
				]
			}),
			view === "building" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-1 overflow-x-auto border-b border-line px-3 py-2 lg:hidden",
				"aria-label": "Lots",
				children: BUILDINGS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openBuilding(b.id),
					className: cn("shrink-0 px-3 py-2 text-2xs uppercase tracking-[0.16em]", b.id === buildingId ? "bg-signal text-bg" : "text-mute"),
					children: b.lot
				}, b.id))
			}) : null,
			view === "city" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityView, {
				onOpen: openBuilding,
				onHydra: () => {
					setHydraFocus("bay");
					setView("hydra");
				},
				onFleet: () => {
					setHydraFocus("fleet");
					setView("hydra");
				},
				log,
				slots,
				serial,
				fleet
			}) : null,
			view === "building" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingView, {
				buildingId,
				skill,
				floors,
				log,
				onOpen: openBuilding,
				onSelect: selectSkill,
				onLoad: (id) => {
					seatSkill(id);
					setView("hydra");
					note(`Borrowed ${SKILL_INDEX[id].code} into Mini Hydra.`);
				},
				onSend: sendPackage,
				pirr,
				cube,
				intent,
				onPirr: setPirr,
				onCube: setCube
			}) : null,
			view === "hydra" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydraBay, {
				slots,
				intent,
				packet,
				running,
				serial,
				ask,
				listings,
				sold,
				locked,
				fleet,
				focus: hydraFocus,
				onIntent: setIntent,
				onSeat: seatSkill,
				onClear: clearSeat,
				onRun: runZeta,
				onAsk: setAsk,
				onList: listHydra,
				onClaim: claimHydra,
				onLoadSet: loadSet,
				onSend: sendPackage,
				onLock: lockBuild,
				onUnlock: unlockBuild,
				onShip: shipToFleet,
				onHalt: haltPress,
				onReleaseHold: releaseHold,
				pirr,
				cube,
				onPirr: setPirr,
				onCube: setCube
			}) : null,
			view !== "hydra" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "flex shrink-0 items-center border-t border-line px-5 py-3 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs uppercase tracking-[0.18em] text-mute",
					children: "Public lots do not receive this HUD · Jarvises stay on their lots"
				})
			}) : null
		]
	});
}
function CityView({ onOpen, onHydra, onFleet, log, slots, serial, fleet }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.3fr)_20rem] lg:overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-0 flex-col overflow-auto px-5 py-6 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunburstField, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-[0.22em] text-signal",
					children: "Citadel · Aegis live"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 font-display text-display leading-[0.9] uppercase tracking-wide",
					children: ["Four houses.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-signal",
						children: "Two-floor protocol."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-prose text-sm text-mute",
					children: "Growth markets. Lotus shields. Persona locks the face. Canon holds the story. Meta OS is two floors — protocol and dispatch. Send the Hydra sets as one package."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid max-w-2xl gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onHydra,
						className: "flex items-center gap-4 border border-line p-3 text-left hover:border-signal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniHydraFigure, {
							slots,
							serial,
							size: "city"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-2xs uppercase tracking-[0.18em] text-signal",
								children: "B1 · Mini Hydra"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-lg uppercase leading-none",
								children: "Open bay"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-2xs text-mute",
								children: "Quarter-scale. Lock. Ship. Rebuild."
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onFleet,
						className: cn("flex items-center gap-4 border p-3 text-left", fleet.running || fleet.lock ? "border-signal" : "border-line hover:border-signal"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/art/fleet.jpg",
							alt: "Fleet dropship",
							className: cn("h-28 w-40 shrink-0 object-contain", fleet.running && "hydra-run")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-2xs uppercase tracking-[0.18em] text-signal",
								children: ["Fleet ship · ", fleet.running ? "press live" : fleet.lock ? "stencil docked" : "dark"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-lg uppercase leading-none",
								children: "Open fleet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 block text-2xs text-mute",
								children: [
									"Hold ",
									fleet.hold.length,
									"/",
									12,
									" · stamped ",
									fleet.produced
								]
							})
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: BUILDINGS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(b.id),
						className: "border border-line p-4 text-left hover:border-signal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xs uppercase tracking-[0.18em] text-signal",
								children: [
									b.lot,
									" · ",
									b.jarvis
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl uppercase leading-none",
								children: b.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-mute",
								children: b.jarvisLine
							})
						]
					}, b.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/district.jpg",
					alt: "Phosphor wireframe four-house district",
					className: "mt-6 max-h-[min(22rem,40dvh)] w-full object-contain"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AegisRail, { log })]
	});
}
function BuildingView({ buildingId, skill, floors, log, onOpen, onSelect, onLoad, onSend, pirr, cube, intent, onPirr, onCube }) {
	const building = BUILDING_INDEX[buildingId];
	const shown = skill ?? floors[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 lg:grid-cols-[9.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)_18rem] lg:overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden border-r border-line lg:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-2 pt-5 text-2xs uppercase tracking-[0.2em] text-mute",
						children: "Lots"
					}),
					BUILDINGS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(b.id),
						className: cn("flex w-full px-4 py-3 text-left text-xs uppercase tracking-[0.14em]", b.id === buildingId ? "bg-signal-dim text-signal" : "text-mute hover:text-paper"),
						children: [
							b.lot,
							" ",
							b.name.split(" ")[0]
						]
					}, b.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-2 pt-5 text-2xs uppercase tracking-[0.2em] text-mute",
						children: "Floors"
					}),
					floors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onSelect(f),
						className: cn("flex w-full px-4 py-3 text-left text-xs uppercase tracking-[0.12em]", skill?.id === f.id ? "bg-signal-dim text-signal" : "text-mute hover:text-paper"),
						children: f.code
					}, f.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-0 flex-col justify-between gap-5 overflow-hidden border-b border-line px-5 py-6 sm:px-8 lg:overflow-auto lg:border-b-0 lg:border-r",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunburstField, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-kicker uppercase tracking-[0.22em] text-signal",
							children: building.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-display leading-[0.9] uppercase tracking-wide",
							children: [skill ? skill.name : building.line, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-signal",
								children: skill ? skill.program : building.accent
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-prose text-sm leading-relaxed text-mute",
							children: skill ? skill.blurb : building.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs uppercase tracking-[0.14em] text-signal",
							children: [
								"Jarvis ",
								building.jarvis,
								" — ",
								building.jarvisLine
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, {
								steps: shown.pipeline,
								pulse: null
							}) : null,
							skill ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-fit",
								onClick: () => onLoad(skill.id),
								children: "Load into Mini Hydra"
							}) : null,
							buildingId === "meta" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								className: "w-fit",
								onClick: onSend,
								children: "Send Meta OS package"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								className: "w-fit",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/DISTRICT-WHOP-LISTINGS.txt",
									download: true,
									children: "Send Whop listings"
								})
							})] }) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative flex min-h-[22rem] items-center justify-center px-2 py-4 lg:min-h-0 lg:overflow-hidden lg:border-r lg:border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingPlate, {
					building,
					highlight: skill?.id ?? "none",
					onSelect
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-col overflow-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "px-5 py-5 sm:px-6",
					children: skill?.id === "c-pirr" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PirrDesk, {
						value: pirr,
						onChange: onPirr
					}) : skill?.id === "c-cube" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NineCube, {
						value: cube,
						intent,
						onChange: onCube
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-2xs uppercase tracking-[0.2em] text-mute",
						children: skill ? "Duties" : "Floors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: (skill ? skill.duties : floors.map((f) => ({
							title: f.name,
							detail: f.blurb,
							icon: f.icon
						}))).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 border border-line p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 shrink-0 items-center justify-center border border-signal text-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutyIcon, { name: d.icon })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-[0.14em]",
								children: d.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-mute",
								children: d.detail
							})] })]
						}, d.title))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AegisRail, {
					log,
					compact: true
				})]
			})
		]
	});
}
function AegisRail({ log, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("border-line px-5 py-5 sm:px-6", compact ? "border-t" : "border-t lg:border-l lg:border-t-0"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-2xs uppercase tracking-[0.2em] text-mute",
			children: "Aegis · assistant"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: log.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-xs leading-relaxed text-paper",
				children: line
			}, `${i}-${line.slice(0, 12)}`))
		})]
	});
}
//#endregion
export { Home as component };

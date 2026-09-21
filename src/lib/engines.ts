export type PirrKey = "persona" | "identity" | "relationship" | "rivalry";

export type PirrState = Record<PirrKey, string>;

export const EMPTY_PIRR: PirrState = {
  persona: "",
  identity: "",
  relationship: "",
  rivalry: "",
};

export const PIRR_CELLS: { id: PirrKey; code: string; label: string; hint: string }[] = [
  { id: "persona", code: "P", label: "Persona", hint: "Locked adult face" },
  { id: "identity", code: "I", label: "Identity", hint: "Voice and what they may say" },
  { id: "relationship", code: "R1", label: "Relationship", hint: "Who sits with them" },
  { id: "rivalry", code: "R2", label: "Rivalry", hint: "Who pulls against" },
];

export function pirrFilled(p: PirrState) {
  return PIRR_CELLS.every((c) => p[c.id].trim().length > 0);
}

export function vidyLine(p: PirrState): string {
  const face = p.persona.trim();
  const id = p.identity.trim();
  const rel = p.relationship.trim();
  const riv = p.rivalry.trim();
  const n = [face, id, rel, riv].filter(Boolean).length;
  if (n === 0) return "Vidy idle. Four cells vacant. Lock a face before I walk.";
  if (n < 4)
    return `Vidy holding ${n}/4. ${face || "No face"} · ${id || "no voice"} · ${rel || "no bond"} · ${riv || "no heat"}.`;
  return `Vidy online. ${face} locked. Voice: ${id}. ${rel} at the table. ${riv} on the heat line. Originals only.`;
}

export type AxisCell = { id: number; name: string; line: string };

export const STORIES: AxisCell[] = [
  { id: 1, name: "Return", line: "They come back to a place that kept the score." },
  { id: 2, name: "Breach", line: "A sealed floor opens. Something walks in." },
  { id: 3, name: "Vow", line: "A word is spoken that cannot be unsaid." },
  { id: 4, name: "Exile", line: "The gate shuts behind them. No HUD on the road." },
  { id: 5, name: "Ascent", line: "They climb a house that was not theirs." },
  { id: 6, name: "Fracture", line: "One law splits. Two truths claim the page." },
  { id: 7, name: "Harvest", line: "What was planted comes due." },
  { id: 8, name: "Witness", line: "Someone saw it. The record will not sleep." },
  { id: 9, name: "Forge", line: "They make the thing that will outlast them." },
];

export const SCENARIOS: AxisCell[] = [
  { id: 1, name: "Gate", line: "A threshold, one keeper, one ask." },
  { id: 2, name: "Debt", line: "A ledger with a name already written." },
  { id: 3, name: "Mask", line: "A face that is not the lock." },
  { id: 4, name: "Trial", line: "Proof demanded in public." },
  { id: 5, name: "Split", line: "Two allies, one floor, no shared brief." },
  { id: 6, name: "Siege", line: "The lot is surrounded. Time is the weapon." },
  { id: 7, name: "Quiet", line: "No one speaks. The page still moves." },
  { id: 8, name: "Flood", line: "Too much signal. The desk cannot hold." },
  { id: 9, name: "Ledger", line: "Every choice is already priced." },
];

export const RESOLUTIONS: AxisCell[] = [
  { id: 1, name: "Bind", line: "The vow holds. The floor stays shut." },
  { id: 2, name: "Cut", line: "The edge is named. Something is let go." },
  { id: 3, name: "Mercy", line: "The price is waived. The record remains." },
  { id: 4, name: "Price", line: "They pay. The house files the receipt." },
  { id: 5, name: "Reveal", line: "The mask drops. Canon updates." },
  { id: 6, name: "Seal", line: "The breach closes. Watch stays on." },
  { id: 7, name: "Scatter", line: "The cast leaves. One page survives." },
  { id: 8, name: "Hold", line: "No win. The line is held until dawn." },
  { id: 9, name: "Yield", line: "They give the floor. The law does not." },
];

export type CubePick = { story: number; scenario: number; resolution: number };

export const EMPTY_CUBE: CubePick = { story: 0, scenario: 0, resolution: 0 };

export function cubeAddress(c: CubePick): string | null {
  if (!c.story || !c.scenario || !c.resolution) return null;
  return `${c.story}·${c.scenario}·${c.resolution}`;
}

export function cubeIndex(c: CubePick): number | null {
  if (!c.story || !c.scenario || !c.resolution) return null;
  return (c.story - 1) * 81 + (c.scenario - 1) * 9 + c.resolution;
}

export function compileCube(c: CubePick, intent: string): string | null {
  const s = STORIES[c.story - 1];
  const n = SCENARIOS[c.scenario - 1];
  const r = RESOLUTIONS[c.resolution - 1];
  if (!s || !n || !r) return null;
  const addr = cubeAddress(c);
  const idx = cubeIndex(c);
  return [
    `HYDRA-999  cell ${addr}  /  ${idx} of 729`,
    `Story      ${s.id} ${s.name} — ${s.line}`,
    `Scenario   ${n.id} ${n.name} — ${n.line}`,
    `Resolution ${r.id} ${r.name} — ${r.line}`,
    `Intent     ${intent.trim() || "(unnamed)"}`,
    `${s.name} meets ${n.name}. ${r.name} closes the page. Original world only. No marketplace face.`,
  ].join("\n");
}

export function cubeStanza(c: CubePick, intent: string): string {
  const page = compileCube(c, intent);
  if (!page) return `Nine-cube idle on “${intent}”. Pick story, scenario, resolution (9×9×9).`;
  const s = STORIES[c.story - 1];
  const n = SCENARIOS[c.scenario - 1];
  const r = RESOLUTIONS[c.resolution - 1];
  return `Cell ${cubeAddress(c)} (${cubeIndex(c)}/729) for “${intent}”: ${s.name} / ${n.name} / ${r.name}.`;
}

export function pirrStanza(p: PirrState, intent: string): string {
  if (!pirrFilled(p))
    return `PIRR hold on “${intent}”. Vidy needs face, voice, bond, heat before the companion walks.`;
  return `Vidy companion on “${intent}”: ${p.persona} / ${p.identity}. Bond ${p.relationship}. Heat ${p.rivalry}.`;
}

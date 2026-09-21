import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { DutyIcon } from "@/components/duty-icon";
import { NineCube, PirrDesk } from "@/components/engine-desk";
import { MiniHydraFigure } from "@/components/mini-hydra";
import { SunburstField } from "@/components/sunburst";
import { Button } from "@/components/ui/button";
import {
  FLEET_HOLD,
  HOUSE_LEVY,
  LOOP_INDEX,
  MAX_HEADS,
  PRELOADS,
  PSYCHE,
  SKILL_INDEX,
  SKILLS,
  preloadFor,
  quoteSale,
  sameSet,
  type Category,
  type FleetState,
  type Listing,
  type Packet,
  type Preload,
  type Skill,
} from "@/lib/district";
import type { CubePick, PirrState } from "@/lib/engines";
import { cn } from "@/lib/utils";

const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "creative", label: "Creative" },
  { id: "marketing", label: "Marketing" },
  { id: "protocol", label: "Protocol" },
];

type Props = {
  slots: (string | null)[];
  intent: string;
  packet: Packet | null;
  running: boolean;
  serial: number;
  ask: number;
  listings: Listing[];
  sold: Listing[];
  locked: boolean;
  fleet: FleetState;
  focus?: "bay" | "yard" | "fleet";
  onIntent: (v: string) => void;
  onSeat: (skillId: string) => void;
  onClear: (index: number) => void;
  onRun: () => void;
  onAsk: (n: number) => void;
  onList: () => void;
  onClaim: (id: string) => void;
  onLoadSet: (ids: string[], intent?: string) => void;
  onSend: () => void;
  onLock: () => void;
  onUnlock: () => void;
  onShip: () => void;
  onHalt: () => void;
  onReleaseHold: () => void;
  pirr: PirrState;
  cube: CubePick;
  onPirr: (p: PirrState) => void;
  onCube: (c: CubePick) => void;
};

export function HydraBay({
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
  focus,
  onIntent,
  onSeat,
  onClear,
  onRun,
  onAsk,
  onList,
  onClaim,
  onLoadSet,
  onSend,
  onLock,
  onUnlock,
  onShip,
  onHalt,
  onReleaseHold,
  pirr,
  cube,
  onPirr,
  onCube,
}: Props) {
  const filled = slots.filter(Boolean).length;
  const seated = new Set(slots.filter(Boolean));
  const [cat, setCat] = useState<Category | "all">("all");
  const [pane, setPane] = useState<"bay" | "yard" | "fleet">(focus ?? "bay");
  const pool = SKILLS.filter((s) => cat === "all" || s.category === cat);
  const quote = quoteSale(ask);
  const levyPct = Math.round(HOUSE_LEVY * 100);
  const seatedPreload = preloadFor(slots);
  const packetPreload = packet
    ? preloadFor(packet.seats.map((s) => s.skill.id))
    : undefined;

  useEffect(() => {
    if (focus) setPane(focus);
  }, [focus]);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-auto">
      <div className="flex gap-1 border-b border-line px-5 py-2 sm:px-6">
        {(
          [
            ["bay", "Bay"],
            ["yard", "Yard"],
            ["fleet", "Fleet"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setPane(id)}
            className={cn(
              "px-3 py-2 text-2xs uppercase tracking-[0.16em]",
              pane === id ? "bg-signal text-bg" : "text-mute hover:text-paper",
            )}
          >
            {label}
            {id === "yard" && listings.length ? ` ${listings.length}` : ""}
            {id === "fleet" && fleet.hold.length ? ` ${fleet.hold.length}` : ""}
          </button>
        ))}
      </div>

      {pane === "yard" ? (
        <Yard listings={listings} sold={sold} onClaim={onClaim} />
      ) : pane === "fleet" ? (
        <FleetDeck
          fleet={fleet}
          onHalt={onHalt}
          onShip={onShip}
          onReleaseHold={onReleaseHold}
          canShip={locked && filled === MAX_HEADS}
        />
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-5 lg:flex-row">
          <div className="relative flex min-w-0 flex-1 flex-col gap-4 overflow-hidden px-5 py-5 sm:px-6">
            <SunburstField />
            <p className="text-kicker uppercase tracking-[0.22em] text-signal">
              B1 · Mini Hydra OS · chassis Z-{String(serial).padStart(2, "0")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-4xl leading-[0.9] uppercase tracking-wide sm:text-display">
                  Build your
                  <span className="block text-signal">Hydra OS</span>
                </h1>
                <p className="mt-4 max-w-prose text-sm text-mute">
                  Three heads. One loop. Seat any mix from security, creative, or marketing.
                  Right combo — ambassador, influencer, cyber, canon writer, lore designer — runs
                  itself. List it and the chassis leaves. You assemble the next one. Aegis takes {levyPct}%.
                </p>
              </div>
              <div className="shrink-0 border border-line p-2">
                <MiniHydraFigure slots={slots} running={running} serial={serial} size="bay" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {PRELOADS.map((p) => {
                const active = sameSet(slots, p.skillIds);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      if (locked) return;
                      onLoadSet([...p.skillIds], p.intent);
                    }}
                    className={cn(
                      "px-3 py-2 text-2xs uppercase tracking-[0.16em]",
                      active ? "bg-signal text-bg" : "text-mute hover:text-paper",
                    )}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>

            <SetSpec
              preload={seatedPreload}
              onLoad={(p) => onLoadSet([...p.skillIds], p.intent)}
            />

            <div className="grid gap-2 sm:grid-cols-3">
              {PSYCHE.map((p, i) => {
                const skill = SKILLS.find((s) => s.id === slots[i]);
                return (
                  <div key={p.id} className="border border-line p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-2xs uppercase tracking-[0.18em] text-signal">{p.name}</p>
                      {skill && !locked ? (
                        <button
                          type="button"
                          className="text-mute hover:text-paper"
                          onClick={() => onClear(i)}
                          aria-label={`Clear ${p.name}`}
                        >
                          <X className="size-3.5" strokeWidth={1.6} />
                        </button>
                      ) : null}
                    </div>
                    <p className="mt-1 text-2xs text-mute">{p.job}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.12em]">
                      {skill ? `${skill.code} ${skill.name}` : "Vacant"}
                    </p>
                  </div>
                );
              })}
            </div>

            <label className="block text-2xs uppercase tracking-[0.18em] text-mute">
              Intent
              <input
                readOnly={locked}
                value={intent}
                onChange={(e) => onIntent(e.target.value)}
                placeholder="ambassador circuit for an original product"
                className="mt-2 h-11 w-full border border-line bg-elevated px-3 text-sm text-paper outline-none placeholder:text-mute focus:border-signal"
              />
            </label>
            <Button
              onClick={onRun}
              disabled={running || filled !== 3 || !intent.trim()}
              className="w-fit"
            >
              Run Mini Hydra Zeta
            </Button>

            <div className="border border-line p-3">
              <p className="text-2xs uppercase tracking-[0.18em] text-mute">
                {locked ? "Build locked · ship to fleet" : "Lock this build"}
              </p>
              <p className="mt-2 text-xs text-mute">
                A locked three-head stencil ships to the fleet ship. The press then stamps copies
                on its own. Hold max {FLEET_HOLD}.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {locked ? (
                  <Button variant="line" className="w-fit" onClick={onUnlock}>
                    Unlock
                  </Button>
                ) : (
                  <Button
                    variant="line"
                    className="w-fit"
                    disabled={filled !== 3}
                    onClick={onLock}
                  >
                    Lock build
                  </Button>
                )}
                <Button
                  className="w-fit"
                  disabled={!locked || filled !== 3}
                  onClick={() => {
                    onShip();
                    setPane("fleet");
                  }}
                >
                  Ship to fleet
                </Button>
              </div>
            </div>

            <div className="border border-line p-3">
              <p className="text-2xs uppercase tracking-[0.18em] text-mute">
                List this chassis · Aegis levy {levyPct}%
              </p>
              <label className="mt-3 block text-2xs uppercase tracking-[0.16em] text-mute">
                Ask ₡
                <input
                  type="number"
                  min={0}
                  value={ask}
                  onChange={(e) => onAsk(Number(e.target.value))}
                  className="mt-2 h-11 w-full border border-line bg-elevated px-3 font-mono text-sm tabular-nums text-paper outline-none focus:border-signal"
                />
              </label>
              <p className="mt-2 font-mono text-2xs tabular-nums text-mute">
                Levy ₡{quote.levy} · you take ₡{quote.ownerTake}
              </p>
              <p className="mt-2 text-2xs text-mute">
                Sold hydras leave the dock. Empty chassis next. Skills stay on their floors.
              </p>
              <Button
                variant="line"
                className="mt-3 w-fit"
                disabled={filled !== 3 || quote.ask <= 0}
                onClick={() => {
                  onList();
                  setPane("yard");
                }}
              >
                List Mini Hydra
              </Button>
              <Button variant="line" className="mt-3 w-fit" onClick={onSend}>
                Send Meta OS package
              </Button>
            </div>
          </div>

          <div className="min-w-0 flex-1 overflow-auto border-t border-line px-5 py-5 lg:border-l lg:border-t-0 sm:px-6">
            {seatedPreload ? <SetSpecBody preload={seatedPreload} /> : null}
            {seated.has("c-pirr") ? (
              <div className="mb-5">
                <PirrDesk value={pirr} onChange={onPirr} />
              </div>
            ) : null}
            {seated.has("c-cube") ? (
              <div className="mb-5">
                <NineCube value={cube} intent={intent} onChange={onCube} />
              </div>
            ) : null}
            {packet ? (
              <div className="mb-5 space-y-3">
                <p className="text-2xs uppercase tracking-[0.2em] text-mute">
                  Zeta packet · {packet.loop.name}
                </p>
                {packetPreload ? null : (
                  packet.loop.beats.map((b) => (
                    <p
                      key={b}
                      className="border border-line px-3 py-2 text-xs uppercase tracking-[0.12em]"
                    >
                      {b}
                    </p>
                  ))
                )}
                {packet.lines.map((line) => (
                  <div key={line.psyche} className="border border-line p-3">
                    <p className="text-2xs uppercase tracking-[0.14em] text-signal">{line.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-mute">{line.body}</p>
                  </div>
                ))}
                <p className="text-xs leading-relaxed">{packet.combined}</p>
                <p className="font-mono text-2xs tabular-nums text-signal">{packet.receipt}</p>
              </div>
            ) : (
              <p className="mb-4 text-xs text-mute">
                Seat three skills. Name an intent. Run. Or load a specced set.
              </p>
            )}
            <div className="mb-3 flex flex-wrap gap-1">
              {CATS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "px-3 py-2 text-2xs uppercase tracking-[0.16em]",
                    cat === c.id ? "bg-signal text-bg" : "text-mute hover:text-paper",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {pool.map((s) => (
                <SkillPick
                  key={s.id}
                  skill={s}
                  seated={seated.has(s.id)}
                  full={filled >= MAX_HEADS || locked}
                  onSeat={onSeat}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SetSpec({
  preload,
  onLoad,
}: {
  preload: Preload | undefined;
  onLoad: (p: Preload) => void;
}) {
  if (!preload) {
    return (
      <div className="border border-line">
        <p className="border-b border-line px-3 py-2 text-2xs uppercase tracking-[0.18em] text-mute">
          Set specs
        </p>
        {PRELOADS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onLoad(p)}
            className="flex w-full flex-col gap-1 border-b border-line px-3 py-3 text-left last:border-b-0 hover:bg-signal-dim"
          >
            <p className="text-2xs uppercase tracking-[0.16em] text-signal">{p.spec.lane}</p>
            <p className="font-display text-lg uppercase leading-none">{p.name}</p>
            <p className="text-xs text-mute">{p.spec.for}</p>
            <p className="font-mono text-2xs tabular-nums text-mute">
              {p.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")}
            </p>
          </button>
        ))}
      </div>
    );
  }

  const { spec } = preload;
  return (
    <div className="border border-signal p-3">
      <p className="text-2xs uppercase tracking-[0.18em] text-signal">
        Spec · {spec.lane}
      </p>
      <p className="mt-1 font-display text-xl uppercase leading-none">{preload.name}</p>
      <p className="mt-2 text-xs text-mute">{spec.for}</p>
      <p className="mt-3 font-mono text-2xs tabular-nums text-mute">
        {preload.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")}
      </p>
      <p className="mt-2 text-2xs text-mute">{spec.cadence}</p>
    </div>
  );
}

function SetSpecBody({ preload }: { preload: Preload }) {
  const { spec } = preload;
  return (
    <div className="mb-5 border border-line p-3">
      <p className="text-2xs uppercase tracking-[0.18em] text-signal">
        Detailed spec · {preload.name}
      </p>
      <p className="mt-3 text-2xs uppercase tracking-[0.16em] text-mute">Heads</p>
      <ul className="mt-2 space-y-2">
        {PSYCHE.map((p, i) => (
          <li key={p.id} className="text-xs leading-relaxed">
            <span className="uppercase tracking-[0.12em] text-signal">{p.name}.</span>{" "}
            <span className="text-mute">{spec.duties[i]}</span>
          </li>
        ))}
      </ul>
      <SpecLists spec={spec} />
    </div>
  );
}

function SpecLists({ spec }: { spec: Preload["spec"] }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      {(
        [
          ["Outputs", spec.outputs],
          ["Gates", spec.gates],
          ["Will not", spec.forbids],
        ] as const
      ).map(([label, rows]) => (
        <div key={label}>
          <p className="text-2xs uppercase tracking-[0.16em] text-mute">{label}</p>
          <ul className="mt-2 space-y-1">
            {rows.map((row) => (
              <li key={row} className="text-2xs leading-relaxed text-paper">
                {row}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FleetDeck({
  fleet,
  onHalt,
  onShip,
  onReleaseHold,
  canShip,
}: {
  fleet: FleetState;
  onHalt: () => void;
  onShip: () => void;
  onReleaseHold: () => void;
  canShip: boolean;
}) {
  const lock = fleet.lock;
  const codes = lock?.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ");
  const full = fleet.hold.length >= FLEET_HOLD;
  return (
    <div className="grid min-h-0 flex-1 gap-6 overflow-auto px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <section>
        <p className="text-kicker uppercase tracking-[0.22em] text-signal">
          Fleet ship · press
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[0.9] uppercase tracking-wide sm:text-display">
          Lock. Ship.
          <span className="block text-signal">Mass produce.</span>
        </h1>
        <p className="mt-4 max-w-prose text-sm text-mute">
          A locked three-head build ships here. The press stamps that stencil on its own until
          you halt or the hold fills.
        </p>
        <img
          src="/art/fleet.jpg"
          alt="Fleet dropship"
          className={cn(
            "mt-5 w-full object-contain",
            "max-h-80",
            fleet.running && "hydra-run",
          )}
        />
        {lock ? (
          <div className="mt-5 border border-signal p-3">
            <p className="text-2xs uppercase tracking-[0.18em] text-signal">
              {fleet.running ? "Press live" : "Stencil docked"} ·{" "}
              {LOOP_INDEX[lock.loopId]?.name ?? lock.loopId}
            </p>
            <p className="mt-2 font-mono text-xs tabular-nums">{codes}</p>
            <p className="mt-2 text-xs text-mute">{lock.intent}</p>
            <p className="mt-3 font-mono text-2xs tabular-nums text-mute">
              Stamped {fleet.produced} · hold {fleet.hold.length}/{FLEET_HOLD}
              {full ? " · hold full" : ""}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {fleet.running ? (
                <Button variant="line" onClick={onHalt}>
                  Halt press
                </Button>
              ) : (
                <Button onClick={onShip} disabled={full}>
                  Start press
                </Button>
              )}
              <Button
                variant="line"
                onClick={onReleaseHold}
                disabled={fleet.hold.length === 0}
              >
                Release hold to yard
              </Button>
            </div>
          </div>
        ) : (
          <p className="mt-5 text-xs text-mute">
            No stencil. Lock a three-head build on the bay, then ship. {canShip ? "Lock is ready." : ""}
          </p>
        )}
      </section>
      <section>
        <p className="mb-3 text-2xs uppercase tracking-[0.2em] text-mute">Hold</p>
        {fleet.hold.length === 0 ? (
          <p className="text-xs text-mute">Empty. The press fills this when live.</p>
        ) : (
          <ul className="space-y-2">
            {fleet.hold.map((c) => (
              <li key={c.id} className="border border-line p-3">
                <p className="text-2xs uppercase tracking-[0.16em] text-signal">
                  Z-{String(c.serial).padStart(2, "0")} · {LOOP_INDEX[c.loopId]?.name ?? c.loopId}
                </p>
                <p className="mt-1 font-mono text-2xs tabular-nums text-mute">
                  {c.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Yard({
  listings,
  sold,
  onClaim,
}: {
  listings: Listing[];
  sold: Listing[];
  onClaim: (id: string) => void;
}) {
  return (
    <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-2">
      <section>
        <p className="mb-3 text-2xs uppercase tracking-[0.2em] text-mute">On the yard</p>
        {listings.length === 0 ? (
          <p className="text-xs text-mute">No chassis listed. Load three heads, then list.</p>
        ) : (
          <ul className="space-y-2">
            {listings.map((l) => (
              <li key={l.id} className="border border-line p-3">
                <p className="text-2xs uppercase tracking-[0.16em] text-signal">
                  Z-{String(l.serial).padStart(2, "0")} · {LOOP_INDEX[l.loopId]?.name ?? l.loopId}
                </p>
                <p className="mt-2 font-mono text-xs tabular-nums">
                  Ask ₡{l.ask} · levy ₡{l.levy} · take ₡{l.ownerTake}
                </p>
                <p className="mt-1 text-2xs text-mute">
                  {l.skillIds.map((id) => SKILL_INDEX[id]?.code).join(" + ")}
                </p>
                <Button className="mt-3 w-fit" size="sm" onClick={() => onClaim(l.id)}>
                  Buyer claims it
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <p className="mb-3 text-2xs uppercase tracking-[0.2em] text-mute">Sold · levy kept</p>
        {sold.length === 0 ? (
          <p className="text-xs text-mute">Nothing claimed yet.</p>
        ) : (
          <ul className="space-y-2">
            {sold.map((l) => (
              <li key={l.id} className="border border-line p-3">
                <p className="text-2xs uppercase tracking-[0.16em] text-signal">
                  Z-{String(l.serial).padStart(2, "0")} sold
                </p>
                <p className="mt-2 font-mono text-xs tabular-nums text-mute">
                  ₡{l.ask} · Aegis ₡{l.levy} · owner ₡{l.ownerTake}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function SkillPick({
  skill,
  seated,
  full,
  onSeat,
}: {
  skill: Skill;
  seated: boolean;
  full: boolean;
  onSeat: (id: string) => void;
}) {
  return (
    <button
      type="button"
      disabled={seated || full}
      onClick={() => onSeat(skill.id)}
      className={cn(
        "flex gap-3 border border-line p-3 text-left",
        seated ? "border-signal bg-signal-dim" : "hover:border-signal",
        full && !seated && "opacity-40",
      )}
    >
      <span className="flex size-8 shrink-0 items-center justify-center border border-signal text-signal">
        <DutyIcon name={skill.icon} />
      </span>
      <span>
        <span className="block text-2xs uppercase tracking-[0.16em] text-signal">
          {skill.code}
        </span>
        <span className="block text-xs uppercase tracking-[0.12em]">{skill.name}</span>
        <span className="mt-1 block text-2xs text-mute">{skill.category}</span>
      </span>
    </button>
  );
}

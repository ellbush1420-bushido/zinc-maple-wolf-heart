import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { BuildingPlate } from "@/components/building-plate";
import { DutyIcon } from "@/components/duty-icon";
import { NineCube, PirrDesk } from "@/components/engine-desk";
import { HydraBay } from "@/components/hydra-bay";
import { MiniHydraFigure } from "@/components/mini-hydra";
import { Pipeline } from "@/components/pipeline";
import { Sunburst, SunburstField } from "@/components/sunburst";
import { Button } from "@/components/ui/button";
import {
  BUILDING_INDEX,
  BUILDINGS,
  EMPTY_FLEET,
  FLEET_BEAT_MS,
  FLEET_HOLD,
  MAX_HEADS,
  SKILL_INDEX,
  appraise,
  compileDistrictPackage,
  compileZeta,
  makeLock,
  matchLoop,
  preloadFor,
  quoteSale,
  skillsFor,
  type BuildingId,
  type FleetClone,
  type FleetState,
  type Listing,
  type Packet,
  type Skill,
  type View,
} from "@/lib/district";
import {
  EMPTY_CUBE,
  EMPTY_PIRR,
  type CubePick,
  type PirrState,
} from "@/lib/engines";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const STORE = "aegis-district-v5";

type Saved = {
  view: View;
  buildingId: BuildingId;
  skillId: string | null;
  slots: (string | null)[];
  intent: string;
  serial: number;
  ask: number;
  listings: Listing[];
  sold: Listing[];
  locked: boolean;
  fleet: FleetState;
  pirr: PirrState;
  cube: CubePick;
};

function Home() {
  const [view, setView] = useState<View>("city");
  const [buildingId, setBuildingId] = useState<BuildingId>("lotus");
  const [skillId, setSkillId] = useState<string | null>(null);
  const [slots, setSlots] = useState<(string | null)[]>([null, null, null]);
  const [intent, setIntent] = useState(
    "ambassador circuit for an original product",
  );
  const [packet, setPacket] = useState<Packet | null>(null);
  const [running, setRunning] = useState(false);
  const [serial, setSerial] = useState(1);
  const [ask, setAsk] = useState(800);
  const [listings, setListings] = useState<Listing[]>([]);
  const [sold, setSold] = useState<Listing[]>([]);
  const [locked, setLocked] = useState(false);
  const [fleet, setFleet] = useState<FleetState>(EMPTY_FLEET);
  const [pirr, setPirr] = useState<PirrState>(EMPTY_PIRR);
  const [cube, setCube] = useState<CubePick>(EMPTY_CUBE);
  const [hydraFocus, setHydraFocus] = useState<"bay" | "yard" | "fleet">("bay");
  const [log, setLog] = useState<string[]>([
    "Aegis online. Four lots live. Mini Hydra empty. Fleet dark.",
  ]);
  const serialRef = useRef(1);

  const building = BUILDING_INDEX[buildingId];
  const floors = skillsFor(buildingId);
  const skill: Skill | undefined = skillId ? SKILL_INDEX[skillId] : undefined;

  useEffect(() => {
    serialRef.current = serial;
  }, [serial]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE);
      if (!raw) return;
      const s = JSON.parse(raw) as Saved;
      if (s.view) setView(s.view);
      if (s.buildingId && BUILDING_INDEX[s.buildingId]) setBuildingId(s.buildingId);
      if (s.skillId) setSkillId(s.skillId);
      if (Array.isArray(s.slots) && s.slots.length === MAX_HEADS) setSlots(s.slots);
      if (s.intent) setIntent(s.intent);
      if (typeof s.serial === "number") setSerial(s.serial);
      if (typeof s.ask === "number") setAsk(s.ask);
      if (Array.isArray(s.listings)) setListings(s.listings);
      if (Array.isArray(s.sold)) setSold(s.sold);
      if (typeof s.locked === "boolean") setLocked(s.locked);
      if (s.fleet) setFleet({ ...EMPTY_FLEET, ...s.fleet, running: false });
      if (s.pirr) setPirr({ ...EMPTY_PIRR, ...s.pirr });
      if (s.cube) setCube({ ...EMPTY_CUBE, ...s.cube });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const s: Saved = {
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
        fleet: { ...fleet, running: false },
        pirr,
        cube,
      };
      localStorage.setItem(STORE, JSON.stringify(s));
    } catch {
      /* ignore */
    }
  }, [view, buildingId, skillId, slots, intent, serial, ask, listings, sold, locked, fleet, pirr, cube]);

  function note(line: string) {
    setLog((prev) => [line, ...prev].slice(0, 8));
  }

  function openBuilding(id: BuildingId) {
    setBuildingId(id);
    setSkillId(null);
    setView("building");
    const b = BUILDING_INDEX[id];
    note(`Aegis routed you to ${b.lot} ${b.name}. Jarvis ${b.jarvis} is on the floor.`);
  }

  function selectSkill(next: Skill) {
    setSkillId(next.id);
    note(`${building.jarvis}: ${next.code} ${next.name} bound. Program ${next.program} does not leave this floor.`);
  }

  function seatSkill(id: string) {
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
      const ids = next.filter(Boolean) as string[];
      if (ids.length === MAX_HEADS) setAsk(appraise(ids));
      return next;
    });
    const s = SKILL_INDEX[id];
    note(`Hydra seated ${s.code} ${s.name}. ${3 - slots.filter(Boolean).length - 1} open.`);
  }

  function clearSeat(index: number) {
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
    const pkt = compileZeta(intent.trim(), slots.filter(Boolean) as string[], {
      pirr,
      cube,
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

  function loadSet(ids: string[], nextIntent?: string) {
    if (locked) {
      note("Build is locked. Unlock to load a set.");
      return;
    }
    const next = ids.slice(0, MAX_HEADS);
    setSlots(next);
    setAsk(appraise(next));
    setPacket(null);
    if (nextIntent) setIntent(nextIntent);
    setView("hydra");
    note(`Set seated. ${matchLoop(next).name} armed. Run or list.`);
  }

  function listHydra() {
    const ids = slots.filter(Boolean) as string[];
    if (ids.length !== MAX_HEADS) {
      note("Cannot list an empty chassis. Seat three heads.");
      return;
    }
    const q = quoteSale(ask);
    if (q.ask <= 0) return;
    const loop = matchLoop(ids);
    const listing: Listing = {
      id: `z-${serial}-${Date.now()}`,
      serial,
      skillIds: ids,
      loopId: loop.id,
      ask: q.ask,
      levy: q.levy,
      ownerTake: q.ownerTake,
      listedAt: new Date().toISOString(),
    };
    setListings((prev) => [listing, ...prev]);
    setSlots([null, null, null]);
    setPacket(null);
    setSerial((n) => n + 1);
    setAsk(800);
    note(
      `Z-${String(serial).padStart(2, "0")} listed at ₡${q.ask}. Aegis levy ₡${q.levy} held. Empty chassis docked. Assemble the next one.`,
    );
  }

  function claimHydra(id: string) {
    const listing = listings.find((l) => l.id === id);
    if (!listing) return;
    setListings((prev) => prev.filter((l) => l.id !== id));
    setSold((prev) => [{ ...listing, soldAt: new Date().toISOString() }, ...prev]);
    note(
      `Buyer claimed Z-${String(listing.serial).padStart(2, "0")}. Aegis kept ₡${listing.levy}. Owner take ₡${listing.ownerTake}.`,
    );
  }

  function sendPackage() {
    const hydra = preloadFor(slots);
    const text = compileDistrictPackage({
      hydra,
      serial,
      intent: intent.trim() || undefined,
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
    note(
      hydra
        ? `Clerk dispatched Meta OS package with ${hydra.name} seated. HUD stripped.`
        : "Clerk dispatched Meta OS package. Protocol + three sets. HUD stripped.",
    );
  }

  function lockBuild() {
    const ids = slots.filter(Boolean) as string[];
    if (ids.length !== MAX_HEADS) {
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
      if (fleet.hold.length >= FLEET_HOLD) {
        note("Fleet hold full. Release to yard first.");
        return;
      }
      setFleet((f) => ({ ...f, running: true }));
      setHydraFocus("fleet");
      note("Fleet press live. Stamping the docked stencil.");
      return;
    }
    const ids = slots.filter(Boolean) as string[];
    const lock = makeLock(ids, intent.trim());
    if (!lock || !locked) {
      note("Lock a three-head build first, then ship.");
      return;
    }
    setFleet((f) => ({
      lock,
      running: true,
      produced: f.produced,
      hold: f.hold,
    }));
    setHydraFocus("fleet");
    note(`Stencil ${lock.loopId} shipped to fleet ship. Press live. Autonomous stamp.`);
  }

  function haltPress() {
    setFleet((f) => ({ ...f, running: false }));
    note("Fleet press halted.");
  }

  function releaseHold() {
    if (fleet.hold.length === 0) return;
    const listed: Listing[] = fleet.hold.map((c) => {
      const q = quoteSale(appraise(c.skillIds));
      return {
        id: `z-${c.serial}-${c.id}`,
        serial: c.serial,
        skillIds: c.skillIds,
        loopId: c.loopId,
        ask: q.ask,
        levy: q.levy,
        ownerTake: q.ownerTake,
        listedAt: new Date().toISOString(),
      };
    });
    const n = listed.length;
    setListings((prev) => [...listed, ...prev]);
    setFleet((f) => ({ ...f, hold: [] }));
    note(`Released ${n} fleet clones to the yard. Levy applies on claim.`);
  }

  useEffect(() => {
    if (!fleet.running || !fleet.lock) return;
    const t = window.setInterval(() => {
      setFleet((f) => {
        if (!f.lock || !f.running) return f;
        if (f.hold.length >= FLEET_HOLD) {
          return { ...f, running: false };
        }
        const serialNow = serialRef.current;
        serialRef.current = serialNow + 1;
        setSerial(serialRef.current);
        const clone: FleetClone = {
          id: `c-${serialNow}-${Date.now()}`,
          serial: serialNow,
          skillIds: f.lock.skillIds,
          loopId: f.lock.loopId,
          stampedAt: new Date().toISOString(),
        };
        const hold = [...f.hold, clone];
        const full = hold.length >= FLEET_HOLD;
        return {
          ...f,
          hold,
          produced: f.produced + 1,
          running: !full,
        };
      });
    }, FLEET_BEAT_MS);
    return () => window.clearInterval(t);
  }, [fleet.running, fleet.lock?.id]);

  const seatedCount = slots.filter(Boolean).length;
  const status = useMemo(() => {
    const v =
      view === "city" ? "CITADEL" : view === "hydra" ? "HYDRA" : building.lot;
    return `AEGIS // ${v} // HEADS ${seatedCount}/${MAX_HEADS} // ${running ? "LOOP" : "READY"}`;
  }, [view, building.lot, seatedCount, running]);

  return (
    <main className="flex min-h-dvh flex-col bg-bg text-paper lg:h-dvh lg:overflow-hidden">
      <header className="flex shrink-0 flex-wrap items-center gap-2 border-b border-line px-4 py-3 sm:gap-3 sm:px-6">
        <span className="grid size-9 shrink-0 place-items-center border border-signal text-signal">
          <Sunburst className="size-7" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-lg uppercase leading-none tracking-[0.14em]">
            Aegis District
          </p>
          <p className="truncate text-2xs uppercase tracking-[0.18em] text-mute">{status}</p>
        </div>
        <nav className="ml-auto flex shrink-0 gap-1">
          {(
            [
              ["city", "District"],
              ["building", "Lot"],
              ["hydra", "Hydra"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setView(id);
                if (id === "hydra") {
                  setHydraFocus("bay");
                  note("Mini Hydra bay open. Max three. You authorize.");
                }
                if (id === "city") note("Citadel view. Four lots. Aegis watching.");
              }}
              className={cn(
                "px-3 py-2 text-2xs uppercase tracking-[0.16em]",
                view === id ? "bg-signal text-bg" : "text-mute hover:text-paper",
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {view === "building" ? (
        <nav className="flex gap-1 overflow-x-auto border-b border-line px-3 py-2 lg:hidden" aria-label="Lots">
          {BUILDINGS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => openBuilding(b.id)}
              className={cn(
                "shrink-0 px-3 py-2 text-2xs uppercase tracking-[0.16em]",
                b.id === buildingId ? "bg-signal text-bg" : "text-mute",
              )}
            >
              {b.lot}
            </button>
          ))}
        </nav>
      ) : null}

      {view === "city" ? (
        <CityView
          onOpen={openBuilding}
          onHydra={() => {
            setHydraFocus("bay");
            setView("hydra");
          }}
          onFleet={() => {
            setHydraFocus("fleet");
            setView("hydra");
          }}
          log={log}
          slots={slots}
          serial={serial}
          fleet={fleet}
        />
      ) : null}

      {view === "building" ? (
        <BuildingView
          buildingId={buildingId}
          skill={skill}
          floors={floors}
          log={log}
          onOpen={openBuilding}
          onSelect={selectSkill}
          onLoad={(id) => {
            seatSkill(id);
            setView("hydra");
            note(`Borrowed ${SKILL_INDEX[id].code} into Mini Hydra.`);
          }}
          onSend={sendPackage}
          pirr={pirr}
          cube={cube}
          intent={intent}
          onPirr={setPirr}
          onCube={setCube}
        />
      ) : null}

      {view === "hydra" ? (
        <HydraBay
          slots={slots}
          intent={intent}
          packet={packet}
          running={running}
          serial={serial}
          ask={ask}
          listings={listings}
          sold={sold}
          locked={locked}
          fleet={fleet}
          focus={hydraFocus}
          onIntent={setIntent}
          onSeat={seatSkill}
          onClear={clearSeat}
          onRun={runZeta}
          onAsk={setAsk}
          onList={listHydra}
          onClaim={claimHydra}
          onLoadSet={loadSet}
          onSend={sendPackage}
          onLock={lockBuild}
          onUnlock={unlockBuild}
          onShip={shipToFleet}
          onHalt={haltPress}
          onReleaseHold={releaseHold}
          pirr={pirr}
          cube={cube}
          onPirr={setPirr}
          onCube={setCube}
        />
      ) : null}

      {view !== "hydra" ? (
        <footer className="flex shrink-0 items-center border-t border-line px-5 py-3 sm:px-8">
          <p className="text-2xs uppercase tracking-[0.18em] text-mute">
            Public lots do not receive this HUD · Jarvises stay on their lots
          </p>
        </footer>
      ) : null}
    </main>
  );
}

function CityView({
  onOpen,
  onHydra,
  onFleet,
  log,
  slots,
  serial,
  fleet,
}: {
  onOpen: (id: BuildingId) => void;
  onHydra: () => void;
  onFleet: () => void;
  log: string[];
  slots: (string | null)[];
  serial: number;
  fleet: FleetState;
}) {
  return (
    <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.3fr)_20rem] lg:overflow-hidden">
      <section className="relative flex min-h-0 flex-col overflow-auto px-5 py-6 sm:px-8">
        <SunburstField />
        <p className="text-kicker uppercase tracking-[0.22em] text-signal">
          Citadel · Aegis live
        </p>
        <h1 className="mt-3 font-display text-display leading-[0.9] uppercase tracking-wide">
          Four houses.
          <span className="block text-signal">Two-floor protocol.</span>
        </h1>
        <p className="mt-5 max-w-prose text-sm text-mute">
          Growth markets. Lotus shields. Persona locks the face. Canon holds the story.
          Meta OS is two floors — protocol and dispatch. Send the Hydra sets as one package.
        </p>
        <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onHydra}
          className="flex items-center gap-4 border border-line p-3 text-left hover:border-signal"
        >
          <MiniHydraFigure slots={slots} serial={serial} size="city" />
          <span>
            <span className="block text-2xs uppercase tracking-[0.18em] text-signal">
              B1 · Mini Hydra
            </span>
            <span className="mt-1 block font-display text-lg uppercase leading-none">
              Open bay
            </span>
            <span className="mt-2 block text-2xs text-mute">
              Quarter-scale. Lock. Ship. Rebuild.
            </span>
          </span>
        </button>
        <button
          type="button"
          onClick={onFleet}
          className={cn(
            "flex items-center gap-4 border p-3 text-left",
            fleet.running || fleet.lock ? "border-signal" : "border-line hover:border-signal",
          )}
        >
          <img
            src="/art/fleet.jpg"
            alt="Fleet dropship"
            className={cn(
              "h-28 w-40 shrink-0 object-contain",
              fleet.running && "hydra-run",
            )}
          />
          <span>
            <span className="block text-2xs uppercase tracking-[0.18em] text-signal">
              Fleet ship · {fleet.running ? "press live" : fleet.lock ? "stencil docked" : "dark"}
            </span>
            <span className="mt-1 block font-display text-lg uppercase leading-none">
              Open fleet
            </span>
            <span className="mt-2 block text-2xs text-mute">
              Hold {fleet.hold.length}/{FLEET_HOLD} · stamped {fleet.produced}
            </span>
          </span>
        </button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDINGS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => onOpen(b.id)}
              className="border border-line p-4 text-left hover:border-signal"
            >
              <p className="text-2xs uppercase tracking-[0.18em] text-signal">
                {b.lot} · {b.jarvis}
              </p>
              <p className="mt-2 font-display text-xl uppercase leading-none">{b.name}</p>
              <p className="mt-2 text-xs text-mute">{b.jarvisLine}</p>
            </button>
          ))}
        </div>
        <img
          src="/art/district.jpg"
          alt="Phosphor wireframe four-house district"
          className="mt-6 max-h-[min(22rem,40dvh)] w-full object-contain"
        />
      </section>
      <AegisRail log={log} />
    </div>
  );
}

function BuildingView({
  buildingId,
  skill,
  floors,
  log,
  onOpen,
  onSelect,
  onLoad,
  onSend,
  pirr,
  cube,
  intent,
  onPirr,
  onCube,
}: {
  buildingId: BuildingId;
  skill: Skill | undefined;
  floors: Skill[];
  log: string[];
  onOpen: (id: BuildingId) => void;
  onSelect: (s: Skill) => void;
  onLoad: (id: string) => void;
  onSend: () => void;
  pirr: PirrState;
  cube: CubePick;
  intent: string;
  onPirr: (p: PirrState) => void;
  onCube: (c: CubePick) => void;
}) {
  const building = BUILDING_INDEX[buildingId];
  const shown = skill ?? floors[0];
  return (
    <div className="grid min-h-0 flex-1 lg:grid-cols-[9.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)_18rem] lg:overflow-hidden">
      <aside className="hidden border-r border-line lg:block">
        <p className="px-4 pb-2 pt-5 text-2xs uppercase tracking-[0.2em] text-mute">Lots</p>
        {BUILDINGS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => onOpen(b.id)}
            className={cn(
              "flex w-full px-4 py-3 text-left text-xs uppercase tracking-[0.14em]",
              b.id === buildingId ? "bg-signal-dim text-signal" : "text-mute hover:text-paper",
            )}
          >
            {b.lot} {b.name.split(" ")[0]}
          </button>
        ))}
        <p className="px-4 pb-2 pt-5 text-2xs uppercase tracking-[0.2em] text-mute">Floors</p>
        {floors.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onSelect(f)}
            className={cn(
              "flex w-full px-4 py-3 text-left text-xs uppercase tracking-[0.12em]",
              skill?.id === f.id ? "bg-signal-dim text-signal" : "text-mute hover:text-paper",
            )}
          >
            {f.code}
          </button>
        ))}
      </aside>

      <section className="relative flex min-h-0 flex-col justify-between gap-5 overflow-hidden border-b border-line px-5 py-6 sm:px-8 lg:overflow-auto lg:border-b-0 lg:border-r">
        <SunburstField />
        <div>
          <p className="mb-3 text-kicker uppercase tracking-[0.22em] text-signal">
            {building.kicker}
          </p>
          <h1 className="font-display text-display leading-[0.9] uppercase tracking-wide">
            {skill ? skill.name : building.line}
            <span className="block text-signal">
              {skill ? skill.program : building.accent}
            </span>
          </h1>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-mute">
            {skill ? skill.blurb : building.body}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-signal">
            Jarvis {building.jarvis} — {building.jarvisLine}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {shown ? <Pipeline steps={shown.pipeline} pulse={null} /> : null}
          {skill ? (
            <Button className="w-fit" onClick={() => onLoad(skill.id)}>
              Load into Mini Hydra
            </Button>
          ) : null}
          {buildingId === "meta" ? (
            <>
              <Button variant="line" className="w-fit" onClick={onSend}>
                Send Meta OS package
              </Button>
              <Button variant="line" className="w-fit" asChild>
                <a href="/DISTRICT-WHOP-LISTINGS.txt" download>
                  Send Whop listings
                </a>
              </Button>
            </>
          ) : null}
        </div>
      </section>

      <section className="relative flex min-h-[22rem] items-center justify-center px-2 py-4 lg:min-h-0 lg:overflow-hidden lg:border-r lg:border-line">
        <BuildingPlate
          building={building}
          highlight={skill?.id ?? "none"}
          onSelect={onSelect}
        />
      </section>

      <div className="flex min-h-0 flex-col overflow-auto">
        <aside className="px-5 py-5 sm:px-6">
          {skill?.id === "c-pirr" ? (
            <PirrDesk value={pirr} onChange={onPirr} />
          ) : skill?.id === "c-cube" ? (
            <NineCube value={cube} intent={intent} onChange={onCube} />
          ) : (
            <>
              <p className="mb-3 text-2xs uppercase tracking-[0.2em] text-mute">
                {skill ? "Duties" : "Floors"}
              </p>
              <ul className="space-y-2">
                {(skill ? skill.duties : floors.map((f) => ({
                  title: f.name,
                  detail: f.blurb,
                  icon: f.icon,
                }))).map((d) => (
                  <li key={d.title} className="flex gap-3 border border-line p-3">
                    <span className="flex size-8 shrink-0 items-center justify-center border border-signal text-signal">
                      <DutyIcon name={d.icon} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em]">{d.title}</span>
                      <span className="mt-1 block text-xs text-mute">{d.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
        <AegisRail log={log} compact />
      </div>
    </div>
  );
}

function AegisRail({ log, compact }: { log: string[]; compact?: boolean }) {
  return (
    <aside
      className={cn(
        "border-line px-5 py-5 sm:px-6",
        compact ? "border-t" : "border-t lg:border-l lg:border-t-0",
      )}
    >
      <p className="mb-3 text-2xs uppercase tracking-[0.2em] text-mute">Aegis · assistant</p>
      <ul className="space-y-3">
        {log.map((line, i) => (
          <li key={`${i}-${line.slice(0, 12)}`} className="text-xs leading-relaxed text-paper">
            {line}
          </li>
        ))}
      </ul>
    </aside>
  );
}

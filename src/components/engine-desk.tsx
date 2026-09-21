import { Button } from "@/components/ui/button";
import {
  PIRR_CELLS,
  RESOLUTIONS,
  SCENARIOS,
  STORIES,
  compileCube,
  cubeAddress,
  cubeIndex,
  vidyLine,
  type CubePick,
  type PirrKey,
  type PirrState,
} from "@/lib/engines";
import { cn } from "@/lib/utils";

export function PirrDesk({
  value,
  onChange,
}: {
  value: PirrState;
  onChange: (next: PirrState) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-2xs uppercase tracking-[0.2em] text-mute">PIRR · Vidy companion</p>
      <p className="text-xs leading-relaxed text-paper">{vidyLine(value)}</p>
      <div className="grid grid-cols-2 gap-2">
        {PIRR_CELLS.map((cell) => (
          <label key={cell.id} className="border border-line p-3">
            <span className="block text-2xs uppercase tracking-[0.16em] text-signal">
              {cell.code} · {cell.label}
            </span>
            <span className="mt-1 block text-2xs text-mute">{cell.hint}</span>
            <input
              value={value[cell.id]}
              onChange={(e) =>
                onChange({ ...value, [cell.id]: e.target.value } satisfies PirrState)
              }
              placeholder={cell.hint}
              className="mt-2 h-11 w-full border border-line bg-elevated px-2 text-xs text-paper outline-none placeholder:text-mute focus:border-signal"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function Axis({
  title,
  cells,
  selected,
  onPick,
}: {
  title: string;
  cells: { id: number; name: string }[];
  selected: number;
  onPick: (id: number) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-2xs uppercase tracking-[0.18em] text-mute">{title}</p>
      <div className="grid grid-cols-3 gap-1">
        {cells.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onPick(c.id)}
            className={cn(
              "h-11 px-1 text-2xs uppercase tracking-[0.08em]",
              selected === c.id ? "bg-signal text-bg" : "border border-line text-mute hover:text-paper",
            )}
          >
            {c.id} {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export function NineCube({
  value,
  intent,
  onChange,
}: {
  value: CubePick;
  intent: string;
  onChange: (next: CubePick) => void;
}) {
  const addr = cubeAddress(value);
  const page = compileCube(value, intent);
  const idx = cubeIndex(value);

  return (
    <div className="space-y-4">
      <p className="text-2xs uppercase tracking-[0.2em] text-mute">
        HYDRA-999 · story × scenario × resolution
      </p>
      <p className="text-xs text-mute">
        {addr ? `Cell ${addr} · ${idx} of 729` : "Pick one on each axis. 9 × 9 × 9."}
      </p>
      <Axis
        title="Story"
        cells={STORIES}
        selected={value.story}
        onPick={(id) => onChange({ ...value, story: id })}
      />
      <Axis
        title="Scenario"
        cells={SCENARIOS}
        selected={value.scenario}
        onPick={(id) => onChange({ ...value, scenario: id })}
      />
      <Axis
        title="Resolution"
        cells={RESOLUTIONS}
        selected={value.resolution}
        onPick={(id) => onChange({ ...value, resolution: id })}
      />
      {page ? (
        <pre className="overflow-auto border border-line p-3 font-sans text-xs leading-relaxed whitespace-pre-wrap text-paper">
          {page}
        </pre>
      ) : (
        <p className="text-xs text-mute">Cube idle until all three axes lock.</p>
      )}
      {addr ? (
        <Button
          variant="line"
          className="w-fit"
          onClick={() => onChange({ story: 0, scenario: 0, resolution: 0 })}
        >
          Clear cell
        </Button>
      ) : null}
    </div>
  );
}

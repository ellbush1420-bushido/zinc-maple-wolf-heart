import { cn } from "@/lib/utils";

const CX = 100;
const CY = 100;

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [+(CX + r * Math.cos(a)).toFixed(2), +(CY + r * Math.sin(a)).toFixed(2)] as const;
}

/** Compact mill-cut star for the header plate — wide blades so it holds at 28px. */
const MARK_WEDGES = Array.from({ length: 12 }, (_, i) => {
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
const FIELD_WEDGES = Array.from({ length: 12 }, (_, i) => {
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

const TICKS = Array.from({ length: 72 }, (_, i) => {
  const a = i * 5;
  const major = i % 6 === 0;
  const mid = i % 3 === 0;
  const r1 = major ? 94 : mid ? 96.2 : 97.4;
  const [x1, y1] = polar(r1, a);
  const [x2, y2] = polar(99.4, a);
  return { x1, y1, x2, y2, w: major ? 1.1 : 0.55 };
});

const CROSS = [
  [...polar(8, 0), ...polar(88, 0)],
  [...polar(8, 90), ...polar(88, 90)],
] as const;

type Variant = "mark" | "field";

export function Sunburst({
  className,
  variant = "mark",
}: {
  className?: string;
  variant?: Variant;
}) {
  const field = variant === "field";
  const wedges = field ? FIELD_WEDGES : MARK_WEDGES;
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("text-signal", className)}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {wedges.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeLinecap="square">
        <circle cx={CX} cy={CY} r="16.5" strokeWidth={field ? 1.4 : 3.2} />
        <circle cx={CX} cy={CY} r="10" strokeWidth={field ? 1.1 : 2.6} />
        {field ? <circle cx={CX} cy={CY} r="28" strokeWidth="0.7" /> : null}
        {field ? <circle cx={CX} cy={CY} r="99.4" strokeWidth="0.9" /> : null}
        {field
          ? TICKS.map((t) => (
              <line
                key={`${t.x1}-${t.y1}`}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                strokeWidth={t.w}
              />
            ))
          : null}
        {field
          ? CROSS.map(([x1, y1, x2, y2]) => (
              <line
                key={`${x1}-${y1}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth="0.55"
              />
            ))
          : null}
      </g>
      <circle cx={CX} cy={CY} r={field ? 3.6 : 5} fill="currentColor" />
    </svg>
  );
}

export function SunburstField({ className }: { className?: string }) {
  return (
    <div className={cn("sunburst-plate", className)} aria-hidden="true">
      <Sunburst variant="field" className="sunburst-orbit size-full" />
    </div>
  );
}

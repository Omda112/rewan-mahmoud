import { Container } from "@/components/layout/container";
import { HeroScene } from "@/components/three/hero-scene";

type Glyph = "phone" | "bars" | "stack" | "bag" | "grid";

const cards: { title: string; index: string; glyph: Glyph; position: string; visibility: string; size: string }[] = [
  { title: "Mobile app", index: "01", glyph: "phone", position: "left-[0%] top-[7%]", visibility: "flex", size: "w-44 sm:w-52" },
  { title: "Dashboard", index: "02", glyph: "bars", position: "right-0 top-[18%]", visibility: "flex", size: "w-44 sm:w-52" },
  { title: "Fintech", index: "03", glyph: "stack", position: "bottom-[14%] left-[0%]", visibility: "hidden sm:flex", size: "w-44 sm:w-52" },
  { title: "E-commerce", index: "04", glyph: "bag", position: "bottom-[7%] right-[1%]", visibility: "hidden lg:flex", size: "w-48 sm:w-56" },
  { title: "Design system", index: "05", glyph: "grid", position: "right-[8%] top-[56%]", visibility: "hidden lg:flex", size: "w-48 sm:w-52" },
];

function CardGlyph({ glyph }: { glyph: Glyph }) {
  if (glyph === "phone") return <span className="h-9 w-5 rounded-[0.35rem] border-2 border-accent"><span className="mx-auto mt-1 block h-0.5 w-2 rounded-full bg-accent" /></span>;
  if (glyph === "bars") return <span className="flex h-9 items-end gap-1 border-b-2 border-accent pb-1"><span className="h-3 w-1.5 bg-accent" /><span className="h-5 w-1.5 bg-accent" /><span className="h-8 w-1.5 bg-accent" /></span>;
  if (glyph === "stack") return <span className="flex h-9 w-8 flex-col justify-end gap-1"><span className="h-2.5 rounded-full border-2 border-accent" /><span className="h-2.5 rounded-full border-2 border-accent" /><span className="h-2.5 rounded-full border-2 border-accent" /></span>;
  if (glyph === "bag") return <span className="relative h-8 w-7 border-2 border-accent"><span className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-t-full border-x-2 border-t-2 border-accent" /></span>;
  return <span className="grid h-9 w-9 grid-cols-2 gap-1"><span className="border-2 border-accent" /><span className="border-2 border-accent" /><span className="border-2 border-accent" /><span className="border-2 border-accent" /></span>;
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <Container className="pb-[var(--section-space-tight)] pt-[clamp(3.5rem,6vw,6.5rem)]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          <div className="relative z-10 max-w-3xl lg:pb-8">
            <p data-motion="hero-meta" className="meta mb-8 text-muted">UI/UX Designer</p>
            <h1 id="hero-heading" className="display-xl max-w-[9ch] text-[clamp(3rem,6.7vw,6.7rem)] leading-[0.8] tracking-[-0.105em] md:max-w-none">
              <span data-motion="hero-line" className="block">I design</span><span data-motion="hero-line" className="block">digital</span><span data-motion="hero-line" className="block">experiences</span><span data-motion="hero-line" className="block text-muted">that feel alive.</span>
            </h1>

            <div className="mt-9 grid max-w-84 gap-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-6">
              <p data-motion="hero-copy" className="body max-w-80 text-muted">UI/UX designer crafting meaningful<br className="hidden sm:block" /> and interactive digital products.</p>
              <a data-motion="hero-cta" className="flex w-fit items-center gap-4 text-foreground hover:text-accent" href="#work"><span aria-hidden="true" className="grid h-13 w-13 place-items-center rounded-full bg-foreground text-base text-foreground-dark hover:bg-accent sm:h-16 sm:w-16">{"\u2192"}</span><span className="meta">Explore work</span></a>
            </div>
          </div>

          <div data-motion="hero-visual" aria-hidden="true" className="relative mx-auto h-[23rem] w-full max-w-2xl sm:h-[35rem] lg:-ml-[9%] lg:h-[42rem] lg:max-w-none">
            <HeroScene />
            <div className="absolute left-[7%] top-[9%] h-[77%] w-[86%] rounded-[50%] border border-border/80 rotate-[18deg]" />
            <div className="absolute left-[14%] top-[16%] h-[63%] w-[74%] rounded-[50%] border border-foreground/10 -rotate-[28deg]" />
            <div className="absolute left-[9%] top-[49%] h-px w-[79%] rotate-[21deg] bg-border" />
            <div className="absolute left-[18%] top-[33%] h-px w-[73%] -rotate-[32deg] bg-border" />
            <div className="absolute left-1/2 top-1/2 h-[57%] w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20 bg-[radial-gradient(circle_at_30%_24%,rgb(255_255_255_/_96%),rgb(200_204_207_/_84%)_29%,rgb(33_38_42_/_92%)_63%,rgb(213_218_220_/_88%)_100%)] shadow-[0_2.5rem_5rem_rgb(17_17_17_/_22%)]" />
            <div className="absolute left-1/2 top-1/2 h-[36%] w-[77%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[0.65rem] border-[rgb(226_229_229_/_78%)] bg-[linear-gradient(110deg,rgb(17_17_17_/_78%),rgb(247_245_240_/_78%)_38%,rgb(65_70_74_/_88%)_66%,rgb(255_255_255_/_68%))] shadow-[0_1.5rem_3rem_rgb(17_17_17_/_20%)] rotate-[23deg]" />
            <div className="absolute left-1/2 top-1/2 h-[67%] w-[33%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[0.45rem] border-[rgb(242_242_239_/_80%)] bg-[linear-gradient(175deg,rgb(255_255_255_/_38%),rgb(17_17_17_/_55%),rgb(247_245_240_/_64%))] shadow-[0_1rem_2rem_rgb(17_17_17_/_14%)] -rotate-[35deg]" />
            <div className="absolute left-[38%] top-[32%] h-[36%] w-[36%] rounded-full border border-foreground/15 bg-[radial-gradient(circle_at_30%_23%,rgb(255_255_255_/_98%),rgb(230_234_235_/_55%)_50%,rgb(17_17_17_/_42%))] shadow-[inset_-0.8rem_-1rem_1.5rem_rgb(17_17_17_/_20%)]" />
            <div className="absolute left-[57%] top-[35%] h-[10%] w-[10%] rounded-full bg-accent/25 blur-[2px]" />
            <div className="absolute bottom-[24%] left-[25%] h-[7%] w-[7%] rounded-full border border-foreground/15 bg-surface shadow-[0_0.5rem_1rem_rgb(17_17_17_/_15%)]" />
            <div className="absolute bottom-[21%] right-[20%] h-[10%] w-[10%] rounded-full border border-foreground/20 bg-[radial-gradient(circle_at_30%_25%,rgb(255_255_255_/_95%),rgb(42_46_50_/_92%))] shadow-[0_0.75rem_1.5rem_rgb(17_17_17_/_20%)]" />

            {cards.map((card) => <div data-motion="hero-card" key={card.title} className={`absolute z-20 ${card.size} ${card.position} ${card.visibility} flex-col border border-foreground/12 bg-surface/82 p-4 shadow-[0_1rem_2rem_rgb(17_17_17_/_12%)] backdrop-blur-md`}><div className="flex items-start justify-between"><CardGlyph glyph={card.glyph} /><span className="meta text-[0.5625rem] text-muted">{card.index}</span></div><div className="mt-5 flex items-end justify-between"><p className="meta text-[0.625rem] text-foreground">{card.title}</p><span className="grid h-8 w-8 place-items-center rounded-full border border-foreground/15 text-xs text-foreground">{"\u2192"}</span></div></div>)}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-muted lg:mt-0"><p className="meta">Scroll to explore</p><p className="meta">01 / 06</p></div>
      </Container>
    </section>
  );
}

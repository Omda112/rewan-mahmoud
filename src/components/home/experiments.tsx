import { Container } from "@/components/layout/container";

const experiments = [
  { id: "01", title: "Experiment 01", subtitle: "Exploration / Prototype", description: "Exploring product ideas and interaction patterns.", variant: "panels" },
  { id: "02", title: "Experiment 02", subtitle: "Interaction Study", description: "Exploring new ways to interact with digital products.", variant: "object" },
  { id: "03", title: "Experiment 03", subtitle: "Visual Exploration", description: "Exploring visual systems, motion and spatial ideas.", variant: "layers" },
] as const;

function PanelsVisual() {
  return <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_48%_71%,rgb(49_92_255_/_42%),transparent_20%),linear-gradient(145deg,#08090b,#151922_54%,#08090b)]"><div className="absolute inset-x-[9%] bottom-[9%] h-px bg-foreground-dark/10" /><div className="absolute left-[13%] top-[22%] h-[52%] w-[56%] border border-foreground-dark/15" /><div className="absolute left-[27%] top-[18%] h-[60%] w-[43%] rounded-sm border border-foreground-dark/35 bg-[linear-gradient(130deg,rgb(255_255_255_/_18%),rgb(65_95_170_/_7%))] shadow-[0_1.5rem_3rem_rgb(0_0_0_/_45%)]" /><div className="absolute left-[18%] top-[34%] h-[47%] w-[58%] -rotate-[11deg] rounded-md border border-foreground-dark/70 bg-[linear-gradient(135deg,rgb(245_248_255_/_45%),rgb(49_92_255_/_82%)_55%,rgb(7_10_17_/_82%))] shadow-[0_1.5rem_2.5rem_rgb(49_92_255_/_40%)]" /><div className="absolute left-[36%] top-[30%] h-[50%] w-[48%] -rotate-[7deg] rounded-md border border-foreground-dark/30 bg-[linear-gradient(140deg,rgb(196_211_255_/_44%),rgb(13_16_27_/_22%))]" /><div className="absolute bottom-0 left-[11%] h-[26%] w-[69%] -skew-y-[15deg] bg-[linear-gradient(115deg,transparent,rgb(49_92_255_/_35%),transparent)] blur-xl" /></div>;
}

function ObjectVisual() {
  return <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_66%_50%,rgb(49_92_255_/_28%),transparent_19%),linear-gradient(145deg,#050607,#171a20_56%,#08090b)]"><div className="absolute bottom-[-14%] left-[-9%] h-[39%] w-[120%] rounded-[50%] bg-[radial-gradient(ellipse_at_45%_12%,rgb(112_117_130_/_82%),rgb(27_29_34)_35%,#060708_72%)] [clip-path:polygon(0_24%,16%_8%,33%_20%,48%_3%,62%_18%,78%_4%,100%_25%,100%_100%,0_100%)]" /><div className="absolute left-[16%] top-[30%] h-[47%] w-[55%] rotate-[24deg] rounded-md border border-foreground-dark/60 bg-[linear-gradient(130deg,rgb(255_255_255_/_16%),rgb(22_25_33_/_54%))] shadow-[0_1rem_2rem_rgb(0_0_0_/_60%)]" /><div className="absolute left-[46%] top-[35%] size-[27%] rounded-full border border-foreground-dark/35 bg-[radial-gradient(circle_at_68%_35%,#89a4ff,#315cff_15%,#11131a_52%,#020304_70%)] shadow-[0_0_2rem_rgb(49_92_255_/_55%)]" /><div className="absolute left-[25%] top-[28%] h-[45%] w-[58%] rounded-full border border-foreground-dark/35 [transform:rotate(-16deg)_scaleY(.48)]" /><div className="absolute left-[8%] top-[49%] h-px w-[83%] rotate-[12deg] bg-foreground-dark/25" /><div className="absolute left-[51%] top-[17%] h-[64%] w-px bg-foreground-dark/30" /></div>;
}

function LayersVisual() {
  return <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_85%_30%,rgb(49_92_255_/_48%),transparent_25%),linear-gradient(145deg,#060709,#151821_56%,#08090b)]"><div className="absolute left-[17%] top-[18%] h-[30%] w-[62%] -rotate-[16deg] rounded-md border border-foreground-dark/35 bg-[linear-gradient(140deg,rgb(58_92_255_/_80%),rgb(20_27_48_/_24%))]" /><div className="absolute left-[11%] top-[42%] h-[31%] w-[76%] -rotate-[10deg] rounded-sm border border-[#9ab5ff]/65 bg-[#181d28] [background-image:radial-gradient(rgb(154_181_255_/_70%)_1px,transparent_1px)] [background-size:0.5rem_0.5rem] shadow-[0_1rem_2rem_rgb(0_0_0_/_45%)]" /><div className="absolute left-[23%] top-[64%] h-[29%] w-[56%] -rotate-[15deg] rounded-md border border-foreground-dark/45 bg-[#e8e8e5] p-4 shadow-[0_1.5rem_2rem_rgb(0_0_0_/_35%)]"><span className="block h-1.5 w-2/3 bg-foreground/20" /><span className="mt-4 block h-12 w-12 rounded-full border-[0.45rem] border-accent border-t-foreground/20" /><span className="absolute bottom-4 right-4 h-px w-12 bg-foreground/25" /></div><div className="absolute left-[17%] top-[10%] h-[78%] w-px bg-foreground-dark/20" /><div className="absolute right-[13%] top-[12%] h-[68%] w-px bg-foreground-dark/20" /></div>;
}

function ExperimentVisual({ variant }: { variant: (typeof experiments)[number]["variant"] }) {
  if (variant === "panels") return <PanelsVisual />;
  if (variant === "object") return <ObjectVisual />;
  return <LayersVisual />;
}

export function Experiments() {
  return (
    <section id="experiments" aria-labelledby="experiments-heading" className="border-t border-foreground-dark/10 bg-[#0b0c0e] text-foreground-dark">
      <Container className="py-[clamp(5rem,8vw,8rem)]">
        <div className="grid gap-10 xl:grid-cols-[0.27fr_0.73fr] xl:gap-9">
          <header className="flex min-h-full flex-col xl:pr-6">
            <p className="meta flex items-center gap-3 text-foreground-dark/55"><span aria-hidden="true" className="h-px w-9 bg-foreground-dark/30" />Selected experiments</p>
            <h2 id="experiments-heading" className="mt-10 max-w-[7.5ch] font-display text-[clamp(3rem,4.8vw,4.9rem)] font-[650] leading-[0.84] tracking-[-0.09em] xl:max-w-none xl:text-[3rem]">EXPLORING<br />IDEAS BEYOND<br /><span className="text-foreground-dark/50">THE EXPECTED.</span></h2>
            <p className="body mt-7 max-w-[19rem] text-foreground-dark/60">A collection of explorations, prototypes and experiments focused on interaction, visual systems and digital ideas.</p>
            <div aria-hidden="true" className="mt-auto hidden gap-3 pt-12 xl:flex"><span className="grid size-14 place-items-center rounded-full border border-foreground-dark/70 text-lg">←</span><span className="grid size-14 place-items-center rounded-full border border-foreground-dark/70 text-lg">→</span></div>
          </header>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {experiments.map((experiment) => <article key={experiment.id} className="grid min-h-[33rem] grid-rows-[minmax(18rem,1.35fr)_minmax(15rem,0.65fr)] overflow-hidden border border-foreground-dark/20 bg-[#0d0e10] md:min-h-[34rem] xl:min-h-[43rem] xl:grid-rows-[minmax(28rem,1.65fr)_minmax(15rem,0.5fr)]"><div className="relative border-b border-foreground-dark/15"><div className="absolute left-7 top-7 z-10 flex items-center gap-3"><p className="meta text-foreground-dark/70">{experiment.id}</p><span className="h-px w-9 bg-foreground-dark/35" /></div><ExperimentVisual variant={experiment.variant} /></div><div className="flex flex-col p-7"><p className="meta text-foreground-dark/50">{experiment.subtitle}</p><h3 className="mt-4 font-display text-[clamp(2rem,2.4vw,2.8rem)] font-[650] leading-none tracking-[-0.07em]">{experiment.title}</h3><p className="body mt-3 max-w-[16rem] text-foreground-dark/60">{experiment.description}</p></div></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}

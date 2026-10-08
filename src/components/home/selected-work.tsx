import Image from "next/image";
import { Container } from "@/components/layout/container";
import { type ApprovedProjectMedia, type PortfolioProject, portfolioProjects } from "@/content/projects";

const [rashan, banka, taskly] = portfolioProjects;

function projectScreenMedia(project: PortfolioProject, viewport: "mobile" | "desktop") {
  return project.media?.find((media) => media.slot === "device-screen" && media.viewport === viewport);
}

function DeviceScreenMedia({ media, className, sizes }: { media: ApprovedProjectMedia; className: string; sizes: string }) {
  return (
    <div className={"absolute z-10 overflow-hidden bg-white " + className}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        style={{ objectFit: media.objectFit ?? "cover", objectPosition: media.objectPosition ?? "center" }}
      />
    </div>
  );
}

function RashanScreenContent({ media }: { media?: ApprovedProjectMedia }) {
  if (media) {
    return <DeviceScreenMedia media={media} className="inset-x-3 bottom-3 top-[4.25rem] rounded-[1.15rem]" sizes="(min-width: 1280px) 22vw, (min-width: 768px) 54vw, 58vw" />;
  }

  return <>
    <div className="mt-4 flex items-center justify-between px-1"><span className="h-1.5 w-10 rounded-full bg-foreground/10" /><span className="h-3 w-3 rounded-full border border-foreground/15" /></div>
    <div className="mt-5 h-7 rounded-md border border-foreground/10 bg-white px-3 py-2"><span className="block h-1.5 w-2/3 rounded-full bg-foreground/10" /></div>
    <div className="mt-4 flex gap-2 text-[0.45rem]"><span className="rounded-full bg-accent px-2 py-1 text-white">All</span><span className="rounded-full bg-foreground/6 px-2 py-1">Fresh</span><span className="rounded-full bg-foreground/6 px-2 py-1">Food</span></div>
    <div className="mt-5 h-[25%] rounded-xl bg-[linear-gradient(130deg,rgb(235_237_226),rgb(255_255_255)_45%,rgb(204_214_192))] p-3"><span className="block h-2 w-2/3 rounded-full bg-foreground/15" /><span className="mt-2 block h-2 w-1/2 rounded-full bg-foreground/10" /><span className="mt-6 block h-7 w-7 rounded-full bg-[#bdc59f]" /></div>
    <div className="mt-5 grid grid-cols-2 gap-2"><div className="rounded-lg bg-foreground/5 p-2"><div className="mx-auto h-9 w-9 rounded-full bg-[#dbb78a]" /><span className="mt-2 block h-1.5 w-2/3 rounded-full bg-foreground/12" /></div><div className="rounded-lg bg-foreground/5 p-2"><div className="mx-auto h-9 w-9 rounded-full bg-[#e0ca65]" /><span className="mt-2 block h-1.5 w-2/3 rounded-full bg-foreground/12" /></div></div>
  </>;
}

export function SelectedWork() {
  const rashanScreen = projectScreenMedia(rashan, "mobile");
  const bankaScreen = projectScreenMedia(banka, "desktop");
  const tasklyScreen = projectScreenMedia(taskly, "desktop");

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-background">
      <Container className="pb-[clamp(5rem,7vw,7rem)] pt-[clamp(5rem,7vw,7rem)]">
        <div className="grid gap-10 xl:grid-cols-[0.26fr_0.4fr_0.34fr] xl:gap-3">
          <div className="max-w-xs pt-3 lg:pr-8">
            <p className="meta flex items-center gap-3 text-muted"><span aria-hidden="true" className="h-px w-9 bg-border" />Selected work</p>
            <h2 id="work-heading" className="mt-9 font-display text-[clamp(3.1rem,4.6vw,4.7rem)] font-[650] leading-[0.84] tracking-[-0.09em] xl:text-[3.5rem]">
              PRODUCTS<br />THAT MAKE<br /><span className="text-muted">AN IMPACT.</span>
            </h2>
            <p className="body mt-7 max-w-[18rem] text-muted">A selection of recent work, exploring real problems through design, strategy and technology.</p>
          </div>

          <article aria-labelledby={`${rashan.slug}-title`} className="relative min-h-[40rem] overflow-hidden border border-foreground/15 bg-[#101112] text-foreground-dark md:col-span-2 md:min-h-[38rem] xl:col-span-1 xl:min-h-[48rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_41%,rgb(92_99_105_/_44%),transparent_40%),linear-gradient(145deg,rgb(13_14_15),rgb(30_32_34)_58%,rgb(10_11_12))]" />
            <div aria-hidden="true" className="absolute -bottom-[9%] -left-[15%] h-[31%] w-[70%] rotate-[13deg] bg-[radial-gradient(ellipse_at_center,rgb(124_126_126_/_48%),rgb(22_23_24)_70%)] blur-[1px]" />
            <div aria-hidden="true" className="absolute bottom-[-8%] right-[-8%] h-[32%] w-[68%] -rotate-[12deg] bg-[radial-gradient(ellipse_at_center,rgb(114_116_116_/_48%),rgb(19_20_21)_70%)]" />

            <div className="relative z-30 flex h-full min-h-[40rem] flex-col p-7 md:min-h-[38rem] lg:min-h-[48rem] lg:p-9">
              <div className="flex items-center gap-3"><p className="meta text-foreground-dark/60">{rashan.index} / Concept project</p><span aria-hidden="true" className="h-px w-9 bg-foreground-dark/35" /></div>
              <div className="mt-12 max-w-[12rem] md:mt-13 lg:mt-15"><h3 id={`${rashan.slug}-title`} className="font-display text-[clamp(2.6rem,3.7vw,4rem)] font-[650] leading-none tracking-[-0.08em]">{rashan.title}</h3><p className="body mt-5 text-foreground-dark/75">{rashan.description}</p></div>
              <div className="mt-9 space-y-2 md:mt-10">{rashan.tags.map((tag) => <p key={tag} className="meta text-foreground-dark/70">{tag}</p>)}</div>
            </div>

            <div aria-hidden={rashanScreen ? undefined : true} className="absolute right-[-12%] top-[43%] z-20 h-[62%] w-[58%] rotate-[8deg] rounded-[2.25rem] border-[0.55rem] border-[#26282a] bg-[#f6f5f1] p-3 shadow-[-1rem_1.5rem_2.75rem_rgb(0_0_0_/_38%)] md:bottom-[-3%] md:right-[-5%] md:top-auto md:h-[88%] md:w-[57%] lg:bottom-[-2%] lg:right-[-4%] lg:h-[86%] lg:w-[56%]">
              <div className="mx-auto h-5 w-[40%] rounded-b-xl bg-[#111111]" />
              <RashanScreenContent media={rashanScreen} />
            </div>
          </article>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-2">
            <article aria-labelledby={`${banka.slug}-title`} className="relative min-h-[28rem] overflow-hidden border border-border bg-surface p-7 md:min-h-[32rem] lg:min-h-0">
              <div className="relative z-30 flex h-full flex-col"><div className="flex items-center gap-3"><p className="meta text-muted">{banka.index} / Concept project</p><span aria-hidden="true" className="h-px w-9 bg-border" /></div><div className="mt-9 max-w-[9rem] xl:max-w-[12rem]"><h3 id={`${banka.slug}-title`} className="font-display text-[clamp(2.25rem,3.2vw,3.6rem)] font-[650] leading-none tracking-[-0.08em]">{banka.title}</h3><p className="body mt-4 text-muted">{banka.description}</p></div><div className="mt-8 space-y-1.5">{banka.tags.map((tag) => <p key={tag} className="meta text-muted">{tag}</p>)}</div></div>
              <div aria-hidden={bankaScreen ? undefined : true} className="absolute left-[60%] top-[13%] h-[72%] w-[55%] -rotate-[7deg] rounded-[0.75rem] border border-foreground/15 bg-[#181a1c] p-4 shadow-[-1rem_1rem_2rem_rgb(17_17_17_/_22%)] xl:left-auto xl:right-[-17%] xl:w-[68%]">{bankaScreen ? <DeviceScreenMedia media={bankaScreen} className="inset-4 rounded-[0.3rem]" sizes="(min-width: 1280px) 20vw, (min-width: 768px) 47vw, 50vw" /> : <div className="flex h-full gap-3"><div className="w-[19%] space-y-3 border-r border-foreground-dark/10 pr-2"><div className="h-2 w-full rounded-full bg-accent" /><div className="h-1.5 w-2/3 rounded-full bg-foreground-dark/25" /><div className="h-1.5 w-full rounded-full bg-foreground-dark/15" /><div className="h-1.5 w-3/4 rounded-full bg-foreground-dark/15" /></div><div className="flex-1"><div className="rounded-md bg-foreground-dark/8 p-3"><span className="block h-2 w-1/2 rounded-full bg-foreground-dark/30" /><span className="mt-3 block h-4 w-3/4 rounded-full bg-foreground-dark/80" /><div className="mt-4 flex h-18 items-end gap-1"><span className="h-[22%] flex-1 bg-accent" /><span className="h-[46%] flex-1 bg-accent" /><span className="h-[36%] flex-1 bg-accent" /><span className="h-[72%] flex-1 bg-accent" /><span className="h-[58%] flex-1 bg-accent" /></div></div><div className="mt-3 grid grid-cols-3 gap-2"><div className="h-9 rounded bg-foreground-dark/10" /><div className="h-9 rounded bg-foreground-dark/10" /><div className="h-9 rounded bg-foreground-dark/10" /></div></div></div>}</div>
            </article>

            <article aria-labelledby={`${taskly.slug}-title`} className="relative min-h-[28rem] overflow-hidden border border-foreground/15 bg-[#101112] p-7 text-foreground-dark md:min-h-[32rem] lg:min-h-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_33%,rgb(72_77_82_/_43%),transparent_36%),linear-gradient(135deg,rgb(11_12_13),rgb(24_26_28))]" />
              <div className="relative z-30 flex h-full flex-col"><div className="flex items-center gap-3"><p className="meta text-foreground-dark/60">{taskly.index} / Concept project</p><span aria-hidden="true" className="h-px w-9 bg-foreground-dark/35" /></div><div className="mt-9 max-w-[9rem] xl:max-w-[13rem]"><h3 id={`${taskly.slug}-title`} className="font-display text-[clamp(2.25rem,3.2vw,3.6rem)] font-[650] leading-none tracking-[-0.08em]">{taskly.title}</h3><p className="body mt-4 text-foreground-dark/70">{taskly.description}</p></div><div className="mt-8 space-y-1.5">{taskly.tags.map((tag) => <p key={tag} className="meta text-foreground-dark/70">{tag}</p>)}</div></div>
              <div aria-hidden={tasklyScreen ? undefined : true} className="absolute left-[60%] top-[16%] h-[75%] w-[55%] rotate-[8deg] rounded-[0.8rem] border border-foreground/15 bg-[#f7f5f0] p-3 shadow-[-1rem_1rem_2rem_rgb(0_0_0_/_35%)] xl:left-auto xl:right-[-13%] xl:w-[68%]">{tasklyScreen ? <DeviceScreenMedia media={tasklyScreen} className="inset-3 rounded-[0.45rem]" sizes="(min-width: 1280px) 20vw, (min-width: 768px) 47vw, 50vw" /> : <div className="flex h-full gap-3"><div className="w-[20%] space-y-3 border-r border-foreground/10 pr-2"><div className="h-2 w-full rounded-full bg-accent" /><div className="h-1.5 w-2/3 rounded-full bg-foreground/15" /><div className="h-1.5 w-full rounded-full bg-foreground/10" /><div className="h-1.5 w-3/4 rounded-full bg-foreground/10" /></div><div className="flex-1"><div className="flex items-center justify-between"><span className="h-2 w-1/3 rounded-full bg-foreground/15" /><span className="rounded-md bg-accent px-2 py-1 text-[0.4rem] text-white">New task</span></div><div className="mt-4 space-y-2">{[1, 2, 3, 4].map((task) => <div key={task} className="flex items-center gap-2 rounded-md border border-foreground/8 p-2"><span className="h-2.5 w-2.5 rounded-full border border-foreground/20" /><span className="h-1.5 flex-1 rounded-full bg-foreground/12" /><span className="h-1.5 w-6 rounded-full bg-foreground/8" /></div>)}</div></div></div>}</div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

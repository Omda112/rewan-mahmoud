import { Container } from "@/components/layout/container";

const pillars = [
  ["01", "UX strategy", "Understanding flows, hierarchy and user intent."],
  ["02", "Interface design", "Building clear, scalable visual systems."],
  ["03", "Interaction", "Making digital products feel responsive and alive."],
] as const;

export function DesignApproach() {
  return <section id="experience" aria-labelledby="approach-heading" className="surface-dark"><Container className="pb-[var(--section-space-tight)] pt-[var(--section-space-wide)]"><div className="grid gap-[var(--layout-gap-lg)] lg:grid-cols-[0.8fr_1.2fr]"><div><p className="meta text-foreground-dark/55">Design approach</p><div aria-hidden="true" className="mt-7 h-px w-16 bg-border-dark" /></div><h2 id="approach-heading" className="display-lg max-w-[8ch]">Design that serves a purpose.</h2></div><ol className="mt-[var(--layout-gap-lg)] border-t border-border-dark"><li className="grid gap-5 border-b border-border-dark py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(13rem,0.8fr)] md:items-start md:gap-8"><p className="meta text-foreground-dark/50">{pillars[0][0]}</p><h3 className="heading">{pillars[0][1]}</h3><p className="body max-w-xs text-foreground-dark/65">{pillars[0][2]}</p></li><li className="grid gap-5 border-b border-border-dark py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(13rem,0.8fr)] md:items-start md:gap-8"><p className="meta text-foreground-dark/50">{pillars[1][0]}</p><h3 className="heading">{pillars[1][1]}</h3><p className="body max-w-xs text-foreground-dark/65">{pillars[1][2]}</p></li><li className="grid gap-5 border-b border-border-dark py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(13rem,0.8fr)] md:items-start md:gap-8"><p className="meta text-foreground-dark/50">{pillars[2][0]}</p><h3 className="heading">{pillars[2][1]}</h3><p className="body max-w-xs text-foreground-dark/65">{pillars[2][2]}</p></li></ol></Container></section>;
}

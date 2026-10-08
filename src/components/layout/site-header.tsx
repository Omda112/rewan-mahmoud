import { Container } from "@/components/layout/container";

export function SiteHeader() {
  return (
    <header data-motion="header" className="pt-6 sm:pt-7">
      <Container className="grid grid-cols-[1fr_auto] items-center gap-x-4 border-t border-border pt-6 lg:grid-cols-[1fr_auto_1fr]">
        <a className="text-[clamp(1.5rem,2.4vw,2.5rem)] font-black leading-none tracking-[-0.08em]" href="#top">
          KANZAYA
        </a>

        <nav aria-label="Primary navigation" className="lg:col-start-2">
          <ul className="flex items-center gap-3 text-[0.625rem] font-medium uppercase tracking-[0.08em] sm:gap-6">
            <li><a className="border-b border-transparent pb-1 hover:border-foreground focus-visible:border-accent" href="#work">Work</a></li>
            <li><a className="border-b border-transparent pb-1 hover:border-foreground focus-visible:border-accent" href="#about">About</a></li>
            <li className="hidden sm:list-item"><a className="border-b border-transparent pb-1 hover:border-foreground focus-visible:border-accent" href="#experience">Experience</a></li>
            <li><a className="border-b border-transparent pb-1 hover:border-foreground focus-visible:border-accent" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="col-start-3 hidden justify-self-end lg:flex lg:items-center lg:gap-6">
          <p className="meta text-muted">UI/UX Designer</p>
          <span aria-hidden="true" className="h-6 w-px bg-border" />
          <p className="meta text-foreground">2026</p>
        </div>
      </Container>
    </header>
  );
}

"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reveal = (targets: Element[], trigger: Element, stagger = 0) => {
  if (!targets.length) return;
  ScrollTrigger.create({ trigger, start: "top 78%", once: true, onEnter: () => gsap.from(targets, { opacity: 0, y: 14, duration: 0.8, ease: "power3.out", stagger }) });
};

export function HomeMotion() {
  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const context = gsap.context(() => {
      const header = document.querySelector("[data-motion='header']");
      if (header) gsap.from(header, { opacity: 0, y: 9, duration: 0.6, ease: "power2.out" });
      const hero = document.querySelector("#top");
      if (hero) {
        const meta = hero.querySelector("[data-motion='hero-meta']");
        const lines = [...hero.querySelectorAll("[data-motion='hero-line']")];
        const copy = hero.querySelector("[data-motion='hero-copy']");
        const cta = hero.querySelector("[data-motion='hero-cta']");
        const visual = hero.querySelector("[data-motion='hero-visual']");
        const cards = [...hero.querySelectorAll("[data-motion='hero-card']")];
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (meta) timeline.from(meta, { opacity: 0, y: 14, duration: 0.55 });
        timeline.from(lines, { opacity: 0, y: 20, duration: 0.8, stagger: 0.07 }, "-=0.3");
        if (copy) timeline.from(copy, { opacity: 0, y: 14, duration: 0.65 }, "-=0.45");
        if (cta) timeline.from(cta, { opacity: 0, y: 10, scale: 0.99, duration: 0.6 }, "<0.05");
        if (visual) timeline.from(visual, { opacity: 0, y: 14, scale: 0.975, duration: 0.95 }, "-=0.7");
        timeline.from(cards, { opacity: 0, y: 12, scale: 0.99, duration: 0.6, stagger: 0.06 }, "-=0.55");
        if (window.matchMedia("(min-width: 768px)").matches && visual) {
          const text = hero.querySelector(".relative.z-10");
          const exit = gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.5 } });
          if (text) exit.to(text, { y: -32 }, 0);
          exit.to(visual, { y: -18 }, 0).to(cards, { y: -10, stagger: 0.02 }, 0);
        }
      }
      const work = document.querySelector("#work");
      if (work) {
        const intro = work.querySelector("#work-heading")?.parentElement;
        const rashan = work.querySelector("#rashan-title")?.closest("article");
        const banka = work.querySelector("#banka-title")?.closest("article");
        const taskly = work.querySelector("#taskly-title")?.closest("article");
        reveal(intro ? [intro] : [], work);
        if (window.matchMedia("(min-width: 768px)").matches) {
          const projects = [rashan, banka, taskly].filter((item): item is HTMLElement => item instanceof HTMLElement);
          ScrollTrigger.create({ trigger: rashan ?? work, start: "top 78%", once: true, onEnter: () => gsap.from(projects, { opacity: 0, y: 16, scale: 0.994, duration: 0.85, ease: "power3.out", stagger: 0.07 }) });
        } else {
          [rashan, banka, taskly].filter((item): item is HTMLElement => item instanceof HTMLElement).forEach((project) => {
            ScrollTrigger.create({ trigger: project, start: "top 82%", once: true, onEnter: () => gsap.from(project, { opacity: 0, y: 12, scale: 0.996, duration: 0.72, ease: "power3.out" }) });
          });
        }
      }
      const experiments = document.querySelector("#experiments");
      if (experiments) {
        const intro = experiments.querySelector("#experiments-heading")?.parentElement;
        const cards = [...experiments.querySelectorAll("article")];
        reveal(intro ? [intro] : [], experiments);
        if (window.matchMedia("(min-width: 768px)").matches) {
          ScrollTrigger.create({ trigger: cards[0] ?? experiments, start: "top 78%", once: true, onEnter: () => gsap.from(cards, { opacity: 0, y: 16, scale: 0.994, duration: 0.82, ease: "power3.out", stagger: 0.07 }) });
        } else cards.forEach((card) => ScrollTrigger.create({ trigger: card, start: "top 82%", once: true, onEnter: () => gsap.from(card, { opacity: 0, y: 12, scale: 0.996, duration: 0.72, ease: "power3.out" }) }));
      }
      const about = document.querySelector("#about");
      if (about) {
        const heading = about.querySelector("#about-heading");
        const text = heading?.parentElement;
        const visual = text?.nextElementSibling;
        const capabilities = [...about.querySelectorAll("h3")].map((heading) => heading.parentElement).filter((item): item is HTMLElement => item instanceof HTMLElement);
        if (text) {
          ScrollTrigger.create({ trigger: about, start: "top 80%", once: true, onEnter: () => {
            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline.from(text.children, { opacity: 0, y: 10, duration: 0.78, stagger: 0.06 });
            if (visual) timeline.from(visual, { opacity: 0, y: 10, scale: 0.99, duration: 0.9 }, "-=0.55");
          } });
        }
        if (window.matchMedia("(min-width: 768px)").matches) reveal(capabilities, capabilities[0] ?? about, 0.08);
        else capabilities.forEach((capability) => reveal([capability], capability));
      }
      const approach = document.querySelector("#experience");
      if (approach) {
        reveal([...(approach.querySelectorAll("h2, ol > li"))], approach, 0.08);
        const rule = approach.querySelector("div[aria-hidden='true']");
        if (rule) ScrollTrigger.create({ trigger: approach, start: "top 80%", once: true, onEnter: () => gsap.from(rule, { scaleX: 0, transformOrigin: "left", duration: 0.7, ease: "power2.out" }) });
      }
      const contact = document.querySelector("#contact");
      if (contact) {
        const heading = contact.querySelector("h2");
        const circle = contact.querySelector("div[aria-hidden='true']:not(.absolute)");
        reveal(heading ? [heading] : [], contact);
        if (circle) ScrollTrigger.create({ trigger: contact, start: "top 78%", once: true, onEnter: () => gsap.from(circle, { opacity: 0, scale: 0.97, duration: 0.8, ease: "power3.out" }) });
        reveal([...(contact.querySelectorAll(".grid.gap-7 > *"))], contact, 0.07);
      }
    });
    return () => context.revert();
  }, []);

  return null;
}

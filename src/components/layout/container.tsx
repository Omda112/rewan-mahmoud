import type { ComponentPropsWithoutRef } from "react";

type ContainerElement = "div" | "section" | "header" | "footer" | "main";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: ContainerElement;
};

export function Container({
  as: Component = "div",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[var(--content-max)] px-[var(--page-gutter)] ${className}`.trim()}
      {...props}
    />
  );
}

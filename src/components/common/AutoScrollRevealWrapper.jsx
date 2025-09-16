import ScrollReveal from "./ScrollReveal";
import { Children, isValidElement } from "react";

const variantOptions = [
  "slide-left",
  "slide-right",
  "slide-up",
  "fade",
  "blur",
];

export default function AutoScrollRevealWrapper({ children }) {
  return (
    <>
      {Children.map(children, (child, i) =>
        isValidElement(child) ? (
          <ScrollReveal
            delay={i * 0.15}
            variant={variantOptions[i % variantOptions.length]} // rotate through
          >
            {child}
          </ScrollReveal>
        ) : (
          child
        )
      )}
    </>
  );
}

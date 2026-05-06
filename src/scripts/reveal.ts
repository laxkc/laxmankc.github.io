import { animate, inView, stagger } from "motion";

// Global motion system tokens — keep in sync across all section scripts
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.5;
const STAGGER = 0.08;

/**
 * Wires up scroll-reveal animations.
 *
 * Mark elements with one of:
 *   data-reveal                              — the element fades + slides up when in view
 *   data-reveal-group                        — direct children stagger when the group enters view
 *   data-reveal-group data-reveal-direction="x" — children slide in from the left instead of up
 *
 * Honors prefers-reduced-motion (does nothing if the user prefers reduced motion).
 * Initial hidden state is set by CSS, so reduced-motion users see content immediately.
 */
export function setupReveal() {
	if (typeof window === "undefined") return;
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
		inView(el, () => {
			animate(el, { opacity: 1, y: 0 }, { duration: DURATION, ease: EASE_OUT });
		});
	});

	document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((parent) => {
		const direction = parent.dataset.revealDirection ?? "y";
		const children = Array.from(parent.children) as HTMLElement[];
		if (children.length === 0) return;
		inView(parent, () => {
			const target =
				direction === "x"
					? { opacity: 1, x: 0 }
					: direction === "fade"
						? { opacity: 1 }
						: { opacity: 1, y: 0 };
			animate(children, target, {
				duration: DURATION,
				delay: stagger(STAGGER),
				ease: EASE_OUT,
			});
		});
	});
}

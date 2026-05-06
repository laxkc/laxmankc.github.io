import { animate, inView, stagger } from "motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.6;
const STAGGER = 0.08;
const Y_OFFSET = 20;

/**
 * Wires up scroll-reveal animations.
 *
 * Mark elements with one of:
 *   data-reveal             — the element fades + slides up when in view
 *   data-reveal-group       — direct children stagger when the group enters view
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
		const children = Array.from(parent.children) as HTMLElement[];
		if (children.length === 0) return;
		inView(parent, () => {
			animate(
				children,
				{ opacity: 1, y: 0 },
				{ duration: DURATION, delay: stagger(STAGGER), ease: EASE_OUT },
			);
		});
	});
}

void Y_OFFSET;

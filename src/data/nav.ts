export const navLinks = [
	{ label: "Work", href: "#work" },
	{ label: "Thinking", href: "#thinking" },
	{ label: "Experience", href: "#experience" },
	{ label: "Stack", href: "#stack" },
] as const;

// All sections the scroll-spy should track, including ones not shown in the nav.
// When the user scrolls into a non-nav section (e.g. "education"), the navbar
// clears its active state instead of leaving a stale link highlighted.
export const spySections = ["work", "thinking", "experience", "stack", "education"] as const;

export const socials = [
	{ platform: "github", label: "GitHub", href: "https://github.com/laxkc" },
	{ platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/laxmankc" },
	// { platform: "x", label: "X", href: "https://x.com/laxmankc" },
	{ platform: "email", label: "Email", href: "mailto:laxk4025@gmail.com" },
] as const;

export type SocialPlatform = (typeof socials)[number]["platform"];

export const navLinks = [
	{ label: "Work", href: "#work" },
	{ label: "Thinking", href: "#thinking" },
	{ label: "Experience", href: "#experience" },
	{ label: "Stack", href: "#stack" },
	// { label: "Contact", href: "#contact" },
] as const;

export const socials = [
	{ platform: "github", label: "GitHub", href: "https://github.com/laxkc" },
	{ platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/laxmankc" },
	// { platform: "x", label: "X", href: "https://x.com/laxmankc" },
	{ platform: "email", label: "Email", href: "mailto:laxk4025@gmail.com" },
] as const;

export type SocialPlatform = (typeof socials)[number]["platform"];

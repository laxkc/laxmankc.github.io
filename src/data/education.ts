export interface EducationEntry {
	type: string;
	title: string;
	institution: string;
	location: string;
	period: string;
	bullets: string[];
}

export const education: EducationEntry[] = [
	{
		type: "Postgraduate Certificate",
		title: "Mental Health",
		institution: "Cambrian College",
		location: "Sudbury, ON, Canada",
		period: "2025 — 2026",
		bullets: [
			"Focused on mental health systems, human behavior, communication and applied psychology.",
			"Strengthening empathy, active listening and client-centered support skills.",
			"Bridging technology with human-centered thinking.",
		],
	},
	{
		type: "Diploma",
		title: "Computer Programming & IoT",
		institution: "Cambrian College",
		location: "Sudbury, ON, Canada",
		period: "2024 — 2025",
		bullets: [
			"Core focus on software engineering, data structures, databases and IoT systems.",
			"Hands-on experience with full-stack development, APIs and system design.",
			"Built strong foundation in problem-solving and real-world application.",
		],
	},
];

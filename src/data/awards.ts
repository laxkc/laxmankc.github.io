export interface AwardEntry {
	place: 1 | 2 | 3;
	placeLabel: string;
	event: string;
	organization: string;
	year: number;
	description: string;
	tags: string[];
}

export const awards: AwardEntry[] = [
	{
		place: 1,
		placeLabel: "1st Place",
		event: "Google DevFest 2024",
		organization: "GDG Sudbury",
		year: 2024,
		description:
			"Built an ML optimization system for open-pit mining workflows that improved efficiency and resource planning.",
		tags: ["Python", "Machine Learning", "Optimization", "Pandas"],
	},
	{
		place: 2,
		placeLabel: "2nd Place",
		event: "AI Hackathon 2025",
		organization: "Cambrian College",
		year: 2025,
		description:
			"Developed an AI-powered dashboard that generates insights from CSV/Excel uploads, enabling data-driven decision making.",
		tags: ["Python", "Pandas", "Data Analysis", "Dashboards"],
	},
];

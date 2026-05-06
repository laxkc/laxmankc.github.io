export type StackIcon =
	| "code-xml"
	| "layout-dashboard"
	| "server"
	| "database"
	| "brain"
	| "cloud";

export interface StackCategory {
	title: string;
	icon: StackIcon;
	items: string[];
}

export const stack: StackCategory[] = [
	{
		title: "Languages",
		icon: "code-xml",
		items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
	},
	{
		title: "Frontend",
		icon: "layout-dashboard",
		items: ["React", "Next.js", "Flutter", "Astro", "Tailwind"],
	},
	{
		title: "Backend",
		icon: "server",
		items: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "OpenAPI"],
	},
	{
		title: "Data",
		icon: "database",
		items: ["Postgres", "ClickHouse", "MongoDB", "SQLite", "Vector DBs"],
	},
	{
		title: "AI / ML",
		icon: "brain",
		items: ["LangChain", "LangGraph", "RAG", "MCP", "scikit-learn"],
	},
	{
		title: "DevOps & Tools",
		icon: "cloud",
		items: ["AWS", "Azure", "Docker", "GitHub Actions", "Pytest", "Git"],
	},
];

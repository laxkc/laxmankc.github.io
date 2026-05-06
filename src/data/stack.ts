export type StackIcon =
	| "code-xml"
	| "layout-dashboard"
	| "server"
	| "database"
	| "brain"
	| "cloud";

export interface StackItem {
	name: string;
	icon?: string; // iconify name e.g. "simple-icons:react"
	color?: string; // brand hex color
}

export interface StackCategory {
	title: string;
	icon: StackIcon;
	items: StackItem[];
}

export const stack: StackCategory[] = [
	{
		title: "Languages",
		icon: "code-xml",
		items: [
			{ name: "Python", icon: "simple-icons:python", color: "#4B8BBE" },
			{ name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
			{ name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
			{ name: "C/C++", icon: "simple-icons:cplusplus", color: "#649AD2" },
			{ name: "SQL", icon: "simple-icons:postgresql", color: "#4169E1" },
		],
	},
	{
		title: "Frontend",
		icon: "layout-dashboard",
		items: [
			{ name: "React", icon: "simple-icons:react", color: "#61DAFB" },
			{ name: "Next.js", icon: "simple-icons:nextdotjs", color: "#FFFFFF" },
			{ name: "Flutter", icon: "simple-icons:flutter", color: "#54C5F8" },
			{ name: "Astro", icon: "simple-icons:astro", color: "#BC52EE" },
			{ name: "Tailwind", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
		],
	},
	{
		title: "Backend",
		icon: "server",
		items: [
			{ name: "FastAPI", icon: "simple-icons:fastapi", color: "#22D3B5" },
			{ name: "Node.js", icon: "simple-icons:nodedotjs", color: "#83C745" },
			{ name: "REST APIs", icon: "simple-icons:swagger", color: "#85EA2D" },
			{ name: "WebSockets", icon: "simple-icons:socketdotio", color: "#FFFFFF" },
			{ name: "OpenAPI", icon: "simple-icons:openapiinitiative", color: "#9CD850" },
		],
	},
	{
		title: "Data",
		icon: "database",
		items: [
			{ name: "Postgres", icon: "simple-icons:postgresql", color: "#6BA9F8" },
			{ name: "ClickHouse", icon: "simple-icons:clickhouse", color: "#FFCC01" },
			{ name: "MongoDB", icon: "simple-icons:mongodb", color: "#5BC964" },
			{ name: "SQLite", icon: "simple-icons:sqlite", color: "#3DC4F2" },
			{ name: "Vector DBs", icon: "simple-icons:qdrant", color: "#FF4060" },
		],
	},
	{
		title: "AI / ML",
		icon: "brain",
		items: [
			{ name: "LangChain", icon: "simple-icons:langchain", color: "#FFFFFF" },
			{ name: "LangGraph", icon: "simple-icons:langgraph", color: "#FFFFFF" },
			{ name: "RAG", icon: "simple-icons:openai", color: "#FFFFFF" },
			{ name: "MCP", icon: "simple-icons:anthropic", color: "#FFFFFF" },
			{ name: "scikit-learn", icon: "simple-icons:scikitlearn", color: "#F7931E" },
		],
	},
	{
		title: "DevOps & Tools",
		icon: "cloud",
		items: [
			{ name: "AWS", icon: "simple-icons:amazonwebservices", color: "#FF9900" },
			{ name: "Azure", icon: "simple-icons:microsoftazure", color: "#3DA9F5" },
			{ name: "Docker", icon: "simple-icons:docker", color: "#4FB1F5" },
			{ name: "GitHub Actions", icon: "simple-icons:githubactions", color: "#5CA8FF" },
			{ name: "Pytest", icon: "simple-icons:pytest", color: "#3DC4F2" },
			{ name: "Git", icon: "simple-icons:git", color: "#FF6F47" },
		],
	},
];

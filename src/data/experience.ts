export interface Role {
	date: string;
	role: string;
	company: string;
	companyUrl?: string;
	location: string;
	bullets: string[];
	tech: string[];
}

export const experience: Role[] = [
	{
		date: "Dec 2024 — Present",
		role: "Full-Stack Software Developer (R&D)",
		company: "Cambrian College – R&D",
		location: "Sudbury, ON, Canada",
		bullets: [
			"Designed and shipped Rokion telemetry pipelines processing 90k+ records/day per vehicle; achieved sub-300ms ClickHouse query latency powering APIs, dashboards, and ML.",
			"Shipped Grantagg, a multi-tenant CRM with workflow-driven RBAC; owned end-to-end Azure delivery — CI/CD, isolated test/prod envs, automated backups.",
			"Built Spornado, a production ML pipeline for crop disease classification driving a 3-tier action policy.",
			"Engineered Noun AI, an agent platform with MCP tool layer, web-search and WhatsApp integrations.",
		],
		tech: [
			"TypeScript",
			"Node.js",
			"React",
			"Flutter",
			"Postgres",
			"ClickHouse",
			"Azure",
			"GitHub Actions",
			"scikit-learn",
			"MCP",
		],
	},
	{
		date: "Jan 2024 — Nov 2024",
		role: "Full-Stack Software Developer",
		company: "The Alpha Nova",
		location: "Sudbury, ON, Canada",
		bullets: [
			"Built WheelIt, a ride-sharing platform (Flutter + FastAPI) with real-time WebSocket driver–rider matching.",
			"Established multi-tier testing coverage — unit, integration, API, E2E with Playwright — cutting regressions.",
			"Containerized backend with Docker; built GitLab CI/CD pipelines for consistent builds and faster releases.",
			"Shipped English/French i18n across mobile and web, standardizing translations across user-facing flows.",
		],
		tech: [
			"Flutter",
			"FastAPI",
			"Postgres",
			"WebSockets",
			"Docker",
			"GitLab CI/CD",
			"Playwright",
		],
	},
];

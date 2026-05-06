---
title: "EventFlow"
year: 2026
role: "Solo build"
summary: "Production-grade event-driven job platform — FastAPI, Kafka, Redis. Decoupled auth, jobs, and notifications via async messaging; real-time updates over WebSockets; distributed tracing for reliability at scale."
cover: "/works/event_flow.png"
tags: ["Python", "FastAPI", "Kafka", "Redis", "WebSockets"]
featured: true
order: 1
href: "https://github.com/laxkc/eventflow-jobs-platform"
---

EventFlow is an event-driven jobs platform built around async messaging. Authentication, job management, and notifications are decoupled into independent services that communicate through Kafka, with Redis providing real-time pub/sub and caching. WebSocket-backed live updates keep the UI in sync, and distributed tracing across services preserves observability under load.

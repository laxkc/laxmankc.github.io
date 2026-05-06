---
title: "Naphaa"
year: 2026
role: "Solo build"
summary: "Offline-first SME platform for small shops — sales, inventory, credit, and expense management. Mobile client runs fully on local SQLite when disconnected; sync layer reconciles with Postgres on reconnect."
cover: "/hero-section.png"
tags: ["Flutter", "FastAPI", "Postgres", "SQLite"]
featured: true
order: 4
href: "https://naphaa.vercel.app"
---

Naphaa is built for small shop owners working in low-connectivity environments. The Flutter client is fully functional offline against a local SQLite store; when the device comes back online, a reconciliation layer syncs deltas with the FastAPI + Postgres backend. The data model handles partial sales, credit ledgers, and inventory adjustments without conflict.

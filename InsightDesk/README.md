# InsightDesk
AI-assisted Incident & Knowledge Hub

## Stack
- Backend: .NET 8 (Clean Architecture: Domain, Application, Infrastructure, WebApi)
- Frontend: Angular 20 (standalone, Angular Material)

## Run
- API: `cd InsightDesk.WebApi && dotnet run`
- Web: `cd web/insightdesk-web && npm start`

## Decisions (Day 1)
- Angular 20 chosen; Material for baseline UI.
- Clean Architecture projects created.
- Prettier + ESLint + Husky + Commitlint configured.

## Next
- API: define folder structure, health checks.
- Web: base layout, routing shell, auth plan.

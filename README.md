# Minecraft Console

## Getting Start
1. There is 2 folders : `api` and `web`
2. Setup server in `api/server`
3. Server running script is in `api/src/spigot/spigot.service.ts`
4. To run frontend `pnpm dev` and, To run backend `pnpm start:dev`

## Architecture
- Using SSE (Server Sent Event) for sending console from `latest.log` to frontend.
- Interval Checking for server status & players list

## Example
![example](/screenshot.png)

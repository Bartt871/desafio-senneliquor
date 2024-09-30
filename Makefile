up:
	docker compose up -d

down:
	docker compose down

node:
	docker compose exec -it node ash

debug:
	nodemon --inspect=0.0.0.0:9229 --exec node -r ts-node/register src/index.ts

seed:
	npx ts-node src/seed.ts

start:
	tsc && node dist/index.js
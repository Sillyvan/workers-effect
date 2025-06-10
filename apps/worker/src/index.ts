import { WorkerEntrypoint } from 'cloudflare:workers';
import { Effect } from 'effect';
import * as schema from './db/schema';
import { DatabaseService, DatabaseServiceLive } from './db/db';
import { drizzle } from 'drizzle-orm/d1';
import { seedProducts } from './db/seed';

export default class extends WorkerEntrypoint<Env> {
	async fetch() {
		return new Response('Hello from Worker');
	}
	async getProducts(): Promise<schema.Product[]> {
		const program = Effect.gen(function* () {
			const db = yield* DatabaseService;
			return yield* db.getProducts;
		});

		return Effect.runPromise(Effect.provide(program, DatabaseServiceLive(this.env.DB)));
	}
	async seedProducts() {
		const db = drizzle(this.env.DB);
		await seedProducts(db, 1000);
	}
}

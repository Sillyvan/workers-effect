import { WorkerEntrypoint } from 'cloudflare:workers';
import { Effect } from 'effect';
import * as schema from './db/schema';
import { DatabaseService, DatabaseServiceLive } from './db/db';

export default class extends WorkerEntrypoint<Env> {
	async getProducts(): Promise<schema.Product[]> {
		const program = Effect.gen(function* () {
			const db = yield* DatabaseService;
			return yield* db.getProducts;
		});

		return Effect.runPromise(Effect.provide(program, DatabaseServiceLive(this.env.DB)));
	}
}

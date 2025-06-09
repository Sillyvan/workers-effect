import { Context, Effect, Layer } from 'effect';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export class DatabaseService extends Context.Tag('DatabaseService')<
	DatabaseService,
	{
		readonly getProducts: Effect.Effect<schema.Product[], DatabaseError>;
	}
>() {}

export const makeDatabaseService = (database: D1Database) =>
	DatabaseService.of({
		getProducts: Effect.tryPromise({
			try: () => {
				const db = drizzle(database, { schema });
				return db.select().from(schema.products);
			},
			catch: (error) => new DatabaseError({ cause: error }),
		}),
	});

export class DatabaseError extends Error {
	readonly _tag = 'DatabaseError';
	constructor(options: { cause?: unknown } = {}) {
		super('Database operation failed', options);
	}
}

export const DatabaseServiceLive = (database: D1Database) => Layer.succeed(DatabaseService, makeDatabaseService(database));

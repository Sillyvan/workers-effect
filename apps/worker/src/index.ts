import { WorkerEntrypoint } from 'cloudflare:workers';
import { getDb } from './db/db';
import * as schema from './db/schema';
// import { seedProducts } from './db/seed';

export default class extends WorkerEntrypoint<Env> {
	async getProducts(): Promise<schema.Product[]> {
		const db = getDb(this.env.DB);

		// await seedProducts(db, 10000);
		const allProducts = await db.select().from(schema.products);

		return allProducts;
	}
}

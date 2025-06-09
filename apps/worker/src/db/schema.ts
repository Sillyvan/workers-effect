import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const products = sqliteTable('products', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	price: real('price').notNull(),
	category: text('category').notNull(),
	sku: text('sku').unique().notNull(),
	inStock: integer('in_stock', { mode: 'boolean' }).default(true),
	stockQuantity: integer('stock_quantity').default(0),
	rating: real('rating').default(0),
	brand: text('brand'),
	tags: text({ mode: 'json' }).$type<string[]>(),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export type Product = typeof products.$inferSelect;

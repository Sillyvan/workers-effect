CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` real NOT NULL,
	`category` text NOT NULL,
	`sku` text NOT NULL,
	`in_stock` integer DEFAULT true,
	`stock_quantity` integer DEFAULT 0,
	`rating` real DEFAULT 0,
	`brand` text,
	`tags` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);
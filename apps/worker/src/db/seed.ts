import { Database } from './db';
import { products } from './schema';

const productTemplates = {
	Electronics: {
		items: [
			'Smartphone',
			'Laptop',
			'Tablet',
			'Headphones',
			'Speaker',
			'Camera',
			'Monitor',
			'Keyboard',
			'Mouse',
			'Smartwatch',
			'TV',
			'Gaming Console',
			'Router',
			'Charger',
			'Cable',
			'Power Bank',
			'Drone',
			'VR Headset',
			'Microphone',
			'Webcam',
		],
		brands: [
			'TechPro',
			'DigitalMax',
			'ElectroCore',
			'SmartTech',
			'InnovaElectro',
			'TechCraft',
			'DigitalEdge',
			'ProGadget',
			'TechMaster',
			'ElectroWave',
		],
		adjectives: [
			'Ultra',
			'Pro',
			'Max',
			'Elite',
			'Premium',
			'Advanced',
			'Smart',
			'Wireless',
			'Gaming',
			'Professional',
			'Compact',
			'Portable',
		],
		priceRange: [19.99, 2999.99],
		tags: ['wireless', 'bluetooth', 'smart', 'portable', 'gaming', 'professional', 'hd', '4k', 'fast-charging', 'waterproof'],
	},
	Clothing: {
		items: [
			'T-Shirt',
			'Jeans',
			'Dress',
			'Sweater',
			'Jacket',
			'Shoes',
			'Sneakers',
			'Boots',
			'Hat',
			'Scarf',
			'Gloves',
			'Socks',
			'Underwear',
			'Polo',
			'Hoodie',
			'Shorts',
			'Skirt',
			'Blouse',
			'Coat',
			'Sandals',
		],
		brands: [
			'StyleWear',
			'FashionForward',
			'TrendSetter',
			'ClassicStyle',
			'ModernWear',
			'UrbanFit',
			'ComfortZone',
			'ElegantTouch',
			'CasualLife',
			'ActiveWear',
		],
		adjectives: [
			'Premium',
			'Organic',
			'Cotton',
			'Silk',
			'Comfortable',
			'Stylish',
			'Classic',
			'Modern',
			'Vintage',
			'Designer',
			'Casual',
			'Formal',
		],
		priceRange: [9.99, 299.99],
		tags: ['cotton', 'comfortable', 'stylish', 'casual', 'formal', 'organic', 'sustainable', 'breathable', 'durable', 'trendy'],
	},
	'Home & Garden': {
		items: [
			'Lamp',
			'Chair',
			'Table',
			'Pillow',
			'Blanket',
			'Vase',
			'Mirror',
			'Clock',
			'Plant Pot',
			'Garden Tool',
			'Watering Can',
			'Outdoor Furniture',
			'Curtain',
			'Rug',
			'Storage Box',
			'Decorative Bowl',
			'Picture Frame',
			'Candle',
			'Towel',
			'Bedsheet',
		],
		brands: [
			'HomeComfort',
			'GardenPro',
			'LivingSpace',
			'CozyHome',
			'GreenThumb',
			'HomeEssentials',
			'ComfortLiving',
			'StyleHome',
			'NatureTouch',
			'HomeDesign',
		],
		adjectives: [
			'Elegant',
			'Modern',
			'Rustic',
			'Comfortable',
			'Durable',
			'Eco-Friendly',
			'Decorative',
			'Functional',
			'Stylish',
			'Premium',
			'Natural',
			'Handcrafted',
		],
		priceRange: [5.99, 899.99],
		tags: ['home', 'garden', 'decorative', 'functional', 'eco-friendly', 'durable', 'comfortable', 'stylish', 'modern', 'natural'],
	},
	'Sports & Fitness': {
		items: [
			'Yoga Mat',
			'Dumbbell',
			'Resistance Band',
			'Tennis Racket',
			'Basketball',
			'Soccer Ball',
			'Running Shoes',
			'Gym Bag',
			'Water Bottle',
			'Protein Shaker',
			'Exercise Bike',
			'Treadmill',
			'Jump Rope',
			'Foam Roller',
			'Fitness Tracker',
			'Workout Gloves',
			'Knee Pad',
			'Sports Watch',
			'Athletic Shorts',
			'Sports Bra',
		],
		brands: [
			'FitPro',
			'ActiveLife',
			'SportMax',
			'FitnessElite',
			'PowerGym',
			'AthleteZone',
			'FlexFit',
			'StrongBody',
			'SportsTech',
			'EnduranceGear',
		],
		adjectives: [
			'Professional',
			'High-Performance',
			'Durable',
			'Lightweight',
			'Adjustable',
			'Premium',
			'Athletic',
			'Ergonomic',
			'Flexible',
			'Strong',
			'Portable',
			'Anti-Slip',
		],
		priceRange: [12.99, 1599.99],
		tags: ['fitness', 'sports', 'exercise', 'athletic', 'durable', 'lightweight', 'professional', 'training', 'performance', 'ergonomic'],
	},
	Kitchen: {
		items: [
			'Blender',
			'Coffee Maker',
			'Toaster',
			'Microwave',
			'Knife Set',
			'Cutting Board',
			'Pan',
			'Pot',
			'Mixing Bowl',
			'Spatula',
			'Whisk',
			'Can Opener',
			'Food Processor',
			'Stand Mixer',
			'Grinder',
			'Scale',
			'Timer',
			'Thermometer',
			'Storage Container',
			'Dish Set',
		],
		brands: [
			'ChefMaster',
			'KitchenPro',
			'CookWell',
			'CulinaryElite',
			'HomeChef',
			'KitchenCraft',
			'FoodPrep',
			'CookingEssentials',
			'KitchenTech',
			'ChefStyle',
		],
		adjectives: [
			'Professional',
			'Stainless Steel',
			'Non-Stick',
			'Durable',
			'Easy-Clean',
			'Multi-Function',
			'Compact',
			'Premium',
			'Heavy-Duty',
			'Ergonomic',
			'Digital',
			'Ceramic',
		],
		priceRange: [8.99, 499.99],
		tags: [
			'kitchen',
			'cooking',
			'food-prep',
			'stainless-steel',
			'non-stick',
			'durable',
			'easy-clean',
			'professional',
			'compact',
			'dishwasher-safe',
		],
	},
};

function getRandomElement<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

function getRandomPrice(min: number, max: number): number {
	const price = Math.random() * (max - min) + min;
	return Math.round(price * 100) / 100; // Round to 2 decimal places
}

function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSKU(category: string, index: number): string {
	const categoryCode = category.replace(/[^A-Z]/g, '').substring(0, 3) || 'GEN';
	const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
	return `${categoryCode}-${randomCode}-${String(index).padStart(4, '0')}`;
}

function generateRating(): number {
	// Generate realistic ratings (mostly between 3.5-5.0)
	const ratings = [3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
	const weights = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 4, 2]; // Weighted towards higher ratings

	const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
	let randomNum = Math.random() * totalWeight;

	for (let i = 0; i < ratings.length; i++) {
		randomNum -= weights[i];
		if (randomNum <= 0) {
			return ratings[i];
		}
	}
	return 4.2; // fallback
}

function generateProduct(index: number): any {
	const categories = Object.keys(productTemplates);
	const category = getRandomElement(categories);
	const template = productTemplates[category as keyof typeof productTemplates];

	const item = getRandomElement(template.items);
	const brand = getRandomElement(template.brands);
	const adjective = getRandomElement(template.adjectives);

	const name = Math.random() > 0.5 ? `${adjective} ${item}` : `${brand} ${item}`;
	const price = getRandomPrice(template.priceRange[0], template.priceRange[1]);
	const stockQuantity = getRandomInt(0, 150);
	const inStock = stockQuantity > 0 && Math.random() > 0.1; // 90% chance of being in stock if quantity > 0
	const rating = generateRating();

	// Generate description
	const features = [
		'high-quality materials',
		'excellent durability',
		'user-friendly design',
		'superior performance',
		'modern aesthetics',
		'great value',
		'innovative features',
		'reliable construction',
		'comfortable use',
		'versatile functionality',
	];
	const feature1 = getRandomElement(features);
	const feature2 = getRandomElement(features.filter((f) => f !== feature1));
	const description = `Premium ${item.toLowerCase()} featuring ${feature1} and ${feature2}. Perfect for everyday use.`;

	// Generate tags
	const productTags = template.tags.slice(); // Copy base tags
	productTags.push(item.toLowerCase().replace(' ', '-'));
	const selectedTags = productTags.sort(() => 0.5 - Math.random()).slice(0, getRandomInt(3, 6));

	return {
		// ✅ No id field - SQLite will auto-assign ROWID as the primary key
		name,
		description,
		price,
		category,
		sku: generateSKU(category, index),
		inStock,
		stockQuantity,
		rating,
		brand,
		tags: selectedTags,
	};
}
export async function seedProducts(db: Database, count: number = 1000) {
	// Check if data already exists
	const existingProducts = await db.select().from(products).limit(1);
	if (existingProducts.length > 0) {
		console.log('Products already seeded');
		return;
	}

	console.log(`Starting to seed ${count} products...`);

	const batchSize = 10; // Reduced batch size for D1
	const batches = Math.ceil(count / batchSize);

	for (let batch = 0; batch < batches; batch++) {
		const batchStart = batch * batchSize;
		const batchEnd = Math.min(batchStart + batchSize, count);
		const batchCount = batchEnd - batchStart;

		// Generate products for this batch
		const batchProducts = [];
		for (let i = 0; i < batchCount; i++) {
			batchProducts.push(generateProduct(batchStart + i + 1));
		}

		// Create individual insert statements for batch
		const statements = batchProducts.map((product) => db.insert(products).values(product));

		// Execute all statements in a single batch
		await db.batch(statements);

		console.log(`Seeded batch ${batch + 1}/${batches} (${batchEnd}/${count} products)`);
	}

	console.log(`Successfully seeded ${count} products!`);
}

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	type ProductsReturnType = Awaited<
		ReturnType<NonNullable<typeof platform>['env']['WORKER']['getProducts']>
	>;

	let products: ProductsReturnType | undefined;

	try {
		await platform!.env.WORKER.seedProducts();
		products = await platform!.env.WORKER.getProducts();
	} catch (e) {
		console.error(e);
	} finally {
		products?.[Symbol.dispose]?.();
	}

	return { products };
};

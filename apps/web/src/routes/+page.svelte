<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Products</h1>
{#if !data?.products}
	<p>No entry</p>
{:else}
	{#each data.products as product (product.id)}
		<p>{product.name}</p>
	{/each}
{/if}

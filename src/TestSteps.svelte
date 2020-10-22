<script>
	export let steps = [];
</script>

<style>

	h5 {
		margin: 0;
		padding: 0.5rem 0rem;
	}
	
	ol {
		margin: 0.25rem 0;
	}
</style>

{#if steps.length > 0}
	<h5>Steps</h5>
	<ol>
		{#each steps as step}
			<li>{step}</li>
		{/each}
	</ol>
{/if}

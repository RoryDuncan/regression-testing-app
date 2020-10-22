<script>
	export let steps = [];
</script>

<style>

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

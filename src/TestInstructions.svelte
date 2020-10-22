<script>
	export let instructions = null;
</script>

<style>
		
	.instructions {
		padding: 0.5rem 1rem 1rem 1rem;
		margin: 0.5rem -0.5rem;
		line-height: 1.75rem;
		background-color: #fcfcfc;
	}
	
	h5 {
		padding: 0.5rem 0;
		margin: 0;
	}
	
	pre {
		font-family: "Helvetica Neue", sans-serif;
	}

</style>

{#if instructions != null}
	<h5>Instructions</h5>
	<div class="instructions">
		<pre>{instructions.trim()}</pre>
	</div>
{/if}
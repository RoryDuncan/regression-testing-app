<script>
	export let instructions = null;
</script>

<style>

	.instructions {
		padding: 0.5rem 1rem 1rem 1rem;
		margin: 1rem -0.5rem;
		line-height: 1.75rem;
		background-color: #fcfcfc;
	}

	h5 {
		padding: 0.5rem 0;
		margin: 0;
	}

	pre {
		font-family: "Helvetica Neue", sans-serif;
		white-space: pre-line;
	}

</style>

{#if instructions != null}
	<h5>Instructions</h5>
	<div class="instructions">
		<pre contenteditable="true">{instructions.trim()}</pre>
	</div>
{/if}
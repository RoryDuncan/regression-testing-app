<script>
	export let configURL = null;
	export let testURL = null;
	
	let target = "_blank";
</script>

<style>
	.test-header {
		border-bottom: 1px solid #f2f2f2;
		padding: 0.5rem;
		margin: -0.5rem -0.5rem 0rem -0.5rem;
	}
	
	strong {
		font-weight: 600;
	}

</style>

<header class="test-header">
	<div class="configuration">
		<strong>Configuration</strong>:
		{#if configURL == null}
		<span class="muted">None</span>
		{:else}
		<a {target} href={configURL}>Setup</a>
		{/if}
	</div>
	<div class="test-url">
		<strong>URL</strong>: 
		{#if testURL == null}
		<span class="muted">None</span>
		{:else}
		<a {target} href={testURL}>{testURL}</a>
		{/if}
	</div>
</header>
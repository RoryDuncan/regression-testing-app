<script>
	import { TEST_STATE, TEST_STATE_COLORS } from "./constants.js";
	export let status = TEST_STATE.UNTESTED;
	export let isDot = false;

	
	$: color = TEST_STATE_COLORS[status];
	$: style = `background: ${color};`;
</script>


<style>
	.node {
		transition: 0.5s ease-out all;
	}
	
	.circle {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		margin: auto auto;
		display: block;
	}
	
	.border {
		width: 4px;
		border-radius: 4px;
		margin: -0.5rem 0;
		margin-left: calc( -1 * 0.25rem);
		
	}

</style>

{#if isDot}
	<div class="node circle" {style} />
{:else}
	<div class="node border" {style} />
{/if}
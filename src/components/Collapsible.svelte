<script>
	import { slide } from "svelte/transition";
	
	export let isOpen = false;
	export let hoverable = true;
	export let styled = true;
	$: text = isOpen ? "Close" : "View";
	
	function toggle() {
		isOpen = !isOpen;
	}
</script>

<style>
	.title {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.hoverable:hover {
			background-color: #fcfcfe;
	}

	.content-container {
		padding: 0.25rem 0;
	}
	
	.styled {
		padding: 0.5rem 0.5rem;
		border: 1px solid #f2f2f2;
	}
	
</style>

<div class="container">
	<div class="title" class:hoverable on:click={toggle}>
		<slot name="title">{text}</slot> 
	</div>
	{#if isOpen}
		<div class="content-container" class:styled transition:slide|local={{ duration: 200 }}>
			<slot name="content"></slot>
		</div>
	{/if}
</div>
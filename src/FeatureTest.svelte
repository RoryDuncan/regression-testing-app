<script>
	import { TESTED_BY, TEST_STATE, TEST_STATE_LABELS } from "./constants.js";
	import Collapsible from "./Collapsible.svelte";
	import StatusNode from "./StatusNode.svelte";
	import { statuses } from "./overview.js";
	
	export let isOpen = false;
	
	export let id;
	export let areas = [];
	export let title = null;
	
	//export let configURL = null;
	//export let testURL = null;
	
	export let status = TEST_STATE.UNTESTED;
	export let testedBy = TESTED_BY.NONE;
	
	//export let media = null;
	
	$: isTestedByDisabled = status === TEST_STATE.UNTESTED;
	let isTestedByEl = null;
	function focusIsTestedBy() {
		isTestedByEl.focus();
	}
	
	$: if (status) {
		statuses.update( m => m.set(id, status));	
	}
	

</script>

<style>
	.row {
		width: 100%;
		padding: 0.5rem 0.2rem;
		display: grid;
		grid-template-columns: auto 1fr 1fr 1fr;
		grid-gap: 0.5rem;
		border: 1px solid #eee;
	}
	
	.muted {
		opacity: 0.5;
	}
	
	.title {
		margin: 0;
		font-size: 1.2rem;
		cursor: pointer;
	}
	
	.areas {
		display: block;
		font-size: 0;
	}
	
	.area {
		color: #bbb;
		font-size: 0.75rem;
	}

	.chevron {
		padding: 0 0.25rem;
		user-select: none;
		opacity: 0.5;
		font-size: 1rem;
	}
	
	select {
		display: block;
		width: 100%;
	}
	
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	
	label span {
		display: none;
	}
</style>

<Collapsible {isOpen}>
	<div slot="title" class="row">
		<StatusNode {status} />
		<h3 class="title">
			{title}
			<div class="areas">
				{#each areas as area, i}
					{#if i > 0}
						<span class="chevron">:</span>
					{/if}
					<span class="area">{area}</span>
				{:else}
					
				{/each}
			</div>
		</h3>

		<div class="status" on:click|stopPropagation>
			<label>
				<span>Status</span>
				<select bind:value={status} on:blur={focusIsTestedBy}>
					{#each Object.keys(TEST_STATE) as key}
						<option value={key}>{TEST_STATE_LABELS[key]}</option>
					{/each}
				</select>
			</label>
		</div>

		<div class="tested-by" on:click|stopPropagation>
			<label class:muted={isTestedByDisabled}>
				<span>Tested By</span>
				<select disabled={isTestedByDisabled} bind:value={testedBy} bind:this={isTestedByEl}>
					<option selected disabled>Choose...</option>
					{#each Object.keys(TESTED_BY) as key}
						<option value={key}>{TESTED_BY[key]}</option>
					{/each}
				</select>
			</label>
		</div>
	</div>

	<div slot="content">
		<slot />
	</div>

</Collapsible>
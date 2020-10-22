<script>
	import { data } from "./mock-data.js";
	import FeatureTest from "./FeatureTest.svelte";
	import TestHeader from "./TestHeader.svelte";
	import TestSteps from "./TestSteps.svelte";
	import TestInstructions from "./TestInstructions.svelte";
	import FeatureTestHeading from "./FeatureTestHeading.svelte";
	import Overview from "./Overview.svelte";
	
	let items = data;

	
</script>

<style>
	
	:global(body) {
		overflow-y: scroll;
	}
	
	:global(.muted) {
		opacity: 0.5;
	}
	
	:global(*) {
		box-sizing: border-box;
		//font-family: "Helvetica Neue", "Helvetica", "Roboto", sans-serif;
	}
	
</style>

<Overview />

<FeatureTestHeading />
{#each items as item, i}
	<FeatureTest {...item} >
		<div class="test-details">
			<TestHeader configURL={item.configURL} testURL={item.testURL} />
			<TestSteps steps={item.steps} />
			<TestInstructions instructions={item.instructions} />	
		</div>
		<div class="test-feedback">
			<h1>
				
			</h1>
		</div>
		
	</FeatureTest>
{/each}

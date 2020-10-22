<script>
	import { data } from "@services/mock-data.js";
	import FeatureTest from "@components/FeatureTest.svelte";
	import TestHeader from "@components/TestHeader.svelte";
	import TestSteps from "@components/TestSteps.svelte";
	import TestInstructions from "@components/TestInstructions.svelte";
	import FeatureTestHeading from "@components/FeatureTestHeading.svelte";
	import Overview from "@components/Overview.svelte";

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

<script>
	import { statuses, countMap, progress, total } from "@stores/overview.js";
	import { TEST_STATE_LABELS } from "@config/constants.js";
	import Collapsible from "@components/Collapsible.svelte";

	$: isComplete = $progress >= 1;

	let isOpen = false;
</script>

<style>
	.overview {
		padding: 1rem 0.5rem;
		font-size: 0.75rem;
		margin-bottom: 1rem;
		border-radius: 6px;
		transition: 2s ease-out all;
	}

	.complete {
		background-color: #afc;
		font-weight: 600;

		margin: 25vh 10vw;
	}

	h2 {
		margin: 0;
	}

	.progress {
		margin-bottom: 1rem;
	}

	.breakdown-title {
		cursor: pointer;
		padding: 0rem;
	}

	.breakdown {
		list-style: none;
		padding: 0.5rem;
	}

	.breakdown li {
		display: grid;
		grid-template-columns: auto 6rem 1fr;
		grid-gap: 1rem;
	}
</style>

<div class="overview" class:complete={isComplete}>
	<h2>
		Regression {isComplete ? "Complete" : ""}
	</h2>
	<div class="progress">
		Regression Progress: <span>{$progress * 100}%</span>
	</div>
	<Collapsible hoverable={false} styled={false} bind:value={isOpen}>
		<h2 slot="title" class="breakdown-title">{isOpen ? "Hide" : "Show"} Breakdown</h2>
		<div slot="content">
			<ul class="breakdown">
				{#each Object.entries($countMap) as [key, value]}
					<li>
						<span>{((value / $total) * 100).toFixed(0)}%</span>
						<strong>{TEST_STATE_LABELS[key]}</strong>
						<span>{value} of {$total}</span>
				</li>
			{/each}
			</ul>
		</div>
	</Collapsible>
</div>



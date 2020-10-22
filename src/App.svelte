<script>
  import { data as items } from "@services/mock-data.js";
  import { TEST_STATE } from "@config/constants.js";
  import FeatureTest from "@components/FeatureTest.svelte";
  import TestHeader from "@components/TestHeader.svelte";
  import TestSteps from "@components/TestSteps.svelte";
  import TestInstructions from "@components/TestInstructions.svelte";
  import FeatureTestHeading from "@components/FeatureTestHeading.svelte";
  import Overview from "@components/Overview.svelte";
  import SprintDetails from "@components/SprintDetails.svelte";

  const gifLink = "https://media.giphy.com/media/cyd9pp3G33l1CF8sA8/giphy.gif";
</script>

<style>
  .split-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .container {
    padding: 1rem 1rem;
    max-width: 90rem;
    margin: 0 auto;
  }

  img {
	  width: 100%;
  }
</style>

<svelte:head>
	<title>MVP: Regression Testing App</title>
</svelte:head>

<SprintDetails />

<div class="container">
  <Overview />

  <FeatureTestHeading />
  {#each items as item, i}
    <FeatureTest {...item} bind:status={item.status}>
      <TestHeader configURL={item.configURL} testURL={item.testURL} />
      <div class="split-view">
        <div class="test-details">

          <TestSteps steps={item.steps} />
          <TestInstructions instructions={item.instructions} />
        </div>
        <div class="test-feedback">
          <h5>Gif / Video</h5>
          <p>
            <img src={gifLink} alt="frog" />
          </p>
          <div class="text-right">
            <button>Upload New</button>
          </div>
          <h5>Issues</h5>
          <textarea value="None" />

          {#if item.status === TEST_STATE.REGRESSED}
            <h5>Link to Regression Task</h5>
            <input
              type="text"
              value="https://worktruck.visualstudio.com/WTS-Suite/_workitems/edit/" />
          {/if}

        </div>
      </div>
    </FeatureTest>
  {/each}

</div>

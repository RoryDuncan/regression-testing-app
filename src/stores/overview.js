import { writable, derived } from "svelte/store";
import { TEST_STATE } from "@config/constants.js";

export const statuses = writable(new Map());


export const countMap = derived(statuses, ($statuses) => {

		const values = [...$statuses.values()];
		var result = values
			.reduce(toCount, Object.create(null))

		return result;
});

export const total = derived(countMap, $counts => {
	// sum of all values
	return Object.values($counts).reduce((t, c) => t + c, 0);
});

export const progress = derived([total, countMap], ([$total, $counts]) => {
	let result = 1;
	if ($total > 0) {
		let completed = 0;
		completed += $counts[TEST_STATE.COMPLETE] || 0;
		completed += $counts[TEST_STATE.ACCEPTED] || 0;
		result = (completed / $total);
	}

	return result;
});

function toCount(accum, status) {
	if (typeof accum[status] === "undefined") {
		accum[status] = 0;
	}
	accum[status] += 1;
	return accum;
}
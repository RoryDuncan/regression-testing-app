export const TEST_STATE = {
		UNTESTED: "UNTESTED",
		COMPLETE: "COMPLETE",
		REGRESSED: "REGRESSED",
		DIFFERS: "DIFFERS",
		ACCEPTED: "ACCEPTED",
	};

export const TEST_STATE_LABELS = {
	UNTESTED: "Not Tested",
	COMPLETE: "Looks Good",
	REGRESSED: "Regressed",
	DIFFERS: "Needs Review",
	ACCEPTED: "Accepted",
};

export const TEST_STATE_COLORS = {
	[TEST_STATE.UNTESTED]: "transparent",
	[TEST_STATE.COMPLETE]: "#4ca",
	[TEST_STATE.REGRESSED]: "#c22",
	[TEST_STATE.DIFFERS]: "#fc6",
	[TEST_STATE.ACCEPTED]: "#8bd",
};
	
export const TESTED_BY = [
	"Adrian",
	"Rory",
	"Travis",
];
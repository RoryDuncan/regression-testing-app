let id = 0;
const _testURL = "https://corning.ci1.worktrucksolutions.com";
const _configURL = "https://gph.is/g/aQwJWbx";
const _instruction = `**Make sure your dealer has a Truck Pro in rotation who is "working" at the time you submit your lead! 

On a Individual Site that is the member of a group, navigate to Admin -> Site config and change "Set forward leads to other dealership" set to forward to the site's parent site: 

1. Access the site as an anonymous buyer (confirm cookies are clear and/or access incognito).
2. Find a truck, click the I'm Interested button (confirm dialog appears w/ all fields present). Submit a lead. 
3. Confirm that the buyer receives the "you will be contacted soon" email, addressed from the group site
4. Confirm that the next TP in rotation receives the New Buyer Request email, addressed from WTS. Accept the lead.
5. Find a 2nd truck, click I'm Interested button (confirm dialog appears w/ all but phone number & message input fields hidden). 
6. Confirm that the same TP receives the "(Buyer) has shown interest in a vehicle" message for the second form submission. 

Confirm vehicle URLs in all emails are properly formed and working, that all links lead to valid URLs`;

export const data = [
	new FeatureTest("Feature Name", ["Area", "Page", "Componenent"], "some-url-to test-page", "url-for-quickly-configuring", [
		"Step 1",
		"through",
		"Step N",
	]),
	new FeatureTest("Search Filters", ["DealerSite", "VSP"], null, null, [
		"Go to URL",
		"Open Navbar",
		"Drink 2 Beers",
		"Observe the Stars",
	]),
	new FeatureTest("Van Builder Page", ["DealerSite", "Van Builder"], _testURL, _configURL, [], _instruction),
	new FeatureTest("Search Component", ["DealerSite", "VSP"], "https://gph.is/g/aQwJWbx", "https://gph.is/g/aQwJWbx", ["Prepare a hot bath", "Eat a daily vitamin"], _instruction),	

]


function FeatureTest(
	title = "Empty Title", 
	areas = [],
	testURL = "https://corning.ci1.worktrucksolutions.com",
	configURL = "https://gph.is/g/aQwJWbx",
	steps = [],
	instructions = null) {
		
	return {
		id: ++id,
		title, 
		areas,
		testURL,
		configURL,
		steps,
		instructions,
		issues: [],
		severity: null
	};
}
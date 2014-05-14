var currentCodeFlower;
var createCodeFlower = function(json) {

	// remove previous flower to save memory
	if (currentCodeFlower) currentCodeFlower.cleanup();

	// adapt layout size to the total number of elements
	var total = countElements(json);
	w = parseInt(Math.sqrt(total) * 30, 10);
	h = parseInt(Math.sqrt(total) * 30, 10);

	// create a new CodeFlower
	currentCodeFlower = new CodeFlower("#visualization", w, h).update(json);
};
	d3.json('../data.json', createCodeFlower);
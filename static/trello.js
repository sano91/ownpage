/* Custom Dragula JS */
dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash"),
  document.getElementById("card1"),
  document.getElementById("card2"),
  document.getElementById("card3"),
  document.getElementById("card4")
]);




function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}

var getSiblings = function (elem) {
	let siblings = [];
	let sibling = elem.firstChild;
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
};
var ol = document.getElementById("done");
console.log(ol);
var done= getSiblings(document.getElementById("to-do"));
console.log(done);

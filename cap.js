var REPL = require("repl");

var repl = REPL.start("func > ");
repl.context.low = low;

repl.on("exit", function () {
  console.log("GOODBYE!!");
  process.exit();
});

var low = "blue tuck binger sar mach sieve taught full";

var cap = function(input) {
	return input.toUpperCase();
}

var up = function(input) {
	var thisWord;
	var upWord = '';
	var upString = '';
	words = input.split(" ");
	for (w=0;w<words.length;w++) {
		thisWord = words[w];
		//console.log("thisWord"+thisWord);
		first = thisWord[0].toUpperCase();
		//console.log(first);
		upWord = first;
		for (c=1;c<thisWord.length;c++) {
			upWord = upWord + thisWord[c];
		}

		upString = upString + upWord + " ";
		// if (parseInt(words.length) < parseInt(w-1)) {
		// 	upString = upString + " ";
		// 	console.log('words.length-1:' + (words.length-1) + "  w:" + w);
		// }

	}

	return upString.slice(0,-1);
}

module.exports = cap;
repl.context.low = low;
repl.context.up = up;
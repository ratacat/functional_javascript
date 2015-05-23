var REPL = require("repl");

var repl = REPL.start("func > ");
repl.context.low = low;

repl.on("exit", function () {
  console.log("GOODBYE!!");
  process.exit();
});


function repeat(operation, num) {
  
}

// Do not remove the line below
module.exports = repeat
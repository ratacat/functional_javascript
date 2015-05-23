// var REPL = require("repl");

// var repl = REPL.start("func > ");

// repl.on("exit", function () {
//   console.log("GOODBYE!!");
//   process.exit();
// });


function repeat(operation, num) {
  for(i=1;i<=num;i++){
  	operation();
  }
}

// Do not remove the line below
module.exports = repeat;
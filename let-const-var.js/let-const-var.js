//todo-> var(redeclare && reassign)
var x = 3;
x = 1.5; // reassign
var x = 2.9; // redeclare
console.log("x", x);
//todo-> let(reassign but not redeclare)
let y = 4;
y = 2.5; // reassign
// let y = 1.5; // redeclare
console.log("y", y);
//todo-> const(not reassign nor redeclare)
const z = 5;
// z = 3; // reassign
// const z = 1.5; // redeclare
console.log("z", z);

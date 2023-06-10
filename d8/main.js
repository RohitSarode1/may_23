// it should suggested that import is always a first statement
// import { sum } from "./calc.js";
// import { sum } from "./calc.js";

import { sum,sub,multi} from "./calc.js";

let output = sum(10 , 20);
console.log("sum=" + output);

let output1 = sub(50,10);
console.log("sub=" + output1);

let output2 = multi(50,10);
console.log("multiplication=" + output2);

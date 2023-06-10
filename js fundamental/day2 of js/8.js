let  list1 = [];
let list = ["delhi","calcutta","chennai"];

// access the member using index
console.log(list[0], list[2]);

// update the member 
list[0] = "new delhi";
list[2] = "mumbai";
console.log(list);

// add new member
list.push("pune");
list.push("nashik");
console.log(list);

// delete the member
list.pop();
console.log(list);

// add new element in array at begining
list.unshift("nagpur");
console.log(list);

// remove first element from array
list.shift();
console.log(list);

list.toString();
console.log(list);

// iterate
// list.forEach((item) => console.log(item));

// for(let item of list) {
//     console.log(item);
// }

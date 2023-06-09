let list = ["delhi","calcutta","chennai"];
// [hello delhi,hello calcutta,hello chennai]

let list1 = [];
for( let item of list) {
    let newitem = `hello ${item}`;
    list1.push(newitem);
}
console.log(list1);

// arrow function "one line";
let list2 = list.map((item) => `hello ${item}`);
console.log(list2);
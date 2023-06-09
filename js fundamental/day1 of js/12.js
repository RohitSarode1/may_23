let list1 = [];
let list2 = [1,2,3,4];
let list = ["delhi","calcutta","mumbai"];

// iterate each element of list
for(let i=0; i<list.length; i++) {
    let item = list[i];
    console.log(item);
}

console.log("###########################################");
// cleaner , advanced for loop
for(let item of list) {
    console.log(item);
}

console.log("###########################################");
// 3. in context of java , lamda and stream
// foreach :: collection / list
// foreach :: lamda :: () => {}
// java :: () -> {}
// js :: () => {}
list.forEach((item) => console.log(item));
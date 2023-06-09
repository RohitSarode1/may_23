function sum(n1,n2) {
    let result = n1+n2;
    return result;
}
// overloading
// unconventional usecase
let output1 = sum();
console.log(output1);

let output2 = sum(10);
console.log(output2);

// u have seen this
let output3 = sum(10,20);
console.log(output3);

let output4 = sum(10,20,60);
console.log(output4);
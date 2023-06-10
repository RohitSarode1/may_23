// annonymus function
// assigning a function to variable!
// we can call annonymus function
let sumfn = function (n1,n2) {
    let output = n1 + n2;
    return output
}
// calling the annonymus function
// function literal
let result = sumfn(10,20);
console.log(result);


// arrow function =>
// assigning a function to variable!
let sumfn1 = (n1,n2) => {
    let output = n1 + n2;
    return output;
};
// calling the arrow function
let result1 = sumfn1(10, 20);
console.log(result1);
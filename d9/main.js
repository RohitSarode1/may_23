console.log("hello 1");
console.log("hello 2");

// is it blocking the next two statement ?  noooo
// setTimeout() is non blocking method
// non blocking helps to achieve async program
setTimeout(() => {console.log("hello 3")}, 0);

// console.log("hello 3");
console.log("hello 4");
console.log("hello 5");
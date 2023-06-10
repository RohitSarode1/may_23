function hello(p1){
    console.log(p1);
}
// calling function , passing string param
let str = "hello world"; 
hello(str);

// calling function , passing id param
let id = 100;
hello(id);

// calling function , passing pi param
let pi = 3.14;
hello(pi);

// calling function , passing boolean param
let active = true;
hello(active);


// passing function as param to another function, is known as callback function
// achieve async programming
// calling the function, pasing function as param
let sumfn = (n1, n2) => {
    return n1 + n2;
};
hello(sumfn);// param is arrow function
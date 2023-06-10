// by default every member function is private is js
// we can choose only one function as a default
export function sum(n1, n2) {
    return n1 + n2;
}

export function sub(n1, n2) {
    return n1 - n2;
}

export function multi(n1,n2){
    return n1*n2;
}

// you have to make it export (public) maually
//export {sum};
//export {sub};
//export {sum,sub};
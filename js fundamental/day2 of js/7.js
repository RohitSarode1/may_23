//object literals :: inlineobject

// let p1 = {};
let p2 = {id: 1};
let p1= {id:1, name: "rohit", email:"rohit@gmail.com"};

//access the member of project
console.log(p1.id);
console.log(p1.name);
console.log(p1.email);

// update the member of object
p1.name = "Rohit Sarode";
p1.email = "r@gmail.com";
console.log(p1);

// new member
p1.address = "kharghar, navi mumbai";
console.log(p1);

// delete member
delete p1.email;
console.log(p1);
// const user = {
//     name : "shubham Jain",
//     age : 24,
//     "like the lecture": true
// }

// delete user["like the lecture"];

// console.log(user["like the lecture"]);


// console.log(user);

// delete user.age;

// console.log(user);



// const func = (function (a){
//     delete a;
//     return a;
// })

// console.log(func(5));



// const property = "function";

// const name = "Piyush";

// const user = {
//     [property] : name
// }

// console.log(user);


// const user = {
//     name: "Shubham Jain",
//     age : 24,
//     "like the lecture" : true
// }

// for(key in user){
//     console.log(user[key]); 
// }


// const arr = [1 ,2 ,4 ];

// for(let x of arr){
//     console.log(x);
// }


// const nums = {
//     a : 200,
//     b: 400,
//     title : "My nums"
// }


// multiplyByTwo(nums);

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *=2;
//         }
//     }
// }

// console.log(nums);


// const a = {};
// const b ={key : "b"};
// const c = {key : "c"};

// a[b] = 123;
// a[c] = 456;

// console.log(a);

// console.log(a[b]);


// const user = {
//     name: "Shubham",
//     age: 24,
// }

// const strObj = JSON.stringify(user)

// localStorage.setItem("test", strObj); 

// console.log(JSON.parse(strObj));


// console.log([..."Lydia"]);


// const user = {name: "Lydia", age: 21};
// const admin = {admin: true, ...user};

// console.log(admin);



// const settings ={
//     username : "Shubham",
//     level: 19,
//     health: 90,
// }

// const data = JSON.stringify(settings, ["level", "health"]);

// console.log(data);


// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius*2; 
//     },
//     perimeter : () => { console.log(this)
//         return 2*Math.PI* this.radius},
// }


// console.log(shape.diameter());
// console.log(shape.perimeter());



// let user = {
//     name: "Piyush", 
//     age: 24,
//     fullName: {
//         first: "Shubham",
//         last: "Jain",
//     }
// }

// const { fullName : {first} } = user;

// console.log(first);


// let c = {greeting: "Hey "};
// let d;

// d = c;

// c.greeting ="Hello";
// console.log(d.greeting);


// console.log({a: 1} == {a: 1}); 
// console.log({a: 1} === {a: 1});


let user ={
    name: "SHubham",
    age: 24,
    fullName :{
        last: "Heelo"
    }
}

// const objClone = Object.assign({},user);
// const objClone = JSON.parse(JSON.stringify(user));

const objClone = {...user};

objClone.name ="ghjbkn";
objClone.fullName.last = "Another";

console.log(user);
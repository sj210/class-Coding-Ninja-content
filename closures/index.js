// var obj = { name: "Piyush"};

// var obj2 = {name: "Shubham"}

// function sayHello(age, profession){

//     return "Hello " + this.name + " is of age " + age + " and is a " + profession;
// }

// console.log(sayHello());

// console.log(sayHello.call(obj,24, "Coder")); 

// console.log(sayHello.apply(obj,[24, "Coder"]));

// const bindfunc = sayHello.bind(obj);
// // console.log(bindfunc);

// console.log(bindfunc(41,"joker"));

// const bindfunc2 = sayHello.bind(obj2);

// console.log(bindfunc2(24,"Coder"));


//closures
//lexical scope

//global scope
// function subscribe(){
//     var name = "Shubham Jain";
//     //inner scope
//     function displayName(){
//         //inner scope
//         alert(name);
//     }
//     displayName();
// }

// subscribe();


// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     function a(){
//         console.log("a", name);}
//     return displayName;
//   }
  
// //   const myFunc = makeFunc();
// //   myFunc();
// makeFunc()()("Shubham");

//closure scope chain

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }


// function add(a,b, c, d){
//     return a+b+c+d;
// }

// console.log(add(1,2, 3, 4,))
// console.log(sum(1)(2)(3)(4)); // 20

// write a function for infite currying to add.

// function add(a){
//     return function (b){
//         if(b) return add(a+b);
//         return a;
//     };
// }

// console.log(add(1)(2)(3)());


//write a function that would allow this

// function createBase(num){
//     return function (innerNum){
//         console.log(innerNum+num);
//     }
// }

// var addSix = createBase(6);

// addSix(10);
// addSix(21);


// time optimisation

// function find(){
//     let a = [];

//     for(let i =0; i< 10000000; i++){
//         a[i]=i*i;
//     }

//    return function (index){
//         console.log(a[index]);
//     }
// }

// const closure = find();

// console.time("10");
// closure(1000);
// console.timeEnd("10");


// let count = 0;

// (function printCount(){
//     if(count === 0){
//         let count = 1;    //shadowing
//         console.log(count);  
//     }
//     console.log(count);
// })();


// function a(){
//     for(var i=0; i< 3; i++){
//         function inner(i){
//             setTimeout(function log(){
//                 console.log(i);
//             },i*10000);
//         }
//         inner(i);
//     }
// }

// a();



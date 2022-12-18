// function anothercaller(){
//     console.log(`${this.caller} called me too`);
// }

// const call = {
//     caller: "people",
//     anothercaller: anothercaller,
//     says: function(){
//         (() => {
//         console.log(`Hey ${this.caller} just called`)
//     })();
// }
// }

// let newCall = function anothercaller(){
//     console.log(`${this.caller} called me too`);
// };

// newCall();

// let newcall = function(){
//     (() => {
//     console.log(`Hey ${this.caller} just called me too`)
// })()};

// // newcall()

// newcall.call(calls);

// "use strict"

// function abc(){

//     console.log(this);
// }

// abc();
// var b = 
// console.log(b());

// var x;
// var y = x;
// x = 2;

// console.log(y);

// function a(x, f = () => x){    
//     var x;
//     var y = x;
//     x = 2;
//     return [x, y, f()];
// }

// console.log(
// a(1)
// );


// [2, undefined, 1]
// [2, 1, 1]
// [2, 2, 2]
// none of the above

// var x = 1;
 
// function foo(x = 2,y = ()=> x) {
//   var x = 3;
//   return [x, y()];
// }
 
// console.log(foo(4));

// var x = 1;
// var x;
// var y = x;

// console.log(y); 


// function a(x,y){
//     var x;
//     var y;
//  return x + y;
// }

// console.log(a(2, 5));
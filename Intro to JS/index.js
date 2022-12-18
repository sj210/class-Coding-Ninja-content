// var , let , const 

// 1. var is globally scoped while let & const are block scope
// 2. var can be updated & redeclared within it's scope
// 3. Let can be updated but not redeclared
// 4. Const can neither be updated nor redeclared
// 5. var variable are initialised with undefined whereas let and const are initialised
// 6. const must be initialised during declaration unlike let and var

// Primitive data types in Js
// 1. Null 
// 2. Number
// 3. Boolean
// 4. String
// 5. Undefined
// 6. Symbol
// 7. BigInt



// Hoisting , Shodowing 

// function test(){
//     let a = "Hello";

//     if(true){
//         var a = "Hi";
//         console.log(a);
//     }
//     console.log(a);

// }


// test();

// function test(){
// var a = "Hello";
// let b = "Bye";
// if(true){
//     let a = "Hi";
//     var b = "Goodbye";
//     console.log(a);
//     console.log(b);
// }
// }
// test();


// var count;

// console.log(count);
// var count = 1;



// console.log(b);
// let b = 1;
// var count = 2;

// function a(){
//   var a = 10;
//   function z(){
//      a = 9;
//   }
//   function y(){
//     console.log(a);
//   }
//   y();
//   z();
// }

// a();


function x(){
    var a=7;

    function y(){
        console.log(a);
    }

    return y;
}

var z = x();

console.log(z);

z();
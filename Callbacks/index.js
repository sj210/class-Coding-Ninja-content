// var scope = "global scope";

// function checkScope(){
//     // var scope = "Local Scope"; 

//     function f(){
//         return scope;
//     }

//     return f;

// }

// let abc = checkScope();

// console.log(abc());

// sync or async
//single or multi

// console.log("Hello");

// setTimeout(()=> console.log("Pause"), 0);


// console.log("World");


// const cart = ["shoes", "jeans", "Kurta"];


// api.createOrder(function (){
//     api.proceedToPayment(
//         // function (){
//         //     api.updateWallet(
//         //         function (){
//         //             api.trackOrder();
//         //         }
//         //     )
//         // }
//     );
// });



// Callback Hell : It is essentially nested callbacks stacked below one another forming a pyramid structure.
// Every callback depends/waits for the previous callback, thereby making the pyramid structure that affects 
// the readability and maintainaibilty of the code .




// Inversion Of control :


function importAction(helo){

    console.log("Hello");

    console.log("TAta");

    setTimeout(() =>{
        return `${helo} SHubham`;
    },100)

    console.log("jjal");


}


function anotherAction(helo){
    setTimeout(() =>{
        return `${helo} SHubham`;
    },100)
}


const message2 = anotherAction("Hello");
console.log(message2);

const message = importAction("hello", 
function(message){
    console.log(message);

});


// // Ques 1

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     resolve(2);
//     console.log(1);
// });

// promise1.then((res)=>{
//     console.log(res);
// });

// console.log("end");


// //Ques2

// console.log("start");

// const promise2 = new Promise((resolve, reject) =>{
//     console.log(1);
//     resolve(2);   
//     console.log(3);
// });

// promise2.then((res)=>{
//     console.log(res);
// });

// console.log("end");

// //Ques 3

// console.log("start");

// const promise2 = new Promise((resolve, reject) =>{
//     console.log(1);
//     console.log(3);
// });

// promise2.then((res)=>{
//     console.log(res);
// });

// console.log("end");


//Ques4

// console.log("start");

// const fn = () => { 
//     return new Promise((resolve, reject) =>{
//     console.log(1);
//     resolve("Success");
// });
// }

// console.log("middle");


// fn().then((res)=>{
//     console.log(res);
// });

// console.log("end");


//ques 5

// function job(bool) {
//     return new Promise(function (resolve, reject){
//         if(bool){
//             resolve();
//         }
//         else{

//             reject();
//         }
//     });
// }

// let promise = job(true);

// promise
// .then(function (){
//     console.log("Success 1");
// })
// .then(function () {
//     console.log("Success 2");
// })
// .then(function () {
//     console.log("Success 3");
// })
// .catch(function () {
//     console.log("Erorr 1");
//     return job(false);
// })
// .then(function () {
//     console.log("Success 4");
// })
// .then(function () {
//     console.log("Success 5");
// })
// .catch(function () {
//     console.log("Error 2");
// }).then(function () {
//     console.log("Success 6");
//     return job(false);
// })
// .then(function () {
//     console.log("Success 7");
// })

// //Ques 6

function job(state) {
    return new Promise((resolve, reject)=>{
        if(state){
            resolve("Success");
        } else
        {
            reject("error");
        }
        
    });
}

let promise1 = job(true);

promise1
.then(function (data) {
    console.log(data);

    return job(true);
})
.then(function (data) {
    if(data !== "victory") {
        throw "Defeat";
    }
    return job(true);
})
.then(function (data) {
    console.log(data);
})
.catch(function (error) {
    console.log(error);
    return job(false);
})
.then(function (data){
    console.log(data);
    return job(true);
})
.catch(function (error){
    console.log(error);
    return "Error caught";  //not a promise
})
.then(function (data){
    console.log(data); 
    return new Error("test"); // not a promise
})
.then(function (data){
    console.log("Success:", data.message);
})
.catch(function (data){
    console.log("Error:", data.message);
})


//Success Defeat error Error caught Success:test
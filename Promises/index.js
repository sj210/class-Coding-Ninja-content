// console.log("Start");


// setTimeout(() => console.log("Pause"), 100);


// console.log("Finish");



// console.log("Start");

// const message = importantAction("Shubham",function (message){
//     console.log(message); 

// });





// const sub = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const result = true;
//         if(result){
//             resolve("This is amazing");
//         }
//         else{
//             reject(new Error("What has happend"));
//         }
//     }, 2000);
// });


// sub
// .then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err);
// })


// console.log("Finish");



function importantAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Class with ${username}`);
        },2000);
    })
}

function likeAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`like session  ${username}`);
        },3000);
    })
}


function playAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`play is cool with ${username}`);
        },1000);
    })
}


// importantAction("shubham")
// .then((e) => {
//     console.log(e);
//     return likeAction("Hello");
// })
// .then((res) => {
//     console.log(res);
//     return playAction("Kk");
// })
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.error(err);
// })


// promise combinators: 

// 1. promise.all ->  It will run all the promises in parallel and in the end it will return the array with
// all the fulfilled promises . But if any of the promises fails it will fail the complete promise.all;

// 2. promise.race -> It will return the first promise that is fulfilled or rejected.


// 3. promise.allSettled -> It is similar to .all but even if any promise is rejected . It will still return
    // all the fulfilled promises as well


// 4. promise.any -> It is similar to .race but will only return the first fulfilled promise and ignore all
// the rejected ones. But if all the promises rejects then it will give an error that 
// All promises were rejected



Promise.any([importantAction("Shubham"), likeAction("Hello"), playAction("Hey")])
.then((res) =>{
    console.log(res);
})
.catch(err =>{
    console.error(err);
}) 
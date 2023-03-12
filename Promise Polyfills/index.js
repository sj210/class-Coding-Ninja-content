// Async  await is the best approach (syntax ) when we want the promises to execute
//  one after the other.

// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${username}`)
//         }, 2500);
//     })

// }

// function likeAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${username}`)
//         }, 2000);
//     })
// }


// function partyAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${username}`)
//         }, 2000);
//     })
// }


// const result = async () => {

//    try{ 
//     const message1 = await importantAction("Everything here");
//     console.log(message1);
//     const message2 = await likeAction("learning here");
//     console.log(message2);
//     const message3 = await partyAction("gaining something here");
//     console.log(message3);
// }catch(error){
//     console.log("Promise Failed", error);
// }


// }

// result();


// importantAction("Everything here").then(function (res) { console.log(res)}).then(res => {console.log(res)})

function PromisePolyfill(executor){

    let onResolve, onReject,
    isFullfilled = false, 
    isRejected = false, 
    isCalled = false,
    called = false;
    var value;

    function resolve(val){
        isFullfilled = true;
        value = val
        if(typeof onResolve === 'function'){
            onResolve(val);
            isCalled = true; 
        }
    }

    function reject(val){
        isRejected = true;
        value = val;
        if(typeof onReject === 'function'){
            onReject(value);
            called = true;
        }
    }


    this.then = function (callback){
        onResolve = callback;
        if(isFullfilled && !isCalled){
            called = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function (callback){
        onReject = callback;
        if(isRejected && !called){
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try{
        executor(resolve, reject);
    }catch(error){
        reject(error);
    }
}


const examplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(()=>{
        resolve(2);
    },1000);
});

examplePromise.then((res)=> {
    console.log(res);
}).catch(err => console.error(err));
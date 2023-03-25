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





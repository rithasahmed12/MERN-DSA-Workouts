const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let value = Math.random();
        if(value > 0.5){
            resolve(value);
        }else{
            reject("Value is greater than 0.5");
        }
    },3000)
})
// promise1
//     .then((result)=>console.log("Value is:",result))
//     .catch(err=> console.log("Error:",err));


const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let value = Math.random();
        if(value > 0.5){
            resolve(value);
        }else{
            reject("Value is greater than 0.5");
        }
    },3000)
})

const promiseAll = Promise.allSettled([promise1,promise2])

promiseAll
    .then((result)=> console.log('result:',result))
    .catch((err)=> console.log("Error:",err))







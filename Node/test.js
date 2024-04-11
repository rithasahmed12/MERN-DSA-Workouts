setTimeout(()=>{
    console.log("setTimeout");
},0)
setImmediate(()=>{
    console.log("set immediate");
})
process.nextTick(()=>{
    console.log("Process nextTick");
})
console.log('haaw');
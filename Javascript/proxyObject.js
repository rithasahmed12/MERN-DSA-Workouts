let target = {
    name:"Rithas",
    age:23
}

const handler = {
    get:(target,property)=>{
        return target[property]
    },
    set:(target,property,value)=>{
        target[property] = value
    }
}

const proxy = new Proxy(target,handler);

console.log(proxy.age);
proxy.age = 21;
console.log(proxy.age);
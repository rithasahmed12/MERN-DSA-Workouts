const EventEmitter = require('events');

class TrafficLights extends EventEmitter{
    constructor(){
        super();
        this.color = "red"
    }

    changeColor(color){
        this.color = color;
        this.emit('change',color);
    }
}

const trafficLight = new TrafficLights();

trafficLight.on('change',(color)=>{
    console.log(`Traffic color chanaged to ${color}`);
    if(color === "red"){
        console.log("stop");
    }else if( color === "yellow"){
        console.log("prepare to stop");
    }else{
        console.log("You can go now");
    }
})

setTimeout(()=>{
    trafficLight.changeColor("green");
},1000)

setTimeout(()=>{
    trafficLight.changeColor("yellow");
},5000)

setTimeout(()=>{
    trafficLight.changeColor("red");
},6000)
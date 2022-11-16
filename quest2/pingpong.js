var events = require('events');


const playGame = (round) => {
    
    
        for (let i=1; i<=round;i++ ){
            
            setInterval(()=>{
                console.log('Round: '+ i++); 



var ping = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('ping');
}

//Assign the event handler to an event:
ping.on('pong', myEventHandler);


ping.emit('pong')},3000);
setInterval(()=>{

var pong = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('pong');
}

//Assign the event handler to an event:
pong.on('ping', myEventHandler);


pong.emit('ping')},3000);
        

return ;
};
};

playGame(5);

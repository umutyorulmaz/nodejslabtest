import bar from "./progress-bar.js"

bar;

//npm install progress ordaki koddan yararlan

//start()
    // timer, 2 
        //tick
            //
//finish()

//log(chalkblue('__'))

//github 2.5

//var ProgressBar = require('progress');
//var chalk = require ('chalk');


/*const emitter = require('events').EventEmitter;

const LoopProcessor = (num) => {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            console.log('Processing number:' + i);
            e.emit('AfterProcess', i);
        }
    }
    , 2000)
    
    return e;
}
const lp = LoopProcessor(30);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});*/
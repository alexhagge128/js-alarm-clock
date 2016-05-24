var Alarm = require('./../js/alarm.js').Alarm;

$(document).ready(function(){
    console.log(moment().format('LTS'));
    var alarm = new Alarm();

    setInterval(function(){alarm.currentTime()}, 1000);
});

var Alarm = require('./../js/alarm.js').Alarm;

$(document).ready(function(){
  $(".alarmState").hide();

  var alarm = new Alarm();
  setInterval(function(){alarm.getCurrentTime()}, 1000);

  $("#formAlarm").submit(function(event){
    event.preventDefault();

    alarmTime = ($("#setAlarm").val());

    var timer = alarm.setAlarm(alarmTime, moment().format("HH:mm"));

    setTimeout(function(){
      $(".alarmState").show();
    }, timer);
  });

  $("#getUp").click(function(){
    $(".alarmState").hide();
  });

  $("#snooze").click(function(){
    $(".alarmState").hide();

    setTimeout(function(){
      $(".alarmState").show();
    }, 5000);
  });
});

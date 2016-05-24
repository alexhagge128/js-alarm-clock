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
//Snooze adjust
  $("#adjustSnooze").submit(function(event){
    event.preventDefault();

    snoozeTime = (($("#setSnooze").val()) * 1000);
    console.log(snoozeTime);
  });
//alarm off button
  $("#getUp").click(function(){
    $(".alarmState").hide();
  });
//snooze button
  $("#snooze").click(function(){
    $(".alarmState").hide();

    setTimeout(function(){
      $(".alarmState").show();
    }, snoozeTime);
  });
});

exports.Alarm = function() {
};

exports.Alarm.prototype.getCurrentTime = function() {
  now = moment().format('hh:mm:ss a');
  document.getElementById('timer').innerHTML = now;
};

exports.Alarm.prototype.setAlarm = function(alarmTime, currentTime) {
  var timerHour = parseInt(alarmTime.slice(0, 2)) * 3600;
  var timerMinute = parseInt(alarmTime.slice(3, 5)) * 60;
  var timer = (timerHour + timerMinute) * 1000;

  var currentHour = parseInt(currentTime.slice(0, 2)) * 3600;
  var currentMinute = parseInt(currentTime.slice(3, 5)) * 60;
  var current = (currentHour + currentMinute) * 1000;
  
  return timer - current;
};

exports.Alarm = function() {
};

exports.Alarm.prototype.currentTime = function() {
  now = moment().format('HH:mm:ss a');
  document.getElementById('timer').innerHTML = now;
};

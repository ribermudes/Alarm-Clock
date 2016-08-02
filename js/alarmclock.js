function AlarmClock(time) {
  this.alarm = time;
}

AlarmClock.prototype.alarmTurnOn = function() {
  if (this.alarm.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = AlarmClock;

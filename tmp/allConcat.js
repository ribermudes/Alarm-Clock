var AlarmClock = require('./../js/alarmclock.js').alarmModule;

var datetime = null;
        date = null

var update = function() {
  date = moment(new Date());
  datetime.html(date.format('h:mm:ss a'));
};

$(document).ready(function(){
  datetime = $('#current-time')
  update();
  setInterval(update, 1000);
});

$(document).submit(function(event) {
  event.preventDefault();
  var inputAlarm = $('#alarm-time').val();
  inputAlarm = moment(inputAlarm).format('h:mm:ss a')
  $("#alarm-output").text(inputAlarm);
  var setAlarm = inputAlarm;
})

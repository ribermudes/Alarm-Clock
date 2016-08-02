var AlarmClock = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function(){
  $('#current-time').text(moment().format('h:mm:ss a'));

  // function update() {
  //   $('#current-time').html(moment().format('hh:mm:ss a'));
  // }
  //
  // setInterval(update, 1000);
  // $("form#alarm-form").submit(function() {
  //   event.preventDefault();
  //   var alarmTime = $ ("input#alarm-time").val();
  //   time = moment(timeInput, "hh:mm a");
  //   var newAlarm = new Alarm(time);
  //   var checkAlarm = setInterval (function()) {
  //     if (newAlarm.alarmTurnOn()) {
  //       alert("ALARM!");
  //       clearInterval(checkAlarm);
  //     }
  //   }, 1000);
  //   $('.alarm-output').text(alarmTime);
  // });

});

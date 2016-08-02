var AlarmClock = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment());
});

$( "#target" ).click(function() {
  alert( "Target clicked." );
});

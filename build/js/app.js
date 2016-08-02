(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmClock(time) {
  this.alarm = time;
}

AlarmClock.prototype.alarmTurnOn = function() {
  if (this.alarm.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = AlarmClock;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarmclock.js":1}]},{},[2]);

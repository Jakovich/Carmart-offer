'use strict';
$(document).ready(function(){
  var clock;
  clock = $('#flip-clock').FlipClock({
    clockFace: "DailyCounter",
    language: 'ru-ru',
    showSeconds: false,
    countdown: true
  })
  clock.setTime(3600 * 24 * 3);
  clock.start();
})
$(document).ready(function() {
  const hr = document.getElementById('hr');
  const mn = document.getElementById('mn');
  const sc = document.getElementById('sc');
  const ampm = document.getElementById('ampm');
  const fullDate = document.getElementById('full_date');

  var hour_array = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  hour_array.forEach(function(currentItem) {
    $('ul.hours').append('<li>' + currentItem + '</li>');
    $('.minutes,.seconds').append('<li>' + currentItem * 5 + '</li>');
  });
  var timeClock = function() {
    var myDate = new Date();
    var seconds = myDate.getSeconds();
    var minutes = myDate.getMinutes();
    var hours = myDate.getHours();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    fullDate.innerHTML = new Date().toLocaleString('en-us', options);
    
    var month = new Date().toLocaleString('en-us', {  month: 'long' });
    var day = myDate.getDay();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();

    $('.seconds').css('transform', 'rotate(' + seconds * 6 + 'deg)');
    $('.minutes').css('transform', 'rotate(' + minutes * 6 + 'deg)');
    $('.hours').css('transform', 'rotate(' + (hours % 12) * 30 + 'deg)');

    var format_hours;

    if (hours < 10) {
      format_hours = '0' + hours;
    } else if (hours > 12) {
      format_hours = hours - 12;
    } else {
      format_hours = hours;
    }

    if (hours < 10) {
      format_hours = '0' + hours;
    } else if (hours > 12) {
      format_hours = hours - 12;
    } else {
      format_hours = hours;
    }

    ampm.innerHTML = hours < 12 ? 'am' : 'pm';

    hr.innerHTML = format_hours;
    mn.innerHTML = (minutes < 10 ? '0' + minutes : minutes);
    sc.innerHTML = (seconds < 10 ? '0' + seconds : seconds);

  };
  setInterval(timeClock, 1000);
});

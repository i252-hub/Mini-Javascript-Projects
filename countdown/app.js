
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  //days,hrs,minutes,seconds
  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

 const dayTxt = days.textContent = '365';
 const hrTxt = hours.textContent = '24';
 const minTxt = minutes.textContent = '60';
 const sTxt = seconds.textContent = '60';

  dayValue = parseInt(dayTxt);
  hourValue = parseInt(hrTxt);
  minuteValue = parseInt(minTxt);
  secondValue = parseInt(sTxt);


  /*
  const date = new Date();
  const day = date.getDate();
  const hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
*/
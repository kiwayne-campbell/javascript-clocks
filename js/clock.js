console.log('hello');

// this is how to build a javascript clock
// wrap all clock functionality in a function

function updateClock () {

  // we are setting up the current time using inbuilt html elemts here with new date function
  const currentTime = new Date();

  // this sets the minutes,hours, seconds etc
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();


  // now we need to add zeros to our elements for
  currentMinutes = ( currentMinutes < 10 ? '0' : '') + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? '0' : '') + currentSeconds;


  // format for hours of the day -  AM/PM plus we will make sure it returns something other than 0

  const timeOfDay = ( currentHours < 12 ) ? 'AM' : 'PM';

  currentHours = ( currentHours > 12) ? currentHours - 12 : currentHours;

  currentHours = (currentHours === 0) ? 12 : currentHours;



  // now we join all elements together in a string

  const currentTimeString = currentHours + ':' + currentMinutes + ':'
  + currentSeconds + ' ' + timeOfDay;


  // update html element with clock
  document.getElementById('clock').firstChild.nodeValue = currentTimeString;
}

updateClock();
setInterval('updateClock()',1000);

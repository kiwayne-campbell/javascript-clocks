// must set a deadline time so we can countdown with the timer- must use correct ISO format

const deadline = 'September 17 2037 23:59:59 GMT+0000';

// must setup elements of hous, minutes, days etc by using inbuilt JS timer methods

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60);
  const minutes = Math.floor( (t/1000/60) % 60);
  const hours = Math.floor( (t/(1000*60*60)) % 24);
  const days = Math.floor( t/(1000*60*60*24) );

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


// create funciton to show actual clock on html page


function newClock(id, endtime) {
  const clock = document.getElementById('countdownDiv');
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

// this method caused a delay in timer function starting

  // const timeInterval = setInterval(function(){
  //   const t = getTimeRemaining(endtime);
  //   clock.innerHTML = 'days: ' + t.days + '<br>' +
  //                     'hours: ' + t.hours + '<br>' +
  //                     'minutes: ' + t.minutes + '<br>' +
  //                     'seconds: ' + t.seconds;
  //
  //   if(t.total<=0) {
  //     clearInterval(timeInterval);
  //   }
  // },1000);



// this function allows the CT to start without a delay

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

// deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
newClock('countdownDiv', deadline);

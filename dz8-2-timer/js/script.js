window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Timer teacher

    let deadLine = '2021-06-12';

    function getTimeRemaining(endtime) {
        let delta   = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((delta/1000) % 60),
            minutes = Math.floor((delta/1000/60) % 60),
            hours   = Math.floor((delta/(1000*60*60)) % 24),
            days    = Math.floor((delta/(1000*60*60*24)));

        return {
            'total'   : delta,
            'days'    : days, 
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer        = document.getElementById(id),
            days         = timer.querySelector('.days'),    
            hours        = timer.querySelector('.hours'),
            minutes      = timer.querySelector('.minutes'),
            seconds      = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            if ( t.seconds < 10  ) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            if ( t.minutes < 10  ) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if ( t.hours < 10  ) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            
            if ( t.days < 10  ) {
                days.textContent = '0' + t.days;
            } else {
                days.textContent = t.days;
            }

            if (t.total < 0 ) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);


    //Timer my

    //let deadLine = '2020-06-09';
    function Timer(selector) {

        this.selector = selector;

        let timer = document.querySelectorAll(this.selector);

        timer.forEach( function(item) {

            function getTimeRemaining(endtime) {
                let delta   = Date.parse(endtime) - Date.parse(new Date()),
                    seconds = Math.floor((delta/1000) % 60),
                    minutes = Math.floor((delta/1000/60) % 60),
                    hours   = Math.floor((delta/(1000*60*60)) % 24),
                    days    = Math.floor((delta/(1000*60*60*24)));

                return {
                    'total'   : delta,
                    'days'    : days, 
                    'hours'   : hours,
                    'minutes' : minutes,
                    'seconds' : seconds
                };
            }
            
            let endtime      = item.dataset.timerEnd,
                days         = item.querySelector('.days'),    
                hours        = item.querySelector('.hours'),
                minutes      = item.querySelector('.minutes'),
                seconds      = item.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                
                let t = getTimeRemaining(endtime);
                
                if ( t.seconds < 10  ) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
                
                if ( t.minutes < 10  ) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }

                if ( t.hours < 10  ) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
                
                if ( t.days < 10  ) {
                    days.textContent = '0' + t.days;
                } else {
                    days.textContent = t.days;
                }

                if (t.total < 0 ) {
                    clearInterval(timeInterval);
                }
            }

        });
    }

    let timer_1 = new Timer('[data-timer]');

    let timer_2 = new Timer('[data-timer]');

});
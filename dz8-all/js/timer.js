window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    /* class Timer {
        constructor (selector) {
            this.selector = selector;

            let timer = document.querySelectorAll(this.selector);
    
            timer.forEach( function(item) {
                
                let endtime      = item.dataset.timerEnd,
                    days         = item.querySelector('.days'),    
                    hours        = item.querySelector('.hours'),
                    minutes      = item.querySelector('.minutes'),
                    seconds      = item.querySelector('.seconds'),
                    timeInterval = setInterval(updateClock, 1000);
                
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
    } */


    class Timer {
        constructor (selector) {
            this.selector = selector;

            this.timer = document.querySelector(this.selector);
                
            this.endtime      = this.timer.dataset.timerEnd;
            this.days         = this.timer.querySelector('.days');
            this.hours        = this.timer.querySelector('.hours');
            this.minutes      = this.timer.querySelector('.minutes');
            this.seconds      = this.timer.querySelector('.seconds');
            this.timeInterval = setInterval(this.updateClock, 1000);
        }

        getTimeRemaining(endtime) {
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
                'seconds' : seconds,
            };
        }

        updateClock = () => {
            let t = this.getTimeRemaining(this.endtime);
            
            if ( t.seconds < 10  ) {
                this.seconds.textContent = '0' + t.seconds;
            } else {
                this.seconds.textContent = t.seconds;
            }
            
            if ( t.minutes < 10  ) {
                this.minutes.textContent = '0' + t.minutes;
            } else {
                this.minutes.textContent = t.minutes;
            }

            if ( t.hours < 10  ) {
                this.hours.textContent = '0' + t.hours;
            } else {
                this.hours.textContent = t.hours;
            }
            
            if ( t.days < 10  ) {
                this.days.textContent = '0' + t.days;
            } else {
                this.days.textContent = t.days;
            }

            if (t.total > 0) {
                this.timer.classList.add('_show');
            } else if (t.total <= 0 ) {
                clearInterval(this.timeInterval);
                this.timer.classList.add('_end');
                this.timer.textContent = 'Время акции закончилось';
            }
        }
    }

    let timer = new Timer('[data-timer]');
});
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tabsWrap = document.querySelector('.info-header'),
        tabs     = document.querySelectorAll('.info-header-tab'),
        tabsC    = document.querySelectorAll('.info-tabcontent');
        
    tabsWrap.addEventListener('click', function(event) {
        let eTarget = event.target;

        if ( eTarget && eTarget.matches('.info-header-tab') ) {

            tabs.forEach(function(item){
                item.classList.remove('_active');
            });
            eTarget.classList.add('_active');

            let tabNum = eTarget.dataset.tabbtn;

            tabsC.forEach(function(item){
                let tabsCNum = item.dataset.tabcontent;
                if ( tabsCNum == tabNum) {
                    item.classList.add('_active');
                } else {
                    item.classList.remove('_active');
                }
            });
        }
    });

});
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //tabs teacher

    /* let tab        = document.querySelectorAll('.info-header-tab'),
        info       = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        //console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {                    
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    }); */

    //tabs my

    /* let tabsWrap = document.querySelector('#tabs'),
        tabs     = document.querySelectorAll('[data-tab-btn]'),
        tabsC    = document.querySelectorAll('[data-tab-content]');
        
    tabsWrap.addEventListener('click', function(event) {
        let eTarget = event.target;

        if ( eTarget && eTarget.matches('.info-header-tab') ) {

            tabs.forEach(function(item){
                item.classList.remove('_active');
            });
            eTarget.classList.add('_active');

            let tabNum = eTarget.dataset.tabBtn;

            tabsC.forEach(function(item){
                let tabsCNum = item.dataset.tabContent;
                if ( tabsCNum == tabNum) {
                    item.classList.add('_active');
                } else {
                    item.classList.remove('_active');
                }
            });
        }
    }); */

    function Tabs(selector) {

        this.selector = selector;

        let tabsWrap = document.querySelectorAll(this.selector);

        tabsWrap.forEach( function (item) {
            let tabs     = item.querySelectorAll('[data-tab-btn]'),
                tabsC    = item.querySelectorAll('[data-tab-content]');
            
            item.addEventListener('click', function(event) {
                let eTarget = event.target;

                if ( eTarget && eTarget.matches('.info-header-tab') ) {

                    tabs.forEach(function(item){
                        item.classList.remove('_active');
                    });
                    eTarget.classList.add('_active');

                    let tabNum = eTarget.dataset.tabBtn;

                    tabsC.forEach(function(item){
                        let tabsCNum = item.dataset.tabContent;
                        if ( tabsCNum == tabNum) {
                            item.classList.add('_active');
                        } else {
                            item.classList.remove('_active');
                        }
                    });
                }
            });
        });

        
    }

    let tabs1 = new Tabs('[data-tab]');
    let tabs2 = new Tabs('[data-tab]');
});
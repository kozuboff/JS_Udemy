window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    class Tabs {
        constructor (selector) {
            this.selector = selector;

            this.tabsWrap = document.querySelectorAll(this.selector);

            this.tabsWrap.forEach( function(item) {
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
    }

    const tabs1 = new Tabs('[data-tab]');
});
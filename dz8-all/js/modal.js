window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    class Modal {
        constructor(btn) {
            this.btn = btn;

            let btnOpen  = document.querySelectorAll(this.btn),
                modal    = document.querySelector('.overlay'),
                btnClose = document.querySelector('.popup-close');
            
            btnOpen.forEach(function(item){
                item.addEventListener('click', function() {
                    this.classList.add('more-splash');
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
                
            });
            
            
            btnClose.addEventListener('click', function() {
                btnOpen.forEach(function(item){
                    item.classList.remove('more-splash');
                });
                modal.style.display = '';
                document.body.style.overflow = '';
            });
            
        }
    }

    const modalW = new Modal('[data-modal-open]');
});
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Modal teacher(my)

    let btnMore  = document.querySelector('.more'),
        modal    = document.querySelector('.overlay'),
        btnClose = document.querySelector('.popup-close');

    btnMore.addEventListener('click', function() {
        modal.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    btnClose.addEventListener('click', function() {
        modal.style.display = '';
        btnMore.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    
    //Modal my
    
    function Modal(btn) {
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

    let modalW = new Modal('[data-modal-open]');

});
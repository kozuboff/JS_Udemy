window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    /*let message = {
        loading: 'Loading....',
        success: 'Thank you) Our manager call you later.',
        failure: 'Whats going wrong((('
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type' , 'application/json; charset=UTF-8');

        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });*/

    class Form {
        constructor (selector) {
            this.selector = selector;

            this.form = document.querySelector(this.selector);

            this.message = {
                loading: 'Loading....',
                success: 'Thank you) Our manager call you later.',
                failure: 'Whats going wrong((('
            };

            this.input = this.form.getElementsByTagName('input');
            this.statusMessage = document.createElement('div');

            this.statusMessage.classList.add('status');

            this.btnCloseWrap = this.form.closest('.popup');
            if(this.btnCloseWrap) {
                this.btnClose = this.btnCloseWrap.querySelector('.popup-close');
                this.formPopupClearStatusMessage();
            }

            this.formSubmit();
        }

        formSubmit() {
            let form = this.form,
                input = this.input,
                message = this.message,
                statusMessage = this.statusMessage;
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                form.appendChild(statusMessage);

                let formData = new FormData(form),
                    obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                //request.send(json);

                function postData(data) {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type' , 'application/json; charset=UTF-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4 && request.status === 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        };

                        request.send(data);
                    });
                }

                function clearInput() {
                    for(let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(json)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput());
            });
        }

        formPopupClearStatusMessage() {
            let btnClose = this.btnClose,
                statusMessage = this.statusMessage;
            btnClose.addEventListener('click', function () {
                statusMessage.innerHTML = '';
            });
        }
    }

    let formMain = new Form('.main-form');
    let formContact = new Form('.contact-form form');

});
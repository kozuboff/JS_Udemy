window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    class Options {
        constructor(text, opt) {
            this.text = text;
            this.height = opt.height || 100;
            this.width = opt.width || 200;
            this.backgroundColor = opt.backgroundColor || 'white';
            this.fontSize = opt.fontSize || 12;
            this.textAlign = opt.textAlign || 'left';
        }
        addDiv() {
            let newEl = document.createElement('div');
            newEl.classList.add('InsertEl');

            newEl.style.height          = this.height + 'px';
            newEl.style.width           = this.width + 'px';
            newEl.style.backgroundColor = this.backgroundColor;
            newEl.style.fontSize        = this.fontSize + 'px';
            newEl.style.textAlign       = this.textAlign;

            newEl.innerHTML = this.text;
            document.body.appendChild(newEl);
        }
    }

    let textNewEl = 'TEST',
        cssText = {
            backgroundColor: 'red'
        };
    
    const newDiv = new Options(textNewEl, cssText);
    
    //newDiv.addDiv();
});
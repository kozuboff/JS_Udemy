window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //<input id="age" value="30">
    let age = document.getElementById('age');
    function showUser(surname, name) {
      alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
    }
    showUser('Владимир', 'Владимирович');

});
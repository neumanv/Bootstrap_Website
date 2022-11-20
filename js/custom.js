"use strict"

//----------------- USUARIO ----------------------------------------------

function registro(){

    let nombre = document.getElementById("usuario-web").value;
    let contr = document.getElementById("contr-web").value;

    if(nombre == "" || contr == ""){
        alert("Es obligatorio rellenar los 2 campos");
    }
    
    if(nombre.length < 5 || nombre.length > 20){
        alert("El nombre no puede tener menos de 5 cifras ni mas de 20");
    }
}

//----------------- CUENTA ATRÁS ---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => { 

    // VARIABLES
    let DATE_TARGET = new Date('12/17/2022 04:00 PM');

    // DOM for render
    let SPAN_DAYS = document.querySelector('span#days');
    let SPAN_HOURS = document.querySelector('span#hours');
    let SPAN_MINUTES = document.querySelector('span#minutes');
    let SPAN_SECONDS = document.querySelector('span#seconds');
    
    //Cálculos en ms (millisegundos)
    let MILLISECONDS_OF_A_SECOND = 1000;
    let MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    let MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    let MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    function updateCountdown() {
        //Cálculos de tiempo
        let NOW = new Date()
        let DURATION = DATE_TARGET - NOW;
        let REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        let REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        let REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        let REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        //Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    updateCountdown();
    //Reiniciar cada segundo
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});
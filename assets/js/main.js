
/*======================================================
    =            CODICE JAVASCRIPT BIGLIETTI          =
=======================================================*/

// Raccogliamo in due variabili JS gli id dei due button
var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");

/* Creiamo una funzione di ascolto per l'evento click su btnGenera
che ora è anche una variabile JS */
btnGenera.addEventListener("click", function () {

    //console.log("Genera il ticket");

    // Creiamo variabili JS per collegarle agli input HTML 
    var fullNameInput = document.getElementById("full_name");
    var kmInput = document.getElementById("km");
    var fasciaInput = document.getElementById("fascia");

    //Creiamo altre tre variabili per selezionare i value degli input
    var fullName = fullNameInput.value;
    var km = kmInput.value;
    var fascia = fasciaInput.value;

    //console.log(fullName, km, fascia);

    // Creiamo le variabili per calcolare il costo pieno del biglietto
    var costoFissoKm = 0.21;
    var ticketPrice = costoFissoKm * km;

    //console.log(costoFissoKm, ticketPrice);
    
    // Creiamo due blocchi if per gestire i valori limite 
    
    /*if (isNan(fullName) || isNan(km)) {
        alert("Devi inserire dei numeri, i campi sono vuoti");
    } */

    if (km < 0) {
        alert("Non puoi inserire un numero di km minore di zero");
    } 

    // Creiamo il blocco if per applicare gli sconti 
    if (fascia == "minorenne") {
        resultPrice = ticketPrice - (ticketPrice * 0.2);
        sconto  = "Sconto minorenne"
    } else if (fascia == "over 65") {
        resultPrice = ticketPrice - (ticketPrice * 0.4);
        sconto = "Sconto silver"
    } else {
        resultPrice = ticketPrice;
        sconto = "Nessuno sconto"
    }

    // Generiamo un numero intero random per la carrozza
    var numberCarrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // numberCarrozza genera un numero intero compreso tra 1 e 9.
    // codiceCp genera un numero intero compreso tra 
    

    // Creiamo variabili JS per collegarle ai th HTML  
    var elName = document.getElementById("nome_passeggero");
    var elSconto = document.getElementById("sconto");
    var elCarrozza = document.getElementById("carrozza");
    var elCodice = document.getElementById("codice_cp");
    var elTicket = document.getElementById("ticket_price");
    

    // Sostituiamo le variabili JS appena create con i valori dell'HTML
    elName.innerHTML = fullName;
    elSconto.innerHTML = sconto;
    elCarrozza.innerHTML = numberCarrozza;
    elCodice.innerHTML = codiceCp;
    elTicket.innerHTML = resultPrice.toFixed(2) + "€";

    /*document.getElementById("biglietto").classList.add("visible")*/;
    document.getElementById("biglietto").style.display = "flex";

});

/* Creiamo una funzione di ascolto per l'evento click su btnAnnulla
che ora è anche una variabile JS per svuotare le variabili */
btnAnnulla.addEventListener("click", function () {

    // console.log("Annulla operazione")

    document.getElementById("full_name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fascia").value = "Maggiorenne";

    document.getElementById("biglietto").style.display = "none";
    /*document.getElementById("biglietto").classList.add("hidden")*/
    
    

}); 

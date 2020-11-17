
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

    // Creiamo le variabili per calcolare gli sconti da applicare
    var discount20 = Number(ticketPrice / 100 * 20);
    var discount40 = Number(ticketPrice / 100 * 40);
    var resultPrice; 

    console.log(discount20, discount40);
    
    // Creiamo due blocchi if per gestire i valori limite 
    
    if (isNan(fullName) || isNan(km)) {
        alert("Devi inserire dei numeri, i campi sono vuoti");
    }

    if (km < 0) {
        alert("Non puoi inserire un numero di km minore di zero");
    } 

    // Creiamo il blocco if per applicare gli sconti 
    
    if (fascia == "minorenne") {
        resultPrice = Number(ticketPrice - discount20);
        offer = "Sconto Minorenni";
    } else if (fascia == "over65") {
        resultPrice = Number(ticketPrice - discount40);
        offer = "Sconto Silver";
    } else {
        resultPrice = ticketPrice;
    }
    
    // Creiamo variabili JS per collegarle ai div HTML 
    var elName = document.getElementById("nome_passeggero");
    var elSconto = document.getElementById("sconto");
    var elCarrozza = document.getElementById("carrozza");
    var elCodice = document.getElementById("codice_cp");
    var elTicket = document.getElementById("ticket_price");
    

    // Inserire dati nel biglietto
    elName.innerHTML = full_name;
    elSconto.innerHTML = offer;
    elTicket.innerHTML = "£" + ticketPrice;
    elCarrozza.innerHTML = numberCarrozza;
    elCodice.innerHTML = codiceCp;


    document.getElementById("biglietto").style.display = "block"; 


    // Genera numero carrozza
    var numberCarrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000; 

    // numberCarrozza genera un numero intero compreso tra 1 e 9.
    // codiceCp genera un numero intero compreso tra 

});



btnAnnulla.addEventListener("click", function () {

    console.log("Annulla operazione")

    document.getElementById("biglietto").style.display = "none";

    // var fuLLNameInput = document.getElementById("full_name");
    // var kmInput = document.getElementById("km");
    // var fasciaInput = document.getElementById("fascia");

    fullname = "";
    km = "";
    fascia = "minorenne";


}); 





// creiamo il blocco if con i risultati 

if (userAge < 18) {
    resultPrice = Number(roughTotalPrice - discount20);
} else if (userAge > 65) {
    resultPrice = Number(roughTotalPrice - discount40);
} else {
    resultPrice = roughTotalPrice;
}


alert("Il prezzo del tuo biglietto è pari a euro " + resultPrice.toFixed(2) + " €.");

// trasferiamo il risultato nella pagina HTML

document.getElementById("result").innerHTML = "Il prezzo del tuo biglietto è pari a " + resultPrice.toFixed(2) + " €.";

// Forma breve

// result.innerHTML = ("Il prezzo del tuo biglietto è pari a euro" + " resultPrice");


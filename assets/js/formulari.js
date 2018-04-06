/*******************************************************************************
# Validar
# Processar AJAX
# Relat Llarg
# Modal
*******************************************************************************/

/*
# Validar
*******************************************************************************/
$(function() {
  // Seleccionem el formulari a partir de la seva ID.
  // Seleccionem el div on mostrarem missatges a partir de la seva ID.
  var form = $('#ajax-form');
  var formMessages = $('#form-missatge');

  // Creem un event listener per capturar el submit del formulari.
  $(form).submit(function(event) {
    // Evitem que el navegador envie el submit.
    event.preventDefault();

    // Obtenim les dades del formulari i les guardem en "formData".
    var formData = $(form).serialize();

    // Duem endavant el submit mitjançant AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'), // <form action="mailer.php">
      data: formData, // Enviem les dades emmagatzemades.
      dataType: 'json'
    })
    // Tot ha anat bé...
    .done(function(response) {
      // Afegim la classe desitjada al div emprat per informar.
      // Mostrem el contingut del missatge.
      $(formMessages).removeClass('alert-warning');
      $(formMessages).addClass('alert-success');
      $(formMessages).text(response.missatge);

      processaDades(response);
    })
    // Error...
    .fail(function(data) {
      // Afegim la classe desitjada al div emprat per informar.
      $(formMessages).removeClass('alert-success');
      $(formMessages).addClass('alert-warning');

      // Mostrem el contingut del missatge.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text("Oops! El missatge no s'ha pogut enviar...");
      }
    });
  });
});

/*
# Processar AJAX
*******************************************************************************/
function processaDades(response) {
  if (response.titol == "Gulliver's Travels") {
    gulliversTravels(response);
  } else if (response.titol == "Time and the Gods") {
    timeAndTheGods(response);
  } else if (response.titol == "A Princess of Mars") {
    PrincessOfMars(response);
  } else {
    TheWarOfTheWorlds(response);
  }
}

/*
# Relat Llarg
*******************************************************************************/
/*
Gulliver's Travels
------------------------------------------------------------------------------*/
function gulliversTravels(response) {

}

/*
Time and the Gods
------------------------------------------------------------------------------*/
function timeAndTheGods(response) {

}

/*
A Princess of Mars
------------------------------------------------------------------------------*/
function PrincessOfMars(response) {

}

/*
The War of the Worlds
------------------------------------------------------------------------------*/
function TheWarOfTheWorlds(response) {

}

/*
# Modal
*******************************************************************************/
function modalTextLlarg(titol, autor, tipus, text) {

}

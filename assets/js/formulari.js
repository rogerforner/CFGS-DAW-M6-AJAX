/*******************************************************************************
# Validar
# Modal
# Relat Llarg
*******************************************************************************/

/*
# Validar
*******************************************************************************/
$(function() {
  // Seleccionem el formulari a partir de la seva ID.
  // Seleccionem el div on mostrarem missatges a partir de la seva ID.
  var form = $('#ajax-form');
  var formMessages = $('#form-messages');

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
      data: formData // Enviem les dades emmagatzemades.
    })
    // Tot ha anat bé...
    .done(function(response) {
      // Afegim la classe desitjada al div emprat per informar.
      // Mostrem el contingut del missatge.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');
      $(formMessages).text(response);

      // Buidem els camps del formulari.
      $('#email').val('');
      $('#password').val('');
      $('#llibre').val('');
      $('#abonar').val('');
    })
    // Error...
    .fail(function(data) {
      // Afegim la classe desitjada al div emprat per informar.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Mostrem el contingut del missatge.
      if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
      } else {
          $(formMessages).text('Oops! Ha succeït un error i el missatge no s\'ha pogut enviar...');
      }
    });
  });
});

/*
# Modal
*******************************************************************************/

/*
# Relat Llarg
*******************************************************************************/
/*
Gulliver's Travels
------------------------------------------------------------------------------*/

/*
Time and the Gods
------------------------------------------------------------------------------*/

/*
A Princess of Mars
------------------------------------------------------------------------------*/

/*
The War of the Worlds
------------------------------------------------------------------------------*/

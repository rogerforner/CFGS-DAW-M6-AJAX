/*******************************************************************************
# Validar
# Processar AJAX
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
  // Dades del llibre.
  var titol;
  var autor;
  var tipus;
  var rutaTxt;

  // Segons el llibre les variables tindran unes dades determinades.
  if (response.titol == "Gulliver's Travels") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/f-gullivers-travels-into-several-remote-regions-of-the-world-short.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "Time and the Gods") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/f-time-and-the-gods-short.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "A Princess of Mars") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/sf-a-princess-of-mars-short.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "The War of the Worlds") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/sf-the-war-of-the-worlds-short.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);
  } else {
    // No res...
  }
}

/*
# Modal
*******************************************************************************/
function modalTextLlarg(titol, autor, tipus, rutaTxt) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("resumPrincess").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", rutaTxt, true);
  xhttp.send();
}

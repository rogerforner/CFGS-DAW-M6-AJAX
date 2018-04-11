/*******************************************************************************
# Validar (jQuery)
# Processar AJAX
# # Modal + Text llarg (JavaScript)
*******************************************************************************/

/*
# Validar (jQuery)
Validar el formulari amb jQuery AJAX.
*******************************************************************************/
$(function() {
  // Seleccionem el formulari a partir de la seva ID.
  // Seleccionem el div on mostrarem missatges a partir de la seva ID.
  var form = $('#ajax-form');
  var formMessages = $('#form-missatge');

  // Creem un event listener per capturar el submit del formulari.
  $(form).submit(function(event) {
    // Evitem que el navegador enviï el submit.
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
      $(formMessages).removeClass('d-none');
      $(formMessages).removeClass('alert-warning');
      $(formMessages).addClass('alert-success');
      $(formMessages).text(response.missatge);

      processaDades(response);
    })
    // Error...
    .fail(function(data) {
      // Afegim la classe desitjada al div emprat per informar.
      $(formMessages).removeClass('d-none');
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
  // Creem unes variables per emmgatzemar les dades, corresponents als relats,
  // que van incloses en la resposta AJAX.
  var titol;
  var autor;
  var tipus;
  var rutaTxt;

  // Segons el llibre les variables tindran unes dades determinades.
  if (response.titol == "Gulliver's Travels") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/f-gullivers-travels-into-several-remote-regions-of-the-world.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "Time and the Gods") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/f-time-and-the-gods.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "A Princess of Mars") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/sf-a-princess-of-mars.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);

  } else if (response.titol == "The War of the Worlds") {
    var titol   = response.titol;
    var autor   = response.autor;
    var tipus   = response.tipus;
    var rutaTxt = "relats/sf-the-war-of-the-worlds.txt";

    // Cridem la funció que obrirà el modal de lectura.
    modalTextLlarg(titol, autor, tipus, rutaTxt);
  } else {
    // No res...
  }
}

/*
# Modal + Text llarg (JavaScript)
Només es demana emprar Ajax JavaScript amb el text llarg.
*******************************************************************************/
function modalTextLlarg(titol, autor, tipus, rutaTxt) {
  // Crear l'objecte XMLHttpRequest(), necessari per poder obtenir dades i
  // mostrar-les sense la necessitat de recarregar la pàgina.
  var xhttp = new XMLHttpRequest();

  // onreadystatechange ens permet cridar l'objecte quan quanvia la propietat
  // readyState.
  // "this.readyState == 4" Sol·licitud finalitzada i la resposta està preparada.
  // "this.status == 200" Resposta del servidor "OK".
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Obtenim un element del DOM amb id="cosTextLlarg" i hi inserim el
      // contingut de la resposta xhttp = XMLHttpRequest();
      // El contingut serà el contingut del fitxer .txt.
      document.getElementById("cosTextLlarg").innerHTML = this.responseText;
    }
  };
  // Per obtenir el contingut del fitxer .txt hem de definir la ruta fins aquest.
  // Especifiquem la sol·licitud open(method, urlUbicacioFitxer, async).
  xhttp.open("GET", rutaTxt, true);
  // Enviem la sol·licitud al servidor.
  xhttp.send();

  // Hi inserim les dades dintre dels elememts del modal.
  document.getElementById("textLlarg").innerHTML = titol;
  document.getElementById("autorTextLlarg").innerHTML = autor;
  document.getElementById("tipusTextLlarg").innerHTML = tipus;

  // Ocultem el modal del formulari.
  // Esperem 2 segons per a que ens doni temps de veure el missatge de confirmació.
  setTimeout(
  function() {
    $('#exampleModalFormulari').modal('hide');

    // Eliminem el missatge de confirmació.
    $('#form-missatge').addClass('d-none');
  }, 2000);

  // Obrim el modal que conté tota la informació.
  $('#exampleModalTextLlarg').modal();
}

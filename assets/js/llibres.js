/*******************************************************************************
# Relat Curt
*******************************************************************************/

/*
# Relat Curt
*******************************************************************************/
/*
Gulliver's Travels
------------------------------------------------------------------------------*/
// Crear l'objecte XMLHttpRequest(), necessari per poder obtenir dades i
// mostrar-les sense la necessitat de recarregar la pàgina.
var xhttpGulliver = new XMLHttpRequest();

// onreadystatechange ens permet cridar l'objecte quan quanvia la propietat
// readyState.
// "this.readyState == 4" Sol·licitud finalitzada i la resposta està preparada.
// "this.status == 200" Resposta del servidor "OK".
xhttpGulliver.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Obtenim un element del DOM amb id="resumGulliver" i hi inserim el
    // contingut de la resposta xhttpGulliver = XMLHttpRequest();
    // El contingut serà el contingut del fitxer .txt.
    document.getElementById("resumGulliver").innerHTML = this.responseText;
  }
};
// Per obtenir el contingut del fitxer .txt hem de definir la ruta fins aquest.
// Especifiquem la sol·licitud open(method, urlUbicacioFitxer, async).
xhttpGulliver.open("GET", "relats/f-gullivers-travels-into-several-remote-regions-of-the-world-short.txt", true);
// Enviem la sol·licitud al servidor.
xhttpGulliver.send();

/*
Time and the Gods
------------------------------------------------------------------------------*/
var xhttpTime = new XMLHttpRequest();
xhttpTime.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("resumTime").innerHTML = this.responseText;
  }
};
xhttpTime.open("GET", "relats/f-time-and-the-gods-short.txt", true);
xhttpTime.send();

/*
A Princess of Mars
------------------------------------------------------------------------------*/
var xhttpPrincess = new XMLHttpRequest();
xhttpPrincess.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("resumPrincess").innerHTML = this.responseText;
  }
};
xhttpPrincess.open("GET", "relats/sf-a-princess-of-mars-short.txt", true);
xhttpPrincess.send();

/*
The War of the Worlds
------------------------------------------------------------------------------*/
var xhttpWorlds = new XMLHttpRequest();
xhttpWorlds.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("resumWorlds").innerHTML = this.responseText;
  }
};
xhttpWorlds.open("GET", "relats/sf-the-war-of-the-worlds-short.txt", true);
xhttpWorlds.send();

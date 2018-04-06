/*******************************************************************************
# Relat Curt
*******************************************************************************/

/*
# Relat Curt
*******************************************************************************/
/*
Gulliver's Travels
------------------------------------------------------------------------------*/
var xhttpGulliver = new XMLHttpRequest();
xhttpGulliver.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("resumGulliver").innerHTML = this.responseText;
  }
};
xhttpGulliver.open("GET", "relats/f-gullivers-travels-into-several-remote-regions-of-the-world-short.txt", true);
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

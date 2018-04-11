function loadJSON() {

    var http_request = new XMLHttpRequest();
    http_request.overrideMimeType("application/json");
    var data_file = "relats.json";

    http_request.onreadystatechange = function(){

    if (http_request.readyState == 4 && http_request.status == "200" ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);
        // ara ja tenim un array amb les dades
        var output='<ul class="list-group list-group-flush bg-warning">';
        for (var i = 0; i < jsonObj.length; i++) {
          output+='<li class="list-group-item">';
          output+='<h4>'+jsonObj[i]["Title"]+'</h3><br>';
          output+='<p><b>Descripcio</b><br>'+jsonObj[i]["Description"]+'</p><br>';
          output+='<p><b>Nº Pagines:</b> '+jsonObj[i]["Pages"]+'</p><br>';
          output+='<p><b>Autor:</b> '+jsonObj[i]["AutorName"]+' '+jsonObj[i]["AutorSurname"]+'</p><br>';
          output+='<p><b>Editorial:</b> '+jsonObj[i]["PublishingHouse"]+'</p><br>';
          output+='</li>';
        }
        output+='</ul>';
        document.getElementById("llibres").innerHTML=output;
    }
  }
  http_request.open("GET", data_file, true);
  http_request.send();
}

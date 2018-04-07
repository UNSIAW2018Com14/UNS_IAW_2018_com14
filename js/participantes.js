const TOTALEQUIPOS = 4;

var jsonIntegrantes = JSON.parse($.getJSON({'url': "json/integrantes.json", 'async': false}).responseText);
var jsonEquipos = JSON.parse($.getJSON({'url': "json/equipos.json", 'async': false}).responseText);

function mostrarEquipos (datosEquipos){
    for (i = 0; i < datosEquipos.equipos.length; i++) {
       var id = "equipo"+(i+1);
       $("#muestraEquipos").append($("<li></li>").addClass("list-group-item").attr("id",id).text(datosEquipos.equipos[i].nombre));
    }
}


function mostrarIntegrantes(datosEquipos, idEquipo) {
    var equipoElegido;
    switch (idEquipo) {
    case "equipo1":
        equipoElegido=0;
        break;
    case "equipo2":
        equipoElegido=1;
        break;
    case "equipo3":
        equipoElegido=2;
        break;
    case "equipo4":
        equipoElegido=3;
        break;
    }
    
    for (i = 0; i < datosEquipos.equipos[equipoElegido].integrantes.length; i++) {
       var id = "integrante" + (i+1);
       $("#muestraIntegrantes").append($("<li></li>").addClass("list-group-item").attr("id",id).text(datosEquipos.equipos[equipoElegido].integrantes[i].nickname));
}
}

function mostrarIntegrantesVacio (){
   for (i = 0; i < 3; i++) {
       var text = "integrante " + (i+1);
       $("#muestraIntegrantes").append($("<li></li>").addClass("list-group-item").text(text));
   }
}


function mostrarInformacion (datosEquipo, equipoElegido, datosIntegrantes, integranteElegido){
    var integrantes = ordenarIntegrantes (datosEquipo, equipoElegido, datosIntegrantes);
    var integrante = integrantes[integranteElegido];
    $("#nombre").text("Nombre: " + integrante.nombre);
    $("#apellido").text("Apellido: "+ integrante.nickname);
    $("#edad").text("Edad: " + integrante.edad);
    $("#favCard").text("Carta Favorita: " + integrante.cartaFavorita);
    $("#favClass").text("Clase Favorita: " + integrante.claseFavorita);
}

function ordenarIntegrantes (datosEquipo, equipoElegido, datosIntegrantes) {
    var integrantes = [];
    for (j = 0; j < datosEquipo.equipos[equipoElegido].integrantes.length;j++) {
        for (i = 0; i < datosIntegrantes.integrantes.length; i++) {
            if (datosEquipo.equipos[equipoElegido].integrantes[j].nickname === datosIntegrantes.integrantes[i].nickname) {
                integrantes[j] = datosIntegrantes.integrantes[i];
            }
        }
    }
    return integrantes;
}


function clickEquipo (e) {
    $("#muestraIntegrantes").empty();
    var id = $(e.target).attr("id");
    mostrarIntegrantes(jsonEquipos,id);
    $(e.target).addClass("equipoCSS");
    $(e.target).siblings().removeClass("equipoCSS");
    }
    
 function clickIntegrante (e) {
    $("#muestraIntegrantes").empty();
    var id = $(e.target).attr("id");
    mostrarIntegrantes(jsonEquipos,id);
    $(e.target).addClass("equipoCSS");
    $(e.target).siblings().removeClass("equipoCSS");
 }

$(document).ready(mostrarEquipos(jsonEquipos));
$(document).ready(mostrarIntegrantesVacio());
$(document).ready($("#muestraEquipos").children().click(clickEquipo));
$(document).ready(mostrarInformacion(jsonEquipos,2,jsonIntegrantes,2));
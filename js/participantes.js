const TOTALEQUIPOS = 4;

var jsonIntegrantes = JSON.parse($.getJSON({'url': "json/integrantes.json", 'async': false}).responseText);
var jsonEquipos = JSON.parse($.getJSON({'url': "json/equipos.json", 'async': false}).responseText);

function mostrarEquipos (datosEquipos){
    for (i = 0; i < datosEquipos.equipos.length; i++) {
     var id = "#equipo" +(i+1);
     var text = datosEquipos.equipos[i].nombre;
     $(id).text(text);
    }
}


function mostrarIntegrantes(datosEquipos, equipoElegido) {
   for (i = 0; i < datosEquipos.equipos[equipoElegido].integrantes.length; i++) {
       var text = datosEquipos.equipos[equipoElegido].integrantes[i].nickname;
       var id = "#integrante" + (i+1);
       $(id).text(text);
   }
}

function mostrarIntegrantesVacio () {
   for (i = 0; i < 4; i++) {
       var id = "#integrante" + (i+1);
       var text = "";
       $(id).text(text);
   }
}

function mostrarInformacion (datosEquipo, equipoElegido, datosIntegrantes, integranteElegido){
    var integrantes = ordenarIntegrantes (datosEquipo, equipoElegido, datosIntegrantes);
    var integrante = integrantes[integranteElegido];
    $("#nombreReal").text(integrante.nombre + " " + integrante.apellido);
    $("#nick").text(integrante.nickname);
    $("#edad").text(integrante.edad);
    $("#favCard").text(integrante.cartaFavorita);
    $("#favClass").text(integrante.claseFavorita);
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

function clickIntegrante1 (e) {
    var id = $(e.target);
    mostrarIntegrantes(jsonEquipos,0);
}

function clickIntegrante2 (e) {
    var id = $(e.target);
    mostrarIntegrantes(jsonEquipos,1);
}

function clickIntegrante3 (e) {
    var id = $(e.target);
    mostrarIntegrantes(jsonEquipos,2);
}

function clickIntegrante4 (e) {
    var id = $(e.target);
    mostrarIntegrantes(jsonEquipos, 3);
}


$(document).ready(mostrarEquipos(jsonEquipos));
$(document).ready(mostrarIntegrantesVacio());
$("#equipo1").click(clickIntegrante1);
$("#equipo2").click(clickIntegrante2);
$("#equipo3").click(clickIntegrante3);
$("#equipo4").click(clickIntegrante4);

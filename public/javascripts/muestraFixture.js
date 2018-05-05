function mostrarEquipos () {
    $.get("./api/instancias", function(instancias) {
        $.get("./api/enfrentamientos", function(enfrentamientos) {
            obtenerEquipos(instancias,enfrentamientos);
        });
    });
}

function obtenerEquipos (instancias, enfrentamientos){
    for (k=0; k < instancias.length; k++) {
        for (j = 0; j< instancias[k].enfrentamientos.length; j++){
            for (i=0; i< enfrentamientos.length; i++){ 
                if (instancias[k].enfrentamientos[j] === enfrentamientos[i].idEnfrentamiento){         
                    var fecha = $("#fecha").append($("<tr></tr>"));
                    var equipo1 = $("#equipo1").append($("<tr></tr>"));
                    var equipo2 = $("#equipo2").append($("<tr></tr>"));
                    if (i % 2 === 0)
                    fecha.append($("<td></td>").text(instancias[k].nombre));
                    else
                    fecha.append($("<td></td").text(instancias[k].diaInicio + " - " + instancias[k].diaFin));
                    equipo1.append($("<td></td").text(enfrentamientos[i].equipo1));
                    equipo2.append($("<td></td").text(enfrentamientos[i].equipo2));
                }
            }
        }
    }
}

$(document).ready(mostrarEquipos());


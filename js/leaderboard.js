var jsonIntegrantes = { 
   "integrantes" : [
    {
        "nombre": "José",
        "apellido": "Fuentes",
        "nickname": "DragonSlayerXD",
        "DNI": "35345231",
        "edad": "23",
        "sexo" : "M",
        "foto" : "foto1.jpg",
        "cartaFavorita": "Firelands portal",
        "claseFavorita": "Mage"
    },
    {
        "nombre": "Pedro",
        "apellido": "Castillo",
        "nickname": "DarkKnight666",
        "DNI" : "31234421",
        "edad": "19",
        "sexo" : "M",
        "foto" : "foto2.jpg",
        "cartaFavorita": "Twisting Nether",
        "claseFavorita": "Warlock"
    }
    ]
};

var jsonEquipos = {
       "equipos" : [
    {
    	"nombre": "DarkSoulTemple",
   	"institucion": "UNS",
    	"integrantes": [
                          {"dni": "35345231"},
                          {"dni": "31234421"}
    			]
    },
     {
    	"nombre": "TheAvengers",
   	"institucion": "UTN BB",
    	"integrantes": [
                        {"dni": "28675231"},
                        {"dni": "27875339"}
    			]
        }
    ]
};

function mostrarRankingEquipos (datosEquipos){
    for (i = 0; i < datosEquipos.equipos.length; i++) {
     $("#rankingEquipos").append($("<li></li>").append(datosEquipos.equipos[i].nombre));
    }
}

function mostrarRankingIntegrantes (datosIntegrantes){
    for (i = 0; i < datosIntegrantes.integrantes.length; i++) {
     $("#rankingIntegrantes").append($("<li></li>").append(datosIntegrantes.integrantes[i].nickname));
    }
}

$(document).ready(mostrarRankingEquipos(jsonEquipos));
$(document).ready(mostrarRankingIntegrantes(jsonIntegrantes));


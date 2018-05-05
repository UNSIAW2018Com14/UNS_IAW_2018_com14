function mostrarEnfrentamientos (bo5s){
	$.get("./api/bo5s", function(bo5s) {
	     for (i = 0; i < bo5s.length; i++) {
	       var bo5 = bo5s[i];
	       $("#enfrentamientos").append($("<li></li>").addClass("list-group-item").addClass("muestras").text("Enfrentamiento:" + (i+1) + " Dia: " + bo5.dia + " Hora: "+ bo5.hora));
	       $("#enfrentamientos").append($("<li></li>").addClass("list-group-item").addClass("muestras").text(bo5.nickIntegrante1 +" vs " + bo5.nickIntegrante2));
	       $("#enfrentamientos").append($("<li></li>").addClass("list-group-item").addClass("muestras").text("Ganador: " + bo5.Resultado));
	       $("#enfrentamientos").append($("<br></br>"));
	    }
	});
}

$(document).ready(mostrarEnfrentamientos());
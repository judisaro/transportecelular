var canvas = document.getElementById('canvas');
var lienzo = canvas.getContext("2d");
var velocidad = 2;
var velocidadParticulas = 2;
var nivel = 1;
var tipoDeParticula = 0;
var idCelulaActual= 0;
var puntos = 0;
pantalla = 1;

document.addEventListener("mousedown",presionarMouse);

//JSONS
var fondo1 = {
	URL : "../img/juego-transporte/fondo1.jpg", 
	posx: 0
};
var fondo2 = {
	URL : "../img/juego-transporte/fondo2.jpg",
	posx: 900
};

var fondoInicio = {
	URL: "../img/juego-transporte/pantalla-inicio.jpg"
};

var fondoFinal = {
	URL: "../img/juego-transporte/pantalla-final.jpg"
};

var tabGeneral = {
	URL : "../img/juego-transporte/tabs-general.jpg"
};

var tabOsmosis = {
	URL : "../img/juego-transporte/tabs-osmosis.jpg"
};

var tabDifSim = {
	URL : "../img/juego-transporte/tabs-difsimple.jpg"
};

var tabPrCanal = {
	URL : "../img/juego-transporte/tabs-prcanal.jpg"
};

var tabPrCanalAct= {
	URL : "../img/juego-transporte/tabs-prcanalact.jpg"
};

var tabEndo = {
	URL : "../img/juego-transporte/tabs-endo.jpg"
};

var tabPino = {
	URL : "../img/juego-transporte/tabs-pino.jpg"
};

var celulaGeneral = {
	URL : "../img/juego-transporte/celula-general.jpg"
};

var celulaOsmosis = {
	URL : "../img/juego-transporte/celula-osmosis.jpg"
};

var celulaDifSim = {
	URL : "../img/juego-transporte/celula-difsimple.jpg"
};

var celulaPrCanal = {
	URL : "../img/juego-transporte/celula-prcanal.jpg"
};

var celulaPrCanalAct= {
	URL : "../img/juego-transporte/celula-prcanalact.jpg"
};

var celulaEndo = {
	URL : "../img/juego-transporte/celula-endo.jpg"
};

var celulaPino = {
	URL : "../img/juego-transporte/celula-pino.jpg"
};

var particulaOsmosis = {
	URL : "../img/juego-transporte/particula-osmosis.jpg",
};

var particulaDifSim = {
	URL : "../img/juego-transporte/particula-difsimple.jpg",
};

var particulaPrCanal = {
	URL : "../img/juego-transporte/particula-prcanal.jpg",
};

var particulaPrCanalAct= {
	URL : "../img/juego-transporte/particula-prcanalact.jpg",
};

var particulaEndo = {
	URL : "../img/juego-transporte/particula-endo.jpg",
};

var particulaPino = {
	URL : "../img/juego-transporte/particula-pino.jpg",
};

var particula1 = {
	URL : "nada",
	posx: 900,
	posy: 0,
	id : 0
};

var particula2 = {
	URL : "nada",
	posx: 900,
	posy: 0,
	id : 0
};

var particula3 = {
	URL : "nada",
	posx: 900,
	posy: 0,
	id : 0
};


function main() {
	inicializacionDibujos();
	pantallaInicio();
	dibujar();
	
}

function pantallaInicio() {
	
	lienzo.drawImage(fondoInicio.imagen, 0, 0);
}

function inicializacionDibujos() {
	// Fondos
	inicializacionFondos();
	inicializacionTabs();
	imagenTabactual = tabGeneral.imagen;
	inicializacionCelulas();
	imagenCelulaActual = celulaGeneral.imagen;
	inicializacionparticulas();
}

function inicializacionCelulas() {
	celulaGeneral.imagen = new Image;
	celulaGeneral.imagen.src = celulaGeneral.URL;

	celulaDifSim.imagen = new Image;
	celulaDifSim.imagen.src = celulaDifSim.URL;

	celulaPrCanal.imagen = new Image;
	celulaPrCanal.imagen.src = celulaPrCanal.URL;

	celulaOsmosis.imagen = new Image;
	celulaOsmosis.imagen.src = celulaOsmosis.URL;

	celulaPrCanalAct.imagen = new Image;
	celulaPrCanalAct.imagen.src = celulaPrCanalAct.URL;

	celulaEndo.imagen = new Image;
	celulaEndo.imagen.src = celulaEndo.URL;

	celulaPino.imagen = new Image;
	celulaPino.imagen.src = celulaPino.URL;

}

function inicializacionparticulas() {
	
	particulaDifSim.imagen = new Image();
	particulaDifSim.imagen.src = particulaDifSim.URL;

	particulaPrCanal.imagen = new Image();
	particulaPrCanal.imagen.src = particulaPrCanal.URL;

	particulaOsmosis.imagen = new Image();
	particulaOsmosis.imagen.src = particulaOsmosis.URL;

	particulaPrCanalAct.imagen = new Image();
	particulaPrCanalAct.imagen.src = particulaPrCanalAct.URL;

	particulaEndo.imagen = new Image();
	particulaEndo.imagen.src = particulaEndo.URL;

	particulaPino.imagen = new Image();
	particulaPino.imagen.src = particulaPino.URL;
}

function inicializacionTabs() {
	tabGeneral.imagen = new Image();
	tabGeneral.imagen.src = tabGeneral.URL;

	tabOsmosis.imagen = new Image();
	tabOsmosis.imagen.src = tabOsmosis.URL;

	tabDifSim.imagen = new Image();
	tabDifSim.imagen.src = tabDifSim.URL;

	tabPrCanal.imagen = new Image();
	tabPrCanal.imagen.src = tabPrCanal.URL;

	tabPrCanalAct.imagen = new Image();
	tabPrCanalAct.imagen.src = tabPrCanalAct.URL;

	tabEndo.imagen = new Image();
	tabEndo.imagen.src = tabEndo.URL;

	tabPino.imagen = new Image();
	tabPino.imagen.src = tabPino.URL;
}

function inicializacionFondos() {
	fondo1.imagen = new Image();
	fondo1.imagen.src = fondo1.URL;

	fondo2.imagen = new Image();
	fondo2.imagen.src = fondo2.URL;

	fondoInicio.imagen = new Image();
	fondoInicio.imagen.src = fondoInicio.URL;

	fondoFinal.imagen = new Image();
	fondoFinal.imagen.src = fondoFinal.URL;

}

function dibujar() {

	switch(pantalla) {
		    case 1:
			    velocidad = 2;
			    velocidadParticulas = 2;
				nivel = 1;
				tipoDeParticula = 0;
				idCelulaActual= 0;
				puntos = 0;
		        lienzo.drawImage(fondoInicio.imagen, 0 ,0 );
		        break;
		    case 2:
		        dibujarFondo();
				dibijarTab();
				dibujarParticulas();
				dibujarCelula();
		        break;
		 	case 3:
		        lienzo.drawImage(fondoFinal.imagen, 0, 0);
		        break;
		}

	setTimeout(dibujar, 20);
}

function dibujarParticulas() {

	particula1 = actualizarParticula(particula1);
	dibujarParticula(particula1);
	comprobarParticula(particula1);

	/*particula2 = actualizarParticula(particula2);
	dibujarParticula(particula2);

	particula3 = actualizarParticula(particula3);
	dibujarParticula(particula3);*/
}

function comprobarParticula(particula) {
	if(particula.posx < 110){
		if(particula.id == idCelulaActual){
			puntos ++;
			console.log("PUNTOS :" + puntos);
			velocidadParticulas++;
		}else{
			switch(particula.id) {
		    case 1:
		        console.log("Este tipo de particulas son transportadas por Òsmosis");
		        break;
		    case 2:
		        console.log("Este tipo de particulas son transportadas por Difucion simple");
		        break;
		 	case 3:
		        console.log("Este tipo de particulas son transportadas por Proteina canal (transporte pasivo)");
		        break;
		    case 4:
		        console.log("Este tipo de particulas son transportadas por Proteina canal (transporte pasivo)");
		        break;
		    case 5:
		        console.log("Este tipo de particulas son transportadas por Endocitosis");
		        break;
		    case 6:
		        console.log("Este tipo de particulas son transportadas por Pinocitosis");
		        break;
		       
			}
			pantalla = 3;
		}


		particula.posx = 900;
		particula.posy = 0;
		particula.URL = "nada";
		particula.id = 0;
	}
}

function dibujarParticula(particula) {
	lienzo.drawImage(getImagenParticula(particula), particula.posx, particula.posy);
}

function getImagenParticula(particula) {
	switch(particula.id) {
		    case 1:
		        particula.imagen = particulaOsmosis.imagen;
		        break;
		    case 2:
		        particula.imagen = particulaDifSim.imagen;
		        break;
		 	case 3:
		        particula.imagen = particulaPrCanal.imagen;
		        break;
		    case 4:
		        particula.imagen = particulaPrCanalAct.imagen;
		        break;
		    case 5:
		        particula.imagen = particulaEndo.imagen;
		        break;
		    case 6:
		        particula.imagen = particulaPino.imagen;
		        break;
		       
		}

		return particula.imagen;
}

function actualizarParticula(particula) {
	if(particula.URL == "nada"){
		var id = Math.floor(Math.random() * (7 - 1)) + 1;
		particula.id = id;
		switch(id) {
		    case 1:
		        particula.URL = particulaOsmosis.URL;
		        break;
		    case 2:
		        particula.URL = particulaDifSim.URL;
		        break;
		 	case 3:
		        particula.URL = particulaPrCanal.URL;
		        break;
		    case 4:
		        particula.URL = particulaPrCanalAct.URL;
		        break;
		    case 5:
		        particula.URL = particulaEndo.URL;
		        break;
		    case 6:
		        particula.URL = particulaPino.URL;
		        break;
		       
		}

		particula.posy = Math.floor(Math.random() * (300 - 0)) + 1;
		particula.posx = 900;

		
	}
	
	//(100,150)
	var y;
	var m;
	var x;
	var b;
	//y = m*x + b;
	m = (particula.posy - 150)/(particula.posx - 0);
	b = 0;
	x = particula.posx - velocidadParticulas; 

	y = m*(x) + 150;

	particula.posy = y;
	particula.posx = x;
	
	return particula;
}

function dibijarTab() {
	lienzo.drawImage(imagenTabactual, 0, 400);
}

function dibujarCelula() {
	lienzo.drawImage(imagenCelulaActual, 10, 100);
}


function dibujarFondo() {
		lienzo.drawImage(fondo1.imagen,fondo1.posx,0);
		lienzo.drawImage(fondo2.imagen,fondo2.posx,0);

		fondo1.posx = fondo1.posx - velocidad;
		fondo2.posx = fondo2.posx - velocidad;

		if(fondo1.posx == -900){
			fondo1.posx = 900;
			if(velocidad < 6){
				velocidad++;
			}
			
		}
		if (fondo2.posx == -900) {
			fondo2.posx= 900;
			if(velocidad < 6){
				velocidad++;
			}
		}



	
}

function presionarMouse(evento){
  x = evento.layerX;
  y = evento.layerY;

  switch(pantalla) {
    case 1:
        if(x > 450 && x < 900 && y > 250 && y < 500){
        	pantalla = 2;
        }
        break;
    case 2:
        if(x>100 && x<200 && y>400 && y<500){
		  	imagenTabactual = tabOsmosis.imagen;
		  	imagenCelulaActual = celulaOsmosis.imagen;
		  	idCelulaActual = 1; 
		  }else if(x>200 && x<300 && y>400 && y<500){
		  	imagenTabactual = tabDifSim.imagen;
		  	imagenCelulaActual = celulaDifSim.imagen;
		  	idCelulaActual = 2;
		  }else if(x>300 && x<400 && y>400 && y<500){
		  	imagenTabactual = tabPrCanal.imagen;
		  	imagenCelulaActual = celulaPrCanal.imagen;
		  	idCelulaActual = 3;
		  }else if(x>500 && x<600 && y>400 && y<500){
		  	imagenTabactual = tabPrCanalAct.imagen;
		  	imagenCelulaActual = celulaPrCanalAct.imagen;
		  	idCelulaActual = 4;
		  }else if(x>600 && x<700 && y>400 && y<500){
		  	imagenTabactual = tabEndo.imagen;
		  	imagenCelulaActual = celulaEndo.imagen;
		  	idCelulaActual = 5;
		  }else if(x>700 && x<800 && y>400 && y<500){
		  	imagenTabactual = tabPino.imagen;
		  	imagenCelulaActual = celulaPino.imagen;
		  	idCelulaActual = 6;
		  }else{
			imagenTabactual = tabGeneral.imagen;
		  	imagenCelulaActual = celulaGeneral.imagen;
		  	idCelulaActual = 0;
		  }

        break;
 	case 3:
        if(x > 450 && x < 900 && y > 250 && y < 500){
        	pantalla = 1;
        }
        break;
	}

  
}
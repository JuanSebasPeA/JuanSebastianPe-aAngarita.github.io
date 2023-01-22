/* Author: Juan Sebastian Peña Angarita */

/* using the library "typed.js" to give a write machine effect */
var typed = new Typed('.typed', {
	strings: [
		'<i class="info">Juan Sebastian Peña Angarita</i>',
		'<i class="info">Programmer in process</i>',
	],

	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75,  // Velocidad en mlisegundos para poner una letra,
	startDelay: 300,  // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75,  // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500,  // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true,   // Repetir el array de strings
	loopCount: false,   // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true,   // Mostrar cursor palpitanto
	cursorChar: '|',   // Caracter para el cursor
	contentType: 'html',  // 'html' o 'null' para texto sin formato
});

const cuerpo = document.body;
//console.log("probando mi js");
const cambiarFondo = (body) => {
		const seccion = document.getElementById('contenido');
		let oscuro = "FONDO OSCURO";
		let claro = "FONDO CLARO";
		let contenidoBoton = document.getElementById('btnColor');

		if(body.className == "default"){
			//console.log(true);
			body.style.backgroundImage = "url(images/rocket.jpg)";
			body.style.backgroundRepeat = "no-repeat";
			body.style.backgroundPosition = "center";
			body.style.backgroundSize = "cover";
			//cambiando el nombre de la clase
			body.className = "other";
			contenidoBoton.innerHTML = oscuro;
			body.style.color = "#000";
			fondoSeccion(seccion);
			document.getElementById('myselfImg').style.width = "65%";
			document.getElementById('myselfImg').style.boxShadow = "8px 5px 15px #000";
			document.getElementById('myselfImg').style.height = "90%";
		}
		else{
			//console.log(false);
			body.style.background = "linear-gradient(135deg, #24242455 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #242424 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #24242455 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #242424 25%, #000000 25%) 0px 0/ 20px 20px";
			//cambiando el nombre de la clase
			body.className = "default";
			contenidoBoton.innerHTML = claro;
			body.style.color = "aliceblue";
			seccion.style.background = "transparent";
		}
}

const fondoSeccion = (elemento) => {
	//console.log(elemento);
	elemento.style.backgroundColor = "rgb(192, 181, 181)";
	elemento.style.opacity = "0.9";
	elemento.style.borderRadius = "40px";
	elemento.style.padding = "25px";
}






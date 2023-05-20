const typed = new Typed(".typed", {
  strings: [
    "<i class= 'dinamic-word'>Full Stack Developer</i>",
    "<i class= 'dinamic-word'>Web Developer</i>",
    "<i class= 'dinamic-word'>Frontend Developer</i>",
    "<i class= 'dinamic-word'>Backend Developer</i>",
  ],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  backDelay: 1500,
  loop: true,

  showCursor: true,
  cursorChar: "|",
  contentType: "html",
});

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso1");
    document.getElementById("rct").classList.add("barra-progreso1");
    document.getElementById("nd").classList.add("barra-progreso1");
    document.getElementById("java").classList.add("barra-progreso1");
    document.getElementById("py").classList.add("barra-progreso1");
  }
}

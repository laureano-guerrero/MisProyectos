function cambiarImg() {
    var entradaDefecto = "defecto";
    var entrada = document.getElementById("entradaTexto").value;
    var enlace = document.getElementById("enlaceImagen");
    if (entrada == "") {
      enlace.setAttribute("src", "https://robohash.org/" + entradaDefecto);
    } else {
      enlace.setAttribute("src", "https://robohash.org/" + entrada);
    }
  }
  
function pedirCaja() {
  let nombre = document.getElementById("nombre").value;
  let material = document.getElementById("material").value;

  //cargo en radios las opciones y luego identifico la que esta activa
  let radiosTamanio = document.getElementsByName("tamanio");
  let tamanioSeleccionado;

  for (let i = 0; i < radiosTamanio.length; i++) {
    if (radiosTamanio[i].checked) {
      tamanioSeleccionado = radiosTamanio[i].value;
      break;
    }
  }

  let radiosColor = document.getElementsByName("colorNegro");
  let colorSeleccionado;

  for (let i = 0; i < radiosColor.length; i++) {
    if (radiosColor[i].checked) {
      colorSeleccionado = radiosColor[i].value;
      break;
    }
  }

  let cantidad = document.getElementById("cantidad").value;
  let comentarios = document.getElementById("comentarios").value;

  let pedido =
    nombre +
    " ha pedido " +
    cantidad +
    " fotocopias " +
    colorSeleccionado +
    " en " +
    material +
    " tamanio " +
    tamanioSeleccionado +
    ". " +
    comentarios;
  document.getElementById("pedido").value = pedido;
}

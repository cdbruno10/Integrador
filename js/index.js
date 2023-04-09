document.permissionsPolicy = "interest-cohort=()";

// Obtener el nombre de la sub-página actual
const pathname = window.location.pathname;

// Cambiar el color de texto del nav según la sub-página actual
switch (pathname) {
  case "/index.html":
    inicio.style.color = "orange";
    break;
  case "/pages/empresa.html":
    empresa.style.color = "red";
    break;
  case "/pages/productos.html":
    productos.style.color = "limegreen";
    break;
  case "/pages/cotizar.html":
    cotizar.style.color = "dodgerblue";
    break;
  case "/pages/contacto.html":
    contacto.style.color = "violet";
    break;
  default:
    inicio.style.color = "orange";
    break;
}

function leerPresupuesto() {
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
  let encuadernado = document.getElementById("encuadernado").value;
  let comentarios = document.getElementById("comentarios").value;

  /*      calculos de costo   */
  if (
    (material == "comun") &
    (colorSeleccionado == "negro") &
    (tamanioSeleccionado != "A3")
  ) {
    seleccion = 15;
  } else if (
    (material != "comun") &
    (colorSeleccionado == "negro") &
    (tamanioSeleccionado != "A3")
  ) {
    seleccion = 30;
  } else if (
    (material == "comun") &
    (colorSeleccionado == "color") &
    (tamanioSeleccionado != "A3")
  ) {
    seleccion = 40;
  } else if (
    (material != "comun") &
    (colorSeleccionado == "color") &
    (tamanioSeleccionado != "A3")
  ) {
    seleccion = 55;
  } else if (
    (material == "comun") &
    (colorSeleccionado == "negro") &
    (tamanioSeleccionado == "A3")
  ) {
    seleccion = 30;
  } else if (
    (material == "comun") &
    (colorSeleccionado == "color") &
    (tamanioSeleccionado == "A3")
  ) {
    seleccion = 80;
  } else if (
    (material != "comun") &
    (colorSeleccionado == "negro") &
    (tamanioSeleccionado == "A3")
  ) {
    seleccion = 150;
  } else if (
    (material != "comun") &
    (colorSeleccionado == "color") &
    (tamanioSeleccionado == "A3")
  ) {
    seleccion = 250;
  }

  if (encuadernado == "sin") {
    encuadernadoPesos = 0;
  } else {
    encuadernadoPesos = 300;
  }

  let presupuesto = seleccion * cantidad + encuadernadoPesos;

  let pedido =
    nombre +
    " ha pedido " +
    cantidad +
    " fotocopias " +
    colorSeleccionado +
    " en papel " +
    material +
    " tamaño " +
    tamanioSeleccionado +
    " " +
    encuadernado +
    " encuadernado." +
    " " +
    comentarios +
    " El presupuesto es de $ " +
    presupuesto;
  document.getElementById("pedido").value = pedido;

  //    genero el pdf

  var doc = new jsPDF();
  doc.setFontSize(8);
  doc.text(10, 10, pedido, { maxWidth: 80 });
  doc.save("Presupuesta de fotocopias.pdf");
}

const formulario = document.getElementById("presupuesto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  leerPresupuesto();
});

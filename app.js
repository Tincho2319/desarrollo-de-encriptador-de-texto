let imagen, textoparrafo, textotexto, copiarr, cajasecund, encripdesencrip;
const imagenn = document.querySelector(".imagen-encriptador");
window.addEventListener("load", verificarResolucion);
window.addEventListener("resize", verificarResolucion);

function Seteo() {
  imagen = document.getElementById("imagen");
  textoparrafo = document.getElementById("texto-parrafo");
  textotexto = document.getElementById("texto-texto");
  copiarr = document.getElementById("copy2");
  cajasecund = document.getElementById("cajasecund");
  encripdesencrip = document.getElementById("encrip-desencrip");
}

document.addEventListener("DOMContentLoaded", () => {
  Seteo();
  ocultarMensajeEncriptado();
});

function verificarResolucion() {
  if (window.innerWidth <= 1200) {
    imagenn.style.display = "none";
  } else {
    imagenn.style.display = "block";
  }
}

function mostrarMensajeEncriptado() {
  cajasecund.style.display = "flex";
  encripdesencrip.style.display = "block";
  copiarr.style.display = "block";

  imagen.style.display = "none";
  textoparrafo.style.display = "none";
  textotexto.style.display = "none";
}

function ocultarMensajeEncriptado() {
  cajasecund.style.display = "flex";
  encripdesencrip.style.display = "none";
  copiarr.style.display = "none";

  imagen.style.display = "flex";
  textoparrafo.style.display = "flex";
  textotexto.style.display = "flex";
}

function BorrarTexto() {
  document.getElementById("texto-encriptado").value = "";
}

function NohayMensaje() {
  ocultarMensajeEncriptado();
}

function encriptarCodigo() {
  Seteo();
  let texto = document.getElementById("texto-encriptado").value.trim();
  BorrarTexto();

  if (texto === "") {
    NohayMensaje();
  } else {
    mostrarMensajeEncriptado();
    let resultado = Encriptar_codigo(texto);
    encripdesencrip.innerText = resultado;
  }
}

function Encriptar_codigo(texto) {
  let encriptar_cod = "";

  for (let i = 0; i < texto.length; i++) {
    let buffer = texto[i];

    if (buffer === "a") {
      buffer = "ai";
    } else if (buffer === "e") {
      buffer = "enter";
    } else if (buffer === "i") {
      buffer = "imes";
    } else if (buffer === "o") {
      buffer = "ober";
    } else if (buffer === "u") {
      buffer = "ufat";
    }

    encriptar_cod += buffer;
  }

  return encriptar_cod;
}

function copiarAlPortapapeles() {
  var aux = document.createElement("input");
  aux.setAttribute(
    "value",
    document.getElementById("encrip-desencrip").innerHTML
  );
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function DencriptarCodigo() {
  Seteo();
  let texto = document.getElementById("texto-encriptado").value.trim();
  BorrarTexto();

  if (texto) {
    mostrarMensajeEncriptado();
    encripdesencrip.innerText = DesencriptarCompletamente(texto);
  } else {
    NohayMensaje();
  }
}

function Desencriptar(texto) {
  return texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function DesencriptarCompletamente(texto) {
  let desencriptado;
  do {
    desencriptado = texto;
    texto = Desencriptar(texto);
  } while (texto !== desencriptado);
  return texto;
}



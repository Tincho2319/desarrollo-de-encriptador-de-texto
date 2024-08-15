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

<<<<<<< HEAD
function copiarAlPortapapeles() {
  var aux = document.createElement("input");
  aux.setAttribute(
    "value",
    document.getElementById("encrip-desencrip").innerHTML
  );
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
=======
    
    var aux = document.createElement("input");
  

    aux.setAttribute("value", document.getElementById('encriptado/desencriptado').innerHTML);
  
    
    document.body.appendChild(aux);
  
  
    aux.select();
  
    
    document.execCommand("copy");

   
>>>>>>> e5173e3847c4cbc7a63151c3e876c957bc2538f6
  document.body.removeChild(aux);
}

<<<<<<< HEAD
function DencriptarCodigo() {
  Seteo();
  let texto = document.getElementById("texto-encriptado").value.trim();
  BorrarTexto();

  if (texto === "") {
    NohayMensaje();
  } else {
    mostrarMensajeEncriptado();
    let resultadodes = Desencriptar(texto);
    encripdesencrip.innerText = resultadodes;
  }
=======
  function DencriptarCodigo() {
    let texto = document.getElementById('texto-encriptado').value;
    
    
    BorrarTexto();
    
   
    if (document.getElementById('contenido1').style.display === 'flex') {
        document.getElementById('contenido1').style.display = 'none';
        document.getElementById('contenido2').style.display = 'flex';
    }
    
    if (texto.trim() === '') {
        NohayMensaje();
    } else {
        let resultadodes = Desencriptar(texto);
        document.getElementById('encriptado/desencriptado').innerText = resultadodes; // Ajusta el ID según tu HTML
    }
>>>>>>> e5173e3847c4cbc7a63151c3e876c957bc2538f6
}

function Desencriptar(texto) {
  const mapeo = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let desencriptar_cod = texto;

<<<<<<< HEAD
  for (const [codigo, vocal] of Object.entries(mapeo)) {
    const regex = new RegExp(codigo, "g");
    desencriptar_cod = desencriptar_cod.replace(regex, vocal);
  }
=======
  
    for (const [codigo, vocal] of Object.entries(mapeo)) {
        const regex = new RegExp(codigo, 'g');
        desencriptar_cod = desencriptar_cod.replace(regex, vocal);
    }
>>>>>>> e5173e3847c4cbc7a63151c3e876c957bc2538f6

  return desencriptar_cod;
}

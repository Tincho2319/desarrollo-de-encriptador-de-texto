function alternarVista() {
    const contenido1 = document.getElementById('contenido1');
    const contenido2 = document.getElementById('contenido2');

    
    if (contenido2.style.display === 'none') {
        contenido2.style.display = 'flex';
        contenido1.style.display = 'none';
    } 
    
}

function BorrarTexto() {
    let text = document.getElementById('texto-encriptado');

    if(text =!''){
        return document.querySelector('#texto-encriptado').value ='';   
    }
}

function NohayMensaje() {
    const contenido1 = document.getElementById('contenido1');
    const contenido2 = document.getElementById('contenido2');
     
    if (contenido2.style.display === 'flex') {
        contenido2.style.display = 'none';
        contenido1.style.display = 'flex';
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    const contenido1 = document.getElementById('contenido1');
    const contenido2 = document.getElementById('contenido2');

    
    contenido1.style.display = 'flex';
    contenido2.style.display = 'none';
});

function encriptarCodigo() {
    
    let texto = document.getElementById('texto-encriptado').value;
    BorrarTexto();
   
    if (texto.trim() === '') {
        return NohayMensaje();
    } else if (contenido1.style.display === 'flex'){
        contenido1.style.display = 'none';
        contenido2.style.display = 'flex';
    }
        let resultado = Encriptar_codigo(texto);
        document.getElementById('encriptado/desencriptado').innerText = resultado;
    
  }

  function Encriptar_codigo(texto) {
    let encriptar_cod = '';

    

    for (let i = 0; i < texto.length; i++) {
      let buffer = texto[i];

      if (buffer === 'a') {
        buffer = 'ai';
      } else if (buffer === 'e') {
        buffer = 'enter';
      } else if (buffer === 'i') {
        buffer = 'imes';
      } else if (buffer === 'o') {
        buffer = 'ober';
      } else if (buffer === 'u') {
        buffer = 'ufat';
      }

      encriptar_cod += buffer;
    }

    return encriptar_cod;
    
  }

  function copiarAlPortapapeles() {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById('encriptado/desencriptado').innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
  document.body.removeChild(aux);
  
  }

  function DencriptarCodigo() {
    let texto = document.getElementById('texto-encriptado').value;
    
    // Borrar el contenido anterior del área de texto de resultado
    BorrarTexto();
    
    // Mostrar contenido2 si contenido1 está oculto
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
}

function Desencriptar(texto) {
    // Mapeo de códigos a las vocales originales
    const mapeo = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let desencriptar_cod = texto;

    // Reemplaza cada código por la vocal correspondiente
    for (const [codigo, vocal] of Object.entries(mapeo)) {
        const regex = new RegExp(codigo, 'g');
        desencriptar_cod = desencriptar_cod.replace(regex, vocal);
    }

    return desencriptar_cod;
}



 
  

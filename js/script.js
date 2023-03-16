
function temaSeleccionado(){
    var articulos = document.getElementsByTagName('article');

    for(var i = 0 ; i < articulos.length ; i++)
        articulos[i].style.display = 'none';
       
    var valor = document.getElementById('temas').value;
    document.getElementById(valor).style.display = 'block';
}
document.getElementById('temas').addEventListener('change',temaSeleccionado);

 //cambio de imagen solicitando una
  
function otra(){
 /* let seccion;
  seccion=document.getElementsByTagName('br');
  seccionNueva=document.createElement('section');
  articulo1=document.createElement('article'); 
  seccionNueva.appendChild(articulo1);  
  seccion[1].insertAdjacentElement("afterend",seccionNueva);

  inputImg=document.createElement('input');
  inputImg.setAttribute('type', 'file');
  inputImg.setAttribute('id','inputFile1'); 
      articulo1.appendChild(inputImg);*/
     document.getElementById('inputFile1').style.display = 'block';
     document.getElementById('inputFile2').style.display = 'block';
     document.getElementById('inputFile3').style.display = 'block';
  }

  var elegirImagen = function() {
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', mostrarImagen, false);
    var inputFile2 = document.getElementById('inputFile2');
    inputFile2.addEventListener('change', mostrarImagen, false);
    var inputFile3 = document.getElementById('inputFile3');
    inputFile3.addEventListener('change', mostrarImagen, false);
  }
  
  function mostrarImagen(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var img = document.getElementById('foto');
      img.src= event.target.result;
    }
    reader.readAsDataURL(file);    
  }  
  window.addEventListener('load', elegirImagen, false); 
  
//Cambio de imagen estatica
var fotografias=function(nombreFoto){
  document.getElementById('foto').src="img/"+nombreFoto+".png";}
  //Rexto
var colorFondo =function(){
    document.getElementById('lateralDer').style.backgroundColor = 
                document.getElementById('bg').value;
}
var colorTexto =function(){
  document.getElementById('resultado').style.color = 
              document.getElementById('text').value;
  document.getElementById('autor').style.color = 
              document.getElementById('text').value;
}

var textoNombre =function(){
    document.getElementById('autor').innerHTML = 
                document.getElementById('nombre').value;    
}
var texto=function(){
  document.getElementById('resultado').innerHTML = 
              document.getElementById('contenido').value;    
}
var tamanio = function(){
  document.getElementById('autor').style.fontSize = 
  font=parseInt(document.getElementById("num").value)+"px";
  document.getElementById('resultado').style.fontSize = 
  font=parseInt(document.getElementById("num").value)+"px";
}  
var uno =function(){
  document.getElementById('lateralDer').style.backgroundColor = '#0f0';
}

var dos =function(){
  document.getElementById('lateralDer').style.backgroundColor = '#00f';
}

var tres =function(){
  document.getElementById('lateralDer').classList.add('mas');
}

var cuatro =function(){
  document.getElementById('lateralDer').style.backgroundColor = 'transparent';
  document.getElementById('nombre').value = '';
  document.getElementById('lateralDer').classList.remove('mas');
}
var tipo =function(){
      document.getElementById('resultado').style.fontFamily = 'Roboto';
  }
var c=function(){
  document.getElementById('resultado').style.fontFamily = 'Arial';
}
var d =function(){
  document.getElementById('resultado').style.fontFamily = 'ComicSans';
}


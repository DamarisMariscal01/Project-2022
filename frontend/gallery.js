// Bloquear y desbloquear pags
function home(){
  document.getElementById("homeE").style.display="block";
  document.getElementById("galleryY").style.display="none";
  document.getElementById("drawW").style.display="none";
  document.getElementById("pixelL").style.display="none";
}

function draw(){
  document.getElementById("drawW").style.display="block";
  document.getElementById("homeE").style.display="none";
  document.getElementById("galleryY").style.display="none";
  document.getElementById("pixelL").style.display="none";
}

function gallery(){
  document.getElementById("galleryY").style.display="block";
  document.getElementById("homeE").style.display="none";
  document.getElementById("drawW").style.display="none";
  document.getElementById("pixelL").style.display="none";
}

function pixel(){
  document.getElementById("pixelL").style.display="block";
  document.getElementById("homeE").style.display="none";
  document.getElementById("galleryY").style.display="none";
  document.getElementById("drawW").style.display="none";
}

// let body = document.getElementById('bodyID')

function mostrar() {
  console.log('si me ejecuto mostrar');
  fetch('http://localhost:3000/leerImagenes')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.archivos.forEach((item) => {
      let newIMG = document.createElement("img");
      newIMG.src = item
      let lugar = document.getElementById('container')
      lugar.append(newIMG)
      newIMG.classList.add("canva", "size") 
      //create elemente
      //source sera item pq item es el link que recibo del back
    });
  });
}


function mostrarPixel() {
  console.log('si me ejecuto mostrarPixel');

  fetch('http://localhost:3000/leerImagenesPixel')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.archivos.forEach((item) => {
      let newIMG = document.createElement("img");
      newIMG.src = item
      let lugar = document.getElementById('container')
      lugar.append(newIMG)
      newIMG.classList.add("canva", "size") 
      //create elemente
      //source sera item pq item es el link que recibo del back
    });
  });
}

window.addEventListener("load", mostrar)
window.addEventListener("load", mostrarPixel)
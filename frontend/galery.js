function mostrar() {
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
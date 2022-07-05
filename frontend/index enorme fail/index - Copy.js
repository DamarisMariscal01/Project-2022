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


// -----------------------------------------------------------------
// GALLERY

let body = document.getElementById('bodyID')

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

// ----------------------------------------------------------
// DRAW

//const { default: fetch } = require("node-fetch");

var canvas = document.getElementById("canvas")
//var ctx nos permite manipular el canvas
var ctx = canvas.getContext('2d');
var rect =canvas.getBoundingClientRect();
var x=0, y=0, dibujando=false, color="black", grosor="1"; 
// c es mi parametro de color
function defcolor(c){
color =c;

}
function defgrosor(g) {
    grosor = g;
}
// 3 eventos, 1 cuando el mouse esta en el canvas
// 2 en el que dejamos de clickear el canvas y cuando empieza a moverse para dibujar
canvas.addEventListener('mousedown', function(e){
    //la funcionobtiene el lugar dle click
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando = true
});

canvas.addEventListener('mousemove', function(e){
    //la funcion activa a la funcion que va a dar los trazos min 15
    if(dibujando===true){
        dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup',function(e) {
    if(dibujando===true){
        dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=0;
        y=0;
        dibujando = false;
    }  
});


//esta funcion recibe 4 parametros, x y y inicial y x y y final
function dibujar(x1,y1,x2,y2) {
    console.log(x1,y1,x2,y2);
    ctx.beginPath()
    ctx.strokeStyle= color;
    ctx.lineWidth=grosor;
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2); //mover el puntero y dibujar una linea hasta x2 y2
    ctx.stroke();
    ctx.closePath();
}


function convertCanvasToImage() {
    console.log('hola');
    let canvas = document.getElementById("canvas");
    let image = document.getElementById('img');
    console.log(typeof canvas.toDataURL());
    image.src = canvas.toDataURL();
    fetch('http://localhost:3000/guardarIMG', {
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        method: "POST",
        body:JSON.stringify({"img": canvas.toDataURL()})
    })
    image.classList.add("canva")
  
}

// -----------------------------------------------------------------
// PIXEL

// const container = document.querySelector('.container');
// const sizeE1 = document.querySelector('.size')
// let size = sizeE1.value
// const color = document.querySelector('.color')
// const resetbtn = document.querySelector('.btn')

// let draw = false
// //crea el grid de el numero yxy ejemplo  4x4
// function populate(size){
//     container.style.setProperty('--size',size)
//     for (let i = 0; i < size*size; i++) {
//         const div= document.createElement('div');
//         div.classList.add('pixel')

//         div.addEventListener("mouseover", function() {
//             if (!draw) return 
//             div.style.backgroundColor = color.value;
//         })

//         div.addEventListener("click", function() {
//             div.style.backgroundColor = color.value;
//         })

//         container.appendChild(div)
//     }

// }

// window.addEventListener("mousedown", function() {
//     draw = true
// })

// window.addEventListener("mouseup", function() {
//     draw = false
// })
 
// function reset() {
//     container.innerHTML= ''
//     populate(size)
// }

// resetbtn.addEventListener("click", reset)

// sizeE1.addEventListener("keyup", function(){
//     size = sizeE1.value
//     reset()
// })
// populate(size)

// function crear() {
//     html2canvas(document.getElementById("contenido")).then(canvas => {
//         let imagen = document.getElementById("cuadrado")
//         console.log(canvas);
//         var anchor = document.createElement("a");
//         anchor.href = canvas.toDataURL("image/png");
//         anchor.download = "IMAGE.PNG";
//         anchor.click();
//         // canvas.toBlob((blob) => {
//         //     console.log(blob)
//         //     console.log('descargando...')
//         //     let file = new File([blob], "imag1.jpg",{ type: "image/jpeg"})
//         //     console.log(file)
//         // }, 'image/jpeg');
//         document.body.appendChild(canvas)
//     });

   
// }
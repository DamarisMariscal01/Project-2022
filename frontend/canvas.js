var canvas = document.getElementById("canvas")
//var ctx nos permite manipular el canvas
var ctx = canvas.getContext('2d');

var commands = [];//nuevo
var rect =canvas.getBoundingClientRect();
var x=0, y=0, dibujando=false, color="black", grosor="1"; 
// c es mi parametro de color
function defcolor(c){
   // erase= false
color =c;
ctx.globalCompositeOperation = 'source-over'

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
   // ctx.globalCompositeOperation = 'source-over' //nuevo
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2); //mover el puntero y dibujar una linea hasta x2 y2
    ctx.stroke();

    ctx.closePath();
   // erase= false
}

function erase(){
    ctx.globalCompositeOperation = 'destination-out'
   // erase=true
}

function convertCanvasToImage() {
    alert('Your drawing has been uploaded to the gallery!')
    console.log('hola');
    let canvas = document.getElementById("canvas");
   // let image = document.getElementById('img');
    console.log(typeof canvas.toDataURL());
//image.src = canvas.toDataURL();
    fetch('http://localhost:3000/guardarIMG', {
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        method: "POST",
        body:JSON.stringify({"img": canvas.toDataURL()})
       
    })
    //image.classList.add("canva")
  
  }
  ////////////////////////////////////////////////////////////////////////////borrable

  function execute() {
    var commandType = arguments[0];
    var data = Array.prototype.slice.call(arguments, 1);
    
    if (!commandTypes.hasOwnProperty(commandType))
      throw new Error(commandType + ' is not a real command');
  
    commandTypes[commandType].apply(null, data);
  }
  
  function pushAndExecute() {
    commands.push(arguments);
    execute.apply(null, arguments);
  }

  function handleKeys(evt) {
    if (evt.ctrlKey && evt.key === 'z') {
       console.log('undo');
  
      // Remove the most recent command from the list
      commands.splice(-1, 1);
  
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Re-play all commands (re-draw canvas from scratch)
      commands.forEach(function (command) {
        execute.apply(null, command);
      });
    }
  }
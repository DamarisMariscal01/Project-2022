var canvas = document.getElementById("canvas")
//var ctx nos permite manipular el canvas
var ctx = canvas.getContext('2');
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
    ctx.beginPath()
    ctx.strokeStyle= color;
    ctx.lineWidth=grosor;
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2); //mover el puntero y dibujar una linea hasta x2 y2
    ctx.stroke();
    ctx.closePath();
}
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
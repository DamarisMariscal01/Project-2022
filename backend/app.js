const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
var fs = require('fs')
const { Console } = require('console')

app.use(cors())
const port = 3000

app.use(bodyParser.json()) // for parsing application/json

//Recibe del forntend la url y la Pone en la terminal 
app.post('/guardarIMG', (req, res) => {
    console.log(req.body)
    let fileContent = req.body.img//nuev0
    let path = "imag.jpg"//nuevo

    var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("out.png", base64Data, 'base64', function (err) {
        console.log(err);
    });

    let date = new Date().getMilliseconds();
    let pathSave = "C:/Users/Alive User/Desktop/images/img" + date + ".txt";
    // Guardar con un búfer como contenido de una imagen base64
    fs.writeFile(pathSave, fileContent, err => {
        if (err)
        console.log(err);
        else {
            console.log("File written successfully");
            console.log("The written has the following contents:");
            //console.log(fs.readFileSync("books.txt", "utf8"));
        }
    });
    
    //  fs.writeFile(path, fileContent);
    res.send({
        frase: 'Hello World!!!'
    })
})
//HASTA AQUI GUARDA LA IMAGEN



app.get('/leerImagenes', (req, res) => {
    const dirname = 'C:/Users/Alive User/Desktop/images/'
    let directorio = fs.readdirSync(dirname)

    console.log('dierctorio leido', directorio);

    var data = [];
    function onFileContent(filename, content) {
        console.log('CONTEEEEENT')
        data.push(content);
        console.log(data.length);
    }
    //  async function readFiles(dirname, onFileContent, onError) {
    //   await fs.readdir(dirname, function (err, filenames) {
    //     if (err) {
    //       onError(err);
    //       return;
    //     }
    //     console.log("los filenames",filenames)
    directorio.forEach(function (filename) {
        console.log('actual', filename)   
        // fs.readFile(dirname + filename, 'base64', function (err, content) {

        let content = fs.readFileSync(dirname + filename,{encoding: 'utf8'} )
        // console.log(filename,'CONTENT', content)

        onFileContent(filename, content);
    });
    //});
    // res.send(data)

    //});
    console.log('data =(',data);
    //}


    //  readFiles('C:/Users/Alive User/Desktop/images/',  function (err) {
    //   throw err;
    // });


    // Enviar data o mostrar data de forma asincrona para evitar enviar el arreglo vaccio
    // console.log(data)
    res.send({
        // frase: 'Hello World!!!'
        archivos: data, 
        cantidadImagenes: data.length
    })
});
//----------------------------------------------------------------------------------------------------------------
//PIXEL
app.post('/guardarIMGPIXEL', (req, res) => {
    console.log(req.body)
    let fileContent = req.body.img//nuev0
    let path = "imag.jpg"//nuevo

    var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("out.png", base64Data, 'base64', function (err) {
        console.log(err);
    });

    let date = new Date().getMilliseconds();
    let pathSave = "C:/Users/Alive User/Desktop/imagesPixel/img" + date + ".txt";
    // Guardar con un búfer como contenido de una imagen base64
    fs.writeFile(pathSave, fileContent, err => {
        if (err)
        console.log(err);
        else {
            console.log("File written successfully");
            console.log("The written has the following contents:");
            //console.log(fs.readFileSync("books.txt", "utf8"));
        }
    });
    //  fs.writeFile(path, fileContent);
    res.send({
        frase: 'Hello World!!!'
    })
}) 

app.get('/leerImagenesPixel', (req, res) => {
    const dirname = 'C:/Users/Alive User/Desktop/imagesPixel/'
    let directorio = fs.readdirSync(dirname)

    console.log('dierctorio leido', directorio);

    var data = [];
    function onFileContent(filename, content) {
        console.log('CONTEEEEENT')
        data.push(content);
        console.log(data.length);
    }

    //console.log("los filenames",filenames)
    directorio.forEach(function (filename) {
        console.log('actual', filename)   
        // fs.readFile(dirname + filename, 'base64', function (err, content) {

        let content = fs.readFileSync(dirname + filename,{encoding: 'utf8'} )
        // console.log(filename,'CONTENT', content)

        onFileContent(filename, content);
    });

    console.log('data =(',data);


    // Enviar data o mostrar data de forma asincrona para evitar enviar el arreglo vaccio
    // console.log(data)
    res.send({
        // frase: 'Hello World!!!'
        archivos: data, 
        cantidadImagenes: data.length
    })
});



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
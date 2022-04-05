function girarRuleta(){
    fetch('http://localhost:3002/ruletaDatos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //for
    })
}
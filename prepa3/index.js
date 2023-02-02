//constante
const num = 100;

//variable
let num2 = 120;

//variable (forma descontinuada)
//var nombre = "Pedro"

//tipos de datos nativos
//numero
//Bigint
//string
//boolean
//Object
//Null
//undefind

let nombre = "Mario";

let saludo = `Hola ${nombre}`;

const person = {
    name: "Juan",
    lastName: "Perez",
    age: 20,
    saludar: function () {
        alert(`hola ${person.name}`);
    }
};

//person.saludar();

function hola(){
    alert("hola");
}

const despedirse = () => {
    alert ("chao")
}

const tittle = document.getElementById("tittle")

setTimeout(() => {
    tittle.textContent = "aplicación de clima"
}, 2000)
let nombre=document.getElementById("nombre")
let apellidos=document.getElementById("apellidos")
let email=document.getElementById("email")
let contrasena=document.getElementById("contrasena")
let repetirContra=document.getElementById("repetirContra")

//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

console.log(id)

function rellenarDatos(){

    let peticion=fetch("https://jsonplaceholder.typicode.com/users/"+id)

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        nombre.value=data["username"]
        apellidos.value=data["name"]
        email.value=data["email"]
        contrasena.value=data["id"]
        repetirContra.value=data["id"]

    }))

}

rellenarDatos()

let formu=document.getElementById("formulario")

formu.addEventListener("submit", function(evento){
    evento.preventDefault()

    const contraRegex = /^(?=.*[A-Z])(?=.*\d).{5,9}$/

    let campoNombre=document.getElementById("nombre")
    let campoApellidos=document.getElementById("apellidos")
    let campoEmail=document.getElementById("email")
    let campoContra=document.getElementById("contrasena")
    let campoRepe=document.getElementById("repetirContra")

    let llave=true


    if(campoNombre.value==""){
        llave=false
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else{
        campoNombre.classList="inputsFormu"
    }


    if(campoApellidos.value==""){
        llave=false
        campoApellidos.classList="inputsFormuMal"
        campoApellidos.value=""
    }else{
        campoApellidos.classList="inputsFormu"
    }


    if(campoEmail.value==""){
        llave=false
        campoEmail.classList="inputsFormuMal"
        campoEmail.value=""
    }else{
        campoEmail.classList="inputsFormu"
    }


    if(campoContra.value==""){
        llave=false
        campoContra.classList="inputsFormuMal"
        campoContra.value=""
    }else if(!contraRegex.test(campoContra.value)){
        llave=false
        console.log("La contraseña no cumple los requisitos")
        campoContra.classList="inputsFormuMal"
        campoContra.value=""
    }else{
        campoContra.classList="inputsFormu"
    }


    if(campoRepe.value==""){
        llave=false
        campoRepe.classList="inputsFormuMal"
        campoRepe.value=""
    }else if(campoRepe.value!=campoContra.value){
        llave=false
        console.log("La contraseña no coincide")
        campoRepe.classList="inputsFormuMal"
        campoRepe.value=""
    }else{
        campoRepe.classList="inputsFormu"
    }


    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }






})
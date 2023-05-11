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
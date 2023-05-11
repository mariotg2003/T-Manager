let nombre=document.getElementById("nombre")
let apellidos=document.getElementById("apellidos")
let email=document.getElementById("email")
let contrasena=document.getElementById("contrasena")
let repetirContra=document.getElementById("repetirContra")


function rellenarDatos(){

    let peticion=fetch("https://rickandmortyapi.com/api/character/2")

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        nombre.value=data["name"]
        apellidos.value=data["status"]
        email.value=data["species"]
        contrasena.value=data["id"]
        repetirContra.value=data["id"]

    }))

}

rellenarDatos()
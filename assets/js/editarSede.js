let nombre=document.getElementById("nombre")
let direccion=document.getElementById("direccion")

//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

function rellenarDatos(){

    let peticion=fetch("https://rickandmortyapi.com/api/character/"+id)

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        nombre.value=data["name"]
        direccion.value=data["status"]

    }))

}

rellenarDatos()
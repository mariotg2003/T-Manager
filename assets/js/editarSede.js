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


let formu=document.getElementById("formulario")

formu.addEventListener("submit",function(evento){
    evento.preventDefault()

    let campoNombre=document.getElementById("nombre")
    let campoDireccion=document.getElementById("direccion")

    let llave=true


    if(campoNombre.value==""){
        llave=false
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
        alert("El campo del nombre debe estar completo")
    }

    if(campoDireccion.value==""){
        llave=false
        campoDireccion.classList="inputsFormuMal"
        campoDireccion.value=""
        alert("El campo de la dirección debe estar completo")
    }


    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }

})
let nombre=document.getElementById("nombre")
let direccion=document.getElementById("direccion")



function rellenarDatos(){

    let peticion=fetch("https://rickandmortyapi.com/api/character/2")

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        nombre.value=data["name"]
        direccion.value=data["status"]

    }))

}

rellenarDatos()
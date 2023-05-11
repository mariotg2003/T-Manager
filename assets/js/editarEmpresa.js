let nombre=document.getElementById("nombre")
let cif=document.getElementById("cif")



//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

console.log(id)

function rellenarDatos(){

    let peticion=fetch("https://jsonplaceholder.typicode.com/users/"+id)

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        nombre.value=data["username"]
        cif.value=data["phone"]


    }))

}

rellenarDatos()
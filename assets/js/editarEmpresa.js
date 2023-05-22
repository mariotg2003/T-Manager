let nombre=document.getElementById("nombre")
let cif=document.getElementById("cif")



//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

console.log(id)

function rellenarDatos(){

    let peticion=fetch("http://127.0.0.1:8000/api/empresas/"+id)

    peticion.then(Response=>Response.json().then(data=>{

        console.log(data)

        if(data["mensaje"]=="Empresa actualizada correctamente"){
            location.replace("empresa.html")
        }

        nombre.value=data["username"]
        cif.value=data["phone"]


    }))

}

rellenarDatos()

let formu=document.getElementById("formulario")

formu.addEventListener("submit",function(evento){
    evento.preventDefault()

    const cifRegex = /^\d{8}[a-zA-Z]$/

    let campoNombre=document.getElementById("nombre")
    let campoCif=document.getElementById("cif")


    let llave=true



    if(campoNombre.value==""){
        llave=false
        console.log("a")
        campoNombre.classList="inputsFormuMal"
        campoNombre.value="" 
    }else{
        campoNombre.classList="inputsFormu"
    }


    if(campoCif.value==""){
        llave=false
        campoCif.classList="inputsFormuMal"
        campoCif.value=""
    }else if(!cifRegex.test(campoCif.value)){
        llave=false
        campoCif.classList="inputsFormuMal"
        campoCif.value=""
    }else{
        campoCif.classList="inputsFormu"
    }


    if(llave){
        this.submit() 
    }else{
        console.log("Registro fallido")
    }


})
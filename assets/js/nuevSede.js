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
    }

    if(campoDireccion.value==""){
        llave=false
        campoDireccion.classList="inputsFormuMal"
        campoDireccion.value=""
    }


    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }

})
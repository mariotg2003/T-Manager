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

function resizeInput(campo) {
    let input = document.getElementById(campo);
    console.log(input.value.length)
    if(input.value.length>19){
        input.size = input.value.length;
    }else if(input.value.length<19){
        input.size=20
    }
  }
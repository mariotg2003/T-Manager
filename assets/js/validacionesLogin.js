let formulario=document.getElementById("formulario")

formulario.addEventListener("submit",function(evento){

    evento.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //9 caracteres como máximo, al menos una mayúscula y al menos un número), pero esta vez también tiene una longitud mínima de 5 caracteres:
    const contraRegex = /^(?=.*[A-Z])(?=.*\d).{5,9}$/

    let campoEmail=document.getElementById("email")
    let campoContra=document.getElementById("contrasena")
    let campoNombre=document.getElementById("nombre")
    let campoApellidos=document.getElementById("apellidos")
    let campoRepetirContra=document.getElementById("repetirContra")
    let campoSelect=document.getElementById("selecto")

    let malEmail=document.getElementById("malEmail")
    let malContra=document.getElementById("malContra")

    malEmail.innerHTML=""
    malContra.innerHTML=""


    let llave=true

    if(campoEmail.value==""){
        malEmail.innerHTML="Debes introducir el email"
        llave=false
    }else if(!emailRegex.test(campoEmail.value)){
        malContra.innerHTML="El email no cumple las condiciones"
        llave=false
    }

    if(campoContra.value==""){
        malContra.innerHTML="Debes introducir la contraseña"
        llave=false
    }else if(!contraRegex.test(campoContra.value)){
        llave=false
        malContra.innerHTML="La contraseña no cumple las condiciones"
    }
    if(llave){
        localStorage.setItem("token","a")
        this.submit()
    }else{
        console.log("Logueo Fallido") 
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
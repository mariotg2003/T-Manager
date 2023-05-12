let formularioRegister=document.getElementById("formularioRegistro")

formularioRegister.addEventListener("submit",function(evento){
    evento.preventDefault()

    const contraRegex = /^(?=.*[A-Z])(?=.*\d).{5,9}$/

    let campoNombre=document.getElementById("nombre")
    let campoApellidos=document.getElementById("apellidos")
    let campoEmail=document.getElementById("email")
    let campoContra=document.getElementById("contrasena")
    let campoRepe=document.getElementById("repetirContra")
    let campoSelect=document.getElementById("selecto")

    let llave=true

    campoApellidos.value=""
    campoEmail.value=""
    campoContra.value=""
    campoRepe.value=""
    campoSelect.value=""

    if(campoNombre.value==""){
        llave=false
        console.log("a")
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else{
        campoNombre.classList="inputsFormu"
    }


    if(campoApellidos.value==""){
        llave=false
        campoApellidos.classList="inputsFormuMal"
        campoApellidos.value=""
    }else{
        campoApellidos.classList="inputsFormu"
    }


    if(campoEmail.value==""){
        llave=false
        campoEmail.classList="inputsFormuMal"
        campoEmail.value=""
    }else{
        campoEmail.classList="inputsFormu"
    }


    if(campoContra.value==""){
        llave=false
        campoContra.classList="inputsFormuMal"
        campoContra.value=""
    }else if(!contraRegex.test(campoContra.value)){
        llave=false
        console.log("La contraseña no cumple los requisitos")
        campoContra.classList="inputsFormuMal"
        campoContra.value=""
    }else{
        campoContra.classList="inputsFormu"
    }


    if(campoRepe.value==""){
        llave=false
        campoRepe.classList="inputsFormuMal"
        campoRepe.value=""
    }else if(campoRepe.value!=campoContra.value){
        llave=false
        console.log("La contraseña no coincide")
        campoRepe.classList="inputsFormuMal"
        campoRepe.value=""
    }else{
        campoRepe.classList="inputsFormu"
    }

    if(campoSelect.value==""){
        llave=false
    }else{
        campoSelect.classList="inputsFormu"
    }



    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }


})

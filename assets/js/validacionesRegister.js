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
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else{
        campoApellidos.classList="inputsFormu"
    }


    if(campoEmail.value==""){
        llave=false
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else{
        campoEmail.classList="inputsFormu"
    }


    if(campoContra.value==""){
        llave=false
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else if(!contraRegex.test(campoContra.value)){
        llave=false
        console.log("La contraseña no cumple los requisitos")
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else{
        campoContra.classList="inputsFormu"
    }


    if(campoRepe.value==""){
        llave=false
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
    }else if(campoRepe.value!=campoContra.value){
        llave=false
        console.log("La contraseña no coincide")
        campoNombre.classList="inputsFormuMal"
        campoNombre.value=""
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


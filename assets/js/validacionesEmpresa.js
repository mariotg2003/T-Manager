let formularioRegister=document.getElementById("formularioRegistro")

formularioRegister.addEventListener("submit",function(evento){
    evento.preventDefault()

    const contraRegex = /^(?=.*[A-Z])(?=.*\d).{5,9}$/

    let campoNombre=document.getElementById("nombre")
    let campoCif=document.getElementById("apellidos")


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


    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }


})
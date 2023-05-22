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


function resizeInput(campo) {
    let input = document.getElementById(campo);
    console.log(input.value.length)
    if(input.value.length>19){
        input.size = input.value.length;
    }else if(input.value.length<19){
        input.size=20
    }
  }
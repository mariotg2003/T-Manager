let nombre=document.getElementById("nombre")
let apellidos=document.getElementById("apellidos")
let email=document.getElementById("email")
let contrasena=document.getElementById("contrasena")
let repetirContra=document.getElementById("repetirContra")

//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

console.log(id)

function rellenarDatos(){

    let peticion=fetch("http://127.0.0.1:8000/api/alumnos/"+id)

    peticion.then(Response=>Response.json().then(data=>{

        if(data["mensaje"]=="Alumno no encontrado."){
            location.replace("alumnos.html")
        }


        console.log(data)

        nombre.value=data["data"]["nombre"]
        apellidos.value=data["data"]["apellidos"]
        email.value=data["data"]["email"]
        contrasena.value=""
        repetirContra.value=""

    }))

}

rellenarDatos()

let formu=document.getElementById("formulario")

formu.addEventListener("submit", function(evento){
    evento.preventDefault()

    const contraRegex = /^(?=.*[A-Z])(?=.*\d).{5,9}$/

    let campoNombre=document.getElementById("nombre")
    let campoApellidos=document.getElementById("apellidos")
    let campoEmail=document.getElementById("email")
    let campoContra=document.getElementById("contrasena")
    let campoRepe=document.getElementById("repetirContra")

    let llave=true


    if(campoNombre.value==""){
        llave=false
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


    if(llave){

        // Objeto JSON a enviar
        const data = {
            nombre: campoNombre.value,
            apellidos: campoApellidos.value,
            email: campoEmail.value,
            password: campoContra.value
        };
        
        // URL de destino
        const url = "http://127.0.0.1:8000/api/EditarAlumno/"+id;
        
        // Configuración de la solicitud
        const options = {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        
        // Enviar la solicitud
        fetch(url, options)
            .then(response => {
                if(response.ok){
                    window.location.href="indexProfesor.html"
                }else{
                    alert("El email ya está registrado")
                    campoNombre.value=""
                    campoApellidos.value=""
                    campoEmail.value=""
                    campoContra.value=""
                    campoRepe.value=""
                }
            })
            .then(data => {
                console.log("Respuesta del servidor:", data);
            })
            .catch(error => {
                console.log("Error:", error);
            });

    }else{
        console.log("Registro fallido")
    }






})
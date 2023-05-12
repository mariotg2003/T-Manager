let selectAlum=document.getElementById("alumnos")
let selectEmpresa=document.getElementById("empresas")


function rellenarDatos(){

    let peticionAlumno=fetch("https://jsonplaceholder.typicode.com/users")
    let peticionEmpresa=fetch("https://jsonplaceholder.typicode.com/users")

    peticionAlumno.then(Response=>Response.json().then(data=>{

        console.log(data)

        data.forEach(element => {
            let elementoAlumno=document.createElement("option")
            elementoAlumno.value=element["name"]
            elementoAlumno.innerHTML=element["name"]
            console.log(elementoAlumno)
            selectAlum.append(elementoAlumno)
        });

    }))

    peticionEmpresa.then(Response=>Response.json().then(data=>{

        console.log(data)

        data.forEach(element => {
            let elementoEmpresa=document.createElement("option")
            elementoEmpresa.value=element["company"]["name"]
            elementoEmpresa.innerHTML=element["company"]["name"]
            console.log(elementoEmpresa)
            selectEmpresa.append(elementoEmpresa)
        });

    }))

}

rellenarDatos() 

let formu=document.getElementById("formulario")

formu.addEventListener("submit",function(evento){
    evento.preventDefault()

    let campoAlumno=document.getElementById("alumnos")
    let campoDireccion=document.getElementById("empresas")

    let llave=true


    if(campoAlumno.value==""){
        llave=false
        campoAlumno.style.background="#f12f0db6"
        campoAlumno.style.border="2px solid black"
        campoAlumno.value=""
    }else{
        campoAlumno.style.background="#d1ecdf"
        campoAlumno.style.color="black"
    }

    if(campoDireccion.value==""){
        llave=false
        campoDireccion.style.background="#f12f0db6"
        campoDireccion.style.border="2px solid black"
        campoDireccion.value=""
    }else{
        campoDireccion.style.background="#d1ecdf"
        campoDireccion.style.color="black"
    }


    if(llave){
        this.submit()
    }else{
        console.log("Registro fallido")
    }

})
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
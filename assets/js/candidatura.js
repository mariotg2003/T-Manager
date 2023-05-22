let tabla=document.getElementById("tabla")


//FUNCION PARA HACER PETICION DE CANDIDATURAS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let personajes=[]
    let idAlumno

    let peticion=fetch("http://127.0.0.1:8000/api/candidaturas")
    

    peticion.then(Response=>Response.json()).then(data=>{
        console.log(data)

        personajes=data["data"]
        let alumno
        let empresa



        console.log(personajes)

        personajes.forEach(element => {

            idAlumno=element["idAlumno"]
            idEmpresa=element["idEmpresa"]

            let peticionAlumno=fetch("http://127.0.0.1:8000/api/alumnos/"+idAlumno)
            let peticionEmpresa=fetch("http://127.0.0.1:8000/api/empresas/"+idEmpresa)

            peticionAlumno.then(Response=>Response.json()).then(data=>{
                console.log(data)
                alumno=data["data"]["nombre"]
                
                peticionEmpresa.then(Response=>Response.json().then(data=>{
                    empresa=data["data"]["nombre"]
                    console.log(empresa)
                
                    let cuadro=document.createElement("tr")
                    if(element["estado"]){
                        cuadro=`<tr>
                                <td>`+alumno+`</td>
                                <td>`+empresa+`</td>
                                <td>
                                    <select id="selectTablaCandidatura">
                                        <option value="1" selected>Aceptada</option>
                                        <option value="2">Denegada</option>    
                                    </select>
                                </td>
                                <td><input type="button" value="🗑" class="botonTabla"></td>
                            </tr>`
                    }else{
                        cuadro=`<tr>
                                <td>`+alumno+`</td>
                                <td>`+empresa+`</td>
                                <td>
                                    <select id="selectTablaCandidatura">
                                        <option value="1">Aceptada</option>
                                        <option value="2" selected>Denegada</option>    
                                    </select>
                                </td>
                                <td><input type="button" value="🗑" class="botonTabla"></td>
                            </tr>`
                    }
                    
                    tabla.innerHTML+=cuadro
                    
                    
                    }))

            })

        })
    })
}

rellenaTabla()
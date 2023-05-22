let tabla=document.getElementById("tabla")


//FUNCION PARA HACER PETICION DE CANDIDATURAS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let personajes=[]

    let peticion=fetch("http://127.0.0.1:8000/api/empresas/"+id)

    peticion.then(Response=>Response.json()).then(data=>{
        console.log(data)

        personajes=data["results"]

        console.log(personajes)

        personajes.forEach(element => {
            let cuadro=document.createElement("tr")
                cuadro=`<tr>
                        <td>`+element["name"]+`</td>
                        <td>`+element["species"]+`</td>
                    </tr>`
            
            tabla.innerHTML+=cuadro
        })
    })
}

rellenaTabla()

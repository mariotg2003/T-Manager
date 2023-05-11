let tabla=document.getElementById("tabla")


//FUNCION PARA HACER PETICION DE CANDIDATURAS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let personajes=[]

    let peticion=fetch("https://rickandmortyapi.com/api/character")

    peticion.then(Response=>Response.json()).then(data=>{
        console.log(data)

        personajes=data["results"]

        console.log(personajes)

        personajes.forEach(element => {
            let cuadro=document.createElement("tr")
            if(element["status"]=="Alive"){
                cuadro=`<tr>
                        <td>`+element["name"]+`</td>
                        <td>`+element["species"]+`</td>
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
                        <td>`+element["name"]+`</td>
                        <td>`+element["species"]+`</td>
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
        })
    })
}

rellenaTabla()
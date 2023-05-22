let tabla=document.getElementById("tabla")
let nombreEmpresa=document.getElementById("empresaNombre")
let empresaCIF=document.getElementById("empresaCIF")

//COGER DE LA URL LA ID
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");


function rellenarCampos(){
    let peticionDatos=fetch("http://127.0.0.1:8000/api/empresas/"+id)

    peticionDatos.then(Response=>Response.json()).then(data=>{

        if(data["mensaje"]=="Empresa no encontrada."){
            location.replace("empresas.html")
        }

        nombreEmpresa.innerHTML=data["data"]["nombre"]
        empresaCIF.innerHTML=data["data"]["CIF"]
    }) 
}


//FUNCION PARA HACER PETICION DE CANDIDATURAS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){
 

    let peticion=fetch("https://jsonplaceholder.typicode.com/users")

    peticion.then(Response=>Response.json()).then(data=>{
        console.log(data)

        data.forEach(element => {
            let cuadro=document.createElement("tr")
                cuadro=`<tr>
                            <td>`+element["name"]+`</td>
                            <td>`+element["username"]+`</td>
                            <td><input type="button" value="✏" class="botonTabla" onClick="editarSede(`+element["id"]+`)"></td>
                            <td><input type="button" value="🗑" class="botonTabla"></td>
                        </tr>`
            
            tabla.innerHTML+=cuadro
        })
    })
}

rellenaTabla()
rellenarCampos()

function editarSede(id){
    location.replace("EditarSede.html")
}


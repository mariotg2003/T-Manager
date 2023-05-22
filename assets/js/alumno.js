let tabla=document.getElementById("panelesProfesor")


function anadirEnlaceBorrar(id){

    let peticionBorrar = fetch("http://127.0.0.1:8000/api/EliminarAlumno/" + id, {
    method: 'DELETE'
    });

    peticionBorrar.then(Response=>Response.json().then(data=>{

        alert("Alumno Borrado")
        location.reload()
    }))
}






//FUNCION PARA HACER PETICION DE ALUMNOS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let personajes=[]

    let peticion=fetch("http://127.0.0.1:8000/api/alumnos")

    peticion.then(Response=>Response.json()).then(data=>{


        alumnos=data["data"]
        alumnos.forEach(element => {

            let cuadro=document.createElement("div")
            cuadro=`<div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box" style=color:white;>
                                <div class="icon"><img src="assets/img/usuario.png" width=50px></div>
                                <p style="color:black"><span style="color:white;font-size:19px">Nombre:</span> `+element["nombre"]+`</p>
                                <p style="color:black"><span style="color:white;font-size:19px">Apellidos:</span> `+element["apellidos"]+`</p>
                                <p style="color:black"><span style="color:white;font-size:19px">Email:</span> `+element["email"]+`</p>
                                <form action="EditarAlumno.html" method="get">
                                    <input type="hidden" name="id" value=`+element["id"]+` id="`+element["id"]+`">
                                    <input type="submit" value="✏" class="botonTabla"">
                                    <input type="button" value="🗑" class="botonTabla" id="`+element["id"]+`" onclick="anadirEnlaceBorrar(`+element["id"]+`)">
                                </form>
                                
                            </div>
                        </div><!--End Icon Box -->`
                        
                        tabla.innerHTML+=cuadro
                        
        })
        
    }).catch(error => {
        console.log("Error:", error);
    });
}





rellenaTabla()


 

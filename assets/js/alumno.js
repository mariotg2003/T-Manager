let tabla=document.getElementById("panelesProfesor")


//FUNCION PARA HACER PETICION DE ALUMNOS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let personajes=[]

    let peticion=fetch("https://jsonplaceholder.typicode.com/users")

    peticion.then(Response=>Response.json()).then(data=>{
 
        data.forEach(element => {
            let cuadro=document.createElement("div")
            cuadro=`<div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box" style=color:white;>
                                <div class="icon"><img src="assets/img/usuario.png" width=50px></div>
                                <p style="color:black"><span style="color:white;font-size:19px">Nombre:</span> `+element["username"]+`</p>
                                <p style="color:black"><span style="color:white;font-size:19px">Apellidos:</span> `+element["name"]+`</p>
                                <p style="color:black"><span style="color:white;font-size:19px">Email:</span> `+element["email"]+`</p>
                                <form action="EditarAlumno.html" method="get">
                                    <input type="hidden" name="id" value=`+element["id"]+`>
                                    <input type="submit" value="✏" class="botonTabla">
                                    <input type="button" value="🗑" class="botonTabla">
                                </form>
                                
                            </div>
                        </div><!--End Icon Box -->`
            tabla.innerHTML+=cuadro
        })
    })
}

rellenaTabla()


 

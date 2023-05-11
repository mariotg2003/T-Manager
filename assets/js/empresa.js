let tabla=document.getElementById("panelesProfesor")



//FUNCION PARA HACER PETICION DE EMPRESAS Y MOSTRAR UNA TABLA CON LOS DATOS
function rellenaTabla(){

    let peticion=fetch("https://jsonplaceholder.typicode.com/users")

    peticion.then(Response=>Response.json()).then(data=>{
        console.log(data)

        data.forEach(element => {
            let cuadro=document.createElement("div") 
            console.log(element["id"])
            cuadro=`   
                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <form action="BuscaEmpresa.html" method="get" id="formulario">
                            <div class="icon-box" style="color:white" class="miDiv">
                                <div class="icon">🏢</div><br>
                                `+element["name"]+`
                                <input type="hidden" value="`+element["id"]+`"name="id" id="idEm">
                                <input type="submit" class="botonFormulario" value="Detalles" style="margin-top:10%">
                            </div> 
                        </form>
                    </div>
                <!--End Icon Box -->`
            tabla.innerHTML+=cuadro 
        })

    })
}
 


  


rellenaTabla()


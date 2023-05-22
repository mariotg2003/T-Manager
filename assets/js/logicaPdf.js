function uploadPDFFile(fileInput) {
    const allowedExtensions = /(\.pdf)$/i; // Expresión regular para permitir solo extensiones .pdf
    
    const file = fileInput.files[0]; // Obtener el primer archivo seleccionado
  
    if (!allowedExtensions.exec(file.name)) {
      alert('Error: Solo se permiten archivos PDF.');
      fileInput.value = ''; // Limpiar el campo de entrada de archivos
      return;
    }
  
    // Aquí puedes realizar la lógica adicional para procesar o mostrar el archivo PDF
    console.log('Archivo PDF seleccionado:', file.name);
    console.log('Rute del archivo:', file.value)
  }


  let botonSubir=document.getElementById("cerrarSesionBoton")

  botonSubir.addEventListener("click",function(){
    document.getElementById('fileInput').click();
  })
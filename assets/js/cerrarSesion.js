let enlace=document.getElementById("cerrarSesion")


enlace.addEventListener("click",function(){
    localStorage.removeItem("token")
    window.location.replace("index.html")
})
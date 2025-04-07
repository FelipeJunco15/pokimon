function registrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    let array = [
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion
    ];

    location.href = "inicio.html";

    console.log(array);
}

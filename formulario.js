 const form = document.getElementById("formPerfil");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita recargar la página

        // Obtener valores del formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const bio = document.getElementById("bio").value;

        // Actualizar los elementos en la página
        document.getElementById("nombrePerfil").textContent = nombre;
        document.getElementById("emailPerfil").textContent = correo;
        document.getElementById("telefonoPerfil").textContent = telefono;
        document.getElementById("bioPerfil").textContent = bio;

        alert("✅ Datos actualizados en la tabla y perfil.");
    });
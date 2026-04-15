document.getElementById('miFormulario').addEventListener('submit', function(event){
    // Evitar que se recargue la página
    event.preventDefault();

    // Limpiar mensajes de error anteriores (Agregado errorDireccion)
    document.getElementById('errorNombre').innerHTML = '';
    document.getElementById('errorEmail').innerHTML = '';
    document.getElementById('errorEdad').innerHTML = '';
    document.getElementById('errorDireccion').innerHTML = '';

    // Quitar bordes rojos anteriores (Agregado direccion)
    document.getElementById('nombre').classList.remove('is-invalid');
    document.getElementById('email').classList.remove('is-invalid');
    document.getElementById('edad').classList.remove('is-invalid');
    document.getElementById('direccion').classList.remove('is-invalid');

    let formularioValido = true;

    // Validar nombre
    const nombre = document.getElementById('nombre').value;
    if(nombre.trim() === ''){
        document.getElementById('errorNombre').innerHTML = 'El nombre es obligatorio';
        document.getElementById('nombre').classList.add('is-invalid');
        formularioValido = false;
    }

    // Validar correo electrónico
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
       document.getElementById('errorEmail').innerHTML='Ingresa un email válido';
       document.getElementById('email').classList.add('is-invalid');
       formularioValido = false; 
    }

    // Validar edad de 18 hasta 100
    const edad = document.getElementById('edad').value;
    if(edad === '' || edad < 18 || edad > 100){
        document.getElementById('errorEdad').innerHTML='La edad debe estar entre 18 y 100 años';
        document.getElementById('edad').classList.add('is-invalid');
        formularioValido = false; 
    } 

    // Validar Dirección
    const direccion = document.getElementById('direccion').value;
    const direccionRegex = /^[a-zA-Z0-9\s.,-]+$/; 

    // Validar si está en blanco
    if (direccion.trim() === '') {
        document.getElementById('errorDireccion').innerHTML = 'La dirección es obligatoria';
        document.getElementById('direccion').classList.add('is-invalid'); 
        formularioValido = false;
    } 
    // Validar si tiene símbolos no permitidos
    else if (!direccionRegex.test(direccion)) {
        document.getElementById('errorDireccion').innerHTML = 'Solo usa letras, números, puntos y guiones';
        document.getElementById('direccion').classList.add('is-invalid');
        formularioValido = false;
    }

    // Si todo es válido se debe mostrar el modal de éxito
    if(formularioValido){
        document.getElementById('mensajeExito').innerHTML = `Gracias <strong>${nombre}</strong>, tu registro fue exitoso.`;  
        
        // Mostrar modal de éxito
        const modalElement = document.getElementById('exitoModal');
        const modalExito = new bootstrap.Modal(modalElement);
        modalExito.show();

        // Limpiar formulario después del envío
        document.getElementById('miFormulario').reset();   
    }
});
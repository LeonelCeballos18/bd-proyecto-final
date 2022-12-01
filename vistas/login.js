const iniciarSesion = document.getElementById('buttonSesion');
iniciarSesion.addEventListener('click', () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let datos = {
        nombre_usuario: username,
        clave: password 
    }
    fetch('http://localhost:3000/login/validacion', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(datos),
    })
    .then((datos) => {
        console.log('Success', datos);
        alert('Credenciales correctas')
    })
    .catch((error) => {
        console.log('Error', error);
        alert('Credenciales inválidas')
    });
});
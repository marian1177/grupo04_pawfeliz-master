const datos = document.querySelector('#lista-mascotas tbody');

function cargarMascotas() {
    fetch('mascotas.json')
        .then(respuesta => respuesta.json()) 
        .then(data => {
            data.resultados.forEach(mascota => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${mascota.id}</td>
                    <td>${mascota.nombre}</td>
                    <td>${mascota.edad}</td>
                    <td>${mascota.raza}</td>
                    <td>${mascota.contacto}</td>
                    <td>${mascota.email}</td>
                `;
                datos.appendChild(row);
            });
        }) 
        .catch(error => console.log('Hubo un error: ' + error.message));
}

cargarMascotas();
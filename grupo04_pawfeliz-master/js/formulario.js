const $form = document.querySelector('#form')

$form.addEventListener('submit', enviarFormulario)

async function enviarFormulario(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset()
        alert("Gracias por contactarnos.")
    }
}

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

const alertSuccess = document.getElementById("alertSuccess");
const alertNombre = document.getElementById("alertNombre");
const alertApellido = document.getElementById("alertApellido");
const alertTelefono = document.getElementById("alertTelefono");
const alertEmail = document.getElementById("alertEmail");

const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regTelefono = /[0-10]/;
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mensajeDeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const mensajeDeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};


form.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];


    if (!regNombre.test(nombre.value) || !nombre.value.trim()) {
        nombre.classList.add("is-invalid");
        
        errores.push({
            tipo: alertNombre,
            msg: "Formato no es válido en el campo nombre."
        });
    } else {
        nombre.classList.remove()
        nombre.classList.add("is-valid");
        alertNombre.classList.add("d-none");
    }

    if (!regApellido.test(apellido.value) || !apellido.value.trim()) {
        apellido.classList.add("is-invalid");

        errores.push({
            tipo: alertApellido,
            msg: "Formato no es válido en el campo Apellido."
        });
    } else {
        apellido.classList.remove()
        apellido.classList.add("is-valid");
        alertApellido.classList.add("d-none");
    }

    if (!regTelefono.test(telefono.value) || !telefono.value.trim()) {
        telefono.classList.add("is-invalid");

        errores.push({
            tipo: alertTelefono,
            msg: "Formato no es válido en el campo Télefono."
        });
    } else {
        telefono.classList.remove()
        telefono.classList.add("is-valid");
        alertTelefono.classList.add("d-none");
    }

    if (!regEmail.test(email.value) || !email.value.trim()) {
        email.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Formato no es válido en el campo Email."
        });
    } else {
        email.classList.remove()
        email.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        mensajeDeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    mensajeDeExito();
});

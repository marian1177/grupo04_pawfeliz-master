// 1. Selección de elementos del DOM
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const colorOptions = document.querySelectorAll(".color-option");
const addToCartButton = document.querySelector(".add-to-cart");
const modal = document.getElementById("cart-modal");
const closeButton = document.querySelector(".close-button");
const addToCartButton2 = document.querySelector(".add-to-cart");
const discountModal = document.getElementById("discount-modal");
const applyDiscountButton = document.getElementById("apply-discount");
const paymentThumbnails = document.querySelectorAll(".payment-thumbnail");
const Imageprin = document.getElementById("main-image");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModalButton = imageModal.querySelector(".close-button");
const addressInput = document.getElementById("address");
const suggestionsList = document.getElementById("suggestions");

// 2. Segmento de selección de imágenes por color
const colorImages = {
  gris: "imagenes/SmartCollar2.png",
  mix: "imagenes/SmartCollarbeta2.png",
  amarillo: "imagenes/SmartcollarAmarillo.png",
  azul: "imagenes/SmartcollarAzul.png",
};

// Función para cambiar la imagen principal
function changeMainImage(newSrc) {
  mainImage.src = newSrc;
}

// Escuchar clics en los botones de color
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedColor = option.getAttribute("data-color");
    const newImageSrc = colorImages[selectedColor];
    if (newImageSrc) {
      changeMainImage(newImageSrc);
    }
  });
});

// 3. Segmento del carrito de compras

// Abrir el modal al hacer clic en "Agregar al Carrito"
addToCartButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Botón para el efecto de clic en "Añadir al carrito"
addToCartButton2.addEventListener("click", () => {
  // Añadir una clase temporal para el efecto de clic
  addToCartButton2.classList.add("clicked");

  // Remover la clase después de la animación
  setTimeout(() => {
    addToCartButton2.classList.remove("clicked");
  }, 300); // Duración de la animación
});

// 4. Segmento del banner de descuento

// Mostrar el modal de descuento al cargar la página (o activarlo después de un tiempo)
window.addEventListener("load", () => {
  setTimeout(() => {
    discountModal.style.display = "flex";
  }, 0); // Aparece inmediato 0 segundos
});

// Cerrar el modal de descuento al hacer clic en la cruz
closeButton.addEventListener("click", () => {
  discountModal.style.display = "none";
});

// Cerrar el modal de descuento al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === discountModal) {
    discountModal.style.display = "none";
  }
});

// Aplicar el descuento al hacer clic en "Aplicar Descuento"
applyDiscountButton.addEventListener("click", () => {
  alert("¡Descuento del 10% aplicado!"); // Porcentaje de descuento
  discountModal.style.display = "none";
});

// 5. Segmento de las miniaturas

// Escuchar clics en las miniaturas de imagen
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    changeMainImage(thumbnail.src);

    // Marcar la miniatura seleccionada
    thumbnails.forEach((thumb) => thumb.classList.remove("selected"));
    thumbnail.classList.add("selected");
  });
});

// 6. Segmento de las miniaturas de pago

// Escuchar clics en las miniaturas de métodos de pago
paymentThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    paymentThumbnails.forEach(
      (thumb) => (thumb.style.border = "2px solid transparent")
    );
    thumbnail.style.border = "4px solid #ff9800";
  });
});

// 7. Segmento de modal de imagen

// Mostrar imagen ampliada en un modal al hacer clic en la imagen principal
Imageprin.addEventListener("click", () => {
  modalImage.src = Imageprin.src;
  imageModal.style.display = "flex";
});

// Función para cerrar el modal de imagen
closeModalButton.addEventListener("click", () => {
  imageModal.style.display = "none";
});

// Cerrar el modal de imagen al hacer clic fuera de la imagen
window.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.style.display = "none";
  }
});

// 8. Segmento de autocompletar direcciones

// Función para cargar el archivo JSON de direcciones simuladas
async function loadAddresses() {
  try {
    const response = await fetch("api/direcciones.json");
    const addresses = await response.json();
    return addresses;
  } catch (error) {
    console.error("Error cargando el archivo JSON:", error);
    return [];
  }
}

// Mostrar sugerencias al escribir en el campo de dirección
addressInput.addEventListener("input", async () => {
  const query = addressInput.value.toLowerCase();
  const addresses = await loadAddresses();
  const filteredAddresses = addresses.filter((item) =>
    item.direccion.toLowerCase().includes(query)
  );

  // Limpiar sugerencias previas
  suggestionsList.innerHTML = "";

  // Mostrar nuevas sugerencias
  filteredAddresses.forEach((item) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = item.direccion;
    suggestionsList.appendChild(suggestionItem);

    // Seleccionar la sugerencia al hacer clic
    suggestionItem.addEventListener("click", () => {
      addressInput.value = item.direccion;
      suggestionsList.innerHTML = "";
      // Autocompletar el código postal
      const postalCodeInput = document.getElementById("cp");
      if (postalCodeInput) {
        postalCodeInput.value = item.cp;
      }
    });
  });
});

// Ocultar sugerencias al hacer clic fuera del campo de dirección
document.addEventListener("click", (event) => {
  if (event.target !== addressInput) {
    suggestionsList.innerHTML = "";
  }
});

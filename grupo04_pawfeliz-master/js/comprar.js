const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const colorOptions = document.querySelectorAll(".color-option");

//segmento de seleccion de imagenes por los colores
// Objeto que mapea los colores y las imágenes correspondientes
const colorImages = {
  gris: "imagenes/SmartCollar.png",
  mix: "imagenes/SmartCollar2.png",
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

// Escuchar clics en las miniaturas
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    changeMainImage(thumbnail.src);
  });
});

//segemento del carrito de compras
const addToCartButton = document.querySelector(".add-to-cart");
const modal = document.getElementById("cart-modal");
const closeButton = document.querySelector(".close-button");

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

//segmento del banner de descuento
const discountModal = document.getElementById("discount-modal");
const applyDiscountButton = document.getElementById("apply-discount");

// Mostrar el modal al cargar la página (o activarlo después de un tiempo)
window.addEventListener("load", () => {
  setTimeout(() => {
    discountModal.style.display = "flex";
  }, 0); // Aparece inmediato 0 segundos
});

// Cerrar el modal al hacer clic en la cruz
closeButton.addEventListener("click", () => {
  discountModal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === discountModal) {
    discountModal.style.display = "none";
  }
});

// Aplicar el descuento al hacer clic en "Aplicar Descuento"
applyDiscountButton.addEventListener("click", () => {
  alert("¡Descuento del 10% aplicado!"); //porcentaje de descuento
  discountModal.style.display = "none";
});

//segmento de calculo de envio por provincia
const provinceInput = document.getElementById("province");
const shippingCostDisplay = document.createElement("p");

provinceInput.addEventListener("input", () => {
  const province = provinceInput.value.toLowerCase();
  let shippingCost = 0;

  // Buenos Aires
  if (province.includes("buenos aires")) {
    shippingCost = 4000;
  }
  // Provincias limítrofes
  else if (
    province.includes("caba") ||
    province.includes("capital federal") ||
    province.includes("santa fe") ||
    province.includes("la pampa") ||
    province.includes("entre ríos") ||
    province.includes("mendoza") ||
    province.includes("tucumán") ||
    province.includes("salta")
  ) {
    shippingCost = 10000;
  }
  // Resto de las provincias
  else {
    shippingCost = 17000;
  }

  shippingCostDisplay.textContent = `Costo de envío estimado: $${shippingCost}`;
  document.getElementById("shipping-form").appendChild(shippingCostDisplay);
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumb) => thumb.classList.remove("selected"));
    thumbnail.classList.add("selected");
  });
});

const paymentThumbnails = document.querySelectorAll(".payment-thumbnail");

paymentThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    paymentThumbnails.forEach(
      (thumb) => (thumb.style.border = "2px solid transparent")
    );
    thumbnail.style.border = "4px solid #ff9800";
  });
});

// Elementos del modal y la imagen principal
const Imageprin = document.getElementById("main-image");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModalButton = imageModal.querySelector(".close-button");

// Función para abrir el modal con la imagen ampliada
Imageprin.addEventListener("click", () => {
  modalImage.src = Imageprin.src;
  imageModal.style.display = "flex";
});

// Función para cerrar el modal
closeModalButton.addEventListener("click", () => {
  imageModal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.style.display = "none";
  }
});

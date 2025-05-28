const textoAutor = document.querySelector(".profile__info__name");
const profesion = document.querySelector(".profile__info__profession");
const formaEdicion = document.querySelector(".popup");
// const botonesLike = document.querySelectorAll(".element__vec-container");
const botonEditContainer = document.querySelector(
  ".profile__botonedit-container"
);
const botonEditar = document.querySelector(".profile__boton-edit");
const imagenEditar = document.querySelector(".profile__edit-image");
const botonGuardar = document.querySelector(".popup__button");
const imagenLike = document.querySelector(".element__like");
const imagenCerrar = document.querySelector(".popup__cerrar");

// Carga inicial del documento
document.addEventListener("DOMContentLoaded", function () {
  // console.log("sucedió el evento DOMContentLoaded");
  if (imagenEditar && imagenLike && imagenCerrar) {
    const originalEditSrc = imagenEditar.src;
    console.log("originalEditSrc:" + originalEditSrc);
    // debugger;
    imagenEditar.addEventListener("mouseenter", function () {
      imagenEditar.src = "./images/EditButton2.png";
    });
    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = originalEditSrc;
    });
    imagenEditar.addEventListener("click", function () {
      // console.log("Desplegar edición");
      formaEdicion.classList.add("popup_opened");
      let nombre = document.querySelector(".profile__name");
      var profesion = document.querySelector(".profile__profession");
      var cajaTextoNombre = document.querySelector(".popup__name");
      var textoNombre = document.getElementById("nombre");
      textoNombre.value = nombre.textContent;

      var textoAcerca = document.getElementById("acerca");
      textoAcerca.value = profesion.textContent;
    });
    imagenCerrar.addEventListener("click", function () {
      debugger;
      formaEdicion.classList.remove("popup_opened");
      formaEdicion.classList.add("popup_hidden");
    });
    document.querySelectorAll(".element__like").forEach(function (img) {
      let liked = false;
      // console.log("actualizada la imagen like");
      img.addEventListener("mouseenter", function () {
        if (!liked) img.src = "./images/Like2.png";
      });

      img.addEventListener("mouseleave", function () {
        if (liked) {
          img.src = "./images/Like2.png";
        } else {
          img.src = "./images/Like.png";
        }
      });

      img.addEventListener("click", function () {
        liked = !liked;
        if (liked) {
          img.src = "./images/Like2.png";
        } else {
          img.src = "./images/Like.png";
        }
      });
    });
  }
  //Agregar el evento Submit a la ventana emergente

  formaEdicion.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = formaEdicion.querySelector(".popup__name");
    let profesión = formaEdicion.querySelector(".popup__profession");

    let nombrePerfil = document.querySelector(".profile__name");
    nombrePerfil.textContent = nombre.value;
    let profesionPerfil = document.querySelector(".profile__profession");
    profesionPerfil.textContent = profesión.value;
    formaEdicion.style.display = "none";
  });
  // Manejo del botón de edición de usuario:

  function despliegaEdicionPerfil() {
    alert("Desplegar edición");
    formaEdicion.classList.add("popup_opened");
    let nombre = document.querySelector(".profile__name");
    let profesion = document.querySelector(".profile__profession");
    let cajaTextoNombre = document.querySelector(".popup__name");
    let textoNombre = document.getElementById("nombre");
    textoNombre.value = nombre.textContent;

    let textoAcerca = document.getElementById("acerca");
    textoAcerca.value = profesion.textContent;
  }
});

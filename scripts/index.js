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

// Carga inicial del documento
// document.addEventListener('DOMContentLoaded', function() {

//Agregar los eventos para el botón botonEditar

if (imagenEditar && imagenLike) {
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
    console.log("Desplegar edición");
    formaEdicion.classList.add("popup_opened");
    let nombre = document.querySelector(".profile__name");
    var profesion = document.querySelector(".profile__profession");
    var cajaTextoNombre = document.querySelector(".popup__name");
    var textoNombre = document.getElementById("nombre");
    textoNombre.value = nombre.textContent;

    var textoAcerca = document.getElementById("acerca");
    textoAcerca.value = profesion.textContent;
  });

  // const originalImagenLike = imagenLike.src;
}

document.querySelectorAll(".element__like").forEach(function (img) {
  let liked = false;
  console.log("actualizada la imagen like");
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

// agregar los eventos para el botón like
// for (let i = 0; i < botonesLike.length; i++) {
//   botonesLike[i].addEventListener("mouseover", cambiaImagenLike);
//   // console.log("agregando el boton like " + i);
// }
// for (let i = 0; i < botonesLike.length; i++) {
//   botonesLike[i].addEventListener("mouseleave", regresaImagenLike);
// }

function cambiaImagenLike() {
  //   alert("Mouse over");
  this.classList.add("element__vec-container_dark");
}
function regresaImagenLike() {
  this.classList.remove("element__vec-container_dark");
  this.classList.add("element__vec-container");
}

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

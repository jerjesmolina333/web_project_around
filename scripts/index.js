let textoAutor = document.querySelector(".profile__info__name");
let profesion = document.querySelector(".profile__info__profession");
let formaEdicion = document.querySelector(".popup");
let botonesLike = document.querySelectorAll(".element__vec-container");
let botonEditContainer = document.querySelector(
  ".profile__botonedit-container"
);
var botonEditar = document.querySelector(".profile__boton-edit");
var imagenEditar = document.querySelector(".profile__plus");
var botonGuardar = document.querySelector(".popup__button");

formaEdicion.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var nombre = formaEdicion.querySelector(".popup__name");
  var profesión = formaEdicion.querySelector(".popup__profession");

  var nombrePerfil = document.querySelector(".profile__name");
  nombrePerfil.textContent = nombre.value;
  var profesionPerfil = document.querySelector(".profile__profession");
  profesionPerfil.textContent = profesión.value;
  formaEdicion.style.display = "none";
});

function cambiaImagenEdit1() {
  // alert("Se va a cambiar la imagen");
  botonEditContainer.innerHTML = `
            <button class="profile__boton-edit">
            <img
              src="./images/EditButton2.png"
              class="profile__edit-image"
              alt="Edit Button"
            />
          </button>
          `;
}

function cambiaImagenEdit2() {
  // alert("Se va a cambiar la imagen");
  botonEditContainer.innerHTML = `
            <button class="profile__boton-edit">
            <img
              src="./images/EditButton.png"
              class="profile__edit-image"
              alt="Edit Button"
            />
          </button>
          `;
}
botonEditar.addEventListener("click", despliegaEdicionPerfil);
imagenEditar.addEventListener("mouseover", cambiaImagenEdit1);
imagenEditar.addEventListener("mouseout", cambiaImagenEdit2);

// botonEditar.addEventListener("mouseleave", cambiaImagenEdit2);

for (var i = 0; i < botonesLike.length; i++) {
  botonesLike[i].addEventListener("mouseover", cambiaImagenLike);
  // console.log("agregando el boton like " + i);
}
for (var i = 0; i < botonesLike.length; i++) {
  botonesLike[i].addEventListener("mouseleave", regresaImagenLike);
}

function cambiaImagenLike() {
  //   alert("Mouse over");
  this.classList.add("element__vec-container_dark");
}
function regresaImagenLike() {
  this.classList.remove("element__vec-container_dark");
  this.classList.add("element__vec-container");
}

// Manejo del botón de edición de usuario:

function despliegaEdicionPerfil() {
  // alert("Desplagar edición");
  formaEdicion.classList.add("popup_opened");
  var nombre = document.querySelector(".profile__name");
  var profesion = document.querySelector(".profile__profession");
  var cajaTextoNombre = document.querySelector(".popup__name");
  var textoNombre = document.getElementById("nombre");
  textoNombre.value = nombre.textContent;

  var textoAcerca = document.getElementById("acerca");
  textoAcerca.value = profesion.textContent;
}

const profesion = document.querySelector(".profile__info__profession");
const formaEdicion = document.querySelector(".popup-edit-profile");
const formaNewPlace = document.querySelector(".popup-new-place");
const imagenEditar = document.querySelector(".profile__edit-image");
// const imagenLike = document.querySelector(".element__like");
const imagenCerrarEP = document.querySelector(".popup__cerrarEP");
const imagenCerrarNP = document.querySelector(".popup__cerrarNP");
const imagenBotonPlus = document.querySelector(".profile__plus");
let imagenDesplegada = false;

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
function agregaPropsImg(img) {
  img.addEventListener("click", function () {
    if (!imagenDesplegada) {
      const url = img.src;

      const imagenDespl = document.querySelector(".imagen__display");
      const imagenTemplate = document.querySelector("#imagen").content;
      const imagenElement = imagenTemplate
        .querySelector(".popup")
        .cloneNode(true);
      imagenElement.querySelector(".imagen__pic").src = url;
      imagenElement
        .querySelector(".popup__cerrarIMG")
        .addEventListener("click", function () {
          const padre1 = this.parentElement;
          const padre2 = padre1.parentElement;
          const padre3 = padre2.parentElement;
          const padre4 = padre3.parentElement;
          padre1.remove();
          padre2.remove();
          padre3.remove();
          imagenDesplegada = false;
          return;
        });
      imagenDespl.append(imagenElement);
      imagenDesplegada = true;
    }
  });
}

function createCard(card) {
  const elementTemplate = document.querySelector("#element").content;
  const cardElement = elementTemplate
    .querySelector(".element__container")
    .cloneNode(true);

  const imagen = cardElement.querySelector(".element__pic");
  cardElement.querySelector(".element__name").textContent = card.name;
  cardElement.querySelector(".element__pic").src = card.link;
  cardElement.querySelector(".element__pic").alt = card.name;
  // debugger;
  agregaPropsImg(imagen);
  imagenDesplegada = false;

  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", function () {
      const padre1 = this.parentElement;
      const padre2 = padre1.parentElement;
      // debugger;
      padre2.remove();
    });

  return cardElement;
}

function cargaImagenesInic(initialCards) {
  const cardsContainer = document.querySelector(".elements");
  initialCards.forEach((card) => {
    let cardElement = createCard(card);
    cardsContainer.append(cardElement);
  });
}

// ===========================
// ===========================
// ===========================
// Carga inicial del documento
document.addEventListener("DOMContentLoaded", function () {
  cargaImagenesInic(initialCards);
  const originalEditSrc = imagenEditar.src;

  imagenBotonPlus.addEventListener("click", function () {
    formaNewPlace.classList.add("popup_opened");

    const contNP = document.querySelector(".popup-new-place");
    const primerCampoTexto = formaNewPlace.querySelector(".popup__name");
    primerCampoTexto.focus();
    contNP.addEventListener(
      "keydown",
      (event) => {
        var keyValue = event.key;

        if (keyValue == "Escape") {
          formaNewPlace.classList.remove("popup_opened");
          formaNewPlace.classList.add("popup_hidden");
        }
      },
      false
    );
  });

  imagenBotonPlus.addEventListener("mouseenter", function () {
    const contenedorBoton = document.querySelector(".profile__plus-container");
    contenedorBoton.classList.add("profile__plus-container_solid");
    imagenBotonPlus.src = "./images/BotonCerrar2.png";
  });

  imagenBotonPlus.addEventListener("mouseleave", function () {
    const contenedorBoton = document.querySelector(".profile__plus-container");
    contenedorBoton.classList.remove("profile__plus-container_solid");
    contenedorBoton.classList.add("profile__plus-container");
    imagenBotonPlus.src = "./images/BotonCerrar.png";
  });

  imagenEditar.addEventListener("click", function () {
    formaEdicion.classList.add("popup_opened");

    let nombre = document.querySelector(".profile__name");
    let profesion = document.querySelector(".profile__profession");
    // let textoNombre = document.getElementById("nombre");
    let textoNombre = document.querySelector(".popup__name");
    textoNombre.value = nombre.textContent;

    // let textoAcerca = document.getElementById("acerca");
    let textoAcerca = document.querySelector(".popup__profession");
    textoAcerca.value = profesion.textContent;

    const contEP = document.querySelector(".popup-edit-profile");
    const primerCampoTexto = document.querySelector(".popup__name");
    primerCampoTexto.focus();
    contEP.addEventListener(
      "keydown",
      (event) => {
        var keyValue = event.key;

        if (keyValue == "Escape") {
          formaEdicion.classList.remove("popup_opened");
          formaEdicion.classList.add("popup_hidden");
        }
      },
      false
    );
  });

  // Icono de editar perfil:
  imagenEditar.addEventListener("mouseenter", function () {
    // debugger;
    imagenEditar.src = "./images/EditButton2.png";
  });

  imagenEditar.addEventListener("mouseleave", function () {
    imagenEditar.src = originalEditSrc;
  });

  imagenCerrarEP.addEventListener("click", function () {
    formaEdicion.classList.remove("popup_opened");
    formaEdicion.classList.add("popup_hidden");
  });
  imagenCerrarNP.addEventListener("click", function () {
    formaNewPlace.classList.remove("popup_opened");
    formaNewPlace.classList.add("popup_hidden");
  });

  document.querySelectorAll(".element__like").forEach(function (img) {
    let liked = false;
    img.addEventListener("mouseenter", function () {
      if (!liked) img.src = "./images/LikeHover.png";
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

  //Agregar el evento Submit a la ventana emergente

  // formaEdicion.addEventListener("submit", (evt) => {
  formaEdicion.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let nombre = formaEdicion.querySelector(".popup__name");
    let profesión = formaEdicion.querySelector(".popup__profession");

    let nombrePerfil = document.querySelector(".profile__name");
    nombrePerfil.textContent = nombre.value;
    let profesionPerfil = document.querySelector(".profile__profession");
    profesionPerfil.textContent = profesión.value;
    formaEdicion.style.display = "none";
  });

  formaNewPlace.addEventListener("submit", function (evt) {
    // debugger;
    const cardsContainer = document.querySelector(".elements");
    evt.preventDefault();
    let nombre = formaNewPlace.querySelector("#np__title").value;
    let thisLink = formaNewPlace.querySelector("#np-image").value;
    let thisCard = { name: nombre, link: thisLink };
    let cardElement = createCard(thisCard);

    cardsContainer.prepend(cardElement);
    formaNewPlace.classList.remove("popup_opened");
    formaNewPlace.classList.add("popup_hidden");
  });
});

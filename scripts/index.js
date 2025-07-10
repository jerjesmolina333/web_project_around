// ===========================
// ===========================
// ===========================
// Carga inicial del documento

document.addEventListener("DOMContentLoaded", function () {
  let formaDesplegada = "none";

  const contEP = document.querySelector(".popup-edit-profile");
  const formaNewPlace = document.querySelector(".popup-new-place");
  const formaEdicion = document.querySelector(".popup-edit-profile");

  const imagenCerrarEP = document.querySelector(".popup__cerrarEP");
  const imagenCerrarNP = document.querySelector(".popup__cerrarNP");

  const imagenBotonPlus = document.querySelector(".profile__plus");
  const botonPlus = document.querySelector(".profile__boton-plus");
  const imagenEditar = document.querySelector(".profile__edit-image");

  const editButton = document.querySelector(".profile__boton-edit");

  let imagenDesplegada = false;
  const paramsValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

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
    img.addEventListener("click", function (evt) {
      const posXClick = "" + evt.clientX + "px";
      const posYClick = "" + (evt.clientY + 200) + "px";

      if (!imagenDesplegada) {
        const url = img.src;

        const modalDisplay = document.querySelector(".imagen__display");
        modalDisplay.style.display = "flex";
        document.body.classList.add("modal-open");

        const imagenTemplate = document.querySelector("#imagen").content;
        const imagenContainer = imagenTemplate
          .querySelector(".imagen__container")
          .cloneNode(true);

        imagenContainer.querySelector(".imagen__pic").src = url;
        imagenContainer.style.top = posYClick;
        imagenContainer.style.left = "250px";

        modalDisplay.append(imagenContainer);

        imagenDesplegada = true;

        imagenContainer
          .querySelector(".popup__cerrarIMG")
          .addEventListener("click", function (evt) {
            const elem = evt.target;
            const padre1 = elem.parentElement;
            const padre2 = padre1.parentElement;
            padre1.remove();
            padre2.style.display = "none";
            imagenDesplegada = false;
            return;
          });

        const fondoPage = document.querySelector(".popup");
        fondoPage.addEventListener("click", (evt) => {
          const elemento = evt.target.classList[0];
          console.log("elemento: " + elemento);
          if (elemento === "popup") {
            const elem = evt.target;
            const padre1 = elem.parentElement;
            const imagenContainer =
              document.querySelector(".imagen__container");
            imagenContainer.remove();
            padre1.style.display = "none";
            imagenDesplegada = false;
            return;
          }
        });
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

    agregaPropsImg(imagen);
    imagenDesplegada = false;

    cardElement
      .querySelector(".element__trash")
      .addEventListener("click", function () {
        const padre1 = this.parentElement;
        const padre2 = padre1.parentElement;

        padre1.remove();
      });

    return cardElement;
  }

  function attendSubmitProfile(evt) {
    evt.preventDefault();
    const nombre = contEP.querySelector("#nombre");
    const profesion = formaEdicion.querySelector("#acerca");
    const nombrePerfil = document.querySelector(".profile__name");
    const profesionPerfil = document.querySelector(".profile__profession");

    nombrePerfil.textContent = nombre.value;
    profesionPerfil.textContent = profesion.value;

    contEP.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  function procesaSubmitNewPlace(evt) {
    evt.preventDefault();
    const cardsContainer = document.querySelector(".elements");

    let nombre = formaNewPlace.querySelector("#np__title").value;
    let thisLink = formaNewPlace.querySelector("#np-image").value;
    let thisCard = { name: nombre, link: thisLink };
    let cardElement = createCard(thisCard);

    cardsContainer.prepend(cardElement);
    formaNewPlace.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  ////////////////////////////////
  //// CÓDIGO:

  initialCards.forEach((item) => {
    const elemento = new Card(item, "#element");
    const cardElement = elemento.generateCard();
    document.querySelector(".elements").append(cardElement);
  });

  const validator1 = new FormValidator(paramsValidation, ".popup__input");
  validator1.enableValidation();

  // cargaImagenesInic(initialCards);
  if (imagenEditar && botonPlus && imagenCerrarEP && imagenCerrarNP) {
    imagenEditar.addEventListener("click", function () {
      procesaClickEditarPerfil(contEP);
    });

    imagenEditar.addEventListener("mouseenter", function () {
      // debugger;
      procesaMouseenterEditar(imagenEditar);
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "./images/EditButton.png";
    });
    botonPlus.addEventListener("click", function () {
      procesaClickNuevoLugar(formaNewPlace);
    });
    // botonPlus.addEventListener("click", procesaClickNuevoLugar(formaNewPlace));

    botonPlus.addEventListener("mouseenter", function () {
      procesaMouseEnterBotPlus(botonPlus, imagenBotonPlus);
    });
    botonPlus.addEventListener("mouseleave", function () {
      procesaMouseleaveBotPlus(botonPlus, imagenBotonPlus);
    });

    imagenCerrarNP.addEventListener("mouseenter", function () {
      imagenCerrarNP.src = "./images/BotonCerrar2.png";
    });
    imagenCerrarNP.addEventListener("mouseleave", function () {
      imagenCerrarNP.src = "./images/BotonCerrar.png";
    });
    imagenCerrarNP.addEventListener("click", function () {
      formaNewPlace.style.display = "none";
      document.body.classList.remove("modal-open");
    });
    imagenCerrarEP.addEventListener("mouseenter", function () {
      imagenCerrarEP.src = "./images/BotonCerrar2.png";
    });
    imagenCerrarEP.addEventListener("mouseleave", function () {
      imagenCerrarEP.src = "./images/BotonCerrar.png";
    });

    imagenCerrarEP.addEventListener("click", function () {
      contEP.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

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

  //Agregar el evento Submit a las ventanas emergentes:
  formaEdicion.addEventListener("submit", attendSubmitProfile);
  formaNewPlace.addEventListener("submit", procesaSubmitNewPlace);
});

import { Card } from "./card.js";
import { FormValidator } from "./validate.js";
import {
  procesaClickNuevoLugar,
  procesaClickEditarPerfil,
  procesaMouseenterEditar,
  procesaMouseEnterBotPlus,
  procesaMouseleaveBotPlus,
} from "./utils.js";

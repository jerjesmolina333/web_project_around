import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  procesaClickNuevoLugar,
  procesaClickEditarPerfil,
  procesaMouseenterEditar,
  procesaMouseEnterBotPlus,
  procesaMouseleaveBotPlus,
  agregaPropsImg,
} from "./utils.js";
import { cardListSelector, initialCards } from "../utils/constants.js";
import Section from "../scripts/Section.js";

// ===========================
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

  function despliegaPopupImagen() {
    console.log("==");
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

    agregaPropsImg(evt, imagen, imagenDesplegada);
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

  const cargaInicialImag = new Section(
    {
      data: initialCards,
      renderer: (item) => {
        const elemento = new Card(item, "#element");
        const cardElement = elemento.generateCard();
        cargaInicialImag.addItem(cardElement);
      },
    },
    cardListSelector
  );

  ////////////////////////////////
  //// CÓDIGO:

  cargaInicialImag.renderItems();

  const validator1 = new FormValidator(paramsValidation, ".popup__input");
  validator1.enableValidation();

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

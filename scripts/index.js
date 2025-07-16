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

import {
  cardListSelector,
  initialCards,
  paramsValidationEP,
  paramsValidationNP,
} from "../utils/constants.js";
import Section from "../scripts/Section.js";

document.addEventListener("DOMContentLoaded", function () {
  const imagenCerrarEP = document.querySelector(".popup__cerrarEP");
  const imagenCerrarNP = document.querySelector(".popup__cerrarNP");

  const imagenBotonPlus = document.querySelector(".profile__plus");
  const botonPlus = document.querySelector(".profile__boton-plus");
  const imagenEditar = document.querySelector(".profile__edit-image");

  const editButton = document.querySelector(".profile__boton-edit");

  let imagenDesplegada = false;

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

  function agregaEventosBotonEditarPerfil() {
    imagenEditar.addEventListener("click", function () {
      procesaClickEditarPerfil();
    });

    imagenEditar.addEventListener("mouseenter", function () {
      procesaMouseenterEditar(imagenEditar);
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "./images/EditButton.png";
    });
    imagenCerrarEP.addEventListener("mouseenter", function () {
      imagenCerrarEP.src = "./images/BotonCerrar2.png";
    });
    imagenCerrarEP.addEventListener("mouseleave", function () {
      imagenCerrarEP.src = "./images/BotonCerrar.png";
    });
  }

  function agregaEventosBotonNuevoLugar() {
    botonPlus.addEventListener("click", function () {
      procesaClickNuevoLugar();
    });

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
  }
  function agergaEventosBotonLike() {
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
  }

  ////////////////////////////////
  //// CÓDIGO:
  cargaInicialImag.renderItems();
  debugger;
  const validatorEP = new FormValidator(paramsValidationEP, ".popup__input");
  validatorEP.enableValidation();

  const validatorNP = new FormValidator(paramsValidationNP, ".popup__input");
  validatorNP.enableValidation();

  // if (imagenEditar && botonPlus && imagenCerrarEP && imagenCerrarNP) {
  agregaEventosBotonEditarPerfil();
  agregaEventosBotonNuevoLugar();
  agergaEventosBotonLike();
});

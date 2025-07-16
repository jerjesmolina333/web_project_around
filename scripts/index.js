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
  // const formaNewPlace = document.querySelector(".popup-new-place");
  const formaEdicion = document.querySelector(".modal-form");

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

  // if (imagenEditar && botonPlus && imagenCerrarEP && imagenCerrarNP) {
  imagenEditar.addEventListener("click", function () {
    procesaClickEditarPerfil(contEP);
  });

  imagenEditar.addEventListener("mouseenter", function () {
    procesaMouseenterEditar(imagenEditar);
  });

  imagenEditar.addEventListener("mouseleave", function () {
    imagenEditar.src = "./images/EditButton.png";
  });

  botonPlus.addEventListener("click", function () {
    procesaClickNuevoLugar();
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
  // formaEdicion.addEventListener("submit", attendSubmitProfile);
  // formaNewPlace.addEventListener("submit", procesaSubmitNewPlace);
});

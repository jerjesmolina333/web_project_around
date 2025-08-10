import { Card } from "./Card.js";
import { Api } from "./Api.js";

import {
  procesaClickNewPlace,
  procesaClickEditarPerfil,
  procesaClikEditarAvatar,
  procesaMouseEnterBotPlus,
  procesaMouseleaveBotPlus,
} from "./utils.js";

import {
  cardListSelector,
  initialCards,
  paramsValidationNP,
} from "../utils/constants.js";
import Section from "../scripts/Section.js";

document.addEventListener("DOMContentLoaded", function () {
  const imagenBotonPlus = document.querySelector(".profile__plus");
  const botonPlus = document.querySelector(".profile__boton-plus");
  const imagenEditar = document.querySelector(".profile__edit-image");
  const imagenEditarAvatar = document.querySelector(
    ".profile__img-edit-avatar"
  );
  let imagenDesplegada = false;

  function agregaEventosBotonEditarPerfil() {
    imagenEditar.addEventListener("click", function () {
      procesaClickEditarPerfil();
    });

    imagenEditar.addEventListener("mouseenter", function () {
      imagenEditar.src = "../images/EditButton2.png";
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "../images/EditButton.png";
    });

    imagenEditarAvatar.addEventListener("click", function (evt) {
      procesaClikEditarAvatar(evt);
    });
  }

  function agregaEventosBotonNuevoLugar() {
    botonPlus.addEventListener("click", function () {
      procesaClickNewPlace();
    });

    botonPlus.addEventListener("mouseenter", function () {
      imagenBotonPlus.src = "../images/AddButton2.png";
    });
    botonPlus.addEventListener("mouseleave", function () {
      imagenBotonPlus.src = "../images/AddButton.png";
    });
  }

  ////////////////////////////////
  //// CÓDIGO:

  const params = {
    headers: {
      authorization: "082ad1cf-6751-4277-bd54-4a8ddfdec0e7",
    },
  };

  const api = new Api(
    {
      link: "https://around-api.es.tripleten-services.com/v1/users/me",
    },
    params
  );
  api._despInicial();

  agregaEventosBotonEditarPerfil();
  agregaEventosBotonNuevoLugar();
});

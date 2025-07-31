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

function alerternateVisible(imagenEditarAvatar) {
  if (imagenEditarAvatar.classList.contains("edit-avatar_no-visible")) {
    imagenEditarAvatar.classList.remove("edit-avatar_no-visible");
  }
  imagenEditarAvatar.classList.add("edit-avatar_visible");
}

function alerternateNoVisible(imagenEditarAvatar) {
  if (imagenEditarAvatar.classList.contains("edit-avatar_visible")) {
    imagenEditarAvatar.classList.remove("edit-avatar_visible");
  }
  imagenEditarAvatar.classList.add("edit-avatar_no-visible");
}

document.addEventListener("DOMContentLoaded", function () {
  const imagenBotonPlus = document.querySelector(".profile__plus");
  const botonPlus = document.querySelector(".profile__boton-plus");
  const imagenEditar = document.querySelector(".profile__edit-image");
  const imagenAvatar = document.querySelector(".profile__photo");
  const imagenEditarAvatar = document.querySelector(
    ".profile__img-edit-avatar"
  );
  let imagenDesplegada = false;

  function agregaEventosBotonEditarPerfil() {
    imagenEditar.addEventListener("click", function () {
      procesaClickEditarPerfil();
    });

    imagenEditar.addEventListener("mouseenter", function () {
      imagenEditar.src = "./images/EditButton2.png";
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "./images/EditButton.png";
    });
    imagenAvatar.addEventListener("mouseenter", function (evt) {
      evt.preventDefault();
      console.log("Evento mouseenter");
      imagenEditarAvatar.classList.add("edit-avatar_visible");
      // setTimeout(alerternateVisible(imagenEditarAvatar), 9000);
    });
    imagenAvatar.addEventListener("mouseleave", function (evt) {
      evt.preventDefault();
      console.log("Evento mouseleave");
      // setTimeout(alerternateNoVisible(imagenEditarAvatar), 8000);
      // imagenEditarAvatar.display = "none";
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
      procesaMouseEnterBotPlus(botonPlus, imagenBotonPlus);
    });
    botonPlus.addEventListener("mouseleave", function () {
      procesaMouseleaveBotPlus(botonPlus, imagenBotonPlus);
    });
  }

  ////////////////////////////////
  //// CÓDIGO:

  const api = new Api({
    link: "https://around-api.es.tripleten-services.com/v1/users/me",
    headers: {
      authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
    },
  });
  api._despInicial();

  agregaEventosBotonEditarPerfil();
  agregaEventosBotonNuevoLugar();
});

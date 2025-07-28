import { Card } from "./Card.js";
import { Api } from "./Api.js";

import {
  procesaClickNewPlace,
  procesaClickEditarPerfil2,
  procesaMouseenterEditar,
  procesaMouseEnterBotPlus,
  procesaMouseleaveBotPlus,
  agregaPropsImg,
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
  const editButton = document.querySelector(".profile__boton-edit");

  let imagenDesplegada = false;

  // const cargaInicialImag = new Section(
  //   {
  //     data: initialCards,
  //     renderer: (item) => {
  //       const elemento = new Card(item, "#element");
  //       const cardElement = elemento.generateCard();
  //       cargaInicialImag.addItem(cardElement);
  //     },
  //   },
  //   cardListSelector
  // );

  function agregaEventosBotonEditarPerfil() {
    imagenEditar.addEventListener("click", function () {
      procesaClickEditarPerfil2();
    });

    imagenEditar.addEventListener("mouseenter", function () {
      procesaMouseenterEditar(imagenEditar);
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "./images/EditButton.png";
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

  function agregaEventosBotonLike() {
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

  function cargaDatosUsuario() {
    return (
      fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
        headers: {
          authorization: "1e56857e-5782-4eca-8ef7-c3510bd14463",
        },
      })
        // .then((res) => res.json())
        .then((res) =>
          res.ok
            ? console.log("EXITO")
            : console.log("Hubo éxito en la llamada")
        )
        .catch((err) => console.log("hubo un error: " + err))
    );
  }

  ////////////////////////////////
  //// CÓDIGO:

  const api = new Api({
    link: "https://around-api.es.tripleten-services.com/v1/users/me",
    headers: {
      authorization: "bbbc5cf5-5717-4950-8052-46e64bd08b28",
    },
  });
  api._despUsuario();

  const apiImag = new Api({
    link: "https://around-api.es.tripleten-services.com/v1/cards/",
    headers: {
      authorization: "bbbc5cf5-5717-4950-8052-46e64bd08b28",
    },
  });
  // debugger;
  apiImag._despImagenesInic();

  // cargaInicialImag.renderItems();

  // agregaEventosBotonEditarPerfil();
  // agregaEventosBotonNuevoLugar();
  // agregaEventosBotonLike();
});

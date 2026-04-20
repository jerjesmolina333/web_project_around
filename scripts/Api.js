import Section from "./Section.js";
import {
  cardListSelector,
  initialCards,
  paramsValidationNP,
} from "../utils/constants.js";

import { Card } from "./Card.js";
import { agregaEventosBotonLike } from "./utils.js";

let datosUs;
const initialImages = [];

export class Api {
  constructor({ link }, headers) {
    this._link = link;
    this._headers = headers;
    const datos = "";
  }

  _despInicial() {
    const fetchUsuario = fetch(this._link, this._headers)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        datosUs = data;
      })
      .catch((error) => {
        console.log("Error en fetchUsuario: " + error);
        return Promise.reject(`Error: ${error}`);
      });
    const fetchImagenes = fetch(
      "https://around-api.es.tripleten-services.com/v1/cards/",
      {
        headers: {
          authorization: "082ad1cf-6751-4277-bd54-4a8ddfdec0e7",
        },
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        data.forEach((card) => {
          const estaCard = {
            isLiked: card.isLiked,
            name: card.name,
            link: card.link,
            id: card._id,
          };
          initialImages.unshift(estaCard);
        });
      })
      .catch((error) => {
        console.log("Error en fetchImagenes: " + error);
        return Promise.reject(`Error: ${error}`);
      });
    const promises = [fetchUsuario, fetchImagenes];
    Promise.all(promises).then((results) => {
      this._despInfoUsuario(datosUs);
      debugger;
      const cargaInicialImag = new Section(
        {
          data: initialImages,
          renderer: (item) => {
            const elemento = new Card(item, "#element");
            const cardElement = elemento.generateCard();
            cargaInicialImag.addItem(cardElement);
          },
        },
        cardListSelector
      );
      cargaInicialImag.renderItems();
      agregaEventosBotonLike();
    });
  }

  _despInfoUsuario(data) {
    const nombrePerfil = document.querySelector(".profile__name");
    const profesionPerfil = document.querySelector(".profile__profession");
    const photo = document.querySelector(".profile__photo");
    photo.src = data.avatar;
    nombrePerfil.textContent = data.name;
    profesionPerfil.textContent = data.about;
  }

  _insertaImagen(name, link) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        agregaEventosBotonLike();
      })
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }
  _actualizaAvatar(newLink) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {})
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }

  _actualizaUsuario(nombre, about) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log("=== DATA: " + data);
        // console.log("name: " + data.name);
        // console.log("About: " + data.about);
      })
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }
}

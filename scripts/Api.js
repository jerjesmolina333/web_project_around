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
  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
    const datos = "";
  }

  _despInicial() {
    const fetchUsuario = fetch(this._link, {
      headers: {
        authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
      },
    })
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
        return Promise.reject(`Error: ${res.status}`);
      });
    const fetchImagenes = fetch(
      "https://around-api.es.tripleten-services.com/v1/cards/",
      {
        headers: {
          authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
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
        return Promise.reject(`Error: ${res.status}`);
      });
    const promises = [fetchUsuario, fetchImagenes];
    Promise.all(promises).then((results) => {
      this._despInfoUsuario(datosUs);
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
    debugger;
    console.log("headers: " + this._headers);
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
    debugger;
    console.log("headers:" + this._headers);
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("=== DATA: " + data);
        // console.log("avatar: " + data.avatar);
      })
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }

  _actualizaUsuario(nombre, about) {
    debugger;
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
        return Promise.reject(`Error: ${res.status}`);
      });
  }
}

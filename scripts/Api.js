import Section from "./Section.js";
import {
  cardListSelector,
  initialCards,
  paramsValidationNP,
} from "../utils/constants.js";

import { Card } from "./Card.js";

export class Api {
  constructor({ link, headers }) {
    this._link = link;
    this._headers = headers;
  }
  _despUsuario() {
    // debugger;
    // console.log("this._link: " + this._link);
    // console.log("this._headers: " + this._headers.authorization);
    fetch(this._link, {
      headers: {
        authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
      },
    })
      // fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        const nombrePerfil = document.querySelector(".profile__name");
        const profesionPerfil = document.querySelector(".profile__profession");
        const photo = document.querySelector(".profile__photo");
        photo.src = data.avatar;
        nombrePerfil.textContent = data.name;

        profesionPerfil.textContent = data.about;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  _actualizaUsuario(nombre, about) {
    fetch(this._link, {
      method: "PATCH",
      headers: {
        authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nombre,
        about: about,
      }),
    })
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
      });
  }
  _despImagenesInic() {
    fetch(this._link, {
      headers: {
        authorization: "a75089ec-acc5-4d18-8c11-de5f96ae144f",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data[0]);
        const initialImages = [];
        data.forEach((card) => {
          const estaCard = {
            isLiked: card.IsLiked,
            name: card.name,
            link: card.link,
            id: card.id,
          };
          initialImages.unshift(estaCard);
        });

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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

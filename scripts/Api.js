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
    fetch(this._link, {
      headers: {
        authorization: "bbbc5cf5-5717-4950-8052-46e64bd08b28",
      },
    })
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
  _despImagenesInic() {
    fetch(this._link, {
      headers: {
        authorization: "bbbc5cf5-5717-4950-8052-46e64bd08b28",
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

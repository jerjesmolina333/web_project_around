import { PopupWithForm } from "./PopupWithForm.js";
import { Card } from "./Card.js";

export class PopupFormNP extends PopupWithForm {
  constructor(params) {
    super(params);
    const contenedor = document.querySelector("#container-NP");
    this._botonCerrar = contenedor.querySelector(".popup__cerrarNP");

    this._form = document.querySelector(this._formSelector);
    this._imagenDesplegada = false;
  }
  open(evt) {
    this._fondo = document.querySelector(this._fondoSelector);
    this._fondo.style.display = "flex";

    this._getInputValues();
    this._setEventListeners(evt);

    const inputTitle = this._form.querySelector("#np-title");
    inputTitle.focus();
  }
  _getInputValues() {
    this._inputTitulo = this._form.querySelector("#np-title");
    this._inputImagen = this._form.querySelector("#np-image");
  }
  _resetForm() {
    this._inputTitulo.value = "";
    this._inputImagen.value = "";
  }
  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const cardsContainer = document.querySelector(".elements");

      let titulo = this._inputTitulo.value;
      let imageLink = this._inputImagen.value;
      let thisCard = { name: titulo, link: imageLink };

      const elemento = new Card(thisCard, "#element");
      const cardElement = elemento.generateCard();

      cardsContainer.prepend(cardElement);

      this._close();
    });
    this._botonCerrar.addEventListener("click", () => {
      this.close();
      this._resetForm();
    });
  }
}

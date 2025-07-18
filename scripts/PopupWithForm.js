import Popup from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { Card } from "./Card.js";

export class PopupWithForm extends Popup {
  constructor(params, marcado) {
    super(params.popupSelector);

    this._fondoSelector = params.fondoSelector;
    this._containerSelector = params.containerSelector;
    this._templateSelector = params.templateSelector;
    this._formSelector = params.formSelector;

    this._primerCampoTextoSelector = params.primerCampoTexto;

    console.log("this._fondoSelector: " + this._fondoSelector);
    console.log("this._containerSelector: " + this._containerSelector);
    console.log("this._templateSelector: " + this._templateSelector);
    console.log("this._formSelector: " + this._formSelector);
    this._marcado = marcado;
  }

  open(evt) {
    this._fondo = document.querySelector(this._fondoSelector);
    const formTemplate = document.querySelector(this._templateSelector).content;
    const formContainer = formTemplate
      .querySelector(this._containerSelector)
      .cloneNode(true);

    formContainer.insertAdjacentHTML("afterbegin", this._marcado);

    this._botonCerrar = formContainer.querySelector(".popup__cerrar");
    this._fondo.append(formContainer);
    this._form = document.querySelector(this._formSelector);

    this._primerCampoTexto = formContainer.querySelector(
      this._primerCampoTextoSelector
    );

    this._primerCampoTexto.focus();
    this._fondo.style.display = "flex";
    this._setEventListeners();
  }

  setTextEP() {
    const nombre = document.querySelector(".profile__name");
    const profesion = document.querySelector(".profile__profession");

    this._inputNombre = this._form.querySelector("#nombre");
    this._inputAcerca = this._form.querySelector("#acerca");

    this._inputNombre.value = nombre.textContent;
    this._inputAcerca.value = profesion.textContent;
  }

  _close() {
    this._fondo.style.display = "none";
  }

  _attendSubmitEP(evt) {
    const nombre = this._form.querySelector("#nombre");
    const profesion = this._form.querySelector("#acerca");
    const nombrePerfil = document.querySelector(".profile__name");
    const profesionPerfil = document.querySelector(".profile__profession");
    this._getInputValuesEP();

    const params = {
      userName: this._inputNombre.value,
      userAbout: this._inputAcerca.value,
    };

    const userInfo = new UserInfo(params);
    userInfo.setUserInfo();

    nombrePerfil.textContent = nombre.value;
    profesionPerfil.textContent = profesion.value;

    this._fondo.style.display = "none";
  }

  _attendSubmitNP(evt) {
    const cardsContainer = document.querySelector(".elements");

    this._getInputValuesNP();

    let titulo = this._nuevoTitulo;
    let imageLink = this._nuevoLink;
    let thisCard = { name: this._nuevoTitulo, link: this._nuevoLink };
    const elemento = new Card(thisCard, "#element");
    const cardElement = elemento.generateCard();

    cardsContainer.prepend(cardElement);

    this._close();
  }

  _setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._formSelector == ".popup__formEP") {
        this._attendSubmitEP(evt);
      }
      if (this._formSelector == ".popup__formNP") {
        this._attendSubmitNP(evt);
      }
    });
    this._botonCerrar.addEventListener("click", () => {
      this._close();
    });

    this._primerCampoTexto.addEventListener(
      "keydown",
      (event) => {
        var keyValue = event.key;

        if (keyValue == "Escape") {
          this._close();

          if (imagenEditar) {
            imagenEditar.addEventListener("click", procesaClickEditarPerfil);
          }
        }
      },
      false
    );

    this._fondo.addEventListener("click", (evt) => {
      const elemento = evt.target.classList[0];
      if (elemento === "modal-form") {
        this._close();
      }
    });
    const imagenCerrar = document.querySelector(".popup__cerrar");
    imagenCerrar.addEventListener("click", (evt) => {
      this._close();
    });
    // const imagenCerrarNP = document.querySelector(".popup__cerrarNP");
  }

  _getInputValuesEP() {
    this._nuevoNombre = this._inputNombre.value;
    this._nuevoAbout = this._inputAcerca.value;
  }
  _getInputValuesNP() {
    this._inputTitle = this._form.querySelector("#np-title");
    this._inputLink = this._form.querySelector("#np-image");
    this._nuevoTitulo = this._inputTitle.value;
    this._nuevoLink = this._inputLink.value;
  }
}

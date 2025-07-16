import { PopupWithForm } from "./PopupWithForm.js";

export class PopupFormEP extends PopupWithForm {
  constructor(params) {
    super(params);
    const contenedor = document.querySelector("#container-EP");
    this._botonCerrar = contenedor.querySelector(".popup__cerrarEP");
  }
  open(evt) {
    this._fondo = document.querySelector(this._fondoSelector);
    this._fondo.style.display = "flex";

    const nombre = document.querySelector(".profile__name");
    const profesion = document.querySelector(".profile__profession");

    this._form = document.querySelector(this._formSelector);

    this._getInputValues();
    this._textoNombre.value = nombre.textContent;
    this._textoAcerca.value = profesion.textContent;

    this._primerCampoTexto = this._form.querySelector("#nombre");
    this._setEventListeners();
    textoNombre.focus();
  }
  _getInputValues() {
    this._textoNombre = this._form.querySelector("#nombre");
    this._textoAcerca = this._form.querySelector("#acerca");
  }
  _resetForm() {
    this._textoNombre = "";
    this.textoAcerca = "";
  }
  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const nombre = this._form.querySelector("#nombre");
      const profesion = this._form.querySelector("#acerca");
      const nombrePerfil = document.querySelector(".profile__name");
      const profesionPerfil = document.querySelector(".profile__profession");

      nombrePerfil.textContent = nombre.value;
      profesionPerfil.textContent = profesion.value;

      this._fondo.style.display = "none";

      //   document.body.classList.remove("modal-open");
    });
    this._botonCerrar.addEventListener("click", () => {
      this._resetForm();
    });
  }
}

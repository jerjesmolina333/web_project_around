import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

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

    this._inputNombre = this._form.querySelector("#nombre");
    this._inputAcerca = this._form.querySelector("#acerca");

    this._inputNombre.value = nombre.textContent;
    this._inputAcerca.value = profesion.textContent;

    this._primerCampoTexto = this._form.querySelector("#nombre");
    this._setEventListeners();
    this._primerCampoTexto.focus();
  }
  _getInputValues() {
    this._nuevoNombre = this._inputNombre.value;
    this._nuevoAbout = this._inputAcerca.value;
  }
  _resetForm() {
    this._inputNombre.textContent = "";
    this.textoAcerca.textContent = "";
  }
  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const nombre = this._form.querySelector("#nombre");
      const profesion = this._form.querySelector("#acerca");
      const nombrePerfil = document.querySelector(".profile__name");
      const profesionPerfil = document.querySelector(".profile__profession");

      this._getInputValues();

      const params = {
        userName: this._inputNombre.value,
        userAbout: this._inputAcerca.value,
      };

      const userInfo = new UserInfo(params);
      userInfo.setUserInfo();

      nombrePerfil.textContent = nombre.value;
      profesionPerfil.textContent = profesion.value;

      this._fondo.style.display = "none";
    });
    this._botonCerrar.addEventListener("click", () => {
      this._resetForm();
    });
  }
}

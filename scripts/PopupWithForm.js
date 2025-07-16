import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(params) {
    super(params.popupSelector);
    this._fondoSelector = params.fondoSelector;
    this._containerSelector = params.containerSelector;
    this._formSelector = params.formSelector;
    const form = document.querySelector(this._formSelector);
    this._primerCampoTexto = form.querySelector(params.primerCampoTexto);
  }

  open(evt) {
    this._fondo = document.querySelector(this._fondoSelector);
    this._fondo.style.display = "flex";
  }
  _close() {
    this._fondo.style.display = "none";
  }
  _setEventListeners() {
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
  }
}

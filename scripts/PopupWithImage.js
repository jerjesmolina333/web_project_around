import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(params) {
    super(params.cardSelector);
    debugger;
    this._imageLink = params.imageLnk;
  }
  open(evt) {
    debugger;
    const posYClick = evt.clientY - 100 + "px";
    this._popup = document.querySelector("#modalOverlay");
    this._popup.classList.add("visible");
    this._imagenContainer = modalOverlay.querySelector(".imagen__container");
    this._imagenContainer.querySelector(".imagen__pic").src = this._imageLink;
    this._imagenContainer.style.top = posYClick;
    this._imagenContainer.style.left = "1px";
    this._popupClose = this._imagenContainer.querySelector(".popup__cerrarIMG");
    this._imagenContainer.classList.add("visible");
    this._removed = false;

    this.setEventListeners();
  }
}

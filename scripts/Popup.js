export default class Popup {
  constructor({ popupSelector, imageLnk }) {
    this._popupSelector = popupSelector;
    this._imageLink = imageLnk;
  }
  open(evt) {
    const posYClick = evt.clientY - 100 + "px";
    this._popup = document.querySelector("#modalOverlay");
    this._imagenContainer = modalOverlay.querySelector(".imagen__container");
    this._imagenContainer.querySelector(".imagen__pic").src = this._imageLink;
    this._imagenContainer.style.top = posYClick;
    this._imagenContainer.style.left = "1px";
    this._popupClose = this._imagenContainer.querySelector(".popup__cerrarIMG");
    modalOverlay.classList.add("visible");
    this._removed = false;
    this.setEventListeners();
  }
  close(evt) {
    if (!this._removed) {
      const elem = evt.target;
      this._imagenContainer.querySelector(".imagen__pic").src = "";
      this._popup.classList.remove("visible");
      this._removed = true;
      this.setEventListeners();
    }
  }
  setEventListeners() {
    this._popupClose.addEventListener("click", (evt) => {
      this.close(evt);
    });
    this._popup.addEventListener("click", (evt) => {
      this.close(evt);
    });
  }
}

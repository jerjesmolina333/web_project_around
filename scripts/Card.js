import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(data, cardSelector) {
    this._imageLink = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._elementTrashed = false;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element__container")
      .cloneNode(true);

    return cardElement;
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__pic")
      .addEventListener("click", (evt) => {
        if (!this._elementTrashed) {
          this._handleOpenPopup(evt);
        } else {
          this._elementTrashed = false;
        }
      });

    this._element
      .querySelector(".element__trash")
      .addEventListener("click", (evt) => {
        this._handleRemoveElement(evt);
      });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__pic").src = this._imageLink;
    this._element.querySelector(".element__name").textContent = this._name;
    this._element.querySelector(".element__pic").alt = this._name;
    this._setEventListeners();
    this._elementTrashed = false;
    return this._element;
  }
  _handleOpenPopup(evt) {
    const popup = new PopupWithImage({
      cardSelector: "#modalOverlay",
      imageLnk: this._imageLink,
    });

    popup.open(evt);
    // const posYClick = "" + (evt.clientY + 200) + "px";
    // const modalDisplay = document.querySelector(".imagen__display");
    // modalDisplay.style.display = "flex";
    // document.body.classList.add("modal-open");

    // const imagenTemplate = document.querySelector("#imagen").content;
    // const imagenContainer = imagenTemplate
    //   .querySelector(".imagen__container")
    //   .cloneNode(true);

    // imagenContainer.querySelector(".imagen__pic").src = this._imageLink;
    // imagenContainer.style.top = posYClick;
    // imagenContainer.style.left = "100px";
    // modalDisplay.append(imagenContainer);

    // imagenContainer.addEventListener("click", (evt) => {
    //   this._handleClosePopup(evt);
    // });
  }
  _handleClosePopup(evt) {
    const elem = evt.target;
    const padre1 = elem.parentElement;
    const padre2 = padre1.parentElement;
    padre1.remove();
    padre2.style.display = "none";
  }
  _handleRemoveElement(evt) {
    const element = evt.target;
    const padre1 = element.parentElement;
    padre1.remove();
    this._elementTrashed = true;
  }
}

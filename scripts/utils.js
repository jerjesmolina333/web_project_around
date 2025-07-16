import { PopupFormEP } from "./PopupFormEP.js";
import { PopupFormNP } from "./PopupFormNP.js";

function attendSubmitProfile(evt) {
  evt.preventDefault();
  const nombre = contEP.querySelector("#nombre");
  const profesion = formaEdicion.querySelector("#acerca");
  const nombrePerfil = document.querySelector(".profile__name");
  const profesionPerfil = document.querySelector(".profile__profession");

  nombrePerfil.textContent = nombre.value;
  profesionPerfil.textContent = profesion.value;

  contEP.style.display = "none";
  document.body.classList.remove("modal-open");
}

export function procesaClickEditarPerfil(contEP, evt) {
  const formaEP = new PopupFormEP({
    fondoSelector: "#modal-formEP",
    containerSelector: ".popup__container",
    formSelector: ".popup__formEP",
    primerCampoTexto: "#nombre",
  });

  formaEP.open(evt);
}

export function procesaClickNuevoLugar(evt) {
  const formaEP = new PopupFormNP({
    fondoSelector: "#modal-formNP",
    containerSelector: ".popup__container",
    formSelector: ".popup__formNP",
    primerCampoTexto: "#np-title",
  });
  formaEP.open(evt);
}

export function procesaMouseenterEditar(imagenEditar) {
  const boton = document.querySelector(".profile__boton-edit");
  imagenEditar.src = "./images/EditButton2.png";
}

export function procesaMouseEnterBotPlus(botonPlus, imagenBotonPlus) {
  botonPlus.classList.add("profile__boton-plus_solid");
  imagenBotonPlus.src = "./images/AddButton2.png";
}

export function procesaMouseleaveBotPlus(botonPlus, imagenBotonPlus) {
  botonPlus.classList.remove("profile__boton-plus_solid");
  botonPlus.classList.add("profile__plus-container");
  imagenBotonPlus.src = "./images/AddButton.png";
}
export function agregaPropsImg(evt, img, imagenDesplegada) {
  img.addEventListener("click", function (evt) {
    const posXClick = "" + evt.clientX + "px";
    const posYClick = "" + (evt.clientY + 100) + "px";

    if (!imagenDesplegada) {
      const url = img.src;

      const modalDisplay = document.querySelector(".imagen__display");
      modalDisplay.style.display = "flex";
      document.body.classList.add("modal-open");

      const imagenTemplate = document.querySelector("#imagen").content;
      const imagenContainer = imagenTemplate
        .querySelector(".imagen__container")
        .cloneNode(true);

      imagenContainer.querySelector(".imagen__pic").src = url;
      imagenContainer.style.top = posYClick;
      imagenContainer.style.left = "250px";

      modalDisplay.append(imagenContainer);

      imagenDesplegada = true;

      imagenContainer
        .querySelector(".popup__cerrarIMG")
        .addEventListener("click", function (evt) {
          const elem = evt.target;
          const padre1 = elem.parentElement;
          const padre2 = padre1.parentElement;
          padre1.remove();
          padre2.style.display = "none";
          imagenDesplegada = false;
          return;
        });

      const fondoPage = document.querySelector(".popup");
      fondoPage.addEventListener("click", (evt) => {
        const elemento = evt.target.classList[0];
        console.log("elemento: " + elemento);
        if (elemento === "popup") {
          const elem = evt.target;
          const padre1 = elem.parentElement;
          const imagenContainer = document.querySelector(".imagen__container");
          imagenContainer.remove();
          padre1.style.display = "none";
          imagenDesplegada = false;
          return;
        }
      });
    }
  });
}

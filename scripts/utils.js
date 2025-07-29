import { PopupWithForm } from "./PopupWithForm.js";
import { paramsValidationEP, paramsValidationNP } from "../utils/constants.js";
import { FormValidator } from "./FormValidator.js";

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

export function procesaClickEditarPerfil2(evt) {
  const marcadoFormEP = `
   <img
          src="./images/BotonCerrar.png"
          class="popup__cerrarEP"
          alt="boton para cerrar la ventana emergente"
        />

        <form class="popup__formEP" id="editar-perfil" method="post">
          <h2 class="popup__heading">Editar perfil</h2>
          <fieldset class="form__set">
            <input
              type="text"
              class="popup__input"
              id="nombre"
              placeholder="Nombre"
              minlength="2"
              maxlength="40"
              required
            />
            <span class="popup__input_type_error nombre-error"></span>
            <input
              type="text"
              class="popup__input"
              id="acerca"
              placeholder="Acerca de mí"
              minlength="2"
              maxlength="200"
              required
            />
            <span class="popup__input_type_error acerca-error"></span>
            <button type="submit" class="popup__button form__submit_inactive">
              Guardar
            </button>
          </fieldset>
        </form>
`;
  const formaEP2 = new PopupWithForm(
    {
      popupSelector: "#modal-form",
      fondoSelector: "#modal-form",
      templateSelector: "#formEP",
      containerSelector: "#container-EP",
      formSelector: ".popup__formEP",
      primerCampoTexto: "#nombre",
    },
    marcadoFormEP
  );
  formaEP2.open(evt);
  formaEP2.setTextEP();
  const validatorEP = new FormValidator(paramsValidationEP, ".popup__input");
  validatorEP.enableValidation();
}

export function procesaClickNewPlace(evt) {
  const marcadoFormNP = `
   <img
          src="./images/BotonCerrar.png"
          class="popup__cerrar"
          alt="boton para cerrar la ventana emergente"
        />

        <form class="popup__formNP" id="nuevo-lugar" method="post">
          <h2 class="popup__heading">Nuevo Lugar</h2>
          <fieldset class="form__set">
            <input
              type="text"
              class="popup__input"
              id="np-title"
              placeholder="Título"
              minlength="2"
              maxlength="30"
              required
            />
            <span class="popup__input_type_error np-title-error"></span>
            <input
              type="url"
              class="popup__input"
              id="np-image"
              placeholder="Enlace a la imagen"
              required
            />
            <span class="popup__input_type_error np-image-error"></span>
            <button type="submit" class="popup__button form__submit_inactive">
              Crear
            </button>
          </fieldset>
        </form>
`;

  const formaNP = new PopupWithForm(
    {
      popupSelector: "#modal-form",
      fondoSelector: "#modal-form",
      templateSelector: "#formNP",
      containerSelector: "#container-NP",
      formSelector: ".popup__formNP",
      primerCampoTexto: "#np-title",
    },
    marcadoFormNP
  );
  formaNP.open(evt);
  const validatorNP = new FormValidator(paramsValidationNP, ".popup__input");
  validatorNP.enableValidation();
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

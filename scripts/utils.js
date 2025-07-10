export function procesaClickNuevoLugar(formaNewPlace) {
  formaNewPlace.style.display = "flex";
  document.body.classList.add("modal-open");

  // Popup para añadir Nuevo Lugar:
  const contNP = document.querySelector("#container-NP");
  const primerCampoTexto = formaNewPlace.querySelector("#np__title");
  primerCampoTexto.focus();
  contNP.addEventListener(
    "keydown",
    (event) => {
      var keyValue = event.key;

      if (keyValue == "Escape") {
        formaNewPlace.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    },
    false
  );
  const fondoNegro = document.querySelector(".page");
  fondoNegro.addEventListener("click", (evt) => {
    const elemento = evt.target.classList[0];
    // console.log(elemento);
    if (elemento === "popup") {
      formaNewPlace.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
}

export function procesaClickEditarPerfil(contEP) {
  const nombre = document.querySelector(".profile__name");
  const profesion = document.querySelector(".profile__profession");
  const textoNombre = document.querySelector("#nombre");
  const textoAcerca = document.querySelector("#acerca");

  textoNombre.value = nombre.textContent;
  textoAcerca.value = profesion.textContent;

  contEP.style.display = "flex";
  document.body.classList.add("modal-open");

  const primerCampoTexto = contEP.querySelector("#nombre");
  primerCampoTexto.focus();
  contEP.addEventListener(
    "keydown",
    (event) => {
      var keyValue = event.key;

      if (keyValue == "Escape") {
        contEP.style.display = "none";
        document.body.classList.remove("modal-open");

        if (imagenEditar) {
          imagenEditar.addEventListener("click", procesaClickEditarPerfil);
        }
      }
    },
    false
  );
  const fondoNegro = document.querySelector(".page");
  fondoNegro.addEventListener("click", (evt) => {
    const elemento = evt.target.classList[0];
    // console.log(elemento);
    if (elemento === "popup") {
      contEP.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
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

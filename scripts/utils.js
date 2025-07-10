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

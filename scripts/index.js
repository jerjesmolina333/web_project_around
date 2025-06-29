// ===========================
// ===========================
// ===========================
// Carga inicial del documento
document.addEventListener("DOMContentLoaded", function () {
  // const profesion = document.querySelector(".profile__info__profession");

  // const popupImagen = document.querySelector(".popup-imagen");
  const contEP = document.querySelector(".popup-edit-profile");
  const formaNewPlace = document.querySelector(".popup-new-place");
  const formaEdicion = document.querySelector(".popup-edit-profile");

  const imagenCerrarEP = document.querySelector(".popup__cerrarEP");
  const imagenCerrarNP = document.querySelector(".popup__cerrarNP");

  const imagenBotonPlus = document.querySelector(".profile__plus");
  const botonPlus = document.querySelector(".profile__boton-plus");
  const imagenEditar = document.querySelector(".profile__edit-image");

  const editButton = document.querySelector(".profile__boton-edit");
  let imagenDesplegada = false;

  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
  ];
  function agregaPropsImg(img) {
    img.addEventListener("click", function (evt) {
      const posXClick = "" + evt.clientX + "px";
      const posYClick = "" + evt.clientY + "px";

      if (!imagenDesplegada) {
        const url = img.src;
        // debugger;
        const imagenDespl = document.querySelector(".imagen__display");
        const imagenTemplate = document.querySelector("#imagen").content;
        const imagenElement = imagenTemplate
          .querySelector(".imagen__container")
          .cloneNode(true);

        imagenDespl.classList.add("popup_opened");
        imagenElement.querySelector(".imagen__pic").src = url;

        imagenElement
          .querySelector(".popup__cerrarIMG")
          .addEventListener("click", function () {
            // debugger;
            const thisImagenDespl = document.querySelector(".imagen__display");
            const padre1 = this.parentElement;
            const padre2 = padre1.parentElement;
            const padre3 = padre2.parentElement;

            padre1.remove();
            padre2.remove();
            // padre3.remove();
            thisImagenDespl.classList.remove("popup_opened");
            imagenDesplegada = false;
            return;
          });

        imagenDespl.append(imagenElement);
        // debugger;
        imagenElement.style.top = posYClick;
        imagenElement.style.left = posXClick;
        imagenDesplegada = true;
        imagenDespl.classList.add("popup_opened");
      }
    });
  }

  function createCard(card) {
    const elementTemplate = document.querySelector("#element").content;
    const cardElement = elementTemplate
      .querySelector(".element__container")
      .cloneNode(true);

    const imagen = cardElement.querySelector(".element__pic");
    cardElement.querySelector(".element__name").textContent = card.name;
    cardElement.querySelector(".element__pic").src = card.link;
    cardElement.querySelector(".element__pic").alt = card.name;

    agregaPropsImg(imagen);
    imagenDesplegada = false;

    cardElement
      .querySelector(".element__trash")
      .addEventListener("click", function () {
        debugger;
        const padre1 = this.parentElement;
        const padre2 = padre1.parentElement;

        padre1.remove();
      });

    return cardElement;
  }

  function cargaImagenesInic(initialCards) {
    const cardsContainer = document.querySelector(".elements");
    initialCards.forEach((card) => {
      let cardElement = createCard(card);
      cardsContainer.append(cardElement);
    });
  }

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

  function procesaClickEditarPerfil() {
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
          debugger;
          contEP.style.display = "none";
          document.body.classList.remove("modal-open");
          // contEP.style.display = "none";
          // contEP.classList.remove("modal-open");
          if (imagenEditar) {
            imagenEditar.addEventListener("click", procesaClickEditarPerfil);
          }
        }
      },
      false
    );
  }

  function procesaClickNuevoLugar() {
    formaNewPlace.style.display = "flex";
    document.body.classList.add("modal-open");

    // Popup de Nuevo Lugar:
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
  }

  function procesaMouseEnterBotPlus() {
    botonPlus.classList.add("profile__boton-plus_solid");
    imagenBotonPlus.src = "./images/AddButton2.png";
  }

  function procesaMouseleaveBotPlus() {
    botonPlus.classList.remove("profile__boton-plus_solid");
    botonPlus.classList.add("profile__plus-container");
    imagenBotonPlus.src = "./images/AddButton.png";
  }

  function procesaMouseenterEditar() {
    // imagenEditar.style.cursor = "pointer";
    const boton = document.querySelector(".profile__boton-edit");
    imagenEditar.src = "./images/EditButton2.png";
  }

  function procesaSubmitNewPlace() {
    const cardsContainer = document.querySelector(".elements");
    evt.preventDefault();
    let nombre = formaNewPlace.querySelector("#np__title").value;
    let thisLink = formaNewPlace.querySelector("#np-image").value;
    let thisCard = { name: nombre, link: thisLink };
    let cardElement = createCard(thisCard);

    cardsContainer.prepend(cardElement);
    // formaNewPlace.classList.remove("popup_opened");
    // formaNewPlace.classList.add("popup_hidden");
    formaNewPlace.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  ////////////////////////////////
  //// CÓDIGO:

  cargaImagenesInic(initialCards);
  if (imagenEditar && botonPlus && imagenCerrarNP && imagenCerrarNP) {
    imagenEditar.addEventListener("click", procesaClickEditarPerfil);
    imagenEditar.addEventListener("mouseenter", procesaMouseenterEditar);

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = "./images/EditButton.png";
    });
    botonPlus.addEventListener("click", procesaClickNuevoLugar);
    botonPlus.addEventListener("mouseenter", procesaMouseEnterBotPlus);
    botonPlus.addEventListener("mouseleave", procesaMouseleaveBotPlus);

    imagenCerrarNP.addEventListener("mouseenter", function () {
      imagenCerrarNP.src = "./images/BotonCerrar2.png";
    });
    imagenCerrarNP.addEventListener("mouseleave", function () {
      imagenCerrarNP.src = "./images/BotonCerrar.png";
    });
    imagenCerrarEP.addEventListener("mouseenter", function () {
      imagenCerrarEP.src = "./images/BotonCerrar2.png";
    });
    imagenCerrarEP.addEventListener("mouseleave", function () {
      imagenCerrarEP.src = "./images/BotonCerrar.png";
    });
  }

  imagenCerrarNP.addEventListener("click", function () {
    formaNewPlace.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  imagenCerrarEP.addEventListener("click", function () {
    contEP.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  document.querySelectorAll(".element__like").forEach(function (img) {
    let liked = false;
    img.addEventListener("mouseenter", function () {
      if (!liked) img.src = "./images/LikeHover.png";
    });

    img.addEventListener("mouseleave", function () {
      if (liked) {
        img.src = "./images/Like2.png";
      } else {
        img.src = "./images/Like.png";
      }
    });

    img.addEventListener("click", function () {
      liked = !liked;
      if (liked) {
        img.src = "./images/Like2.png";
      } else {
        img.src = "./images/Like.png";
      }
    });
  });

  //Agregar el evento Submit a las ventanas emergentes:
  formaEdicion.addEventListener("submit", attendSubmitProfile);
  formaNewPlace.addEventListener("submit", procesaSubmitNewPlace);
});

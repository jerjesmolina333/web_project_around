// ===========================
// ===========================
// ===========================
// Carga inicial del documento
document.addEventListener("DOMContentLoaded", function () {
  const profesion = document.querySelector(".profile__info__profession");
  const formaEdicion = document.getElementById("editProfileModal");
  const formaNewPlace = document.querySelector(".popup-new-place");
  const imagenEditar = document.querySelector(".profile__edit-image");

  const imagenCerrarEP = document.querySelector(".popup__cerrarEP");
  const closeModalBtn = document.querySelector(".modal__close");
  const imagenCerrarNP = document.querySelector(".popup__cerrarNP");
  const imagenBotonPlus = document.querySelector(".profile__plus");
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
    img.addEventListener("click", function () {
      debugger;
      if (!imagenDesplegada) {
        const url = img.src;

        const imagenDespl = document.querySelector(".imagen__display");
        const imagenTemplate = document.querySelector("#imagen").content;
        const imagenElement = imagenTemplate
          .querySelector(".popup")
          .cloneNode(true);
        imagenElement.querySelector(".imagen__pic").src = url;
        imagenElement
          .querySelector(".popup__cerrarIMG")
          .addEventListener("click", function () {
            const padre1 = this.parentElement;
            const padre2 = padre1.parentElement;
            const padre3 = padre2.parentElement;
            const padre4 = padre3.parentElement;

            padre1.remove();
            padre2.remove();
            padre3.remove();
            imagenDesplegada = false;
            return;
          });
        imagenDespl.append(imagenElement);
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
        const padre1 = this.parentElement;
        const padre2 = padre1.parentElement;

        padre2.remove();
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

  function procesaClickEditarPerfil() {
    let nombre = document.querySelector(".profile__name");
    let profesion = document.querySelector(".profile__profession");
    let textoNombre = document.querySelector(".popup__name");
    textoNombre.value = nombre.textContent;

    let textoAcerca = document.querySelector(".popup__profession");
    textoAcerca.value = profesion.textContent;

    // Desplegar la ventana modal:
    editProfileModal.style.display = "flex";
    document.body.classList.add("modal-open");

    const contEP = document.querySelector(".popup-edit-profile");
    const primerCampoTexto = document.querySelector(".popup__name");
    primerCampoTexto.focus();
    contEP.addEventListener(
      "keydown",
      (event) => {
        var keyValue = event.key;

        if (keyValue == "Escape") {
          editProfileModal.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      },
      false
    );
  }

  function attendSubmitProfile(evt) {
    evt.preventDefault();
    let nombre = formaEdicion.querySelector(".popup__name");
    let profesión = formaEdicion.querySelector(".popup__profession");
    let nombrePerfil = document.querySelector(".profile__name");

    nombrePerfil.textContent = nombre.value;
    let profesionPerfil = document.querySelector(".profile__profession");
    profesionPerfil.textContent = profesión.value;

    formaEdicion.style.display = "none";
  }

  ////////////////////////////////
  //// CÓDIGO:
  cargaImagenesInic(initialCards);

  imagenBotonPlus.addEventListener("click", function () {
    formaNewPlace.classList.add("popup_opened");

    const contNP = document.querySelector(".popup-new-place");
    const primerCampoTexto = formaNewPlace.querySelector(".popup__name");
    primerCampoTexto.focus();
    contNP.addEventListener(
      "keydown",
      (event) => {
        var keyValue = event.key;

        if (keyValue == "Escape") {
          formaNewPlace.classList.remove("popup_opened");
          formaNewPlace.classList.add("popup_hidden");
        }
      },
      false
    );
  });

  imagenBotonPlus.addEventListener("mouseenter", function () {
    imagenBotonPlus.style.cursor = "pointer";
    const contenedorBoton = document.querySelector(".profile__plus-container");
    contenedorBoton.classList.add("profile__plus-container_solid");
    imagenBotonPlus.src = "./images/AddButton2.png";
  });

  imagenBotonPlus.addEventListener("mouseleave", function () {
    const contenedorBoton = document.querySelector(".profile__plus-container");
    contenedorBoton.classList.remove("profile__plus-container_solid");
    contenedorBoton.classList.add("profile__plus-container");
    imagenBotonPlus.src = "./images/AddButton.png";
  });

  if (imagenEditar) {
    const originalEditSrc = imagenEditar.src;
    imagenEditar.addEventListener("mouseenter", function () {
      imagenEditar.src = "./images/EditButton2.png";
    });

    imagenEditar.addEventListener("mouseleave", function () {
      imagenEditar.src = originalEditSrc;
    });
  }

  if (editButton) {
    editButton.addEventListener("click", procesaClickEditarPerfil);
  }

  closeModalBtn.addEventListener("click", function () {
    editProfileModal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  imagenCerrarNP.addEventListener("click", function () {
    formaNewPlace.classList.remove("popup_opened");
    formaNewPlace.classList.add("popup_hidden");
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

  //Agregar el evento Submit a la ventana emergente
  // de edición del perfil:

  formaEdicion.addEventListener("submit", attendSubmitProfile);

  formaNewPlace.addEventListener("submit", function (evt) {
    const cardsContainer = document.querySelector(".elements");
    evt.preventDefault();
    let nombre = formaNewPlace.querySelector("#np__title").value;
    let thisLink = formaNewPlace.querySelector("#np-image").value;
    let thisCard = { name: nombre, link: thisLink };
    let cardElement = createCard(thisCard);

    cardsContainer.prepend(cardElement);
    formaNewPlace.classList.remove("popup_opened");
    formaNewPlace.classList.add("popup_hidden");
  });
});

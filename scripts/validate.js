const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputTypeErrorParam
) => {
  //   debugger;
  const elemento = `$inputElement.id`;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //   inputElement.classList.add("form__input_type_error");
  inputElement.classList.add(inputTypeErrorParam);
  errorElement.textContent = errorMessage;
  //   errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement, inputTypeErrorParam) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputTypeErrorParam);
  //   errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputElement.inputErrorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputElement.inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, botInactivo) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    // buttonElement.classList.add("form__submit_inactive");
    buttonElement.classList.add(botInactivo);
  } else {
    // buttonElement.classList.remove("form__submit_inactive");
    buttonElement.classList.remove(botInactivo);
  }
};

const setEventListeners = (
  formElement,
  inputParam,
  botonSubmitParam,
  botonDeshabParam
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputParam));
  //   const buttonElement = formElement.querySelector(".form__submit");
  const buttonElement = formElement.querySelector(botonSubmitParam);
  toggleButtonState(inputList, buttonElement, botonDeshabParam);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      //   debugger;
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, botonDeshabParam);
    });
  });
};

const enableValidation = (paramsVal) => {
  const formList = Array.from(
    document.querySelectorAll(paramsVal.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));

    fieldsetList.forEach((fieldset) => {
      setEventListeners(
        fieldset,
        paramsVal.inputSelector,
        paramsVal.submitButtonSelector,
        paramsVal.inactiveButtonClass
      );
    });
  });
};

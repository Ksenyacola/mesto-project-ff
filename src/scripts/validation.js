import { validationConfig } from "./index.js";

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};


const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(validationConfig.errorClass);
};


const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    if (inputElement.validity.patternMismatch) {
      const errorMessage = inputElement.getAttribute("data-error-message");
      showInputError(formElement, inputElement, errorMessage, validationConfig);
    } else {
      const errorMessage = inputElement.validationMessage;
      showInputError(formElement, inputElement, errorMessage, validationConfig);
    }
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }

  const form = inputElement.closest(validationConfig.formSelector);
  const inputList = Array.from(
    form.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = form.querySelector(
    validationConfig.submitButtonSelector
  );
  toggleButtonState(validationConfig, inputList, buttonElement);
};

const hasInvalidInput = (inputList) =>
  inputList.some((inputElement) => !inputElement.validity.valid);

const toggleButtonState = (validationConfig, inputList, buttonElement) => {
  const isInvalid = hasInvalidInput(inputList);
  buttonElement.disabled = isInvalid;
  buttonElement.classList.toggle(
    validationConfig.inactiveButtonClass,
    isInvalid
  );
};

const setEventListeners = (validationConfig, formElement, buttonElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  toggleButtonState(validationConfig, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, validationConfig);
    });
  });
};

const clearValidation = (validationConfig, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  buttonElement.disabled = true;
  buttonElement.classList.add(validationConfig.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      setEventListeners(
        validationConfig,
        formElement,
        formElement.querySelector(validationConfig.submitButtonSelector)
      );
    });

    setEventListeners(
      validationConfig,
      formElement,
      formElement.querySelector(validationConfig.submitButtonSelector)
    );
  });
};

export { enableValidation, clearValidation };
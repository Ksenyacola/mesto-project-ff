const openPopup = (popup) => {
  const form = popup.querySelector(".popup__form");

  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupOnEsc);
};



const closePopup = (popup) => {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupOnEsc);
};

const createClosePopupHandler = (popup) => {
  const handler = (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  };
  return handler;
};

const closePopupOnEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
};

export { openPopup, closePopup, createClosePopupHandler };

import "../styles/index.css";
import {
  createCard,
  handleCardDeletion,
  handleCardLikeToggle,
} from "./card.js";
import {
  openPopup,
  closePopup,
  createClosePopupHandler,
} from "./modal.js";
import {
  enableValidation,
  clearValidation
} from "./validation.js";
import {
  fetchInitialCards,
  addNewCard,
  removeCardFromServer,
  fetchUserProfile,
  updateUserProfile,
  updateUserAvatar,
} from "./api.js";


const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};


const userName = document.querySelector(".profile__title");
const userAbout = document.querySelector(".profile__description");
const userAvatar = document.querySelector(".profile__image");

const editProfilePopup = document.querySelector(".popup_type_edit");
const popupInputTypeName = editProfilePopup.querySelector(
  ".popup__input_type_name"
);
const popupInputTypeDescription = editProfilePopup.querySelector(
  ".popup__input_type_description"
);
const updateAvatarPopup = document.querySelector(".popup_type_edit-avatar");
const avatarUrlInput = document.querySelector(".popup__input_type_avatar-url");

const popupElements = document.querySelectorAll(".popup");
const profileForm = editProfilePopup.querySelector(".popup__form");

const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");

const cardsContainer = document.querySelector(".places__list");

const addCardPopup = document.querySelector(".popup_type_new-card");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = document.querySelector(".popup__input_type_url");
const newPlaceFormPopup = document.querySelector("form[name='new-place']");
let myID = null;


Promise.all([fetchInitialCards(), fetchUserProfile()])
  .then((results) => {
    myID = results[1]._id;

    userName.textContent = results[1].name;
    userAbout.textContent = results[1].about;
    userAvatar.style.backgroundImage = `url('${results[1].avatar}')`;

    results[0].forEach((card) => {

      const newCard = createCard(
        card,
        handleCardDeletion,
        handleCardLikeToggle,
        openImagePopup,
        myID
      );
      cardsContainer.append(newCard);
    });
  })
  .catch((err) => {
    console.error(err);
  });




const toggleSavingIndicator = (isLoading, button) => {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = button.dataset.buttonText;
  }
};

const openProfileEditPopup = () => {
  openPopup(editProfilePopup);

  popupInputTypeName.value = userName.textContent;
  popupInputTypeDescription.value = userAbout.textContent;

  clearValidation(profileForm, validationConfig);
};

const handleProfileChangeSubmit = (evt) => {
  evt.preventDefault();

  toggleSavingIndicator(true, evt.submitter);

  const newName = popupInputTypeName.value;
  const newDescription = popupInputTypeDescription.value;

  updateUserProfile(newName, newDescription)
    .then((data) => {
      userName.textContent = data.name;
      userAbout.textContent = data.about;
      closePopup(editProfilePopup);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      toggleSavingIndicator(false, evt.submitter);
    });
};

popupElements.forEach((popup) => {
  const handler = createClosePopupHandler(popup);
  popup.addEventListener("click", handler);
});

const handleNewCardAdd = (evt) => {
  evt.preventDefault();

  toggleSavingIndicator(true, evt.submitter);

  const newCardData = {
    name: cardNameInput.value,
    link: cardUrlInput.value,
  };

  addNewCard(newCardData.name, newCardData.link)
    .then((data) => {
      const newCard = createCard(
        data,
        handleCardDeletion,
        handleCardLikeToggle,
        openImagePopup,
        myID
      );
      cardsContainer.prepend(newCard);
      closePopup(addCardPopup);
      newPlaceFormPopup.reset();

      const submitButton = newPlaceFormPopup.querySelector('.popup__button');
      submitButton.disabled = true;
      submitButton.classList.add('popup__button_disabled');
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      toggleSavingIndicator(false, evt.submitter);
    });
};


function updateSubmitButtonStateAfterReset(form) {
  const submitButton = form.querySelector('.popup__button');
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const isFormInvalid = inputList.some(input => !input.validity.valid);
  submitButton.disabled = isFormInvalid;
  submitButton.classList.toggle('popup__button_disabled', isFormInvalid);
}

const openImagePopup = (link, name) => {
  const popupImage = document.querySelector(".popup_type_image");
  const image = popupImage.querySelector(".popup__image");
  const caption = popupImage.querySelector(".popup__caption");

  image.src = link;
  image.alt = name;
  caption.textContent = name;

  openPopup(popupImage);
};

const handleAvatarSubmit = (evt) => {
  evt.preventDefault();
  const avatarLink = avatarUrlInput.value;

  toggleSavingIndicator(true, evt.submitter);

  updateUserAvatar(avatarLink)
    .then((data) => {
      userAvatar.style.backgroundImage = `url('${data.avatar}')`;
      closePopup(updateAvatarPopup);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      toggleSavingIndicator(false, evt.submitter);
    });
};

const openAvatarPopup = () => {
  openPopup(updateAvatarPopup);
};

userAvatar.addEventListener("click", openAvatarPopup);
profileEditButton.addEventListener("click", openProfileEditPopup);
profileForm.addEventListener("submit", handleProfileChangeSubmit);
profileAddButton.addEventListener("click", () => openPopup(addCardPopup));
newPlaceFormPopup.addEventListener("submit", handleNewCardAdd);
updateAvatarPopup.addEventListener("submit", handleAvatarSubmit);

enableValidation(validationConfig);


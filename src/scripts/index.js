import "../styles/index.css";
import { createCard, handleLikeClick } from "./card.js";
import { openPopup, closePopup, closePopupOverlay, openImagePopup } from "./modal.js";
import { initialCards } from './cards.js';

const placesList = document.querySelector('.places__list');

const profileEditPopup = document.querySelector(".popup_type_edit");
const profileEditForm = profileEditPopup.querySelector(".popup__form");
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileJobInput = document.querySelector(".popup__input_type_description");
const profileNameText = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = addCardPopup.querySelector('.popup__form');
const cityNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const newCardImageUrlInput = addCardForm.querySelector(".popup__input_type_url");

const imagePreviewPopup = document.querySelector(".popup_type_image");
const addCardButton = document.querySelector(".profile__add-button");
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfilePopupButton = profileEditPopup.querySelector(".popup__close");
const imagePopupImg = imagePreviewPopup.querySelector(".popup__image");
const imagePopupTitle = imagePreviewPopup.querySelector(".popup__caption");

function renderCards() {
  initialCards.forEach(card => {
    const cardElement = createCard(card, handleLikeClick, openImagePopup);
    placesList.append(cardElement);
  });
}

function addCard(event) {
  event.preventDefault();
  const cardData = { name: cityNameInput.value, link: newCardImageUrlInput.value };
  const card = createCard(cardData, handleLikeClick, openImagePopup);
  placesList.prepend(card);
  closePopup(addCardPopup);
  addCardForm.reset();
}

renderCards();


addCardButton.addEventListener("click", () => openPopup(addCardPopup));
editProfileButton.addEventListener("click", () => {
  profileNameInput.value = profileNameText.textContent;
  profileJobInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});
closeEditProfilePopupButton.addEventListener("click", () => closePopup(profileEditPopup));
profileEditForm.addEventListener("submit", profileEditFormSubmit);
addCardForm.addEventListener("submit", addCard);

function profileEditFormSubmit(event) {
  event.preventDefault();
  profileNameText.textContent = profileNameInput.value;
  profileDescription.textContent = profileJobInput.value;
  closePopup(profileEditPopup);
}

closePopupOverlay();
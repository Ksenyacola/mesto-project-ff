import avatar from '../images/avatar.jpg';
import logo from '../images/logo.svg';

document.addEventListener('DOMContentLoaded', function() {
  const profileImageDiv = document.querySelector('.profile__image');
  const logoImage = document.querySelector('.logo.header__logo');

  if (profileImageDiv) {
    profileImageDiv.style.backgroundImage = `url('${avatar}')`;
  }

  if (logoImage) {
    logoImage.src = logo;
  }
});


import "../styles/index.css";
import { createCard, deleteCard } from "./card.js";
import { openPopup, closePopup, closePopupOverlay } from "./modal.js";
import { initialCards } from './cards.js';

const placesList = document.querySelector('.places__list');

const profileEditPopup = document.querySelector(".popup_type_edit");
const profileEditForm = profileEditPopup.querySelector(".popup__form");
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileJobInput = document.querySelector(".popup__input_type_description");
const profileNameText = document.querySelector(".profile__title");
const profileDecrtiption = document.querySelector(".profile__description");

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
  initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, openImagePopup);
    placesList.append(cardElement);
  });
}

function addCard(event) {
  event.preventDefault();
  const cardData = {
    name: cityNameInput.value,
    link: newCardImageUrlInput.value
  };
  const card = createCard(cardData, deleteCard, openImagePopup);
  placesList.prepend(card);
  closePopup(addCardPopup);
  addCardForm.reset();
}

function openImagePopup(cardData) {
  imagePopupImg.src = cardData.link;
  imagePopupImg.alt = `Изображение ${cardData.name}`;
  imagePopupTitle.textContent = cardData.name;
  openPopup(imagePreviewPopup);
}

renderCards();
addCardButton.addEventListener("click", () => openPopup(addCardPopup));
editProfileButton.addEventListener("click", () => {
  profileNameInput.value = profileNameText.textContent;
  profileJobInput.value = profileDecrtiption.textContent;
  openPopup(profileEditPopup);
});

profileEditForm.addEventListener("submit", profileEditFormSubmit);
addCardForm.addEventListener("submit", addCard);

closePopupOverlay();

function profileEditFormSubmit(event) {
  event.preventDefault();
  profileDecrtiption.textContent = profileJobInput.value;
  profileNameText.textContent = profileNameInput.value;
  closePopup(profileEditPopup);
}

const profileImageDiv = document.querySelector('.profile__image');
const logoImage = document.querySelector('.logo.header__logo');




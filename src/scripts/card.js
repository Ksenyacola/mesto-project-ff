import {
  removeCardFromServer,
  likeCardOnServer,
  unlikeCardOnServer,
} from "./api.js";
import { openImagePopup } from "./modal.js";

const cardTemplate = document.querySelector("#card-template");
const templateCard = cardTemplate.content.querySelector(".card");

const handleCardDeletion = (card, cardId) => {
  removeCardFromServer(cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
      console.error(err);
    });
};

const createCard = (
  item,
  handleCardDeletion,
  handleCardLikeToggle,
  openImagePopup,
  myID
) => {
  const newCard = templateCard.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");
  const deleteButton = newCard.querySelector(".card__delete-button");
  const likeButton = newCard.querySelector(".card__like-button");
  const cardLikes = newCard.querySelector(".card__like-number");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikes.textContent = item.likes.length;

  likeButton.addEventListener("click", () => {
    handleCardLikeToggle(likeButton, item._id, cardLikes, myID);
  });

  cardImage.addEventListener("click", () => {
    openImagePopup(item.link, item.name);
  });

  if (item.likes.some(({ _id }) => _id === myID)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  deleteButton.style.display = "none";

  if (item.owner._id === myID) {
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", () => {
      handleCardDeletion(newCard, item._id);
    });
  }
  return newCard;
};

const handleCardLikeToggle = (likeButton, cardId, cardLikes, myID) => {
  if (likeButton.classList.contains("card__like-button_is-active")) {
    unlikeCardOnServer(cardId)
      .then((data) => {
        likeButton.classList.remove("card__like-button_is-active");
        cardLikes.textContent = data.likes.length;
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    likeCardOnServer(cardId)
      .then((data) => {
        likeButton.classList.add("card__like-button_is-active");
        cardLikes.textContent = data.likes.length;
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export { createCard, handleCardDeletion, handleCardLikeToggle };

const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, handleLikeClick, openImagePopup) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener('click', () => openImagePopup(item));

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', handleLikeClick);

  const deleteButton = cardElement.querySelector('.card__delete-button');
  if (deleteButton) {
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
  }

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function handleLikeClick(event) {
  if (event.target.classList.contains('card__like-button')) {
    event.target.classList.toggle('card__like-button_is-active');
  }
}

export { createCard, handleLikeClick };

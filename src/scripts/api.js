const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
	headers: {
		authorization: '5b4085f4-3646-4f75-95ce-793493b89683',
		'Content-Type': 'application/json'
	}
}

  const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

const fetchInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers,
    }).then((res) => handleResponse(res));
  };

const addNewCard = (cardName, cardLink) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    }).then((res) => handleResponse(res));
  };

const removeCardFromServer = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => handleResponse(res));
  };

const fetchUserProfile = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then((res) => handleResponse(res));
  };

const updateUserProfile = (newNameProfile, newAboutProfile) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: newNameProfile,
        about: newAboutProfile,
      }),
    }).then((res) => handleResponse(res));
  };

const updateUserAvatar = (url) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => handleResponse(res));
  };

const likeCardOnServer = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then((res) => handleResponse(res));
  };

const unlikeCardOnServer = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => handleResponse(res));
  };

export {
    fetchInitialCards,
    addNewCard,
    removeCardFromServer,
    fetchUserProfile,
    updateUserProfile,
    updateUserAvatar,
    likeCardOnServer,
    unlikeCardOnServer
  };
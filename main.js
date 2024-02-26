/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleLikeClick: () => (/* binding */ handleLikeClick)\n/* harmony export */ });\nvar cardTemplate = document.querySelector('#card-template').content;\nfunction createCard(item, handleLikeClick, openImagePopup) {\n  var cardElement = cardTemplate.querySelector('.card').cloneNode(true);\n  cardElement.querySelector('.card__title').textContent = item.name;\n  var cardImage = cardElement.querySelector('.card__image');\n  cardImage.src = item.link;\n  cardImage.alt = item.name;\n  cardImage.addEventListener('click', function () {\n    return openImagePopup(item);\n  });\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', handleLikeClick);\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  if (deleteButton) {\n    deleteButton.addEventListener('click', function () {\n      return deleteCard(cardElement);\n    });\n  }\n  return cardElement;\n}\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\nfunction handleLikeClick(event) {\n  if (event.target.classList.contains('card__like-button')) {\n    event.target.classList.toggle('card__like-button_is-active');\n  }\n}\n\n\n//# sourceURL=webpack://yandex_prakticum/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://yandex_prakticum/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/scripts/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n\n\n\n\nvar placesList = document.querySelector('.places__list');\nvar profileEditPopup = document.querySelector(\".popup_type_edit\");\nvar profileEditForm = profileEditPopup.querySelector(\".popup__form\");\nvar profileNameInput = document.querySelector(\".popup__input_type_name\");\nvar profileJobInput = document.querySelector(\".popup__input_type_description\");\nvar profileNameText = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\nvar addCardPopup = document.querySelector('.popup_type_new-card');\nvar addCardForm = addCardPopup.querySelector('.popup__form');\nvar cityNameInput = addCardForm.querySelector(\".popup__input_type_card-name\");\nvar newCardImageUrlInput = addCardForm.querySelector(\".popup__input_type_url\");\nvar imagePreviewPopup = document.querySelector(\".popup_type_image\");\nvar addCardButton = document.querySelector(\".profile__add-button\");\nvar editProfileButton = document.querySelector(\".profile__edit-button\");\nvar closeEditProfilePopupButton = profileEditPopup.querySelector(\".popup__close\");\nvar imagePopupImg = imagePreviewPopup.querySelector(\".popup__image\");\nvar imagePopupTitle = imagePreviewPopup.querySelector(\".popup__caption\");\nfunction renderCards() {\n  _cards_js__WEBPACK_IMPORTED_MODULE_3__.initialCards.forEach(function (card) {\n    var cardElement = (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(card, _card_js__WEBPACK_IMPORTED_MODULE_1__.handleLikeClick, _modal_js__WEBPACK_IMPORTED_MODULE_2__.openImagePopup);\n    placesList.append(cardElement);\n  });\n}\nfunction addCard(event) {\n  event.preventDefault();\n  var cardData = {\n    name: cityNameInput.value,\n    link: newCardImageUrlInput.value\n  };\n  var card = (0,_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, _card_js__WEBPACK_IMPORTED_MODULE_1__.handleLikeClick, _modal_js__WEBPACK_IMPORTED_MODULE_2__.openImagePopup);\n  placesList.prepend(card);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(addCardPopup);\n  addCardForm.reset();\n}\nrenderCards();\naddCardButton.addEventListener(\"click\", function () {\n  return (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(addCardPopup);\n});\neditProfileButton.addEventListener(\"click\", function () {\n  profileNameInput.value = profileNameText.textContent;\n  profileJobInput.value = profileDescription.textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(profileEditPopup);\n});\ncloseEditProfilePopupButton.addEventListener(\"click\", function () {\n  return (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(profileEditPopup);\n});\nprofileEditForm.addEventListener(\"submit\", profileEditFormSubmit);\naddCardForm.addEventListener(\"submit\", addCard);\nfunction profileEditFormSubmit(event) {\n  event.preventDefault();\n  profileNameText.textContent = profileNameInput.value;\n  profileDescription.textContent = profileJobInput.value;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)(profileEditPopup);\n}\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopupOverlay)();\n\n//# sourceURL=webpack://yandex_prakticum/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   closePopupOverlay: () => (/* binding */ closePopupOverlay),\n/* harmony export */   openImagePopup: () => (/* binding */ openImagePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keydown\", closeEscPopup);\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keydown\", closeEscPopup);\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  return closePopupOverlay();\n});\nfunction closePopupOverlay() {\n  document.querySelectorAll(\".popup\").forEach(function (popupElement) {\n    popupElement.addEventListener(\"click\", function (event) {\n      if (event.target.classList.contains(\"popup\") || event.target.classList.contains(\"popup__close\")) {\n        closePopup(popupElement);\n      }\n    });\n  });\n}\nfunction closeEscPopup(event) {\n  if (event.key === \"Escape\") {\n    var openedPopup = document.querySelector(\".popup_is-opened\");\n    if (openedPopup) {\n      closePopup(openedPopup);\n    }\n  }\n}\nfunction openImagePopup(cardData) {\n  var imagePopup = document.querySelector('.popup_type_image');\n  var imagePopupTitle = imagePopup.querySelector('.popup__caption');\n  var imagePopupImg = imagePopup.querySelector('.popup__image');\n  imagePopupImg.src = cardData.link;\n  imagePopupImg.alt = \"\\u0418\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435 \".concat(cardData.name);\n  imagePopupTitle.textContent = cardData.name;\n  openPopup(imagePopup);\n}\n\n\n//# sourceURL=webpack://yandex_prakticum/./src/scripts/modal.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex_prakticum/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
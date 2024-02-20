function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeEscPopup);
}

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeEscPopup);
}

function closePopupOverlay() {
    document.querySelectorAll(".popup").forEach(popupElement => {
        popupElement.addEventListener("click", function(event) {
            if (event.target.classList.contains("popup") || event.target.classList.contains("popup__close")) {
                closePopup(popupElement);
            }
        });
    });
}

function closeEscPopup(event) {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}




export { openPopup, closePopup, closePopupOverlay };
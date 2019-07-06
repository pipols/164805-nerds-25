var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-feedback__close");
var overlay = document.querySelector(".modal-overlay");
var contactsLink = document.querySelector(".contacts__link");

contactsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-feedback--show");
  overlay.classList.add("modal-overlay--show");
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-feedback--show")) {
      evt.preventDefault();
      modal.classList.remove("modal-feedback--show");
      overlay.classList.remove("modal-overlay--show");
    }
  }
});

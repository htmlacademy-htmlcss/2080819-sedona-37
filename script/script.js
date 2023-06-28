const hotelSearch = document.querySelector(".hotel-search");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

hotelSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
});

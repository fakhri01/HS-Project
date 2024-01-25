document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".cards");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (item) {
        item.style.height = "100px";
      });
      this.style.height = "250px";
    });
  });
  
});

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
  const buttons = document.querySelectorAll(".btn");
  const programs = document.querySelectorAll(".program-content");
  
  programs[0].style.display = "flex"
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", filterPosts.bind(this, buttons[i]));
  }
  

  function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < programs.length; i++) {
      if (programs[i].classList.contains(item.attributes.id.value)) {
        programs[i].style.display = "flex";
      } else {
        programs[i].style.display = "none";
      }
    }
  }

  function changeActivePosition(activeItem) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("primary-btn");
    }
    activeItem.classList.add("primary-btn");
  }
});

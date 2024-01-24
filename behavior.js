document.addEventListener("DOMContentLoaded", function (event) {
  const thumbnailElement = document.getElementById("smart_thumbnail");
  let bool = false;

  thumbnailElement.addEventListener("click", function () {
    // write here
    if (!bool) {
      thumbnailElement.className = "small";
      bool = true;
    } else {
      thumbnailElement.className = "";
      bool = false;
    }
  });
});

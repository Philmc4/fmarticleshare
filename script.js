const shareButton = document.getElementById("share-icon");
const shareButtonMobile = document.getElementById("share-icon-mobile");
const shareContainer = document.getElementById("share-container");
const headingText = document.getElementById("heading-text");

shareButton.addEventListener("click", (e) => {
  shareContainer.classList.toggle("hidden");
});

shareButtonMobile.addEventListener("click", (e) => {
  shareContainer.classList.toggle("hidden");
});

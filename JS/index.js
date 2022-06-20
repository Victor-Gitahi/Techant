const navLinksContainer = document.getElementById("navLinksContainer");
const menuIcon = document.getElementById("menuIcon");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
  navLinksContainer.classList.add('show')
})

closeBtn.addEventListener("click", () => {
  navLinksContainer.classList.remove('show')
})
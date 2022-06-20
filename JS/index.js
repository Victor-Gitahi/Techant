const navLinksContainer = document.getElementById("navLinksContainer");
const menuIcon = document.getElementById("menuIcon");
const closeBtn = document.getElementById("closeBtn");
const professionItems = document.querySelectorAll('.profession-item');

menuIcon.addEventListener("click", () => {
  navLinksContainer.classList.add('show')
})

closeBtn.addEventListener("click", () => {
  navLinksContainer.classList.remove('show')
})


function activateProfessionItem(profession_item) {
  let item_classList = profession_item.classList;
  let activeClass = 'active';

  if (item_classList[1] === activeClass) {
    profession_item.classList.remove(activeClass)
  } else {
    profession_item.classList.add(activeClass)
  }
}

let index = 0;


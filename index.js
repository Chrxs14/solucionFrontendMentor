const open_menu_button = document.getElementById("menuButton");
const close_menu_button = document.getElementById("closeMenuButton");
const rightMenu = document.getElementById("rightMenu");

open_menu_button.addEventListener("click", () => {
  rightMenu.classList.add("rightMenu-active");
});
close_menu_button.addEventListener("click", () => {
  rightMenu.classList.remove("rightMenu-active");
});

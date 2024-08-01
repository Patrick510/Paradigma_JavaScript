const btnDark = document.querySelector("#btn-dark");

const bg = document.querySelector("#bg");
const btnContainer = document.querySelector(".btn-container");
const btn = btnContainer.querySelector(".btn");
const btnMode = btn.querySelector("#icon-mode");

btn.onclick = function () {
  this.classList.toggle("active");
  btnContainer.classList.toggle("active");
  bg.classList.toggle("active");
  btnMode.classList.toggle("bx-sun");
};

btnMode.addEventListener("click", darkMode); // btnMode.addEventListener("click", () => {});

function darkMode() {
  let iconMode = btnMode.querySelector("#icon-mode");

  if (iconMode.classList.contains("bx-moon")) {
    iconMode.classList.remove("bx-moon");
    iconMode.classList.add("bx-sun");
    bg.style.background = "black";
  } else {
    iconMode.classList.remove("bx-sun");
    iconMode.classList.add("bx-moon");
    bg.style.background = "var(--bg-color)";
  }
}

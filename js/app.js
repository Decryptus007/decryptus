const ctrlSide = document.getElementById("ctrlSide");
const sideBar = document.getElementById("sideBar");

let sideOpen = false;

ctrlSide.addEventListener("click", () => {
  if (sideOpen) {
    sideBar.classList.remove("sideOpen");
    sideBar.classList.add("sideClose");
    ctrlSide.classList.remove("fa-close");
    ctrlSide.classList.add("fa-bars");
    sideOpen = false;
  } else {
    sideBar.classList.remove("sideClose");
    sideBar.classList.add("sideOpen");
    ctrlSide.classList.remove("fa-bars");
    ctrlSide.classList.add("fa-close");
    sideOpen = true;
  }
});

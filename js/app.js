const ctrlSide = document.getElementById("ctrlSide");
const sideBar = document.getElementById("sideBar");
const copyright = document.getElementById("copyright");
const batteryStat = document.getElementById("batteryPercent");
const fillBattery = document.getElementById("fillBattery");

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

let currYear = new Date().getFullYear();

copyright.textContent = `Built with 💙 by Decryptus. ©${currYear}`;

setInterval(() => {
  navigator.getBattery().then((battery) => {
    let res = (battery.level * 100)
    fillBattery.style.width = `${res}%`
    batteryStat.textContent = `${res}%`
  });
}, 2000);
const btnYes = document.querySelector(".js-yes");
const btnNo = document.querySelector(".js-no");
const confirm = document.querySelector(".js-confirm");
const dialog = document.querySelector(".js-dialog");
const body = document.querySelector("body");

let counter = 0;

btnYes.addEventListener("mouseover", (e) => {
  let isToggling = false;
  const intervalId = setInterval(function () {
    if (isToggling) {
      e.target.style.backgroundColor = "#a3ddcb";
    } else {
      e.target.style.backgroundColor = "#e97777";
    }

    isToggling = !isToggling;
  }, 100);

  setTimeout(function () {
    clearInterval(intervalId);
    e.target.style.backgroundColor = "#a3ddcb";
  }, 1500);
});

btnYes.addEventListener("click", () => {
  body.classList.add("yes");
});

btnNo.addEventListener("mouseover", (e) => {
  const target = e.target;
  target.style.top = `${Math.random() * 200}px`;
  target.style.right = `${Math.random() * 200}px`;

  if (counter >= 5) {
    target.innerHTML = "ANOTHER FUCKING BUTTON";
  }

  counter += 1;
});

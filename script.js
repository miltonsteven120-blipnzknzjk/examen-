let current = -1;
const portal = document.getElementById("portal");
const scenes = document.querySelectorAll(".scene");

document.body.addEventListener("click", () => {
  if (current === -1) {
    portal.classList.add("exit");
    current = 0;
    scenes[0].classList.add("active");
    return;
  }

  if (current < scenes.length - 1) {
    scenes[current].classList.remove("active");
    current++;
    scenes[current].classList.add("active");
  }
});

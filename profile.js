const fplbot_btn = document.querySelector("#fplbot-btn");
const boatel_btn = document.querySelector("#boatel-btn");
const fplbot = document.querySelector(".FPLBOT-Container");
const boatel = document.querySelector(".Boatel-Container");


fplbot_btn.addEventListener("click", (event) => {
  fplbot.classList.remove("d-none");
  boatel.classList.add("d-none");
});

boatel_btn.addEventListener("click", (event) => {
  fplbot.classList.add("d-none");
  boatel.classList.remove('d-none');
})


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const first = document.querySelector("#le-wagon-first");
const mediaQuery = window.matchMedia('(max-width: 1000px)')
const reversed = document.querySelector("#le-wagon-reversed");
const notes = document.querySelector(".project-notes");
const icons = document.querySelectorAll(".code-icons")
const tech_stack = document.querySelector("#tech-stack");
const boatel_video = document.querySelector(".boatel-project");

const screenChange = (x) => {
  if (x.matches) {
    first.classList.add("d-none");
    reversed.classList.remove("d-none");
    notes.classList.remove("d-flex");
    tech_stack.classList.remove("d-flex");
    boatel_video.classList.remove("d-flex");
  } else {
    first.classList.remove("d-none");
    reversed.classList.add("d-none");
    notes.classList.add("d-flex");
    tech_stack.classList.add("d-flex");
    boatel_video.classList.add("d-flex");
  }
};

screenChange(mediaQuery);

mediaQuery.addEventListener("change", () => {
  screenChange(mediaQuery);
});

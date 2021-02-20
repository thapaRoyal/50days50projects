const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //   Adding Event Listener
  panel.addEventListener("click", () => {
    // Removing active classes
    removeActiveClasses();
    // Making panel active
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    // Removing active classes
    panel.classList.remove("active");
  });
}

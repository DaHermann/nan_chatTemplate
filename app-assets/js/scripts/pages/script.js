let notifaction = document.querySelector(".notifaction");
notifaction.addEventListener("click", function () {
  let toggleOf = "fa-toggle-off";
  let toggleOn = "fa-toggle-on";
  this.style.color = "inherit";

  if (this.classList.contains(toggleOn)) {
    this.classList.remove(toggleOn);
    this.classList.add(toggleOf);
    this.style.color = "inherit";
  } else {
    this.style.color = "#5E50EE";
    this.classList.remove(toggleOf);
    this.classList.add(toggleOn);
  }
});

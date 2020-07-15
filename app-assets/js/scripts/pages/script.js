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

let adminli = document.querySelectorAll(".adminli");

let btnli = document.querySelectorAll(".button");

adminli.forEach((li, index) => {
  li.style.transition = "all ease-in-out .5s";
  li.style.borderRadius = "3px";
  li.addEventListener("mouseenter", function () {
    this.style.background = "whitesmoke";
    btnli[index].innerHTML = `<i class="fa fa-ellipsis-h"></i>`;
  });
  li.addEventListener("mouseleave", function () {
    this.style.background = "inherit";
    index !== 0
      ? (btnli[index].innerHTML = `Admin`)
      : (btnli[index].innerHTML = ``);
  });
});

function toggleScheme() {
  let toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", function () {
    if (this.dataset.color == "1") {
      this.dataset.color = "2";
      const elementsToAddClassTo = document.querySelectorAll(
        "body, #nav-bottom-div div, .full-time-only h3, .checkbox-label",
        ".job-card",
        ".job-card h1",
      );

      elementsToAddClassTo.forEach((element) => {
        element.classList.add("dark-mode");
      });
    } else if (this.dataset.color == "2") {
      this.dataset.color = "1";
      const elementsToAddClassTo = document.querySelectorAll(
        "body, #nav-bottom-div div, .full-time-only h3, .checkbox-label",
        ".job-card",
        ".job-card h1",
      );
      elementsToAddClassTo.forEach((element) => {
        element.classList.remove("dark-mode");
      });
    }
  });
}
toggleScheme();

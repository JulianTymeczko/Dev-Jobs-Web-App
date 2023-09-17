function toggleScheme() {
  let toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", function () {
    if (this.dataset.color == "1") {
      this.dataset.color = "2";
      const elementsToAddClassTo = document.querySelectorAll(
        "body, #nav-bottom-div div, .full-time-only h3, #mobile-pop-up-bottom div h3, .checkbox-label, .job-card, .job-card h1, #nav-bottom-div input",
      );
      let mobileFilter = document.getElementById("mobile-filter");
      mobileFilter.src = "/assets/mobile/white-icon-filter.svg";
      elementsToAddClassTo.forEach((element) => {
        element.classList.add("dark-mode");
      });
    } else if (this.dataset.color == "2") {
      this.dataset.color = "1";
      const elementsToAddClassTo = document.querySelectorAll(
        "body, #nav-bottom-div div, .full-time-only h3, #mobile-pop-up-bottom div h3, .checkbox-label, .job-card, .job-card h1, #nav-bottom-div input",
      );
      let mobileFilter = document.getElementById("mobile-filter");
      mobileFilter.src = "/assets/mobile/icon-filter.svg";
      elementsToAddClassTo.forEach((element) => {
        element.classList.remove("dark-mode");
      });
    }
  });
}
toggleScheme();

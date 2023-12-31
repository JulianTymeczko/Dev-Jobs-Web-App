function changeScheme() {
  if (this.dataset.color == "1") {
    this.dataset.color = "2";
    const elementsToAddClassTo = document.querySelectorAll(
      "body, #nav-bottom-div div, .full-time-only h3, #mobile-pop-up-bottom div h3, dialog, .checkbox-label, .job-card, .job-card h1, #nav-bottom-div input, footer, footer h2, .job-section h1, #requirements-div h2, #what-you-div h2, .job-header a, .job-header h1, .job-header, .job-section",
    );

    let mobileFilter = document.getElementById("mobile-filter");
    mobileFilter.src = "./assets/mobile/white-icon-filter.svg";
    elementsToAddClassTo.forEach((element) => {
      element.classList.add("dark-mode");
    });
  } else if (this.dataset.color == "2") {
    this.dataset.color = "1";
    const elementsToAddClassTo = document.querySelectorAll(
      "body, #nav-bottom-div div, .full-time-only h3, #mobile-pop-up-bottom div h3, dialog, .checkbox-label, .job-card, .job-card h1, #nav-bottom-div input, footer, footer h2, .job-section h1, #requirements-div h2, #what-you-div h2, .job-header a, .job-header h1, .job-header, .job-section",
    );
    let mobileFilter = document.getElementById("mobile-filter");
    mobileFilter.src = "./assets/mobile/icon-filter.svg";
    elementsToAddClassTo.forEach((element) => {
      element.classList.remove("dark-mode");
    });
  }
}
let toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", changeScheme);

export default function firstTimeDarkModeReact() {
  const elementsToAddClassTo = document.querySelectorAll(
    "body, #nav-bottom-div div, .full-time-only h3, #mobile-pop-up-bottom div h3, dialog, .checkbox-label, .job-card, .job-card h1, #nav-bottom-div input, footer, footer h2, .job-section h1, #requirements-div h2, #what-you-div h2, .job-header a, .job-header h1, .job-header, .job-section",
  );
  let mobileFilter = document.getElementById("mobile-filter");
  mobileFilter.src = "./assets/mobile/white-icon-filter.svg";
  elementsToAddClassTo.forEach((element) => {
    element.classList.add("dark-mode");
  });
}

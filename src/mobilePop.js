export default function mobilePop() {
  let modal = document.getElementById("mobile-pop-up");
  modal.showModal();
  document.querySelector("body").addEventListener("click", function (event) {
    if (event.target.tagName == "DIALOG") {
      modal.close();
    }
  });
  window.addEventListener("resize", function () {
    let windowWidth = window.innerWidth;
    if (windowWidth > 767) {
      modal.close();
    }
  });
}

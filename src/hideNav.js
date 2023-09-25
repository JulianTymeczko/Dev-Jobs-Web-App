export default function hideNav() {
  let bottomNavDoc = document.getElementById("nav-bottom-div");
  bottomNavDoc.setAttribute("style", "opacity: 0");
  let loadMore = document.getElementById("load-more");
  loadMore.setAttribute("style", "display: none;");
  document.querySelector("footer").setAttribute("style", "display: flex;");
  document.getElementById("space").setAttribute("style", "display: none;");
  if (window.innerWidth > 767) {
    document
      .querySelector("main")
      .setAttribute(
        "style",
        "display: inline-block; transform: translateY(-200px); margin-bottom: -150px;",
      );
  } else if (window.innerWidth <= 767) {
    document
      .querySelector("main")
      .setAttribute(
        "style",
        "display: inline-block; transform: translateY(-170px); margin-bottom: -150px;",
      );
  }
  window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
      document
        .querySelector("main")
        .setAttribute(
          "style",
          "display: inline-block; transform: translateY(-170px); margin-bottom: -150px;",
        );
    } else if (windowWidth > 767) {
      document
        .querySelector("main")
        .setAttribute(
          "style",
          "display: inline-block; transform: translateY(-200px); margin-bottom: -150px;",
        );
    }
  });
}

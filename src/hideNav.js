export default function hideNav() {
  let bottomNavDoc = document.getElementById("nav-bottom-div");
  bottomNavDoc.setAttribute("style", "opacity: 0");
  let loadMore = document.getElementById("load-more");
  loadMore.setAttribute("style", "display: none;");
}

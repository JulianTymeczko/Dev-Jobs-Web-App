export default function changePlaceholder (setPlaceholder) {
window.addEventListener("resize", function () {
   let windowWidth = window.innerWidth;
   let x;
 
  if (windowWidth <= 1439){
    x = "Filter by title..."
    setPlaceholder(x)
   }
   else if (windowWidth > 1440){
    x = "Filter by title, companies, expertise..."
    setPlaceholder(x)
   }
});}
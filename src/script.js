export default function changePlaceholder (setPlaceholder) {
  window.addEventListener("load", function () {
    let windowWidth = window.innerWidth;
  let y;

 if (windowWidth <= 1439){
   y = "Filter by title..."
   setPlaceholder(y)
  }
  else if (windowWidth > 1440){
   y = "Filter by title, companies, expertise..."
   setPlaceholder(y)
  }
  })


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
});

}
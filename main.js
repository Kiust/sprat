

// // Get the button, and when the user clicks on it, execute myFunction
// document.getElementById("superBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("dropDown").classList.toggle("show");
// };

// //Change image of the input
// function changeIcon(image) {
//   if (image.src.indexOf("super-btn-90-2.png")>-1) {
//       image.src = "super-btn-open-90.png"; 
//   } else {
//       image.src = "super-btn-90-2.png";
//   }
// }


// Mika toggle
const btn = document.getElementById("superBtn");
btn.addEventListener("click", myFunction, false);

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
let toggle = false;
function myFunction() {
  document.getElementById("dropDown").classList.toggle("show");
  if(toggle === true) {
    btn.src = "assets/super-btn-90-2.png";
  } else {
    btn.src = "assets/super-btn-open-90.png";
  }
  toggle = !toggle;
}
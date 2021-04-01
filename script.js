// Get the page
var page = document.getElementById("displayPage");
// Get the gif
var gif = document.getElementById("displayGif");

// Get the button that opens the page
var btn1 = document.getElementById("pageBtn");
// Get the button that opens the gif
var btn2 = document.getElementById("gifBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the page
btn1.onclick = function() {
  page.style.display = "block";
}
// When the user clicks on the button, open the gif
btn2.onclick = function() {
  gif.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  page.style.display = "none";
}

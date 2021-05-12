// Get the page
var page = document.getElementById("displayPage");
// Get the gif
var gif = document.getElementById("displayGif");
// Get the header content
var content = document.getElementById("hideContent");
// Get the header chat
var chat = document.getElementById("displayChat");


// Get the button that opens the page
var btn2 = document.getElementById("pageBtn");
// Get the button that opens the gif
var btn1 = document.getElementById("gifBtn");


// When the user clicks on the button, open the page
btn2.onclick = function() {
  page.style.display = "block";
  gif.style.display = "none";
  chat.style.display = "block";
}
// When the user clicks on the button, open the gif
btn1.onclick = function() {
  gif.style.display = "block";
  content.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  page.style.display = "none";
}

// Get the modal
var modal = document.getElementById("menuModal");

// Get the button that opens the modal
var btn = document.getElementById("menuBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

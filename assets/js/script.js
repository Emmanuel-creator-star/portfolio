'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}


function viewCV() {
  // Create an anchor element
  var link = document.createElement('a');
  link.href = 'Emmanuel CV.pdf'; // Specify the file URL
  link.target = '_blank'; // Specify the target to open in a new tab/window
  document.body.appendChild(link);
  link.click(); // Simulate a click event on the link
  document.body.removeChild(link); // Clean up the link element
}

function viewFile(filePath) {
  // Create an anchor element
  var link = document.createElement('a');
  link.href = filePath; // Specify the file URL
  link.target = '_blank'; // Specify the target to open in a new tab/window
  document.body.appendChild(link);
  link.click(); // Simulate a click event on the link
  document.body.removeChild(link); // Clean up the link element
}

function openTab() {
  // Open a new tab
  var newTab = window.open("", "_blank");

  // Write content to the new tab
  newTab.document.write(`<h2>Select Video:</h2>`);
}

function playVideo(videoFileName, posterImage) {
  var videoPlayer = `
    <video controls autoplay poster="${posterImage}">
      <source src="${videoFileName}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;

  // Write video player content to the current tab
  document.body.innerHTML = videoPlayer;
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
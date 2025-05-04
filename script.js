const title = document.getElementById("title");
title.classList.add("bold-italic"); // Adds  to the title element
title.classList.remove("bold"); // Removes the bold class from the title element
title.style.color = "blue"; // Updates text color
title.style.fontSize = "30px"; // Updates font size

const input = document.getElementById("nameInput");
input.onchange = function () {
  title.textContent = `Hello ${input.value}, Welcome to my website!`;
};

// Validate name length
input.oninput = function () {
  if (input.value.length < 4) {
    input.setCustomValidity("Username must be at least 4 characters.");
  } else {
    input.setCustomValidity("");
  }
};  

const description = document.querySelector("#description");
description.textContent = "This is a new description."; // Updates text

const infos = document.querySelectorAll(".info");
infos[0].textContent = "This is the first info."; // Updates text
infos[1].textContent = "This is the second info."; // Updates text
infos[2].style.fontsize = "20px"; // Updates font size

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
}); 

const form = document.querySelector(".contact-form");
const display = document.getElementById("nameDisplay");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`); // Display the form data in an alert
    display.textContent = `Thanks ${input.value}, for your Message!`; // 
});

const footer = document.querySelector("footer");
footer.innerHTML = "<p>This is a new footer content.</p>"; // Updates footer content
footer.style.backgroundColor = "#333"; // Updates background color
footer.style.color = "#fff"; // Updates text color
footer.style.padding = "10px"; // Updates padding
footer.style.textAlign = "center"; // Updates text alignment

const text = document.getElementById("hoverText");
text.onmouseover = function () {
  text.style.color = "red";
  text.style.fontWeight = "bold";
};
text.onmouseout = function () {
  text.style.color = "black";
  text.style.fontWeight = "normal";
}; 

// Adds a slider to adjust Font Size
const slider = document.getElementById("fontSlider");
const sliderTtext = document.getElementById("sliderText");

slider.oninput = function () {
  sliderText.style.fontSize = `${slider.value}px`;
}; 

// Adds a modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
}; 
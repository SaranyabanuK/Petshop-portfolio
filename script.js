// script.js

console.log("JavaScript is loaded 🐾");

const currentPage = window.location.pathname;

// ===== INDEX PAGE INTERACTIONS (Now acts as landing page) =====
if (currentPage.includes("index.html") || currentPage === "/") {
  // Add any landing-page-specific scripts here (if needed in future)
}

// ===== HOME PAGE INTERACTIONS (Now includes typing animation) =====
if (currentPage.includes("home.html")) {
  const phrases = ["Perfect Companion", "Furry Friend", "Paw-some Buddy", "Loyal Companion"];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false;
  const typedText = document.getElementById("typedText");

  function loop() {
    typedText.innerHTML = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(loop, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(loop, 150);
  }

  if (typedText) loop();
}

// ===== PETS PAGE INTERACTIONS =====
if (currentPage.includes("pets.html")) {
  const petCards = document.querySelectorAll(".pet-card");

  petCards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.classList.add("highlight");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("highlight");
    });
  });
}

// ===== CONTACT PAGE INTERACTIONS =====
if (currentPage.includes("contact.html")) {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thanks for contacting us! We'll get back to you soon 🐶");
      contactForm.reset();
    });
  }
}

// ===== SMOOTH SCROLL FUNCTION (Optional if used on multiple pages) =====
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const phrases1 = ["Welcome to Paws & Whiskers"];
const phrases2 = ["Your journey to finding a loving companion starts here 🐾"];
let i = 0, j = 0, currentPhrase1 = [], currentPhrase2 = [], isDeleting = false;
const typedText1 = document.getElementById("typedText1");
const typedText2 = document.getElementById("typedText2");

function loop1() {
  typedText1.innerHTML = currentPhrase1.join("");

  if (!isDeleting && j <= phrases1[i].length) {
    currentPhrase1.push(phrases1[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase1.pop();
    j--;
  }

  if (j === phrases1[i].length) {
    isDeleting = true;
    setTimeout(loop2, 1000); // Move to second message after a delay
    return;
  }

  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases1.length;
  }

  setTimeout(loop1, 150);
}

// function loop2() {
//   typedText2.innerHTML = currentPhrase2.join("");

//   if (!isDeleting && j <= phrases2[i].length) {
//     currentPhrase2.push(phrases2[i][j]);
//     j++;
//   }

//   if (isDeleting && j > 0) {
//     currentPhrase2.pop();
//     j--;
//   }

//   if (j === phrases2[i].length) {
//     isDeleting = false;
//     setTimeout(loop1, 1000); // Restart the cycle with the first phrase
//     return;
//   }

//   setTimeout(loop2, 150);
// }

loop1(); // Start the first loop for welcome message

function playVideo() {
    // Hide the thumbnail and show the iframe player
    document.querySelector(".video-thumbnail").style.display = "none";
    document.getElementById("videoPlayer").style.display = "block";
  }
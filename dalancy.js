document.getElementById("chatToggle").addEventListener("click", function () {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
  });
  
  document.getElementById("sendBtn").addEventListener("click", sendMessage);
  document.getElementById("userInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") sendMessage();
  });
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;
  
    appendMessage(message, "user");
    input.value = "";
  
    const response = getBotResponse(message.toLowerCase());
    setTimeout(() => appendMessage(response, "bot"), 500);
  }
  
  function appendMessage(text, type) {
    const chatMessages = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", type);
    messageDiv.innerText = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function getBotResponse(message) {
    if (message.includes("pet") || message.includes("animals")) {
      return "You can explore our adorable pets in the Pets section!";
    } else if (message.includes("contact")) {
      return "Visit our Contact Us page to reach us directly.";
    } else if (message.includes("home") || message.includes("welcome")) {
      return "Go to the Home page for the latest updates!";
    } else if (message.includes("donate")) {
      return "Thank you for considering a donation! Visit the Donations section in Explore.";
    } else if (message.includes("vet") || message.includes("doctor")) {
      return "Our veterinary services can be found on the Home page.";
    } else if (message.includes("thanks") || message.includes("thank you")) {
      return "I paw you 🐾";
    } else if (message.includes("bye") || message.includes("see you")) {
      return "I paw you 🐾";
    } else {
      return "Um.. sorry, I don't understand.";
    }
  }
  // Minimize and Quit functionality
document.getElementById("minimizeBtn").addEventListener("click", () => {
    document.getElementById("chatBox").style.display = "none";
  });
  
  document.getElementById("quitBtn").addEventListener("click", () => {
    document.getElementById("chatContainer").style.display = "none";
  });
  
  // ESC key minimizes the chat
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("chatBox").style.display = "none";
    }
  });
  
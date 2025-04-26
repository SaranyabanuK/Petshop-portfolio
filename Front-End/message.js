// Example message data (for now, dummy; later you'll connect backend)
const messages = [
    {
      name: "John Doe",
      email: "john@example.com",
      message: "I loved your pet shop!",
      dateTime: "2025-04-26 14:35"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Do you have any Persian cats available?",
      dateTime: "2025-04-25 11:20"
    }
  ];
  
  // Load messages into table
  function loadMessages() {
    const tableBody = document.getElementById('messageTableBody');
    tableBody.innerHTML = ""; // Clear previous rows
  
    messages.forEach((msg, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.message}</td>
        <td>${msg.dateTime}</td>
        <td><button class="respond-btn" onclick="openReplyForm('${msg.email}')">Respond</button></td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Open the response form
  function openReplyForm(email) {
    document.getElementById('responseForm').style.display = 'block';
    document.getElementById('replyEmail').value = email;
  }
  
  // Close the response form
  function closeReplyForm() {
    document.getElementById('responseForm').style.display = 'none';
    document.getElementById('replyForm').reset();
  }
  
  // Handle sending reply (for now just an alert; backend needed later)
  document.getElementById('replyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('replyEmail').value;
    const message = document.getElementById('replyMessage').value;
    
    alert(`Your message to ${email} has been sent!\n\nMessage:\n${message}`);
    
    // After sending
    closeReplyForm();
  });
  
  // Load messages initially
  loadMessages();
  
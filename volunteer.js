document.addEventListener("DOMContentLoaded", () => {
    // Handle Approve action
    const approveButtons = document.querySelectorAll('.approve-btn');
    approveButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = button.closest('tr');
        row.querySelector('.status').textContent = 'Approved';
        row.querySelector('.status').style.color = 'green';
        row.querySelector('.approve-btn').disabled = true;
        row.querySelector('.reject-btn').disabled = true;
      });
    });
  
    // Handle Reject action
    const rejectButtons = document.querySelectorAll('.reject-btn');
    rejectButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = button.closest('tr');
        row.querySelector('.status').textContent = 'Rejected';
        row.querySelector('.status').style.color = 'red';
        row.querySelector('.approve-btn').disabled = true;
        row.querySelector('.reject-btn').disabled = true;
      });
    });
  
    // Handle Revoke action
    const revokeButtons = document.querySelectorAll('.revoke-btn');
    revokeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = button.closest('tr');
        row.querySelector('.status').textContent = 'Pending';
        row.querySelector('.status').style.color = 'orange';
        row.querySelector('.approve-btn').disabled = false;
        row.querySelector('.reject-btn').disabled = false;
      });
    });
  
    // Add new volunteer
    const addVolunteerForm = document.querySelector('form');
    addVolunteerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const name = document.querySelector('#volunteer-name').value;
      const email = document.querySelector('#volunteer-email').value;
      const phone = document.querySelector('#volunteer-phone').value;
      const status = document.querySelector('#volunteer-status').value;
  
      // Create a new row for the volunteer table
      const tableBody = document.querySelector('table tbody');
      const newRow = document.createElement('tr');
  
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td class="status">${status.charAt(0).toUpperCase() + status.slice(1)}</td>
        <td>
          <button class="approve-btn">Approve</button>
          <button class="reject-btn">Reject</button>
        </td>
      `;
  
      // Add the new row to the table
      tableBody.appendChild(newRow);
  
      // Reset form fields
      document.querySelector('#volunteer-name').value = '';
      document.querySelector('#volunteer-email').value = '';
      document.querySelector('#volunteer-phone').value = '';
      document.querySelector('#volunteer-status').value = 'pending';
  
      // Reapply the event listeners to new buttons
      const newApproveButton = newRow.querySelector('.approve-btn');
      const newRejectButton = newRow.querySelector('.reject-btn');
  
      newApproveButton.addEventListener('click', function() {
        const row = newApproveButton.closest('tr');
        row.querySelector('.status').textContent = 'Approved';
        row.querySelector('.status').style.color = 'green';
        newApproveButton.disabled = true;
        newRejectButton.disabled = true;
      });
  
      newRejectButton.addEventListener('click', function() {
        const row = newRejectButton.closest('tr');
        row.querySelector('.status').textContent = 'Rejected';
        row.querySelector('.status').style.color = 'red';
        newApproveButton.disabled = true;
        newRejectButton.disabled = true;
      });
    });
  });
  
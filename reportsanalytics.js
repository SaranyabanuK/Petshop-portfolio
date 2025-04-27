document.addEventListener("DOMContentLoaded", () => {
    // Adoptions Chart
    const adoptionsCtx = document.getElementById('adoptionsChart').getContext('2d');
    new Chart(adoptionsCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Number of Adoptions',
          data: [5, 8, 12, 10, 15],
          backgroundColor: 'rgba(75, 192, 192, 0.7)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Donations Chart
    const donationsCtx = document.getElementById('donationsChart').getContext('2d');
    new Chart(donationsCtx, {
      type: 'pie',
      data: {
        labels: ['Individual', 'Corporate', 'Fundraiser Events'],
        datasets: [{
          label: 'Donation Sources',
          data: [3000, 1500, 500],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ]
        }]
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Existing Chart.js code...
    // (keep your charts here)
  
    const activitiesTable = document.getElementById('activities-table').getElementsByTagName('tbody')[0];
    const addActivityForm = document.getElementById('add-activity-form');
  
    // Handle Edit and Delete using Event Delegation
    activitiesTable.addEventListener('click', function (e) {
      if (e.target.classList.contains('edit-btn')) {
        const row = e.target.closest('tr');
        editRow(row);
      } else if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        row.remove();
      }
    });
  
    function editRow(row) {
      const cells = row.querySelectorAll('td');
      if (e.target.textContent === 'Save') {
        // Save edited values
        e.target.textContent = 'Edit';
        for (let i = 0; i < cells.length - 1; i++) {
          let input = cells[i].querySelector('input, select');
          cells[i].innerText = input.value;
        }
      } else {
        // Switch to edit mode
        e.target.textContent = 'Save';
        const date = cells[0].innerText;
        const activity = cells[1].innerText;
        const status = cells[2].innerText;
  
        cells[0].innerHTML = `<input type="date" value="${date}">`;
        cells[1].innerHTML = `<input type="text" value="${activity}">`;
        cells[2].innerHTML = `
          <select>
            <option value="Scheduled" ${status === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
            <option value="Completed" ${status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>`;
      }
    }
  
    // Add New Activity
    addActivityForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const newDate = document.getElementById('new-date').value;
      const newActivity = document.getElementById('new-activity').value;
      const newStatus = document.getElementById('new-status').value;
  
      const newRow = activitiesTable.insertRow();
  
      newRow.innerHTML = `
        <td>${newDate}</td>
        <td>${newActivity}</td>
        <td>${newStatus}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
  
      // Reset form
      addActivityForm.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Your charts (barChart, lineChart) stay as they are...
  
    const activitiesTable = document.getElementById('activities-table').getElementsByTagName('tbody')[0];
    const addActivityForm = document.getElementById('add-activity-form');
  
    // Handle Edit and Delete
    activitiesTable.addEventListener('click', function (e) {
      if (e.target.classList.contains('edit-btn')) {
        const row = e.target.closest('tr');
        editRow(row, e.target); // Pass both row and button
      } else if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        row.remove();
      }
    });
  
    function editRow(row, button) {
      const cells = row.querySelectorAll('td');
      
      if (button.textContent === 'Save') {
        // Save Mode
        button.textContent = 'Edit';
        for (let i = 0; i < cells.length - 1; i++) { // Last cell is actions
          const input = cells[i].querySelector('input, select');
          if (input) {
            cells[i].innerText = input.value;
          }
        }
      } else {
        // Edit Mode
        button.textContent = 'Save';
  
        const dateValue = cells[0].innerText;
        const activityValue = cells[1].innerText;
        const statusValue = cells[2].innerText;
  
        cells[0].innerHTML = `<input type="date" value="${dateValue}">`;
        cells[1].innerHTML = `<input type="text" value="${activityValue}">`;
        cells[2].innerHTML = `
          <select>
            <option value="Scheduled" ${statusValue === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
            <option value="Completed" ${statusValue === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>`;
      }
    }
  
    // Add New Activity
    addActivityForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const newDate = document.getElementById('new-date').value;
      const newActivity = document.getElementById('new-activity').value;
      const newStatus = document.getElementById('new-status').value;
  
      const newRow = activitiesTable.insertRow();
  
      newRow.innerHTML = `
        <td>${newDate}</td>
        <td>${newActivity}</td>
        <td>${newStatus}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
  
      addActivityForm.reset();
    });
  });
    
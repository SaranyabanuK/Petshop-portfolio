document.addEventListener("DOMContentLoaded", () => {
    // Add Event Listeners for Edit/Delete Buttons in the Event List
    const eventTable = document.getElementById("event-table-body");
  
    eventTable.addEventListener("click", function(event) {
      const target = event.target;
  
      if (target.classList.contains("edit-btn")) {
        const row = target.closest("tr");
        const cells = row.querySelectorAll("td.editable");
  
        // Toggle the editable mode for each cell
        cells.forEach(cell => {
          const field = cell.getAttribute("data-field");
          const originalValue = cell.textContent;
  
          if (cell.isContentEditable) {
            // Save edited value
            cell.contentEditable = false;
            if (field === "event-date-time") {
              // Separate the date and time
              const [date, time] = cell.textContent.split(" ");
              const formattedValue = `${date} ${time}`;
              cell.textContent = formattedValue;
            } else {
              cell.textContent = cell.textContent.trim();
            }
            target.textContent = "Edit"; // Change button text back to "Edit"
          } else {
            // Make the cell editable
            cell.contentEditable = true;
            target.textContent = "Save"; // Change button text to "Save"
          }
        });
      }
  
      if (target.classList.contains("delete-btn")) {
        const row = target.closest("tr");
        row.remove();
      }
    });
  
    // Add New Event functionality
    const eventForm = document.getElementById('add-event-form');
    eventForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const eventName = document.querySelector('#event-name').value;
      const eventDate = document.querySelector('#event-date').value;
      const eventTime = document.querySelector('#event-time').value;
      const eventLocation = document.querySelector('#event-location').value;
      const eventStatus = document.querySelector('#event-status').value;
  
      // Combine date and time into a single value
      const eventDateTime = `${eventDate} ${eventTime}`;
  
      // Create a new row for the event table
      const tableBody = document.querySelector('table tbody');
      const newRow = document.createElement('tr');
  
      newRow.innerHTML = `
        <td class="editable" data-field="event-name">${eventName}</td>
        <td class="editable" data-field="event-date-time">${eventDateTime}</td>
        <td class="editable" data-field="event-location">${eventLocation}</td>
        <td class="editable" data-field="event-status">${eventStatus.charAt(0).toUpperCase() + eventStatus.slice(1)}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
  
      // Add the new row to the table
      tableBody.appendChild(newRow);
  
      // Reset form fields
      document.querySelector('#event-name').value = '';
      document.querySelector('#event-date').value = '';
      document.querySelector('#event-time').value = '';
      document.querySelector('#event-location').value = '';
      document.querySelector('#event-status').value = 'scheduled';
    });
  });
  
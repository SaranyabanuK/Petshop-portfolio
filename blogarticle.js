document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('blogs-table').querySelector('tbody');
    const addForm = document.getElementById('add-blog-form');
  
    // Function to create action buttons (Edit, Delete, Save, Cancel)
    function createActionButtons() {
      const actionsTd = document.createElement('td');
  
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', handleEdit);
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', handleDelete);
  
      actionsTd.appendChild(editBtn);
      actionsTd.appendChild(deleteBtn);
  
      return actionsTd;
    }
  
    // Handle Adding a New Blog
    addForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const title = document.getElementById('blog-title').value.trim();
      const date = document.getElementById('blog-date').value;
      const status = document.getElementById('blog-status').value;
  
      if (title && date && status) {
        const newRow = document.createElement('tr');
  
        const titleTd = document.createElement('td');
        titleTd.textContent = title;
  
        const dateTd = document.createElement('td');
        dateTd.textContent = date;
  
        const statusTd = document.createElement('td');
        statusTd.textContent = status;
  
        newRow.appendChild(titleTd);
        newRow.appendChild(dateTd);
        newRow.appendChild(statusTd);
        newRow.appendChild(createActionButtons());
  
        table.appendChild(newRow);
  
        addForm.reset();
      }
    });
  
    // Handle Editing a Blog Row
    function handleEdit(e) {
      const row = e.target.closest('tr');
      const cells = row.querySelectorAll('td');
  
      const title = cells[0].textContent;
      const date = cells[1].textContent;
      const status = cells[2].textContent;
  
      // Replace with input fields
      cells[0].innerHTML = `<input type="text" value="${title}">`;
      cells[1].innerHTML = `<input type="date" value="${date}">`;
      cells[2].innerHTML = `
        <select>
          <option value="Published" ${status === 'Published' ? 'selected' : ''}>Published</option>
          <option value="Draft" ${status === 'Draft' ? 'selected' : ''}>Draft</option>
        </select>
      `;
  
      // Replace buttons
      const actionsCell = cells[3];
      actionsCell.innerHTML = '';
  
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.classList.add('save-btn');
      saveBtn.addEventListener('click', handleSave);
  
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.classList.add('cancel-btn');
      cancelBtn.addEventListener('click', handleCancel);
  
      actionsCell.appendChild(saveBtn);
      actionsCell.appendChild(cancelBtn);
    }
  
    // Handle Saving Changes
    function handleSave(e) {
      const row = e.target.closest('tr');
      const inputs = row.querySelectorAll('input, select');
  
      const newTitle = inputs[0].value.trim();
      const newDate = inputs[1].value;
      const newStatus = inputs[2].value;
  
      if (newTitle && newDate && newStatus) {
        row.innerHTML = `
          <td>${newTitle}</td>
          <td>${newDate}</td>
          <td>${newStatus}</td>
          <td></td>
        `;
  
        row.querySelector('td:last-child').appendChild(createActionButtons());
      }
    }
  
    // Handle Cancel Editing
    function handleCancel(e) {
      const row = e.target.closest('tr');
      const originalTitle = row.querySelector('input[type="text"]').defaultValue;
      const originalDate = row.querySelector('input[type="date"]').defaultValue;
      const originalStatus = row.querySelector('select').value;
  
      row.innerHTML = `
        <td>${originalTitle}</td>
        <td>${originalDate}</td>
        <td>${originalStatus}</td>
        <td></td>
      `;
  
      row.querySelector('td:last-child').appendChild(createActionButtons());
    }
  
    // Handle Deleting a Blog Row
    function handleDelete(e) {
      const row = e.target.closest('tr');
      if (confirm('Are you sure you want to delete this blog/article?')) {
        row.remove();
      }
    }
  });
// Initialize Quill editor
const quill = new Quill('#editor-container', {
    theme: 'snow'
  });
  
  // Handle Submit (Publishing the blog)
  document.getElementById('new-blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const title = document.getElementById('blog-title-input').value;
    const description = document.getElementById('blog-description-input').value;
    const content = quill.root.innerHTML; // Get blog HTML content
    const image = document.getElementById('blog-image-upload').files[0];
    const video = document.getElementById('blog-video-upload').files[0];
  
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Content:", content);
    console.log("Image File:", image);
    console.log("Video File:", video);
  
    alert('Blog Published Successfully! ✅');
  });
    
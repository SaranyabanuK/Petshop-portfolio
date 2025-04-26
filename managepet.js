document.addEventListener('DOMContentLoaded', function () {
    const petForm = document.getElementById('petForm');
    const petTableBody = document.getElementById('petTableBody');
  
    petForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const petName = document.getElementById('petName').value.trim();
      const petAge = document.getElementById('petAge').value.trim();
      const petSpecial = document.getElementById('petSpecial').value.trim();
      const petImageInput = document.getElementById('petImage').files[0];
  
      if (!petName || !petAge || !petSpecial || !petImageInput) {
        alert('Please fill all fields and select an image.');
        return;
      }
  
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
  
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><img src="${imageUrl}" alt="Pet Image" width="80" height="80" style="object-fit: cover; border-radius: 8px;"></td>
          <td>${petName}</td>
          <td>${petAge}</td>
          <td>${petSpecial}</td>
          <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </td>
        `;
        petTableBody.appendChild(row);
  
        petForm.reset();
      };
      reader.readAsDataURL(petImageInput);
    });
  
    // Handle edit & delete
    petTableBody.addEventListener('click', function (event) {
      const btn = event.target;
      const row = btn.closest('tr');
      if (btn.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this pet?')) {
          row.remove();
        }
      }
      if (btn.classList.contains('edit-btn')) {
        const cells = row.querySelectorAll('td');
        const newName = prompt('Enter new name:', cells[1].innerText);
        const newAge = prompt('Enter new age:', cells[2].innerText);
        const newSpecial = prompt('Enter new special info:', cells[3].innerText);
  
        if (newName !== null) cells[1].innerText = newName;
        if (newAge !== null) cells[2].innerText = newAge;
        if (newSpecial !== null) cells[3].innerText = newSpecial;
      }
    });
  });
  function savePetsToLocalStorage(pets) {
    localStorage.setItem('pets', JSON.stringify(pets));
}
pets.push(newPet);
savePetsToLocalStorage(pets);
let pets = [];

window.onload = function() {
    const storedPets = localStorage.getItem('pets');
    if (storedPets) {
        pets = JSON.parse(storedPets);
        renderPets(); // A function to show them in the table
    }
}
function deletePet(index) {
  pets.splice(index, 1);
  savePetsToLocalStorage(pets);
  renderPets();
}

function addVet() {
    const vetName = document.getElementById('vetNameInput').value.trim();
    if (vetName === '') {
      alert('Please enter a vet name!');
      return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `${vetName} <button onclick="removeVet(this)">Remove</button>`;
    
    document.getElementById('vetList').appendChild(li);
    document.getElementById('vetNameInput').value = '';
  }
  
  function removeVet(button) {
    button.parentElement.remove();
  }
  function addVet() {
    const vetName = document.getElementById('vetNameInput').value.trim();
    if (vetName === '') {
      alert('Please enter a vet name!');
      return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `${vetName} <button onclick="removeVet(this)">Remove</button>`;
    
    document.getElementById('vetList').appendChild(li);
  
    // Also add to vet dropdown for services
    const option = document.createElement('option');
    option.value = vetName;
    option.textContent = vetName;
    document.getElementById('vetSelect').appendChild(option);
  
    document.getElementById('vetNameInput').value = '';
  }
  
  function removeVet(button) {
    const vetName = button.parentElement.textContent.replace('Remove', '').trim();
  
    // Remove from list
    button.parentElement.remove();
  
    // Remove from vet select dropdown
    const vetSelect = document.getElementById('vetSelect');
    for (let i = 0; i < vetSelect.options.length; i++) {
      if (vetSelect.options[i].value === vetName) {
        vetSelect.remove(i);
        break;
      }
    }
  }
  
  function addService(event) {
    event.preventDefault();
  
    const vetName = document.getElementById('vetSelect').value;
    const serviceName = document.getElementById('serviceName').value.trim();
    const serviceDateTime = document.getElementById('serviceDateTime').value;
    const serviceLocation = document.getElementById('serviceLocation').value.trim();
  
    if (!vetName || !serviceName || !serviceDateTime || !serviceLocation) {
      alert('Please fill out all fields.');
      return;
    }
  
    const tbody = document.getElementById('servicesTable').querySelector('tbody');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${vetName}</td>
      <td>${serviceName}</td>
      <td>${new Date(serviceDateTime).toLocaleString()}</td>
      <td>${serviceLocation}</td>
    `;
  
    tbody.appendChild(tr);
  
    // Clear the form
    document.getElementById('serviceForm').reset();
  }
    
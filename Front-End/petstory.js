function showAdoptedForm() {
    document.getElementById('available-pets-table').style.display = 'block';
    document.getElementById('adopted-story-form').style.display = 'none';
    document.getElementById('shelter-story-form').style.display = 'none';
  }
  
  function showShelterForm() {
    document.getElementById('available-pets-table').style.display = 'none';
    document.getElementById('adopted-story-form').style.display = 'none';
    document.getElementById('shelter-story-form').style.display = 'block';
  }
  
  function selectPet(petName) {
    document.getElementById('available-pets-table').style.display = 'none';
    document.getElementById('adopted-story-form').style.display = 'block';
    document.getElementById('adopted-pet-name').value = petName;
  }
  function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    popup.classList.remove('hidden');
    popup.style.display = 'block';
    
    setTimeout(() => {
      popup.classList.add('hidden');
      popup.style.display = 'none';
    }, 2500); // 2.5 seconds, matches animation
  }
  
  // Example to trigger after form submit
  document.getElementById('adopted-story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Do your form save work here!
    
    showSuccessPopup(); // Show success animation
  });
  
  document.getElementById('shelter-story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Do your form save work here!
    
    showSuccessPopup(); // Show success animation
  });
    
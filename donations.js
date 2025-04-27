function updateOffer() {
    const newOffer = document.getElementById('offerInput').value;
    const offerCells = document.querySelectorAll('.offerPercent');
    
    offerCells.forEach(cell => {
      cell.textContent = `${newOffer}%`;
    });

    const updateButton = document.getElementById('updateButton');
updateButton.textContent = 'Updated! ✅';
setTimeout(() => {
  updateButton.textContent = 'Update Offer %';
}, 2000);
}
  function checkIfEmpty() {
    const tbody = document.querySelector('#donationsTable tbody');
    const emptyMessage = document.getElementById('emptyMessage');
    if (tbody.children.length === 0) {
      emptyMessage.style.display = 'block';
    } else {
      emptyMessage.style.display = 'none';
    }
  }

  checkIfEmpty();
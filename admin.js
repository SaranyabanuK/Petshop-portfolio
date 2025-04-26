function loadPage(section) {
    const content = document.getElementById("content");
  
    switch (section) {
      case "edit-pets":
        content.innerHTML = `
          <h2>Manage Pets</h2>
          <p>Edit or remove pet listings below:</p>
          <!-- In the future, load real data dynamically -->
          <div><strong>Pet Name:</strong> Fluffy <button>Edit</button> <button>Delete</button></div>
          <div><strong>Pet Name:</strong> Bruno <button>Edit</button> <button>Delete</button></div>
        `;
        break;
  
      case "messages":
        content.innerHTML = `
          <h2>Messages</h2>
          <p>List of messages submitted through Contact Page:</p>
          <div><strong>From:</strong> user@example.com <br> <strong>Message:</strong> I want to adopt a puppy.</div>
        `;
        break;
  
      case "stories":
        content.innerHTML = `
          <h2>Pet Stories</h2>
          <p>Add or remove pet success stories for homepage:</p>
          <textarea placeholder="Write story here..."></textarea><br>
          <button>Submit Story</button>
        `;
        break;
  
      case "donations":
        content.innerHTML = `
          <h2>Donations</h2>
          <p>Track and manage donation records:</p>
          <div><strong>Donor:</strong> Asha <strong>Amount:</strong> Rs.5000</div>
        `;
        break;
  
      case "services":
        content.innerHTML = `
          <h2>Veterinary Services</h2>
          <p>Manage listed vet services:</p>
          <div><strong>Service:</strong> Deworming Camp <button>Edit</button></div>
        `;
        break;
  
      default:
        content.innerHTML = `<p>Section not found.</p>`;
    }
  }
  function updatePreview() {
    const selectedPage = document.getElementById('pageSelector').value;
    document.getElementById('sitePreview').src = selectedPage;
  }
  function updatePreview() {
    const selectedPage = document.getElementById('pageSelector').value;
    document.getElementById('sitePreview').src = selectedPage;
  }

  function refreshPreview() {
    const iframe = document.getElementById('sitePreview');
    iframe.src = iframe.src;
  }
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(sectionId).style.display = 'block';
  }

  function updatePreview() {
    const selectedPage = document.getElementById("pageSelector").value;
    document.getElementById("sitePreview").src = selectedPage;
  }

  function refreshPreview() {
    const iframe = document.getElementById("sitePreview");
    iframe.src = iframe.src;
  }


  
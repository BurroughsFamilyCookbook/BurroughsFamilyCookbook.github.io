function openImageModal(event, imageSrc) {
  // Prevent browser from switching tabs or downloading
  event.preventDefault(); 

  const imgModal = document.getElementById('globalImageModal');
  const modalTargetImg = document.getElementById('imageModalTarget');
  
  // Apply image source path
  modalTargetImg.src = imageSrc;
  
  // Set execution layout state
  imgModal.style.display = 'flex';
  
  // Timeout triggers the soft transition fade-in effect smoothly
  setTimeout(() => {
    imgModal.classList.add('show');
  }, 15); 
}

function closeImageModal() {
  const imgModal = document.getElementById('globalImageModal');
  imgModal.classList.remove('show');
  
  // Wait out the opacity transition duration before altering display status
  setTimeout(() => {
    imgModal.style.display = 'none';
  }, 300);
}

function closeImageModalOnOverlay(event) {
  const imgModal = document.getElementById('globalImageModal');
  if (event.target === imgModal) {
    closeImageModal();
  }
}
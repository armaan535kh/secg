// Function to show the modal with the clicked image
function showImage(imgElement) {
  // Stop the rotation of the gallery by adding a "no-rotate" class
  document.querySelector('.gallery').style.animationPlayState = 'paused';

  // Set the image in the modal
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "flex";
  modalImage.src = imgElement.src;
}

// Function to close the modal
function closeModal() {
  // Resume the rotation of the gallery
  document.querySelector('.gallery').style.animationPlayState = 'running';

  // Hide the modal
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
}

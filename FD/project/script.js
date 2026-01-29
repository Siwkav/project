function openModal(img, name) {
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

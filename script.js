const people = [
  {
    name: 'wftap',
    img: 'rozisk/face1.jpg',
    region: 'Россия',
    reason: 'хуй знает',
    gender: 'Мужской',
    nationality: 'Русский',
    contact: 'https://discord.com/users/1414606867166007438'
  },
  {
    name: 'lezt',
    img: 'rozisk/face2.png',
    region: 'неизвестно',
    reason: 'без причин',
    gender: 'Мужской',
    nationality: 'неизвестно',
    contact: 'https://discord.com/users/1414606867166007438'
  }
];

const container = document.getElementById('cards-container');

people.forEach((person, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => openModalByIndex(index);
  card.innerHTML = `
    <img src="${person.img}" alt="">
    <div class="name">${person.name}</div>
  `;
  container.appendChild(card);
});

function openModalByIndex(index) {
  const person = people[index];
  document.getElementById('modal-img').src = person.img;
  document.getElementById('modal-name').textContent = person.name;
  document.getElementById('modal-region').textContent = person.region;
  document.getElementById('modal-reason').textContent = person.reason;
  document.getElementById('modal-gender').textContent = person.gender;
  document.getElementById('modal-nationality').textContent = person.nationality;
  document.getElementById('modal-contact').href = person.contact;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

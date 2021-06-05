'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.modal');
const modalDeath = document.querySelector('.modal-death');
const modalMind = document.querySelector('.modal-mind');
const modalAfterlife = document.querySelector('.modal-afterlife');
const overlay = document.querySelector('.overlay');

const showModal = function (name) {
  const modal = document.querySelector(`.modal${name ? '-' + name : ''}`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (name) {
  const modal = document.querySelector(`.modal${name ? '-' + name : ''}`);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalBtns.forEach(showBtn => {
  showBtn.addEventListener('click', () => {
    showModal(showBtn.value);
  });
});

// Close modal by clicking close button
closeModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeModal(closeBtn.value);
  });
});

// Close modal by clicking overlay area
overlay.addEventListener('click', () => {
  closeModal('');
  modals.forEach(modal => modal.classList.add('hidden'));
});

// Close modal by pressing ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal('');
    modals.forEach(modal => modal.classList.add('hidden'));
  }
});

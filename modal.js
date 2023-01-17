const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.close-btn');


modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
})
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})






    





























/* 
const modalBtn  = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

function modal() {
    
}

modalBtn.addEventListener('click', ()=> {
    modalOverlay.classList.add('open-modal');
})
closeBtn.addEventListener('click', ()=> {
    modalOverlay.classList.remove('open-modal');
})  */
/* modalOverlay.addEventListener('click', ()=> {
    modalOverlay.classList.toggle('open-modal');
}) */

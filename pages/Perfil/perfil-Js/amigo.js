
const btnLike = document.querySelector('.like_icon');
const likeActive = document.querySelector('.active_like');
const animationHeart = document.querySelector('.heart_icon');

const imgPost = document.querySelector('.img_post');

const likes = document.querySelector('.likes .number');

const btnSave = document.querySelector('.save_icon');
const saveActive = document.querySelector('.active_save');

btnLike.addEventListener('click', () => {
    likeActive.classList.add('active');
    btnLike.setAttribute('style', 'display:none');
    animationHeart.setAttribute('style', 'display:block');
    let currentText = likes.innerText;

    let number = parseFloat(currentText);
    number += 1;

    likes.innerText = number;
});

likeActive.addEventListener('click', () => {
    likeActive.classList.remove('active');
    btnLike.setAttribute('style', 'display:inline-block');
});

imgPost.addEventListener('dblclick', () => {
    likeActive.classList.add('active');
    btnLike.setAttribute('style', 'display:none');
    animationHeart.setAttribute('style', 'display:block');
    let currentText = likes.innerText;

    let number = parseFloat(currentText);
    number += 1;

    likes.innerText = number;
});

btnSave.addEventListener('click', () => {
    saveActive.classList.add('active');
    btnSave.setAttribute('style', 'display:none');
});

saveActive.addEventListener('click', () => {
    saveActive.classList.remove('active');
    btnSave.setAttribute('style', 'display:inline-block');
});
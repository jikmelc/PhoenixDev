
const btnLike = document.querySelectorAll('.like_icon');
const likeActive = document.querySelectorAll('.active_like');
const animationHeart = document.querySelectorAll('.heart_icon');
const imgPost = document.querySelectorAll('.img_post');
const likes = document.querySelectorAll('.likes .number');
const btnSave = document.querySelectorAll('.save_icon');
const saveActive = document.querySelectorAll('.active_save');

btnLike.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        likeActive[index].classList.add('active');
        btn.setAttribute('style', 'display:none');
        animationHeart[index].setAttribute('style', 'display:block');
        let currentText = likes[index].innerText;

        let number = parseFloat(currentText);
        number += 1;

        likes[index].innerText = number;
    });
});

likeActive.forEach((like, index) => {
    like.addEventListener('click', () => {
        like.classList.remove('active');
        btnLike[index].setAttribute('style', 'display:inline-block');
    });
});

imgPost.forEach((img, index) => {
    img.addEventListener('dblclick', () => {
        likeActive[index].classList.add('active');
        btnLike[index].setAttribute('style', 'display:none');
        animationHeart[index].setAttribute('style', 'display:block');
        let currentText = likes[index].innerText;

        let number = parseFloat(currentText);
        number += 1;

        likes[index].innerText = number;
    });
});

btnSave.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        saveActive[index].classList.add('active');
        btn.setAttribute('style', 'display:none');
    });
});

saveActive.forEach((save, index) => {
    save.addEventListener('click', () => {
        save.classList.remove('active');
        btnSave[index].setAttribute('style', 'display:inline-block');
    });
});

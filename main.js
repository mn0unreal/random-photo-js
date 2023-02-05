
const imgEl = document.getElementById('random-image');
const btn = document.getElementById('btn');

const srcArray = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
];


btn.addEventListener('click', () => {

    window.location.reload();
});

randomImage();

function randomImage(){
    const randomIndex = Math.floor(Math.random() * srcArray.length);
    imgEl.src = srcArray[randomIndex];
};
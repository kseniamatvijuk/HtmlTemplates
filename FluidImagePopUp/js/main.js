const modal = document.querySelector('.modal');;
const prews = document.querySelectorAll('.gallery img');
const orig = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

prews.forEach(preview=>{
    preview.addEventListener('click', ()=>{
        modal.classList.add('open');
        orig.classList.add('open');

        //change text and img
        const origSrc = preview.getAttribute('data-original');
        orig.src=`img/full/${origSrc}`;

        const altText = preview.alt;
        imgText.textContent = altText;
    });
});

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        orig.classList.remove('open');
    }
});

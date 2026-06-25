
const themeBtn = document.getElementById('themeBtn');
const topBtn = document.getElementById('topBtn');

if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
}

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    }else{
        topBtn.style.display = 'none';
    }
});

if(topBtn){
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

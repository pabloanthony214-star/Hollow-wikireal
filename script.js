
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

if(topBtn){
    window.addEventListener('scroll', () => {
        topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const accordionButtons = document.querySelectorAll('.accordion-header');

function closeAllAccordions(exceptItem = null) {
    document.querySelectorAll('.accordion-item').forEach(item => {
        if(item === exceptItem) return;

        const button = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = button?.querySelector('.accordion-icon');

        if(button && content){
            content.style.display = 'none';
            button.setAttribute('aria-expanded', 'false');
            if(icon) icon.style.transform = 'rotate(0deg)';
        }
    });
}

accordionButtons.forEach(button => {
    const item = button.closest('.accordion-item');
    const content = item?.querySelector('.accordion-content');
    const icon = button.querySelector('.accordion-icon');

    if(!item || !content || !icon) return;

    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', content.id);

    button.addEventListener('click', () => {
        const isOpen = content.style.display === 'block';

        if(isOpen){
            closeAllAccordions();
            content.style.display = 'none';
            button.setAttribute('aria-expanded', 'false');
            icon.style.transform = 'rotate(0deg)';
            return;
        }

        closeAllAccordions(item);
        content.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
        icon.style.transform = 'rotate(90deg)';
    });
});

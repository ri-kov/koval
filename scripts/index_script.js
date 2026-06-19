const invBtn = document.getElementById('vdet_btn');
const invIcon = document.getElementById('inv_btn_arrow')

invBtn.addEventListener('mouseenter', () => {
    invBtn.style.backgroundColor = '#1F71CE';
    invBtn.style.color = '#FFFFFF';
    invIcon.style.color = '#FFFFFF';
});

invBtn.addEventListener('mouseleave', () => {
    invBtn.style.backgroundColor = '#FFFFFF';
    invBtn.style.color = '#1F71CE';
    invIcon.style.color = '1F71CE';
});
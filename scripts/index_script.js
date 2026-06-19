const invBtn = document.getElementById('invt_btn');
const invIcon = document.getElementById('inv_btn_arrow');

invBtn.style.transition = '0.3s ease';
invIcon.style.transition = '0.3s ease';

invBtn.addEventListener('mouseenter', () => {
    invBtn.style.backgroundColor = '#1F71CE';
    invBtn.style.color = '#FFFFFF';
    invIcon.style.color = '#FFFFFF';
});

invBtn.addEventListener('mouseleave', () => {
    invBtn.style.backgroundColor = '#FFFFFF';
    invBtn.style.color = '#1F71CE';
    invIcon.style.color = '#1F71CE';
});

const vdBtn1 = document.getElementById('vd_btn1');
const vdBtn2 = document.getElementById('vd_btn2');
const vdBtn3 = document.getElementById('vd_btn3');
const vdIcon1 = document.getElementById('vd_icon1');
const vdIcon2 = document.getElementById('vd_icon2');
const vdIcon3 = document.getElementById('vd_icon3');

vdBtn1.style.transition = '0.3s ease';
vdBtn2.style.transition = '0.3s ease';
vdBtn3.style.transition = '0.3s ease';
vdIcon1.style.transition = '0.3s ease';
vdIcon2.style.transition = '0.3s ease';
vdIcon3.style.transition = '0.3s ease';

vdBtn1.addEventListener('mouseenter', () => {
    vdBtn1.style.backgroundColor = '#1F71CE';
    vdBtn1.style.color = '#FFFFFF';
    vdIcon1.style.color = '#FFFFFF';
});

vdBtn1.addEventListener('mouseleave', () => {
    vdBtn1.style.backgroundColor = '#FFFFFF';
    vdBtn1.style.color = '#1F71CE';
    vdIcon1.style.color = '#1F71CE';
});
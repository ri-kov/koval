const carImages1 = [
    '../pictures/cars/2019sonatasample/1.JPG',
    '../pictures/cars/2019sonatasample/2.JPG',
    '../pictures/cars/2019sonatasample/3.JPG',
    '../pictures/cars/2019sonatasample/4.JPG',
    '../pictures/cars/2019sonatasample/5.JPG',
    '../pictures/cars/2019sonatasample/6.JPG',
    '../pictures/cars/2019sonatasample/7.JPG'
];

let currentImgIndex1 = 0;

const carImg1 = document.getElementById('carImage1');
const nextImg1 = document.getElementById('btnNext1');
const prevImg1 = document.getElementById('btnPrev1');
const imgCounter1 = document.getElementById('imgCounter1');
let startX1 = 0;

function updateImage1() {
    carImg1.src = carImages1[currentImgIndex1];
    imgCounter1.textContent = `${currentImgIndex1+1} / ${carImages1.length}`;
};

updateImage1();

nextImg1.addEventListener('click', () => {
    currentImgIndex1++;
    
    if (currentImgIndex1 >= carImages1.length) {
        currentImgIndex1 = 0;
    }

    updateImage1();
});

prevImg1.addEventListener('click', () => {
    currentImgIndex1--;

    if (currentImgIndex1 < 0) {
        currentImgIndex1 = carImages1.length - 1;
    }

    updateImage1();
});


carImg1.addEventListener("pointerdown", (e) => {
    startX1 = e.clientX;
});

carImg1.addEventListener("pointerup", (e) => {
    const endX1 = e.clientX;
    const swipeDistance1 = endX1 - startX1;

    if (Math.abs(swipeDistance1) < 40) {
        return;
    }

    if (swipeDistance1 < 0) {
        currentImgIndex1++;

        if (currentImgIndex1 >= carImages1.length) {
            currentImgIndex1 = 0;
        }
    } else {
        currentImgIndex1--;

        if (currentImgIndex1 < 0) {
            currentImgIndex1 = carImages1.length - 1;
        }
    }

    updateImage1();
});

const carImages2 = [
    '../pictures/cars/2012acurasample/1.jpg',
    '../pictures/cars/2012acurasample/2.jpg',
    '../pictures/cars/2012acurasample/3.jpg',
    '../pictures/cars/2012acurasample/4.jpg',
    '../pictures/cars/2012acurasample/5.jpg',
    '../pictures/cars/2012acurasample/6.jpg',
    '../pictures/cars/2012acurasample/7.jpg',
    '../pictures/cars/2012acurasample/8.jpg',
    '../pictures/cars/2012acurasample/9.jpg',
    '../pictures/cars/2012acurasample/10.jpg',
    '../pictures/cars/2012acurasample/11.jpg',
    '../pictures/cars/2012acurasample/12.jpg',
];

let currentImgIndex2 = 0;

const carImg2 = document.getElementById('carImage2');
const nextImg2 = document.getElementById('btnNext2');
const prevImg2 = document.getElementById('btnPrev2');
const imgCounter2 = document.getElementById('imgCounter2');
let startX2 = 0;

function updateImage2() {
    carImg2.src = carImages2[currentImgIndex2];
    imgCounter2.textContent = `${currentImgIndex2+1} / ${carImages2.length}`;
};

updateImage2();

nextImg2.addEventListener('click', () => {
    currentImgIndex2++;
    
    if (currentImgIndex2 >= carImages2.length) {
        currentImgIndex2 = 0;
    }

    updateImage2();
});

prevImg2.addEventListener('click', () => {
    currentImgIndex2--;

    if (currentImgIndex2 < 0) {
        currentImgIndex2 = carImages2.length - 1;
    }

    updateImage2();
});

carImg2.addEventListener("pointerdown", (e) => {
    startX2 = e.clientX;
});

carImg2.addEventListener("pointerup", (e) => {
    const endX2 = e.clientX;
    const swipeDistance2 = endX2 - startX2;

    if (Math.abs(swipeDistance2) < 40) {
        return;
    }

    if (swipeDistance2 < 0) {
        currentImgIndex2++;

        if (currentImgIndex2 >= carImages2.length) {
            currentImgIndex2 = 0;
        }
    } else {
        currentImgIndex2--;

        if (currentImgIndex2 < 0) {
            currentImgIndex2 = carImages2.length - 1;
        }
    }

    updateImage2();
});

const carImages3 = [
    '../pictures/cars/2019sonatasample/1.JPG',
    '../pictures/cars/2019sonatasample/2.JPG',
    '../pictures/cars/2019sonatasample/3.JPG',
    '../pictures/cars/2019sonatasample/4.JPG',
    '../pictures/cars/2019sonatasample/5.JPG',
    '../pictures/cars/2019sonatasample/6.JPG',
    '../pictures/cars/2019sonatasample/7.JPG'
];

let currentImgIndex3 = 0;

const carImg3 = document.getElementById('carImage3');
const nextImg3 = document.getElementById('btnNext3');
const prevImg3 = document.getElementById('btnPrev3');
const imgCounter3 = document.getElementById('imgCounter3');
let startX3 = 0;

function updateImage3() {
    carImg3.src = carImages3[currentImgIndex3];
    imgCounter3.textContent = `${currentImgIndex3+1} / ${carImages3.length}`;
};

updateImage3();

nextImg3.addEventListener('click', () => {
    currentImgIndex3++;
    
    if (currentImgIndex3 >= carImages3.length) {
        currentImgIndex3 = 0;
    }

    updateImage3();
});

prevImg3.addEventListener('click', () => {
    currentImgIndex3--;

    if (currentImgIndex3 < 0) {
        currentImgIndex3 = carImages3.length - 1;
    }

    updateImage3();
});


carImg3.addEventListener("pointerdown", (e) => {
    startX3 = e.clientX;
});

carImg3.addEventListener("pointerup", (e) => {
    const endX3 = e.clientX;
    const swipeDistance3 = endX3 - startX3;

    if (Math.abs(swipeDistance3) < 40) {
        return;
    }

    if (swipeDistance3 < 0) {
        currentImgIndex3++;

        if (currentImgIndex3 >= carImages3.length) {
            currentImgIndex3 = 0;
        }
    } else {
        currentImgIndex3--;

        if (currentImgIndex3 < 0) {
            currentImgIndex3 = carImages3.length - 1;
        }
    }

    updateImage3();
});

const carImages4 = [
    '../pictures/cars/2012acurasample/1.jpg',
    '../pictures/cars/2012acurasample/2.jpg',
    '../pictures/cars/2012acurasample/3.jpg',
    '../pictures/cars/2012acurasample/4.jpg',
    '../pictures/cars/2012acurasample/5.jpg',
    '../pictures/cars/2012acurasample/6.jpg',
    '../pictures/cars/2012acurasample/7.jpg',
    '../pictures/cars/2012acurasample/8.jpg',
    '../pictures/cars/2012acurasample/9.jpg',
    '../pictures/cars/2012acurasample/10.jpg',
    '../pictures/cars/2012acurasample/11.jpg',
    '../pictures/cars/2012acurasample/12.jpg',
];

let currentImgIndex4 = 0;

const carImg4 = document.getElementById('carImage4');
const nextImg4 = document.getElementById('btnNext4');
const prevImg4 = document.getElementById('btnPrev4');
const imgCounter4 = document.getElementById('imgCounter4');
let startX4 = 0;

function updateImage4() {
    carImg4.src = carImages4[currentImgIndex4];
    imgCounter4.textContent = `${currentImgIndex4+1} / ${carImages4.length}`;
};

updateImage4();

nextImg4.addEventListener('click', () => {
    currentImgIndex4++;
    
    if (currentImgIndex4 >= carImages4.length) {
        currentImgIndex4 = 0;
    }

    updateImage4();
});

prevImg4.addEventListener('click', () => {
    currentImgIndex4--;

    if (currentImgIndex4 < 0) {
        currentImgIndex4 = carImages4.length - 1;
    }

    updateImage4();
});


carImg4.addEventListener("pointerdown", (e) => {
    startX4 = e.clientX;
});

carImg4.addEventListener("pointerup", (e) => {
    const endX4 = e.clientX;
    const swipeDistance4 = endX4 - startX4;

    if (Math.abs(swipeDistance4) < 40) {
        return;
    }

    if (swipeDistance4 < 0) {
        currentImgIndex4++;

        if (currentImgIndex4 >= carImages4.length) {
            currentImgIndex4 = 0;
        }
    } else {
        currentImgIndex4--;

        if (currentImgIndex4 < 0) {
            currentImgIndex4 = carImages4.length - 1;
        }
    }

    updateImage4();
});

const carImages5 = [
    '../pictures/cars/2019sonatasample/1.JPG',
    '../pictures/cars/2019sonatasample/2.JPG',
    '../pictures/cars/2019sonatasample/3.JPG',
    '../pictures/cars/2019sonatasample/4.JPG',
    '../pictures/cars/2019sonatasample/5.JPG',
    '../pictures/cars/2019sonatasample/6.JPG',
    '../pictures/cars/2019sonatasample/7.JPG'
];

let currentImgIndex5 = 0;

const carImg5 = document.getElementById('carImage5');
const nextImg5 = document.getElementById('btnNext5');
const prevImg5 = document.getElementById('btnPrev5');
const imgCounter5 = document.getElementById('imgCounter5');
let startX5 = 0;

function updateImage5() {
    carImg5.src = carImages5[currentImgIndex5];
    imgCounter5.textContent = `${currentImgIndex5+1} / ${carImages5.length}`;
};

updateImage5();

nextImg5.addEventListener('click', () => {
    currentImgIndex5++;
    
    if (currentImgIndex5 >= carImages5.length) {
        currentImgIndex5 = 0;
    }

    updateImage5();
});

prevImg5.addEventListener('click', () => {
    currentImgIndex5--;

    if (currentImgIndex5 < 0) {
        currentImgIndex5 = carImages5.length - 1;
    }

    updateImage5();
});


carImg5.addEventListener("pointerdown", (e) => {
    startX5 = e.clientX;
});

carImg5.addEventListener("pointerup", (e) => {
    const endX5 = e.clientX;
    const swipeDistance5 = endX5 - startX5;

    if (Math.abs(swipeDistance5) < 40) {
        return;
    }

    if (swipeDistance5 < 0) {
        currentImgIndex5++;

        if (currentImgIndex5 >= carImages5.length) {
            currentImgIndex5 = 0;
        }
    } else {
        currentImgIndex5--;

        if (currentImgIndex5 < 0) {
            currentImgIndex5 = carImages5.length - 1;
        }
    }

    updateImage5();
});

const carImages6 = [
    '../pictures/cars/2017subarusample/1.jpg',
    '../pictures/cars/2017subarusample/2.jpg',
    '../pictures/cars/2017subarusample/3.jpg',
    '../pictures/cars/2017subarusample/4.jpg',
    '../pictures/cars/2017subarusample/5.jpg',
    '../pictures/cars/2017subarusample/6.jpg',
    '../pictures/cars/2017subarusample/7.jpg',
    '../pictures/cars/2017subarusample/8.jpg',
    '../pictures/cars/2017subarusample/9.jpg',
    '../pictures/cars/2017subarusample/10.jpg',
    '../pictures/cars/2017subarusample/11.jpg',
    '../pictures/cars/2017subarusample/12.jpg',
    '../pictures/cars/2017subarusample/13.jpg',
];

let currentImgIndex6 = 0;

const carImg6 = document.getElementById('carImage6');
const nextImg6 = document.getElementById('btnNext6');
const prevImg6 = document.getElementById('btnPrev6');
const imgCounter6 = document.getElementById('imgCounter6');
let startX6 = 0;

function updateImage6() {
    carImg6.src = carImages6[currentImgIndex6];
    imgCounter6.textContent = `${currentImgIndex6+1} / ${carImages6.length}`;
};

updateImage6();

nextImg6.addEventListener('click', () => {
    currentImgIndex6++;
    
    if (currentImgIndex6 >= carImages6.length) {
        currentImgIndex6 = 0;
    }

    updateImage6();
});

prevImg6.addEventListener('click', () => {
    currentImgIndex6--;

    if (currentImgIndex6 < 0) {
        currentImgIndex6 = carImages6.length - 1;
    }

    updateImage6();
});


carImg6.addEventListener("pointerdown", (e) => {
    startX6 = e.clientX;
});

carImg6.addEventListener("pointerup", (e) => {
    const endX6 = e.clientX;
    const swipeDistance6 = endX6 - startX6;

    if (Math.abs(swipeDistance6) < 40) {
        return;
    }

    if (swipeDistance6 < 0) {
        currentImgIndex6++;

        if (currentImgIndex6 >= carImages6.length) {
            currentImgIndex6 = 0;
        }
    } else {
        currentImgIndex6--;

        if (currentImgIndex6 < 0) {
            currentImgIndex6 = carImages6.length - 1;
        }
    }

    updateImage6();
});

const carImages7 = [
    '../pictures/cars/2019sonatasample/1.JPG',
    '../pictures/cars/2019sonatasample/2.JPG',
    '../pictures/cars/2019sonatasample/3.JPG',
    '../pictures/cars/2019sonatasample/4.JPG',
    '../pictures/cars/2019sonatasample/5.JPG',
    '../pictures/cars/2019sonatasample/6.JPG',
    '../pictures/cars/2019sonatasample/7.JPG'
];

let currentImgIndex7 = 0;

const carImg7 = document.getElementById('carImage7');
const nextImg7 = document.getElementById('btnNext7');
const prevImg7 = document.getElementById('btnPrev7');
const imgCounter7 = document.getElementById('imgCounter7');
let startX7 = 0;

function updateImage7() {
    carImg7.src = carImages7[currentImgIndex7];
    imgCounter7.textContent = `${currentImgIndex7+1} / ${carImages7.length}`;
};

updateImage7();

nextImg7.addEventListener('click', () => {
    currentImgIndex7++;
    
    if (currentImgIndex7 >= carImages7.length) {
        currentImgIndex7 = 0;
    }

    updateImage7();
});

prevImg7.addEventListener('click', () => {
    currentImgIndex7--;

    if (currentImgIndex7 < 0) {
        currentImgIndex7 = carImages7.length - 1;
    }

    updateImage7();
});


carImg7.addEventListener("pointerdown", (e) => {
    startX7 = e.clientX;
});

carImg7.addEventListener("pointerup", (e) => {
    const endX7 = e.clientX;
    const swipeDistance7 = endX7 - startX7;

    if (Math.abs(swipeDistance7) < 40) {
        return;
    }

    if (swipeDistance7 < 0) {
        currentImgIndex7++;

        if (currentImgIndex7 >= carImages7.length) {
            currentImgIndex7 = 0;
        }
    } else {
        currentImgIndex7--;

        if (currentImgIndex7 < 0) {
            currentImgIndex7 = carImages7.length - 1;
        }
    }

    updateImage7();
});

const carImages8 = [
    '../pictures/cars/2017subarusample/1.jpg',
    '../pictures/cars/2017subarusample/2.jpg',
    '../pictures/cars/2017subarusample/3.jpg',
    '../pictures/cars/2017subarusample/4.jpg',
    '../pictures/cars/2017subarusample/5.jpg',
    '../pictures/cars/2017subarusample/6.jpg',
    '../pictures/cars/2017subarusample/7.jpg',
    '../pictures/cars/2017subarusample/8.jpg',
    '../pictures/cars/2017subarusample/9.jpg',
    '../pictures/cars/2017subarusample/10.jpg',
    '../pictures/cars/2017subarusample/11.jpg',
    '../pictures/cars/2017subarusample/12.jpg',
    '../pictures/cars/2017subarusample/13.jpg',
];

let currentImgIndex8 = 0;

const carImg8 = document.getElementById('carImage8');
const nextImg8 = document.getElementById('btnNext8');
const prevImg8 = document.getElementById('btnPrev8');
const imgCounter8 = document.getElementById('imgCounter8');
let startX8 = 0;

function updateImage8() {
    carImg8.src = carImages8[currentImgIndex8];
    imgCounter8.textContent = `${currentImgIndex8+1} / ${carImages8.length}`;
};

updateImage8();

nextImg8.addEventListener('click', () => {
    currentImgIndex8++;
    
    if (currentImgIndex8 >= carImages8.length) {
        currentImgIndex8 = 0;
    }

    updateImage8();
});

prevImg8.addEventListener('click', () => {
    currentImgIndex8--;

    if (currentImgIndex8 < 0) {
        currentImgIndex8 = carImages8.length - 1;
    }

    updateImage8();
});


carImg8.addEventListener("pointerdown", (e) => {
    startX8 = e.clientX;
});

carImg8.addEventListener("pointerup", (e) => {
    const endX8 = e.clientX;
    const swipeDistance8 = endX8 - startX8;

    if (Math.abs(swipeDistance8) < 40) {
        return;
    }

    if (swipeDistance8 < 0) {
        currentImgIndex8++;

        if (currentImgIndex8 >= carImages8.length) {
            currentImgIndex8 = 0;
        }
    } else {
        currentImgIndex8--;

        if (currentImgIndex8 < 0) {
            currentImgIndex8 = carImages8.length - 1;
        }
    }

    updateImage8();
});
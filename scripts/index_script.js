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

vdBtn2.addEventListener('mouseenter', () => {
    vdBtn2.style.backgroundColor = '#1F71CE';
    vdBtn2.style.color = '#FFFFFF';
    vdIcon2.style.color = '#FFFFFF';
});

vdBtn2.addEventListener('mouseleave', () => {
    vdBtn2.style.backgroundColor = '#FFFFFF';
    vdBtn2.style.color = '#1F71CE';
    vdIcon2.style.color = '#1F71CE';
});

vdBtn3.addEventListener('mouseenter', () => {
    vdBtn3.style.backgroundColor = '#1F71CE';
    vdBtn3.style.color = '#FFFFFF';
    vdIcon3.style.color = '#FFFFFF';
});

vdBtn3.addEventListener('mouseleave', () => {
    vdBtn3.style.backgroundColor = '#FFFFFF';
    vdBtn3.style.color = '#1F71CE';
    vdIcon3.style.color = '#1F71CE';
});

const carImages1 = [
    'pictures/cars/2019sonatasample/1.JPG',
    'pictures/cars/2019sonatasample/2.JPG',
    'pictures/cars/2019sonatasample/3.JPG',
    'pictures/cars/2019sonatasample/4.JPG',
    'pictures/cars/2019sonatasample/5.JPG',
    'pictures/cars/2019sonatasample/6.JPG',
    'pictures/cars/2019sonatasample/7.JPG'
];

let currentImgIndex1 = 0;

const carImg1 = document.getElementById('carImage1');
const nextImg1 = document.getElementById('btnNext1');
const prevImg1 = document.getElementById('btnPrev1');
const imgCounter1 = document.getElementById('imgCounter1');

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

const carImages2 = [
    'pictures/cars/2012acurasample/1.jpg',
    'pictures/cars/2012acurasample/2.jpg',
    'pictures/cars/2012acurasample/3.jpg',
    'pictures/cars/2012acurasample/4.jpg',
    'pictures/cars/2012acurasample/5.jpg',
    'pictures/cars/2012acurasample/6.jpg',
    'pictures/cars/2012acurasample/7.jpg',
    'pictures/cars/2012acurasample/8.jpg',
    'pictures/cars/2012acurasample/9.jpg',
    'pictures/cars/2012acurasample/10.jpg',
    'pictures/cars/2012acurasample/11.jpg',
    'pictures/cars/2012acurasample/12.jpg',
];

let currentImgIndex2 = 0;

const carImg2 = document.getElementById('carImage2');
const nextImg2 = document.getElementById('btnNext2');
const prevImg2 = document.getElementById('btnPrev2');
const imgCounter2 = document.getElementById('imgCounter2');

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

const carImages3 = [
    'pictures/cars/2017subarusample/1.jpg',
    'pictures/cars/2017subarusample/2.jpg',
    'pictures/cars/2017subarusample/3.jpg',
    'pictures/cars/2017subarusample/4.jpg',
    'pictures/cars/2017subarusample/5.jpg',
    'pictures/cars/2017subarusample/6.jpg',
    'pictures/cars/2017subarusample/7.jpg',
    'pictures/cars/2017subarusample/8.jpg',
    'pictures/cars/2017subarusample/9.jpg',
    'pictures/cars/2017subarusample/10.jpg',
    'pictures/cars/2017subarusample/11.jpg',
    'pictures/cars/2017subarusample/12.jpg',
    'pictures/cars/2017subarusample/13.jpg',
];

let currentImgIndex3 = 0;

const carImg3 = document.getElementById('carImage3');
const nextImg3 = document.getElementById('btnNext3');
const prevImg3 = document.getElementById('btnPrev3');
const imgCounter3 = document.getElementById('imgCounter3');

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

const customSelect = document.getElementById("conditionSelect");
const trigger = customSelect.querySelector(".select_trigger");
const selectedText = customSelect.querySelector(".selected_text");
const options = customSelect.querySelectorAll(".select_options li");
const hiddenInput = document.getElementById("vehicleCondition");

trigger.addEventListener("click", () => {
  customSelect.classList.toggle("open");
});

options.forEach(option => {
  option.addEventListener("click", () => {
    selectedText.textContent = option.textContent;
    hiddenInput.value = option.dataset.value;
    selectedText.style.color = 'var(--bs-body-color)';
    selectedText.style.fontWeight = '450';
    selectedText.style.fontSize = '1rem';

    options.forEach(item => item.classList.remove("selected"));
    option.classList.add("selected");

    customSelect.classList.remove("open");
  });
});

document.addEventListener("click", event => {
  if (!customSelect.contains(event.target)) {
    customSelect.classList.remove("open");
  }
});

const carMake = document.getElementById("formMake");
const carYear = document.getElementById("formYear");
const carMileage = document.getElementById("formMileage");
const phoneNum = document.getElementById("formNumber");
const sellForm = document.getElementById("sellForm");

carMake.addEventListener("input", () => {
    carMake.value = carMake.value.replace(/[^a-zA-Z\s-]/g, "");
});

carYear.addEventListener("input", () => {
    carYear.value = carYear.value.replace(/\D/g, "").slice(0, 4);
});

carMileage.addEventListener("input", () => {
    carMileage.value = carMileage.value.replace(/\D/g, "").slice(0, 6);
});

phoneNum.addEventListener("input", () => {
    phoneNum.value = phoneNum.value.replace(/[^0-9\s()+-]/g, "");
});

sellForm.addEventListener("submit", (event) => {
    const carYearValue = Number(carYear.value);
    const currentYear = new Date().getFullYear() + 1;

    const phoneDigits = phoneNum.value.replace(/\D/g, "");

    if (carYearValue < 1950 || carYearValue > currentYear) {
        event.preventDefault();
        alert("Please enter a valid vehicle year.");
        return;
    }

    if (phoneDigits.length < 10) {
        event.preventDefault();
        alert("Please enter a valid phonenumber.");
        return;
    }
});

const fileInput = document.getElementById("formImages");
const photoContainer = document.getElementById("photoContainer");
const clearFilesBtn = document.getElementById("sellCloseBtn");

let selectedFiles = [];

fileInput.addEventListener("change", () => {
    const newFiles = Array.from(fileInput.files);

    if (newFiles.length === 0) {
        return;
    }

    const totalFiles = selectedFiles.length + newFiles.length;

    if (totalFiles > 5) {
        alert("You can upload a maximum of 5 photos.");
        return;
    }

    photoContainer.innerHTML = "";
    selectedFiles.push(...newFiles);
    fileInput.value = "";
    renderPhotos();
});

function renderPhotos() {
    photoContainer.innerHTML = "";

    if (selectedFiles == 0) {
        photoContainer.textContent = "No files chosen";
        clearFilesBtn.classList.remove = "visible";
        return;
    }

    const statusText = document.createElement("div");
    statusText.classList.add("upload_status");
    statusText.textContent = `${selectedFiles.length} photo(s) selected`;

    photoContainer.appendChild(statusText);

    const previewRow = document.createElement("div");
    previewRow.classList.add("preview_row");

    selectedFiles.forEach((file) => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.alt = file.name;
        img.classList.add("preview_img");
        previewRow.appendChild(img);
    });

    photoContainer.appendChild(previewRow);
    clearFilesBtn.classList.add("visible");
}

clearFilesBtn.addEventListener("click", () => {
    selectedFiles = [];
    fileInput.value = "";
    renderPhotos();
});

const repairButton = document.getElementById("rep_btn");
const repairButtonIcon = document.getElementById("rep_icon");

repairButton.style.transition = '0.3s ease';
repairButtonIcon.style.transition = '0.3s ease';

repairButton.addEventListener('mouseenter', () => {
    repairButton.style.backgroundColor = '#1F71CE';
    repairButton.style.color = 'white';
    repairButtonIcon.style.color = 'white';
});

repairButton.addEventListener('mouseleave', () => {
    repairButton.style.backgroundColor = '#ffffff';
    repairButton.style.color = '#1F71CE';
    repairButtonIcon.style.color = '#1F71CE';
});

const repairBtmButton = document.getElementById("rep_btn_btm");
const repairBtmIcon = document.getElementById("rep_icon_btm");

repairBtmButton.style.transition = '0.3s ease';
repairBtmIcon.style.transition = '0.3s ease';

repairBtmButton.addEventListener('mouseenter', () => {
    repairBtmButton.style.backgroundColor = '#ffffff';
    repairBtmButton.style.color = '#1F71CE';
    repairBtmIcon.style.color = '#1F71CE';
});

repairBtmButton.addEventListener('mouseleave', () => {
    repairBtmButton.style.backgroundColor = '#1F71CE';
    repairBtmButton.style.color = '#ffffff';
    repairBtmIcon.style.color = '#ffffff';
});


const faqItems = document.querySelectorAll(".accordion-collapse");

faqItems.forEach((item) => {
    item.addEventListener("show.bs.collapse", () => {
        const button = document.querySelector(`[data-bs-target="#${item.id}"]`);
        const icon = button.querySelector(".faq_icon");

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    });

    item.addEventListener("hide.bs.collapse", () => {
        const button = document.querySelector(`[data-bs-target="#${item.id}"]`);
        const icon = button.querySelector(".faq_icon");

        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    });
});

const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    hamburger.style.display = "none";
    closeMenu.style.display = "block";
    document.body.classList.add("menu_open");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    document.body.classList.remove("menu_open");
});

document.querySelectorAll(".nav_links a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu_open");

        hamburger.style.display = "block";
        closeMenu.style.display = "none";
    });
});
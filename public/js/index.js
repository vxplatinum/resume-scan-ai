const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-upload");
const fileNameLabel = document.getElementById("file-name");

["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
  dropZone.addEventListener(event, (e) => e.preventDefault());
  dropZone.addEventListener(event, (e) => e.stopPropagation());
});

["dragenter", "dragover"].forEach((event) => {
  dropZone.classList.add("dragover");
});

["dragleave", "drop"].forEach((event) => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  if (files.length > 0 && files[0].type === "application/pdf") {
    fileInput.files = files;
    fileNameLabel.textContent = files[0].name;
  } else {
    alert("Please only upload PDF files.");
  }
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file && file.type === "application/pdf") {
    fileNameLabel.textContent = file.name;
  } else {
    alert("Enter a PDF file, please");
  }
});



const burger = document.querySelector(".header__burger")
const burgerMenu = document.querySelector(".burger__menu")

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu-active")
})



document.querySelectorAll(".faq__item").forEach((block) => {
  const decoration = block.querySelector(".faq__decor");

  block.addEventListener("mouseenter", () => {
    const isTablet = window.innerWidth < 1000 && window.innerWidth > 650
    const isMobile = window.innerWidth < 650 && window.innerWidth > 410
    const isSmallMobile = window.innerWidth < 410
    block.style.maxHeight = isTablet ? "190px" : isMobile ? "230px" : isSmallMobile ? "330px" : "150px"
    decoration.style.gap = "10px";
  });

  block.addEventListener("mouseleave", () => {
    block.style.maxHeight = "60px"
    decoration.style.gap = "0px";
  });
});



const scanLoader = document.querySelector(".loader")
const scanForm = document.querySelector(".scan__form")
scanForm.addEventListener("submit", (event) => {
  if (scanForm.checkValidity()) {
    scanLoader.style.display = "flex";
  } else {
    event.preventDefault();
  }
});


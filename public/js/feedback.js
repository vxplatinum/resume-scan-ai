document.querySelectorAll(".radar__information").forEach((block) => {
  const hint = block.querySelector(".radar__hideninfo");
  const decor = block.querySelector(".faq__decor");

  block.addEventListener("mouseenter", () => {
    const isTablet = window.innerWidth < 1000 && window.innerWidth > 650
    const isMobile = window.innerWidth < 650 && window.innerWidth > 400
    const isSmallMobile = window.innerWidth < 400
    hint.style.maxHeight = isTablet ? "175px" : isMobile ? "170px" : isSmallMobile ? "150px" : "120px";
    decor.style.gap = "10px"
  });

  block.addEventListener("mouseleave", () => {
    hint.style.maxHeight = "0px";
    decor.style.gap = "0px"
  });
});




const burgerFeedback = document.querySelector(".header__burger-feedback")
const burgerMenuFeedback = document.querySelector(".burger__menu-feedback")

burgerFeedback.addEventListener("click", () => {
  burgerMenuFeedback.classList.toggle("burger__menu-active-feedback")
})
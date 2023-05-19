window.addEventListener('scroll', function () {
     let header = this.document.querySelector("#header");
     header.classList.toggle("sticky", window.scrollY > 0);
});

const progressBar = document.getElementById("progress-bar")
window.addEventListener('scroll', () => {
     let height = document.body.scrollHeight - window.innerHeight;
     let scrollPosition = document.documentElement.scrollTop;
     let width = (scrollPosition / height) * 100;
     progressBar.style.width = `${width}%`;
})

const slideContainer = {
     origin: "top",
     distance: "56px",
     duration: 2000,
}
const slideHeader = {
     origin: "top",
     distance: "56px",
     duration: 3000,
}
const slideBox = {
     origin: "top",
     distance: "56px",
     duration: 2000,
     interval: 300,
}
ScrollReveal().reveal('.container', slideContainer);
ScrollReveal().reveal('.nav-bar', slideHeader);
ScrollReveal().reveal('.service-box-info', slideBox);
ScrollReveal().reveal('.depoiments-box-info', slideBox);
ScrollReveal().reveal('.complement-container', slideBox);
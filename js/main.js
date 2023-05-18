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
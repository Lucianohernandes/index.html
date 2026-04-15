
const box = document.querySelector(".compare-box");
const after = document.querySelector(".after");

box.addEventListener("mousemove", (e) => {
    let width = e.offsetX;
    after.style.width = width + "px";
});


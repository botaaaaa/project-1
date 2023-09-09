let btn = document.getElementById("btn2");
// window.scroll = function () {
//     if (scrollY >= 500) {
//         btn.classList.remove('.hide')

//     }
//     else {
//         btn.classList.add('.hide')
//     }
// }

btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}
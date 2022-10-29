// Burger Icon Function
let icon = document.querySelector(".icon");
icon.onclick = () => {
    let menu = document.querySelector("header ul");
    let cancel = document.querySelector(".cancel");
    menu.classList.toggle("active");
    cancel.onclick = () => {
        menu.classList.toggle("active");
    }
}


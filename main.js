const menu = document.querySelector(".menu")
const navUl = document.querySelector(".nv-ul")
const header = document.querySelector(".fixed-header")
const form = document.querySelector(".form")
const send = document.querySelector(".send")
const rd = document.querySelector(".review-done")
const btnTheme = document.querySelector(".dark-mode")
const h2 = document.querySelector(".h2")
const p = document.querySelector(".p")
const ms = document.querySelector(".fa-moon")
let counter = 0;

document.body.style.backgroundColor = "#fefefe"

menu.addEventListener("click", () => {
    if (navUl.style.display == "none") {
        navUl.style.display = "block"
        setTimeout(() => navUl.style.opacity = "1", 300)
    } else {
        setTimeout(() => navUl.style.display = "none", 300)
        navUl.style.opacity = "0"
    }
})

function ratings(aspect, index) {
    let component = `<div class="flex-ratings">
                        <span>${aspect}</span>

                        <div class="btns">
                            <button class="btn${index}">1</button>
                            <button class="btn${index}">2</button>
                            <button class="btn${index}">3</button>
                            <button class="btn${index}">4</button>
                            <button class="btn${index}">5</button>
                        </div>
                    </div>`;
    
    form.insertAdjacentHTML("beforeend", component)

    const btns = document.querySelectorAll(".btn1");
    [...btns];

    const btns2 = document.querySelectorAll(".btn2");
    [...btns];

    const btns3 = document.querySelectorAll(".btn3");
    [...btns];

    const btns4 = document.querySelectorAll(".btn4");
    [...btns];

    const btns5 = document.querySelectorAll(".btn5");
    [...btns];

    function events(clickers) {
        clickers.forEach(btn => {
            btn.addEventListener('click', () => {
                clickers.forEach(btn => {
                    btn.classList.remove("increase")
                })
                btn.classList.toggle("increase")

                counter++
                console.log(counter)
            })
        })
    }

    events(btns)
    events(btns2)
    events(btns3)
    events(btns4)
    events(btns5)
}

ratings("Gameplay?", 1)
ratings("Apartado Técnico?", 2)
ratings("Apartado Narrativo?", 3)
ratings("Apartado Sonoro?", 4)
ratings("Apartado Gráfico?", 5)

send.addEventListener("click", () => {
    if (counter >= 15) {
        rd.style.display = "block"
        setTimeout(() => rd.style.opacity = "1", 200)
    }
})

btnTheme.addEventListener('click', () => {
    if (document.body.style.backgroundColor == "rgb(254, 254, 254)") {
        btnTheme.style.backgroundColor = "#0a95e6"
        document.body.style.backgroundColor = "#222222"
        document.body.style.color = "#eeeeee"
        h2.style.color = "#eeeeee"
        p.style.color = "#eeeeee"
        header.style.backgroundColor = "#222222"
        ms.classList.add("fa-sun")
        ms.classList.remove("fa-moon")
        ms.style.color = "#ffff00"
    } else {
        btnTheme.style.backgroundColor = "#142038"
        document.body.style.backgroundColor = "#fefefe"
        document.body.style.color = "#000000"
        header.style.backgroundColor = "#fefefe"
        h2.style.color = "#000000"
        p.style.color = "#000000"
        ms.classList.remove("fa-sun")
        ms.classList.add("fa-moon")
        ms.style.color = "#f4f4f0"
    }

})
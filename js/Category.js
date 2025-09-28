const filterButtons = document.querySelectorAll(".fillter_buttons button")
const filterCards = document.querySelectorAll(".fillter_card .card")


const filterofCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    
    filterCards.forEach(card => {
        card.classList.add("hide")

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterofCards))






function Darktoggle() {
    var element = document.body;
    element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}
function dropdownButtonsAnimation(){
    let dropDownButtons = [
        document.querySelector(".dropdown-start"),
        document.querySelector(".dropdown-who-are"),
        document.querySelector(".dropdown-where-are"),
        document.querySelector(".dropdown-glasses"),
        document.querySelector(".dropdown-aluminums"),
        document.querySelector(".dropdown-accesories"),
        document.querySelector(".dropdown-contact")];

    for(let i = 0; i<dropDownButtons.length;i++){
        dropDownButtons[i].addEventListener("click",()=>{
            dropDownMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
        })

    }

}


let buttonMenu = document.querySelector(".menu-button");
let dropDownMenu = document.querySelector(".dropdown-menu");
let dropDownExitButton = document.querySelector(".dropdown-exit");

buttonMenu.addEventListener("click",()=>{
    dropDownMenu.style.animation = "dropdown-menu-animation 0.5s forwards";
})

dropDownExitButton.addEventListener("click",()=>{
    dropDownMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
})

dropdownButtonsAnimation();



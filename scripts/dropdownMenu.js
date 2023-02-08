function dropdownButtonsAnimation(){
    let dropDownButtons = [
        document.querySelector(".dropdown-start"),
        document.querySelector(".dropdown-who-are"),
        document.querySelector(".dropdown-where-are"),
        document.querySelector(".dropdown-glasses"),
        document.querySelector(".dropdown-aluminums"),
        document.querySelector(".dropdown-windows"),
        document.querySelectorAll(".dropdown-doors")[0],
        document.querySelectorAll(".dropdown-doors")[1],
        document.querySelector(".dropdown-contact")];

    for(let i = 0; i<dropDownButtons.length;i++){
        dropDownButtons[i].addEventListener("click",()=>{

            if(window.matchMedia("(min-width: 600px)").matches){
                dropDownMenu.style.animation = "dropdown-menu-desktop-animation-reverse 0.5s forwards";

            }else{
                document.body.removeChild(backgroundEffect);

                dropDownMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
            }


        })

    }

}

let backgroundEffect = document.createElement("div");

backgroundEffect.style.position = "fixed";
backgroundEffect.style.setProperty("z-index","20");
backgroundEffect.style.top = "0";
backgroundEffect.style.width = "100%"
backgroundEffect.style.height = "100%";
backgroundEffect.style.setProperty("background","#1f1f1fde")



let buttonMenu = document.querySelector(".menu-button");
let dropDownMenu = document.querySelector(".dropdown-menu");
let dropDownExitButton = document.querySelector(".dropdown-exit");

buttonMenu.addEventListener("click",()=>{



    if(window.matchMedia("(min-width: 600px)").matches){

        dropDownMenu.style.animation = "dropdown-menu-desktop-animation 0.5s forwards";

    }else{

        document.body.appendChild(backgroundEffect);
        backgroundEffect.style.animation = "opacity 0.5s forwards";

        dropDownMenu.style.animation = "dropdown-menu-animation 0.5s forwards";
    }


})

dropDownExitButton.addEventListener("click",()=>{


    if(window.matchMedia("(min-width: 600px)").matches){
        
        dropDownMenu.style.animation = "dropdown-menu-desktop-animation-reverse 0.5s forwards";
    }else{

        document.body.removeChild(backgroundEffect);

        dropDownMenu.style.animation = "dropdown-menu-animation-reverse 0.5s forwards";
    }


})

dropdownButtonsAnimation();



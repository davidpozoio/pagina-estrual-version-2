function cloneImgButton(imgButton){
    let image = (imgButton.lastElementChild).lastElementChild;
    let clone = image.cloneNode(true);

    return clone;
}

function showCloneImg (cloneImg){
    cloneImg.style.position = "fixed";
    cloneImg.style.setProperty("z-index","30");
    cloneImg.style.top = "0";
    cloneImg.style.left = "calc(100%/2 - 42%)"
    cloneImg.style.setProperty("border-radius","20px");
    cloneImg.style.width = "85%"

    let buttonExit = document.createElement("fixed");
    buttonExit.style.position = "fixed";
    buttonExit.innerHTML = "X";
    buttonExit.style.display = "flex";
    buttonExit.style.setProperty("justify-content","center");
    buttonExit.style.setProperty("align-items","center");
    buttonExit.style.setProperty("z-index","31");
    buttonExit.style.top = "calc(100%/2 - 39%)";
    buttonExit.style.left = "calc(100%/2 - 20px)";
    buttonExit.style.width = "40px"
    buttonExit.style.height = "40px";
    buttonExit.style.color = "rgba(255, 255, 255, 0.9)"
    buttonExit.style.setProperty("font-size","25px")
    buttonExit.style.setProperty("border-radius","50%")
    buttonExit.style.setProperty("background","#1f1f1f88")
    buttonExit.style.cursor = "pointer"

    document.body.appendChild(buttonExit);
    document.body.appendChild(cloneImg);



    let backgroundEffect = document.createElement("div");

    backgroundEffect.style.position = "fixed";
    backgroundEffect.style.setProperty("z-index","20");
    backgroundEffect.style.top = "0";
    backgroundEffect.style.width = "100%"
    backgroundEffect.style.height = "100%";
    backgroundEffect.style.setProperty("background","#1f1f1fde")

    document.body.appendChild(backgroundEffect);

    backgroundEffect.style.animation = "opacity 0.5s forwards";

    cloneImg.style.animation = "go-down 0.5s forwards"
    buttonExit.style.animation = "opacity 2s forwards";

    buttonExit.addEventListener("click",()=>{
        cloneImg.style.animation = "go-up 0.5s forwards";
        backgroundEffect.style.animation = "opacity-reverse 0.5s forwards";
        buttonExit.style.animation = "opacity-reverse 0.5s forwards";
        
        document.body.removeChild(backgroundEffect);
        document.body.removeChild(buttonExit);
    })
}

let buttonImg = document.querySelectorAll(".button-img");
let cloneImg = new Array();

for(let i = 0; i<buttonImg.length; i++){

    cloneImg[i] = cloneImgButton(buttonImg[i]);

    buttonImg[i].addEventListener("click",()=>{
        showCloneImg(cloneImg[i]);
    })

}
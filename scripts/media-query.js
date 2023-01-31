function changeWidthImg(mywidth){
    for(let i = 0; cloneImg[i] != null; i++){
        cloneImg[i].style.width = mywidth;


    }

  
}

function changeHeigthImg(myheight){
    for(let i = 0; cloneImg[i] != null; i++){
        cloneImg[i].style.height = myheight;


    }
}

function centerImgDesktop(){
    for(let i = 0; cloneImg[i]!=null;i++){
        cloneImg[i].style.left = "calc(50% - "+cloneImg[i].width/2+"px)";

    }
}

function centerImgCellPhone(){
    for(let i = 0; cloneImg[i]!=null;i++){
        cloneImg[i].style.left = "calc(100%/2 - 42%)";        

    }
}

let mediaQuery = window.matchMedia("(min-width: 600px");
let mediaQuery600 = mediaQuery.matches
console.log(mediaQuery600);

window.addEventListener("resize",()=>{
    if(mediaQuery.matches != mediaQuery600){
        mediaQuery600 = mediaQuery.matches;

    }

    
    if(mediaQuery600){     

        changeWidthImg("auto");
        changeHeigthImg("400px");

        centerImgDesktop();        

        
        document.body.removeChild(backgroundEffect);
        dropDownMenu.style.animation = "dropdown-menu-desktop-animation 0.5s forwards";

        console.log(mediaQuery600);
    }else{

        changeWidthImg("85%");
        changeHeigthImg("auto");

        centerImgCellPhone();

        console.log(mediaQuery600);
    }




});



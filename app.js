buttons = document.querySelectorAll(".space")


for(let i=0; i < buttons.length; i++){
    
    let pressed = buttons[i];

    pressed.addEventListener("click", function(){
        console.log(pressed.childNodes.length)
        if(pressed.childNodes.length>1){
            console.log(pressed.hasChildNodes())
        } else {
            let peice = document.createElement("div")
            peice.classList.add("plyrOnePawn")
            pressed.append(peice)
        }
        console.log(pressed.hasChildNodes())
        console.log(pressed.childNodes)
    })

}
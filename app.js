let = buttons = document.querySelectorAll(".space")

let turn = "plyrOnePawn"
let next = "plyrTwoPawn"


for(let i=0; i < buttons.length; i++){
    
    let pressed = buttons[i];

    pressed.addEventListener("click", function(){

        let child = pressed.children[0];
        

        console.log(buttons[i].classList)
        

        if(canMove(pressed)==true && selectClassCorrect(buttons,turn) == true){
            move(child,i,buttons,turn,next)

            if(turn=="plyrOnePawn"){
                next = "plyrOnePawn"
                turn = "plyrTwoPawn"
            } else {
                turn = "plyrOnePawn"
                next = "plyrTwoPawn"
            }

            for(let j = 0; j < buttons.length;j++){
            
                if(buttons[j].classList.contains("selected")){
                    buttons[j].classList.remove("selected")
                } else if(buttons[j].classList.contains("possible")){
                    buttons[j].classList.remove("possible")
                } else if(buttons[j].classList.contains("killSpace")){
                    buttons[j].classList.remove("killSpace")
                }
    
    
            }
        } else {
            select(child,buttons,i,turn,next,pressed)
        }
 
    })

}
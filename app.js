let = buttons = document.querySelectorAll(".space")

let turn = "plyrOnePawn"
let next = "plyrTwoPawn"


for(let i=0; i < buttons.length; i++){
    
    let pressed = buttons[i];

    pressed.addEventListener("click", function(){

        // console.log("pressed",buttons[i])

        let child = pressed.children[0];
        

        // console.log(buttons[i].classList)

        // console.log("Checking Conditionals", canMove(pressed), selectClassCorrect(buttons,turn))
        

        if(canMove(pressed)==true && selectClassCorrect(buttons,turn) == true){
            // console.log("move?")
            move(child,i,buttons,turn,next)

            const loc = locationOnBrd(i)
            const row = loc[0]

            if(row == 0 && turn == "plyrTwoPawn"){
                child.innerHTML = "K"
                child.classList.add("king")
            } else if(row == 7 && turn == "plyrOnePawn"){
                child.innerHTML = "K"
                child.classList.add("king")
            }

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
            select(child,buttons,i,turn,next)
        }
 
    })

}
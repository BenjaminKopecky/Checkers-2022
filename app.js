let = buttons = document.querySelectorAll(".space")


let board = [
    ["00","01","02","03","04","05","06","07"],
    ["08","09","10","11","12","13","14","15"],
    ["16","17","18","19","20","21","22","23"],
    ["24","25","26","27","28","29","30","31"],
    ["32","33","34","35","36","37","38","39"],
    ["40","43","44","43","44","45","46","47"],
    ["48","49","50","51","52","53","54","55"],
    ["56","57","58","59","60","61","62","63"]
]

let turn = "plyrOnePawn"


for(let i=0; i < buttons.length; i++){
    
    let pressed = buttons[i];

    pressed.addEventListener("click", function(){

        let child = pressed.children[0];
        

        console.log(buttons[i].classList)
        

        if(canMove(pressed)==true && selectClassCorrect(buttons,turn) == true){
            move(child,buttons,turn)

            if(turn=="plyrOnePawn"){
                turn = "plyrTwoPawn"
            } else {
                turn = "plyrOnePawn"
            }

            for(let j = 0; j < buttons.length;j++){
            
                if(buttons[j].classList.contains("selected")){
                    buttons[j].classList.remove("selected")
                } else if(buttons[j].classList.contains("possible")){
                    buttons[j].classList.remove("possible")
                }
    
    
            }
        } else {
            select(child,buttons,i)
        }
 
    })

}
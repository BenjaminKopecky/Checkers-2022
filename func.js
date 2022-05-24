// This document contains all the functions used in the main js file (app.js) //

function canMove(pressed){
    if(pressed.classList.contains("possible")){
        return true
    } else {
        return false
    }
    
}

function move(child,buttons,turn){
    
    child.classList.add(turn)
    for(let n=0; n<buttons.length; n++){
        if(buttons[n].classList.contains("selected")){
            buttons[n].children[0].classList.remove(turn)
        }
    }

}

function select(child,buttons,i,selected){
    if(child.classList.contains("plyrOnePawn") == true || child.classList.contains("plyrTwoPawn") == true){
        
        buttons[i].classList.add("selected")

        if(selected.row == (board[0].length)-1 && selected.column == 0){

            if(buttons[i-7].children[0].classList.contains("plyrOnePawn") == false && buttons[i-7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-7].classList.add("possible")
            }
        }else if( selected.row == 0 && selected.column == (board.length - 1)){

            if(buttons[i+7].children[0].classList.contains("plyrOnePawn") == false && buttons[i+7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+7].classList.add("possible")
            }

        }else if(selected.row == 0){

            if(buttons[i+9].children[0].classList.contains("plyrOnePawn") == false && buttons[i+9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+9].classList.add("possible")
            }
            if(buttons[i+7].children[0].classList.contains("plyrOnePawn") == false && buttons[i+7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+7].classList.add("possible")
            }

        } else if(selected.row == (board[0].length)-1){

            if(buttons[i-9].children[0].classList.contains("plyrOnePawn") == false && buttons[i-9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-9].classList.add("possible")
            }
            if(buttons[i-7].children[0].classList.contains("plyrOnePawn") == false && buttons[i-7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-7].classList.add("possible")
            }

        } else if(selected.column == 0){

            if(buttons[i+9].children[0].classList.contains("plyrOnePawn") == false && buttons[i+9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+9].classList.add("possible")
            }
            if(buttons[i-7].children[0].classList.contains("plyrOnePawn") == false && buttons[i-7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-7].classList.add("possible")
            }

        }else if(selected.column == (board[0].length)-1){
            
            if(buttons[i-9].children[0].classList.contains("plyrOnePawn") == false && buttons[i-9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-9].classList.add("possible")
            }
            if(buttons[i+7].children[0].classList.contains("plyrOnePawn") == false && buttons[i+7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+7].classList.add("possible")
            }

        } else {

            if(buttons[i-9].children[0].classList.contains("plyrOnePawn") == false && buttons[i-9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-9].classList.add("possible")
            }
            if(buttons[i+9].children[0].classList.contains("plyrOnePawn") == false && buttons[i+9].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+9].classList.add("possible")
            }
            if(buttons[i-7].children[0].classList.contains("plyrOnePawn") == false && buttons[i-7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i-7].classList.add("possible")
            }
            if(buttons[i+7].children[0].classList.contains("plyrOnePawn") == false && buttons[i+7].children[0].classList.contains("plyrTwoPawn") == false){
                buttons[i+7].classList.add("possible")
            }

        }
    }
}

console.log("func")
// This document contains all the functions used in the main js file (app.js) //

// function noneSelected(buttons,i){
//     for(let i = 0; i<buttons.length;i++){
//         if(buttons[i].classList.contains("selected")==true){
//             return false
//         }
//     }
//     return true
// }

function selectClassCorrect(buttons,turn){
    // let selected
    for(let i = 0; i<buttons.length;i++){
        if(buttons[i].classList.contains("selected") == true && buttons[i].children[0].classList.contains(turn)){
            return true
        }
    }

    return false

}

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

function select(child,buttons,i){

    if(buttons[i].classList.contains("selected") == false){
        for(let j = 0; j < buttons.length;j++){
            
            if(buttons[j].classList.contains("selected")){
                buttons[j].classList.remove("selected")
            } else if(buttons[j].classList.contains("possible")){
                buttons[j].classList.remove("possible")
            }


        }
    }

    if(child.classList.contains("plyrOnePawn") == true || child.classList.contains("plyrTwoPawn") == true){
        
        let selected = {
            row   : 0,
            column: 0,
        }

        if(i>55){
            selected.row = 7;
            selected.column=(i-56)
            console.log(selected.row,selected.column);
        } else if(i>47){
            selected.row = 6;
            selected.column=(i-48)
            console.log(selected.row,selected.column);
        } else if(i>39){
            selected.row = 5;
            selected.column=(i-40)
            console.log(selected.row,selected.column);
        } else if(i>31){
            selected.row = 4;
            selected.column=(i-32)
            console.log(selected.row,selected.column);
        } else if(i>23){
            selected.row = 3;
            selected.column=(i-24)
            console.log(selected.row,selected.column);
        } else if(i>15){
            selected.row = 2;
            selected.column=(i-16)
            console.log(selected.row,selected.column);
        } else if(i>7){
            selected.row = 1;
            selected.column=(i-8)
            console.log(selected.row,selected.column);
        } else {
            selected.row = 0;
            selected.column=(i)
            console.log(selected.row,selected.column);
        };

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
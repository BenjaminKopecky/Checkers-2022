

buttons = document.querySelectorAll(".space")


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
    let selected = {
        row   : 0,
        column: 0,
    }

    pressed.addEventListener("click", function(){

        let child = pressed.children[0];

        if(canMove(pressed)==true){
            move(child,buttons,turn)

            if(turn=="plyrOnePawn"){
                turn = "plyrTwoPawn"
            } else {
                turn = "plyrOnePawn"
            }
        
        }

        // board calculation //
        console.log(i)
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

        // peice GUI //

        console.log(buttons[i].classList)

        if(buttons[i].classList.contains("selected") == false){
            for(let j = 0; j < buttons.length;j++){
                
                if(buttons[j].classList.contains("selected")){
                    buttons[j].classList.remove("selected")
                } else if(buttons[j].classList.contains("possible")){
                    buttons[j].classList.remove("possible")
                }


            }
        }

        select(child,buttons,i,selected)


        // Peice Movement //

            // function newSelection(){
                
            // }
        
        

        
        lastPressed = pressed
    })

}
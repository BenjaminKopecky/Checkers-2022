// This document contains all the functions used in the main js file (app.js) //


function selectClassCorrect(buttons,turn){
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

function move(child,i,buttons,turn,next){
    const check = [-14,-18,14,18]

    for(let b=0; b<buttons.length; b++){
        
        if(buttons[b].classList.contains("selected")){

            if(buttons[b].children[0].classList.contains("king")){
                child.classList.add(turn)
                child.classList.add("king")
                child.innerHTML = "K"
                console.log("bigmack")
            }else{
                child.classList.add(turn)
                console.log("cheeseburger")
            }
        }
    }

    for(let c = 0; c<check.length; c++){
        // console.log(check[c])

        try{

            if(buttons[i - check[c]].classList.contains("selected") == true){
                buttons[i - (check[c])/2].children[0].classList.remove(next)
            }
        } catch {

        }
    }
    
    for(let n=0; n<buttons.length; n++){
        if(buttons[n].classList.contains("selected")){
            buttons[n].children[0].classList.remove(turn)
            if(buttons[n].children[0].classList.contains("king")){
                buttons[n].children[0].classList.remove("king")
                buttons[n].children[0].innerHTML = ""
            }
        }
    }

}

function locationOnBrd(i){
    let selected = {
        row   : 0,
        column: 0,
    }

    if(i>55){
        selected.row = 7;
        selected.column=(i-56)
        // console.log(selected.row,selected.column);
    } else if(i>47){
        selected.row = 6;
        selected.column=(i-48)
        // console.log(selected.row,selected.column);
    } else if(i>39){
        selected.row = 5;
        selected.column=(i-40)
        // console.log(selected.row,selected.column);
    } else if(i>31){
        selected.row = 4;
        selected.column=(i-32)
        // console.log(selected.row,selected.column);
    } else if(i>23){
        selected.row = 3;
        selected.column=(i-24)
        // console.log(selected.row,selected.column);
    } else if(i>15){
        selected.row = 2;
        selected.column=(i-16)
        // console.log(selected.row,selected.column);
    } else if(i>7){
        selected.row = 1;
        selected.column=(i-8)
        // console.log(selected.row,selected.column);
    } else {
        selected.row = 0;
        selected.column=(i)
        // console.log(selected.row,selected.column);
    };

    return [selected.row,selected.column]
}

function decideSpace(i,child,turn){

    const cordnets = locationOnBrd(i)
        const col = cordnets[1]

        // console.log(cordnets,"cords")

        const posMoveVal = [-7,-9,7,9]
        let moveVal = []
        let atckVal = []

        if(child.classList.contains("plyrTwoPawn")){
            console.log("up")
        } else {
            console.log("down")
        }

        let placeVal = [[],[]]

        // console.log("innerHTML",child.innerHTML)
        
        if(child.innerHTML == "K"){

            moveVal = posMoveVal
            
            for(let t = 0; t<posMoveVal.length; t++){
                atckVal.push(placeVal[t]*2)
            }

            if(col < 1){
                placeVal[0].push(moveVal[1],moveVal[2])
            } else if(col > 6){
                placeVal[0].push(moveVal[0],moveVal[3])
            } else {
                placeVal[0] = moveVal
            }

            if(col > 5) {
                placeVal[1].push(atckVal[0],atckVal[3])
            } else if(col < 2){
                placeVal[1].push(atckVal[1],atckVal[2])
            } else {
                placeVal[1] = atckVal
            }

        } else {

            // console.log(turn)

            if(turn == "plyrTwoPawn"){
                // console.log("moveset black")
                moveVal.push(posMoveVal[3],posMoveVal[2])
                atckVal.push((posMoveVal[3]*2),(posMoveVal[2]*2))

            } else {
                // console.log("moveset white")
                moveVal.push(posMoveVal[0],posMoveVal[1])
                atckVal.push((posMoveVal[0]*2),(posMoveVal[1]*2))
            }

            if(col < 1){
                placeVal[0].push(moveVal[1])
            } else if(col > 6){
                placeVal[0].push(moveVal[0])
            } else {
                placeVal[0] = moveVal
            }

            if(col > 5) {
                placeVal[1].push(atckVal[0])
            } else if(col < 2){
                placeVal[1].push(atckVal[1])
            } else {
                placeVal[1] = atckVal
            }
        } 

        // console.log("placeval", placeVal)

        return placeVal

}




function select(child,buttons,i,turn,next,pressed){

    if(buttons[i].classList.contains("selected") == false){
        for(let j = 0; j < buttons.length;j++){
            
            if(buttons[j].classList.contains("selected")){
                buttons[j].classList.remove("selected")
            } else if(buttons[j].classList.contains("possible")){
                buttons[j].classList.remove("possible")
            } else if(buttons[j].classList.contains("killSpace")){
                buttons[j].classList.remove("killSpace")
            }


        }
    }

    if(child.classList.contains("plyrOnePawn") == true || child.classList.contains("plyrTwoPawn") == true){

        let placeVal = decideSpace(i,child,turn)

        buttons[i].classList.add("selected")

        // const posMoveVal = [-7,-9,7,9]
        // let moveVal = []

        if(child.classList.contains("plyrTwoPawn")){
            // moveVal.add(posMoveVal[0],posMoveVal[1])
            console.log("up")
        } else {
            // moveVal.add(posMoveVal[2],posMoveVal[3])
            console.log("down")
        }

        const atckVal = [-14,-18,14,18]

        let places = []
        let kill = []

        for(let v = 0; v < placeVal[0].length;v++){

            let dex = placeVal[0][v]

            try {

                if(buttons[i-dex].children[0].classList.contains(turn) == false && buttons[i-dex].children[0].classList.contains(next) == false){
                    places.push(i-dex)
                } else if(buttons[i-dex].children[0].classList.contains(next) == true && buttons[i-placeVal[1][v]].children[0].classList.contains(next) == false && buttons[i-placeVal[1][v]].children[0].classList.contains(turn) == false){
                    places.push(i-placeVal[1][v])
                    kill.push(i-dex)
                }

            } catch(err){
                
                console.log("value not possible",placeVal[0][v])
                console.log(err,"error msg")
                
            }
        }

        for(let p = 0; p < places.length; p++){
                buttons[places[p]].classList.add("possible")
        }
        for(let k = 0; k < kill.length; k++){
            buttons[kill[k]].classList.add("killSpace")
        }

    }
}

console.log("func")
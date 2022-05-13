buttons = document.querySelectorAll(".space")


let board = [
    ["a1","a2","a3","a4"],
    ["b1","b2","b3","b4"],
    ["c1","c2","c3","c4"],
    ["d1","d2","d3","d4"]
];


for(let i=0; i < buttons.length; i++){
    
    let pressed = buttons[i];

    pressed.addEventListener("click", function(){

        
        let child = pressed.children[0];
        console.log(pressed.classList.contains("plySpace"))

        if(child.classList.contains("plyrOnePawn")== true){
            child.classList.remove("plyrOnePawn");
            child.classList.add("plyrTwoPawn");
        } else if(child.classList.contains("plyrTwoPawn")== true){
            child.classList.remove("plyrTwoPawn");
            child.classList.add("plyrOnePawn");
        } else if(pressed.classList.contains("plySpace") == true) {
            child.classList.add("plyrOnePawn");
        }

    })

}
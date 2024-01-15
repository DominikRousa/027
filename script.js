const last = ["circle"]

function setBlock(value){
    
    if(last == "circle"){
        document.getElementById(value).innerHTML = "X";
        last.length = 0
        last.push("cross")
    } else if(last == "cross") {
        document.getElementById(value).innerHTML = "O";
        last.length = 0
        last.push("circle")
    }
}
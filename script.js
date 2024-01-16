const last = ["circle"]

function setBlock(value){

    if( document.getElementById(value).innerHTML.trim() == ""|| document.getElementById(value).innerHTML.trim() == "" ){
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
    
}

function resetall(){
    document.getElementById("a").innerHTML = "";
    document.getElementById("b").innerHTML = "";
    document.getElementById("c").innerHTML = "";
    document.getElementById("d").innerHTML = "";
    document.getElementById("e").innerHTML = "";
    document.getElementById("f").innerHTML = "";
    document.getElementById("g").innerHTML = "";
    document.getElementById("h").innerHTML = "";
    document.getElementById("i").innerHTML = "";
}

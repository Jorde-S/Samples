var selectedPeg;
var selectedBlank;
var blankID = "";
var remainingPegs;

window.addEventListener("DOMContentLoaded", function(){
    setBlank(false);
    console.log(selectedPeg);
    let pegs = document.querySelectorAll(".peg");
    for(let i = 0; i < pegs.length; i++){
        let num = parseInt(pegs[i].id.split("g")[1]);
        if(pegs[i].textContent != "X"){
            if(num % 3 == 0){
                pegs[i].style.color = "blue";
            }
            else if(num % 2 ==0){
                pegs[i].style.color = "red";
            }
            else{
                pegs[i].style.color = "green";
            }
        }
        pegs[i].addEventListener("click", function(e){
            if(pegs[i].textContent == "O"){
                selectedPeg = pegs[i];
                console.log(selectedPeg.id);
            }
            else if(pegs[i].textContent == "X" && selectedPeg != undefined){
                selectedBlank = pegs[i];
                console.log(selectedBlank.id);
                let pegRowNum = parseInt(selectedPeg.classList[0].split("w")[1]);
                let blankRowNum = parseInt(selectedBlank.classList[0].split("w")[1]);
                console.log(pegRowNum + " " + blankRowNum);
                //determine if move is valid and execute it if so.
                //I may have overcomplicated this.
                if(pegRowNum == blankRowNum){
                    let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                    let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                
                    if(blankNum > pegNum){
                        let checkNum = pegNum + 1;
                        console.log(checkNum);
                        let checkPegID = "#peg" + checkNum;
                        let checkPeg = document.querySelector(checkPegID);
                        if(checkPeg.textContent == "O"){
                            //alert("valid move");
                            selectedBlank.textContent = "O";
                            selectedPeg.textContent = "X"
                            checkPeg.textContent = "X";
                            console.log(selectedPeg.style.getPropertyValue("color"));
                            selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                            let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                            console.log(checkPeg.textContent);
                            remainingPegs--;
                            selectedBlank = undefined;
                            selectedPeg = undefined;
                        }
                    }
                    else{
                        let checkNum = pegNum - 1;
                        console.log(checkNum);
                        let checkPegID = "#peg" + checkNum;
                        let checkPeg = document.querySelector(checkPegID);
                        if(checkPeg.textContent == "O"){
                            //alert("valid move");
                            selectedBlank.textContent = "O";
                            selectedPeg.textContent = "X"
                            checkPeg.textContent = "X";
                            console.log(selectedPeg.style.getPropertyValue("color"));
                            selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                            let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                            console.log(checkPeg.textContent);
                            remainingPegs--;
                            selectedBlank = undefined;
                            selectedPeg = undefined;
                        }
                    }
                }
                else if(Math.abs(pegRowNum - blankRowNum == 1)){
                    alert("Invalid Move!");
                }
                else if(Math.abs(pegRowNum - blankRowNum) == 2){
                    if(selectedPeg.classList.contains("left")){
                        console.log("left");
                        if(pegRowNum > blankRowNum){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum - (pegRowNum - 1);
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                        }
                        else{
                            if(selectedBlank.classList.contains("left")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + pegRowNum;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                            else if(selectedBlank.classList.contains("mid") || selectedBlank.classList.contains("right")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + pegRowNum + 1;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                                    console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                        }
                    }
                    else if(selectedPeg.classList.contains("right")){
                        console.log("right");
                        if(pegRowNum > blankRowNum){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum - pegRowNum;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                                    console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                        }
                        else{
                            if(selectedBlank.classList.contains("right")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + pegRowNum + 1;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                                    console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                            else if(selectedBlank.classList.contains("mid") || selectedBlank.classList.contains("left")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + pegRowNum;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                        }
                    }
                    else if(selectedPeg.classList.contains("mid")){
                        console.log("mid");
                        if(selectedBlank.classList.contains("mid")){
                            alert("Invalid Move!");
                            return;
                        }
                        if(pegRowNum > blankRowNum){
                            if(selectedBlank.classList.contains("left")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum - pegRowNum;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                            else if(selectedBlank.classList.contains("right")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum - (pegRowNum - 1);
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                                    console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                        }
                        else{
                            if(selectedBlank.classList.contains("left")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + pegRowNum;
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                                    console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                            else if(selectedBlank.classList.contains("right")){
                                let pegNum = parseInt(selectedPeg.id.split("g")[1]);
                                let blankNum = parseInt(selectedBlank.id.split("g")[1]);
                                let checkNum = pegNum + (pegRowNum + 1);
                                console.log(checkNum);
                                let checkPegID = "#peg" + checkNum;
                                let checkPeg = document.querySelector(checkPegID);
                                if(checkPeg.textContent == "O"){
                                    //alert("valid move");
                                    selectedBlank.textContent = "O";
                                    selectedPeg.textContent = "X"
                                    checkPeg.textContent = "X";
                                    console.log(selectedPeg.style.getPropertyValue("color"));
                                    selectedBlank.style.color = selectedPeg.style.getPropertyValue("color");
                                    let myColor = selectedBlank.style.getPropertyValue("color");
                            console.log(myColor);
                            selectedPeg.style.color = "black";
                            checkPeg.style.color = "black";
                                    console.log(checkPeg.textContent);
                                    remainingPegs--;
                                    selectedBlank = undefined;
                                    selectedPeg = undefined;
                                }
                                else{
                                    alert("Invalid Move!");
                                }
                            }
                        }
                    }
                }

                console.log(gameOver(pegs));
                
                if(gameOver(pegs)){
                    let con = document.querySelector("#container");
                    con.style.display = "block";
                    let remain = document.querySelector(".remain");
                    let result = document.querySelector(".result");
                    if(remainingPegs == 1){
                        remain.textContent = "Remaining pegs: " + remainingPegs;
                        result.textContent = "Victory!";
                    }
                    else if(remainingPegs == 2){
                        remain.textContent = "Remaining pegs: " + remainingPegs;
                        result.textContent = "So close! Try again!";
                    }
                    else if(remainingPegs == 3){
                        remain.textContent = "Remaining pegs: " + remainingPegs;
                        result.textContent = "You are improving! Try again!";
                    }
                    else if(remainingPegs >= 4){
                        remain.textContent = "Remaining pegs: " + remainingPegs;
                        result.textContent = "Better luck next time!";
                    }
                }
            }
        })
    }

    let resetBtn = this.document.querySelector("#reset");
    resetBtn.addEventListener("click", function(){
        reset(false);
    });

    let newBtn = this.document.querySelector("#new");
    newBtn.addEventListener("click", function(){
        reset(true);
    })

    let close = this.document.querySelector("#close");
    close.addEventListener("click", function(){
        let con = document.querySelector("#container");
        con.style.display = "none";
    })
})

function setBlank(randomize){
    remainingPegs = 14;
    if(randomize){
        let pegs = document.querySelectorAll(".peg");
    let blank = Math.floor(Math.random() * 15 + 1);
    blankID = "#peg" + blank;
    let blankPeg = document.querySelector(blankID);
    blankPeg.textContent = "X";
    blankPeg.style.color = "black";
    }
    else{
        let pegs = document.querySelectorAll(".peg");
    let blank = 1;
    blankID = "#peg" + blank;
    let blankPeg = document.querySelector(blankID);
    blankPeg.textContent = "X";
    blankPeg.style.color = "black";
    }
}

function gameOver(pegs){
    for(let i = 0; i < pegs.length; i++){
        if(pegs[i].textContent == "O"){
            let pegRowNum = parseInt(pegs[i].classList[0].split("w")[1]);
        let pegNum = parseInt(pegs[i].id.split("g")[1]);
        let checkNum = pegNum + pegRowNum;
        let checkRow = 0;
        let rowDiff = 0;
        console.log(checkNum);
        let checkPegID = "#peg" + checkNum;
        let checkPeg = document.querySelector(checkPegID);
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        rowDiff = Math.abs(checkRow - pegRowNum);
        if(checkPeg != null && checkPeg.textContent == "O" && rowDiff == 1){
            console.log("!");
            return false;
        }
        checkNum = pegNum + pegRowNum + 1;
        console.log(checkNum);
        checkPegID = "#peg" + checkNum;
        checkPeg = document.querySelector(checkPegID);
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        rowDiff = Math.abs(checkRow - pegRowNum);
        if(checkPeg != null && checkPeg.textContent == "O" && rowDiff == 1){
            console.log("?");
            return false;
        }
        checkNum = pegNum - (pegRowNum - 1);
        console.log(checkNum);
        checkPegID = "#peg" + checkNum;
        checkPeg = document.querySelector(checkPegID);
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        rowDiff = Math.abs(checkRow - pegRowNum);
        if(checkPeg != null && checkPeg.textContent == "O" && rowDiff == 1){
            console.log("#");
            return false;
        }
        checkNum = pegNum - pegRowNum;
        console.log(checkNum);
        checkPegID = "#peg" + checkNum;
        checkPeg = document.querySelector(checkPegID);
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        rowDiff = Math.abs(checkRow - pegRowNum);
        if(checkPeg != null && checkPeg.textContent == "O" && rowDiff == 1){
            console.log("...");
            return false;
        }
        }
    }

    for(let i = 0; i < pegs.length; i++){
        if(pegs[i].textContent == "O"){
            let pegRowNum = parseInt(pegs[i].classList[0].split("w")[1]);
            let pegNum = parseInt(pegs[i].id.split("g")[1]);
        let checkNum = 0;
        let checkPegID = "";
        checkNum = pegNum + 1;
        console.log(checkNum);
        checkPegID = "#peg" + checkNum;
        let checkPeg = document.querySelector(checkPegID);
        let checkRow = 0;
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        if(checkPeg != null && checkRow == pegRowNum && checkPeg.textContent == "O"){
            console.log("AAAAAAAAAA");
            let inRow = 0;
            for(let j = 0; j < pegs.length; j++){
                let jRowNum = parseInt(pegs[j].classList[0].split("w")[1]);
                if(pegs[j].textContent == "O" && jRowNum == pegRowNum){
                    inRow++;
                    if(inRow >= pegRowNum){
                        return true;
                    }
                }
            }
            return false;
        }
        checkNum = pegNum - 1;
        console.log(checkNum);
        checkPegID = "#peg" + checkNum;
        checkPeg = document.querySelector(checkPegID);
        checkRow = 0;
        if(checkNum <= 15 && checkNum >= 1){
            checkRow = parseInt(checkPeg.classList[0].split("w")[1]);
        }
        if(checkPeg != null && checkRow == pegRowNum && checkPeg.textContent == "O"){
            console.log("7");
            let inRow = 0;
            for(let j = 0; j < pegs.length; j++){
                let jRowNum = parseInt(pegs[j].classList[0].split("w")[1]);
                if(pegs[j].textContent == "O" && jRowNum == pegRowNum){
                    inRow++;
                    if(inRow >= pegRowNum){
                        return true;
                    }
                }
            }
            return false;
        }
        }
    }

    return true;
}

function reset(randomize){
    let pegs = document.querySelectorAll(".peg");
    console.log("hi");
    if(randomize){
        for(let i = 0; i < pegs.length; i++){
            let num = parseInt(pegs[i].id.split("g")[1]);
            if(num % 3 == 0){
                pegs[i].style.color = "blue";
            }
            else if(num % 2 ==0){
                pegs[i].style.color = "red";
            }
            else{
                pegs[i].style.color = "green";
            }
        pegs[i].textContent = "O";
        }
        setBlank(true);
    }
    else{
        for(let i = 0; i < pegs.length; i++){
            let num = parseInt(pegs[i].id.split("g")[1]);
                if(num % 3 == 0){
                    pegs[i].style.color = "blue";
                }
                else if(num % 2 ==0){
                    pegs[i].style.color = "red";
                }
                else{
                    pegs[i].style.color = "green";
                }
            pegs[i].textContent = "O";
        }
        setBlank(false);
    }
}
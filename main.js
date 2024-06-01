
let computerNum =0

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver=false;
let history=[];
resetButton.addEventListener("click",reset)
playButton.addEventListener("click",play);
userInput.addEventListener("focus", function(){
    userInput.value="";
})

console.log(playButton);

function pickRandomNum(){
    computerNum=Math.floor(Math.random()*100)+1
    console.log("정답",computerNum);
}
function play(){
    let userValue = userInput.value ;
    if (userValue <1 || userValue > 100){
        resultArea.textContent="범위값을 벗어났습니다";
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다";
        return;
    }
    chance --;
    chanceArea.textContent = `남은기회:${chance}번`;
    console.log("chance",chance);
    if (userValue < computerNum){
        resultArea.textContent = "UP";
    }else if (userValue > computerNum){
        resultArea.textContent = "DOWN";
    }else {
        resultArea.textContent="정답";
        gameover=true;
    }

    history.push(userValue);
    console.log(history);
    if (chance < 1){
        gameOver = true;
    }
    if (chance == true){
        playButton.disabled = true;
    }
}
function reset(){
    userInput.Value = "";
    pickRandomNum();
    resultArea.textContent="새로운 번호 생성";
}
pickRandomNum();
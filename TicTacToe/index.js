let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#over");
let newGameBtn=document.querySelector("#new-btn");
let winnerMsg=document.querySelector(".winner");
let msg=document.querySelector("#msg");


let turnX = false;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//RESET GAME
const resetGame=()=>{
  turnX=false;
  enableBoxes();
  winnerMsg.classList.add("hide");

}

//winner msg display when anyone win
const winnerMessage=(winner)=>{
  msg.innerText=`Winner is ${winner}`;
  winnerMsg.classList.remove("hide");
}

reset.addEventListener("click",resetGame);  //on click resetgame it reset the game
newGameBtn.addEventListener("click",resetGame);  //on click newgame start


// write X and O in boxes
boxes.forEach((bx) => {
  bx.addEventListener("click", () => { // when clicked arrow function execute
    if (turnX === false) {
      bx.innerText = "X";
      bx.style.color = "#000"
      turnX = true;
    } else {
      bx.innerText = "O";
      bx.style.color = "#9b2226"
      turnX = false;
    }
    bx.disabled = true; // it disable the button if once clicked
    checkWinner(); //create a fn to check winner
  });
})

//disable fn when winner then all buttton are disabled
const disableBoxes = () => {
  for (let it of boxes)
    it.disabled = true;
}

//for enable for new game
const enableBoxes=()=>{
  for(let it of boxes){
    it.disabled=false;
    it.innerText="";  //set value to null remove X,O
  }
}

// check winner condition
const checkWinner = () => {
  for (it of winPattern) { //go to all array of arr winPattern

    //boxes[it[0]] give which button is click and innerText give what text
    let val1 = boxes[it[0]].innerText;
    let val2 = boxes[it[1]].innerText;
    let val3 = boxes[it[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        disableBoxes();  //call disble fn
        // console.log(`Winnner is ${val1}`);
        winnerMessage(val1);
      }
    }
  }
}
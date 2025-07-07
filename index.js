let boxes = document.querySelectorAll(".box");
let reserbtn = document.querySelector("#ag");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let amit=document.querySelector(".ami")
let turn0 = true;

const winpatern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{
  turn0=true;
  enebleboxes();
  msgcontainer.classList.add("hide");
  amit.classList.remove("hello")

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click");
   if(turn0==true){
    box.innerText="0";
    turn0=false;
   }
   else{
    box.innerText="x";
    turn0=true;
   }
   box.disable=true;
   cheakwinner();

   
  });
});
const enebleboxes=()=>{
  for(let box of boxes){
    box.disable=false;
    box.innerText="";
  }
}
const disableboxes=()=>{
  for(let box of boxes){
    box.disable=true;
  }
}
const showwinner=(winner)=>{
  msg.innerText=`congratulation, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
  amit.classList.add("hello");

}
const cheakwinner = () => {
    for(let pat of winpatern){
     let pos1val=boxes[pat[0]].innerText;
     let pos2val=boxes[pat[1]].innerText;
     let pos3val=boxes[pat[2]].innerText;
     if (pos1val!=""&&pos2val!=""&&pos3val!=""){
      if(pos1val==pos2val&&pos2val==pos3val)

        showwinner(pos1val);

     }

    }
   }
   newgamebtn.addEventListener("click",resetgame);
    reserbtn.addEventListener("click",resetgame);

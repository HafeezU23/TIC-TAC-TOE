let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#message");
let turnO = true; //playerx and playero
 const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

 const resetGame=()=>{
    turnO=true
    enableBoxes();
    msgContainer.classList.add("hide");
  };

 btns.forEach((btn) => {
    btn.addEventListener("click", () => {
              if(turnO){
                btn.innerText="O";
                turnO=false;
              }
              else{
                btn.innerText="X";
                turnO=true;
              }
              btn.disabled=true;

              checkWinner();
    });
     
 });
 
 const disableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
 };

 const enableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
 }
 const showWinner=(winner)=>{
    msg.innerText=`Congragualtions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };
 const showDraw=()=>{
    msg.innerText="Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
 }
 const checkWinner=()=>{
         let filledBoxes=0;
          for(let pattern of winPattern){
              let pos1val= btns[pattern[0]].innerText;
              let pos2val= btns[pattern[1]].innerText;
              let pos3val= btns[pattern[2]].innerText;

              if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val===pos2val && pos2val===pos3val){
    
                    showWinner(pos1val);
                    return;
                }
                
              }
          }
          for(let btn of btns){
            if(btn.innerText!=""){
               filledBoxes++;
            }
              
          }
          if(filledBoxes===9){
              showDraw();
          }
            
 };

 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click", resetGame);
  
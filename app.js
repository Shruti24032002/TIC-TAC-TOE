let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");
let msg=document.querySelector("#msg");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5]

];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0===true){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;


        }
        box.disabled=true;
        checkWinner();

    });
});
const showWinner=(winner)=>{
    msg.innerText="congratulations,Winner is ${winner}";
    msg.classList.remove("hide");

}




const checkWinner= () =>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}

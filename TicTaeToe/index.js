let boxes=document.querySelectorAll('.box');
let reset=document.querySelectorAll('.reset');
var winner=document.querySelector('#winner');
var winnerContainer=document.querySelector('.winnerContainer');
var player0name=prompt("0 Player name");
var playerXname=prompt("X Player name");
var player0=true;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


var count= 0;

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(player0){
        this.innerHTML="0";
        player0=false;
    }else{
        this.innerHTML="X";
        player0=true;
    }
    box.disabled=true;
    count++;
    console.log(count);
    checkwinner();
})
})



function checkwinner(){
   
    for(pattern of winPattern){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            
    if(pos1Val !=""  && pos2Val !="" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
        winnerContainer.classList.add('show');
           if(pos1Val=="0"){
            printWinner(player0name);
            disableboxes();
           }else{
            printWinner(playerXname);
            disableboxes();
           }
        }
    }
    }
}

function disableboxes(){
    for(box of boxes){
        box.disabled=true;
    }
}

function printWinner(win){
    winner.innerHTML="Winner is "+win;
}




reset.forEach(resetbtn => {
    resetbtn.addEventListener("click",function(){
        boxes.forEach((box)=>{
                 box.innerHTML="";
                 box.disabled=false;
                 winnerContainer.classList.remove('show');
        }); 
    });
});

let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["red","blue","green","yellow"];
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
if (started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout (function(){
btn.classList.remove("flash");
},650);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout (function(){
    btn.classList.remove("userFlash");
    },650);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    
    let randIdx= Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

   gameFlash(randBtn);
   
}


function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1200);
     }
    }
    else{
        h2.innerHTML=`Game Over! Your score was<b> ${level}</b><br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="brown";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        
        })
        reset();

    }
    }

function btnPress(){
    
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
gameSeq=[];
userSeq=[];
level=0;
}
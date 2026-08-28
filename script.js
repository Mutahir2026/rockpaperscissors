let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let rps=["rock","paper","scissors"];
let playerwincount=0,compwincount=0;
let urscore=document.getElementById("urscore");
let compscore=document.getElementById("compscore");
let notify=document.getElementById("notify");
function checkPlayerWin(randomnum)
{
    if (rock.id=="rock"&&rps[randomnum]=="scissors") return true;
    else if (rock.id=="paper"&&rps[randomnum]=="rock") return true;
    else if (rock.id=="scissors"&&rps[randomnum]=="paper") return true;
    else if (rock.id==rps[randomnum]) return null;
    else  return false;  
}
let Func=function()
{
let randomnum=Math.floor(Math.random()*3);
let res=checkPlayerWin(randomnum)
if (res)
{
     playerwincount++;
     urscore.innerHTML="You : "+ playerwincount;
     notify.innerHTML="You Won, Hurrayyyy!!!";
     notify.style.backgroundColor="green";

}
else if (res==null)
{
     notify.innerHTML="It's a DRAW, bach gae";
     notify.style.backgroundColor="grey";
     
}
else 
{
    compwincount++;
     compscore.innerHTML="Computer : "+compwincount;
     notify.innerHTML="You Lost, Shame on you";
     notify.style.backgroundColor="red";


}
}

rock.addEventListener("click",Func);
paper.addEventListener("click",Func);
scissors.addEventListener("click",Func);
let resetbtn=document.getElementById("resetbtn");
resetbtn.addEventListener("click",function()
{
location.reload();
});
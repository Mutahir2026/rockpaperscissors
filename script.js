let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let rps=["rock","paper","scissors"];
let playerwincount=0,compwincount=0;
let urscore=document.getElementById("urscore");
let compscore=document.getElementById("compscore");
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
}
else if (res==null)
{
console.log("Draw");
}
else 
{
    compwincount++;
     compscore.innerHTML="Computer : "+compwincount;

}
}
rock.addEventListener("click",Func);
paper.addEventListener("click",Func);
scissors.addEventListener("click",Func);
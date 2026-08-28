let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let rps=["rock","paper","scissors"];
let playerwincount=0,compwincount=0;
function checkPlayerWin()
{
    if (rock.id=="rock"&&rps[randomnum]=="scissors") return true;
    else if (rock.id=="paper"&&rps[randomnum]=="rock") return true;
    else if (rock.id=="scissors"&&rps[randomnum]=="paper") return true;
    else if (rock.id==rps[randomnum]) return null;
    else  return false;  
}
rock.addEventListener("click",function()
{
let randomnum=Math.floor(Math.random()*3);
if (checkPlayerWin())
{
     playerwincount++;
}
else if (checkPlayerWin()==null)
{
   continue;
}
else 
{
    compwincount++;
}
}
);
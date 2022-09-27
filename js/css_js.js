function onclick_color(style,weaponID) {

    if (document.getElementById(weaponID).style.background == "cornflowerblue"){

        button= document.getElementById(weaponID);
        button.style.background = "#ffffff";
        button.style.color="black";

    }

    else{
        button= document.getElementById(weaponID);
        button.style.background = "cornflowerblue";
        button.style.color="white";
    }
    
}

function updatebutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="block";
  QandA.style.display="none";
}

function QandAbutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="none";
  QandA.style.display="block";
}

function closebutton(){
  update=document.getElementById("update")
  QandA=document.getElementById("QandA")
  update.style.display="none";
  QandA.style.display="none";
}

function onclick_color(style,weaponID) {

    if (document.getElementById(weaponID).style.background == "lightsteelblue"){

        button= document.getElementById(weaponID);
        button.style.background = "#ffffff";

    }

    else{
        button= document.getElementById(weaponID);
        button.style.background = "lightsteelblue";
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

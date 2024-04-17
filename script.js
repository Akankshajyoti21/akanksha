const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){
  if(inputbox.value===''){  
    alert("you must write something!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u007";
    li.appendChild(span);k
  }
inputbox.value="";
savedata();

}

listcontainer.addEventlistener("click",function(e){if(e.targetName==="li")})e.target.classlist.toggle("checked");
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  savedata();
}
},false);

function savedata(){
  localStorage.setitems("data",listcontainer.innerHTML);

}
function showtask(){
  listcontainer.innerHTML=localstorage.getitem("data");

}
showtask();
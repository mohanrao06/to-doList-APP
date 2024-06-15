const input=document.getElementById("input-bok")
const list=document.getElementById("list")
function ADDtask(){
    if (input.value===''){
        alert("You must write somting")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        let day=document.createElement("h6")
        day.innerHTML=new Date().toLocaleTimeString()+"  "+new Date().toDateString();
        li.appendChild(day)
    }
    input.value = "";
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
       

    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}
function showTask()
{
    list.innerHTML=localStorage.getItem("data")
}
showTask();
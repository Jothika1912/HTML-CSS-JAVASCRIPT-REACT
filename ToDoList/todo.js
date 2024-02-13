var input=document.getElementById("input");
var list=document.getElementById("list");
function adding(){
    var li=document.createElement("li")
    li.innerHTML=input.value+"<button onclick='deleting(event)' id='del'>Delete</button>"
    list.append(li)
}

function deleting(event){
    event.target.parentElement.remove()
}
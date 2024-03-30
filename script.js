
/*document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("form");
    const datainput=document.getElementById("data-input");
    const datalist=document.getElementById("datalist");
loadstoreddata()
form.addEventListener("submit",function(e){
    e.preventDefault();
    const data=datainput.value.trim();
    if(data!==""){
addtolocalstorage(data);
loadstoreddata()
datainput.value="";
    }
    else{
        alert("please eneter the data");
        datainput.focus()
    }
})
})

//add new data to localstorge

function addtolocalstorage(data){
    const storedata=JSON.parse(localStorage.getItem("mydata"))||[];
    storedata.push(data);
    localStorage.setItem("mydata",JSON.stringify(storedata))
}


console.log(datalist)
//load all data from Local Storage
function loadstoreddata(){
    const storedata=JSON.parse(localStorage.getItem("mydata"))||[];
    datalist.innerHTML="";
    storedata.forEach((data,index) => {
        //  const li=document.createElement("li")
        //  li.textContent=data;
        //  datalist.appendChild(li);   
        let op=`<li>${data} 
    
        </li>` ;
        datalist.innerHTML+=op   
    });
    const delbuttons=document.querySelectorAll(".btndelete");
    delbuttons.forEach((btn)=>{
        btn.addEventListener("click",deletedata)
    });
}
function deletedata(){
    console.log("hello")
    const index=this.dataset.index;
    const storedata=JSON.parse(localStorage.getItem("mydata"))||[];
    storedata.splice(index,1);
    localStorage.setItem("mydata",JSON.stringify(storedata))
    loadstoreddata()
}
*/
document.addEventListener("DOMContentLoaded",function(){

let inputdata=document.getElementById("data-input");
let add_btn=document.querySelector("#add-btn")
let ul=document.getElementById("datalist")
let result=document.querySelector(".data")
console.log(result)
var todos=[]
//display data in localstorage
window.onload=()=>{
    console.log("loaded")
todos=JSON.parse(localStorage.getItem("todos"))||[];
todos.forEach(todo =>displaydata(todo));

}


console.log(add_btn);
add_btn.addEventListener("click",function(e){
    console.log(inputdata.value)
   e.preventDefault()

    if(inputdata.value.trim()!=""){
        todos.push(inputdata.value.trim())
        displaydata(inputdata.value.trim())
        inputdata.value='';

    }

else{
    alert("please enter a task");
    inputdata.focus()

}

})
function displaydata(todo){

    localStorage.setItem("todos",JSON.stringify(todos));

 console.log(todo)
    let li=document.createElement("li");
    let div=document.createElement("div");
    let editIcon=document.createElement("i");
    var deleteIcon=document.createElement("i");
    editIcon.className ="fa-solid fa-pen-to-square";
    deleteIcon.className="fa-solid fa-trash";
    console.log(li)
    li.innerText=todo;
result.appendChild(li);
li.appendChild(div);
div.appendChild(editIcon)
div.appendChild(deleteIcon)

//function for edit button

editIcon.addEventListener("click",function(){
    let editdata=prompt("edit the task")
todos=JSON.parse(localStorage.getItem("todos"))||[];

    if(editdata!=""){
    let index=todos.indexOf(todo);
    todos[index]=editdata;
    
    localStorage.setItem("todos",JSON.stringify(todos))
li.innerHTML=editdata
li.appendChild(div);
div.appendChild(editIcon)
div.appendChild(deleteIcon)
  console.log(todos)
    }
    else{
todos=JSON.parse(localStorage.getItem("todos"))||[];

    }
})





deleteIcon.addEventListener("click",function(){
  let node= li.parentNode
  console.log(node)
  node.removeChild(li)
  removetodo(todo)

})
}

function removetodo(todo){
    let index=todos.indexOf(todo);
    console.log(index);
    
    if(index>-1){
        todos.splice(index,1);
      localStorage.setItem("todos",JSON.stringify(todos))
    }
    console.log(todos)
}
   //add value to local sotrage
})
let taskArray=[];


function deletetask(currentitem,button){
    button.remove();
    currentitem.remove();  
}

function addTask(){

    let task=document.getElementById('task').value;

    if(task!= ''){
        
        taskArray.push(task);
    
        const ul=document.getElementById('list');
        const li=document.createElement('li');
        const button=document.createElement('input');
        
        button.setAttribute('type','button');
        button.setAttribute('value','Delete task');
        button.setAttribute('onclick','deletetask(this.previousElementSibling,this)');
    
        li.innerText=task;
        ul.append(li);
        ul.append(button);
    
        li.classList.add('list-items');
    }
    else{
        alert("Please Enter Task");
    }
    
}





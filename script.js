
const ul=document.getElementById('list');

function deletetask(currentitem){
    currentitem.remove(); 
}

function addTask(){

    let task=document.getElementById('task').value;

    if(task!= ''){

        const li=document.createElement('li');
        const button=document.createElement('input');
        
        button.setAttribute('type','button');
        button.setAttribute('value','Done');
        
        button.setAttribute('onclick','deletetask(this.parentElement)');
    
        li.innerText=task;
        ul.append(li);
        li.append(button);
   
        li.classList.add('list-items');
    
        document.getElementById('task').value=``;

    }
    else{
        alert("Please Enter Task");
    }

}





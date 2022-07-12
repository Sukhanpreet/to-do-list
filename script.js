let taskArray=[];

function addTask(){
    let task=document.getElementById('task').value;
    console.log(task);
    taskArray.push(task);
    console.log(taskArray);

    const ul=document.getElementById('list');
    
    const li=document.createElement('li');
    
    ul.append(li);

    li.innerText=task;

    li.classList.add('list-items');
}



function addTask(){
    var taskInput=document.getElementById("taskInput").value
    var taskList=document.getElementById("tasklist")
    if(taskInput===""){
        alert("please enter the task")
        return 
    }

    var listItems = document.createElement("li")
    listItems.innerText = taskInput
    taskList.appendChild(listItems)


    var buttonContainer = document.createElement("div")
    listItems.appendChild(buttonContainer)
    buttonContainer.className="task-button"

    var deleteButton = document.createElement("button")
    buttonContainer.appendChild(deleteButton)
    deleteButton.innerText="Delete"
    deleteButton.className = "delete"
    deleteButton.onclick=function(){
        taskList.removeChild(listItems)
    }

    var completeButton = document.createElement("button")
    buttonContainer.appendChild(completeButton)
    completeButton.innerText="Complete"
    completeButton.className = "complete"
    completeButton.onclick=function(){
        listItems.classList.toggle("Completed")
    }
    
    document.getElementById("taskInput").value=""

}

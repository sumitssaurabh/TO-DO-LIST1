let inputBox = document.getElementById("input_box");
console.log(inputBox);
let listContainer = document.getElementById("list_container");
console.log(listContainer);


function addTask(){
    if(inputBox.value === " "){
        console.log("write task");
        alert("Please enter a task");

       
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =  inputBox.value;
        listContainer.appendChild(li);
        console.log("task added");
        let span = document.createElement("span");
        span.innerHTML =` &nbsp <button class="bg-red-500 mr-9">delete</button>`
        console.log("button delete");
        li.appendChild(span);

    

    }
    inputBox.value=" ";
}
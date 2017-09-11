function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");


  addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;
    console.log(title);

    //create a new li
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement("input");

    //set the input's type to checkbox
    checkbox.type ="checkbox";

    //set the title
    newLi.textContent = title;

    toDoList.appendChild(newLi);

    //attach the ceckbox to the li

    newLi.appendChild(checkbox);

    //empty input
    newToDoText.value="";

  });

}


window.onload = function(){
  onReady();
};

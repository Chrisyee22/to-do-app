function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  const deleteToDo= document.getElementById('deleteToDo');

  addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;


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

    deleteToDo.addEventListener('click' , deleteList );



}

function deleteList(event){
  event.preventDefault();
//Goal:delete checked items
// When a button is clicked go over all li elements
const deleteToDoForm = document.querySelector('#toDoList');
  // event.preventDefault();
const listItems = deleteToDoForm.querySelectorAll ('li');
  // loop over all elements
  for (var i=0 ; i < listItems.length ; i++){
    let currentLi = listItems[i];
    let checkbox= currentLi.querySelector('input[type="checkbox"]');

    //check for li elements
  //check to see if box is checked

        if(checkbox.checked ===true){
          //if box is checked identifiy element
         //delete elements that are identified as checked

         deleteToDoForm.removeChild(currentLi);
        }



    }


}






window.onload = function(){
  onReady();
};

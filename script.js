import {todolist , deletefromlist, saveToStorage , addToList, getItemStorage , UpdateFunc} from "./data/todos.js";

document.addEventListener("DOMContentLoaded" , function(){
  function addanimation(noteselector , picselector){
    const note = document.querySelector(noteselector);
    const pic = document.querySelector(picselector);

    if(note && pic){
      note.addEventListener("mouseover", function(){
        pic.style.opacity = 1;
        pic.style.transition = '0.5s ease-in';
      });
      note.addEventListener("mouseout", function(){
        pic.style.opacity = 0;
        pic.style.transition = '0.5s ease-in';
      });
      
    }else{
      console.error(`The elements ${note} and ${pic} are not found`);
    }
  }
  addanimation('.notes', '.yerin-pic-1');
  addanimation('.notes-2', '.yerin-pic-2');
  addanimation('.notes-3', '.yerin-pic-3');
  addanimation('.notes-4', '.yerin-pic-4');
});

let passwordElement = document.querySelector('.password-input');
let coverElement = document.querySelector('.cover');
let asideContent = document.querySelector('.aside-content');
let hideBtn = document.querySelector('.hide-btn');
hideBtn.addEventListener("click" , () => {
  
  if(passwordElement.value === "yerin"){
    passwordElement.value = '';
      if(hideBtn.textContent === "show"){
        asideContent.style.maxHeight = "300px";
        coverElement.style.opacity = 0;
        hideBtn.textContent = 'hide';
        coverElement.style.transition = "all 1s"; 
      } 
      console.log("1")
  }
  else if (hideBtn.textContent === 'hide'){
    coverElement.style.opacity = 1;
    hideBtn.textContent = 'show';
    asideContent.style.maxHeight = "200px";
    coverElement.style.transition = "all 1s";      
  }else{
      console.error("Wrong Pass");
  }
  
});

passwordElement.addEventListener("click", () => { 
  passwordElement.style.width = "100px";
  
})
passwordElement.addEventListener("blur" , () => {
  passwordElement.style.width = "35px";
})
let notes = document.querySelector('.notes');
notes.addEventListener('click' , () => {
    window.location.href = "next.html";
});

render();


function render(){
  let accum = '';
  todolist.forEach((todolist) => {
    let html;
    html = 
    `
    <div class="todo-lists-container js-todo-list-container-${todolist.id}">
        <div class="todo-name-${todolist.id}">${todolist.todo}</div>
        <div>
            <input type="text" class="update-input-type js-input-type-update-${todolist.id}"> <button class="btn confirm-btn js-confirm-btn-${todolist.id}" >Confirm</button>  <button class="btn update-btn js-update-btn" data-product-id="${todolist.id}">Update</button>
            <button class="btn js-delete-btn" data-product-id="${todolist.id}">Delete</button>
        </div>
    </div>
           
    `
    accum += html;
    document.querySelector('.todos-container').innerHTML = accum;
  });


  // Delete Btn
  document.querySelectorAll('.js-delete-btn').forEach((element) => {
    element.addEventListener('click' , () =>{
      const productId = element.dataset.productId;
      deletefromlist(productId);
      const container = document.querySelector(`.js-todo-list-container-${productId}`);
      container.remove();
      saveToStorage();
      console.log('clicked')
    });
  });

  // Update button
  document.querySelectorAll('.js-update-btn').forEach(updateBtn => {
    
    updateBtn.addEventListener("click" , () => {
      const productId = updateBtn.dataset.productId
      const inputUpdateElement = document.querySelector(`.js-input-type-update-${productId}`)
      const jsTodoElement = document.querySelector(`.todo-name-${productId}`)
      getItemStorage()
      inputUpdateElement.style.visibility = "visible";
      inputUpdateElement.style.opacity = 1;
      
      // Confirm btn nested
      document.querySelectorAll(`.js-confirm-btn-${productId}`).forEach(confirmBtn => {
      confirmBtn.style.visibility = "visible";
      confirmBtn.style.opacity = 1;
      
        
        confirmBtn.addEventListener("click" , () => {
          let value = inputUpdateElement.value
          

          // wtf am i doin, might change
          if(value === ''){
            console.error("no string inputted")
            return
          }
          else if(confirmBtn.style.visibility === "visible" && confirmBtn.style.opacity === '1'
            && inputUpdateElement.style.visibility === "visible" && inputUpdateElement.style.opacity === '1'
          ){
            if(confirmBtn.style.visibility === "hidden" && confirmBtn.style.opacity === '0'
              && inputUpdateElement.style.visibility === 'hidden' && confirmBtn.style.opacity === '0'
            ){
              inputUpdateElement.classList.add("fade-out")
              confirmBtn.classList.add("fade-out")
            }
            confirmBtn.style.visibility = "hidden";
            confirmBtn.style.opacity = 0;
            inputUpdateElement.style.visibility = "hidden";
            inputUpdateElement.style.opacity = 0;
            
            
            setTimeout(() => {
              updateBtn.style.display = "inline";
              updateBtn.style.opacity = 1;
            }, 540)  
          }
          console.log(value)

          jsTodoElement.innerHTML = value

          UpdateFunc(value , productId);
          
          console.log(todolist)
          saveToStorage()
        
        });
       });
      updateBtn.style.display = "none";
      updateBtn.style.opacity = 0;
    });

  });
}

// add btn
document.querySelectorAll('.add-btn').forEach((element) => {
  element.addEventListener('click' , (event) => {
    let inputValueElement = document.querySelector('.input-add');
    const inputValue = inputValueElement.value;
    addToList(inputValue);
    saveToStorage();
    render()
  });
});




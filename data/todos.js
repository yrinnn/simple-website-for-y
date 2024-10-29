export let todolist = getItemStorage() || [
  {
    id: '1',
    todo: "Make Wishes" 
  },
  {
    id: '2',
    todo: "Make Dinner"
  }
]

export function deletefromlist(productId){
      let newArray = [];
  
      todolist.forEach((todoElement) => {
        if (todoElement.id !== productId) {
          console.log(todoElement);
          newArray.push(todoElement);
        }
      });
  
      todolist = newArray;
      console.log(todolist);
}

export function saveToStorage() {
  return localStorage.setItem("todoList" , JSON.stringify(todolist));
}
export function getItemStorage() {
  return JSON.parse(localStorage.getItem("todoList"));
}

export function addToList(inputValue) {
  if(inputValue === ''){
    console.error("Please Type Something");
  }else{
    const randomIdInt = Math.floor(Math.random() *1000);
    const randomString = randomIdInt.toString();

    todolist.push({
      id: randomString,
      todo: inputValue
    });

  }
  console.log(todolist)
}

export function UpdateFunc(newValue , productId){
  todolist.forEach(list => {
    if(list.id === productId){
      list.todo = newValue
    };
  });
}
export function rightSideShow(passwordElement,coverElement ,asideContent, hideBtn) {
    passwordElement = document.querySelector('.password-input');
    coverElement = document.querySelector('.cover');
    asideContent = document.querySelector('.aside-content');
    hideBtn = document.querySelector('.hide-btn');
    hideBtn.addEventListener("click" , () => {
    
    if(passwordElement.value === "minji"){
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
}
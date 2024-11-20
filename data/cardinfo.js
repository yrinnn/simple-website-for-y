export const info = [
  {
    image: "icons/minj1.jpg",
    imageIcon : "icons/pom.png",

  },
  {
    image: "icons/minj2.png",
    imageIcon : "icons/pom.png",

  },
  {
    image: "icons/minj3.jpg",
    imageIcon : "icons/pom.png",

  },
  {
    image: "icons/minj4.jpg",
    imageIcon : "icons/pom.png",

  },
]


export function renderIcons() {
  let iconHTML = ``
  info.forEach((info , index) => {

  iconHTML += `
    <div class="container">
      <div class="content">
          <div class="notes-${index + 1}">
              <img class="yerin-pic-${index + 1}"src="${info.image}">
              <div class="pompom"><img class="pom" src="${info.imageIcon}"></div>
              <div class="pin"></div>
          </div>
      </div>
    </div>
  `
  document.querySelector(`.home`).innerHTML = iconHTML;
  })


  
}

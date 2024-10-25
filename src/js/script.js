//1
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const changeButton = () => {
  if (input.value) {
    button.textContent = input.value;
  }
};
button.addEventListener("click", changeButton);
//2
const img = document.querySelector("#img");
img.src = "/src/img/carrot.png";

//3
const image = document.querySelector("#photo");
const link = document.querySelector("#link");
link.href =
  "https://uk.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BA%D0%B5%D1%82%D0%B0";
image.alt = "Ракета";
//4
const list = document.querySelector("#list");
const firsItem = list.children[0];
firsItem.textContent = "Текст один";

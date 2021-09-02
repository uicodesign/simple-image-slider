const imgContainer = document.querySelector(".img-container");
let count = 0;

function slide(move) {
  if (move == "right") {
    if (count < 400) {
      count += 100;
      imgContainer.style.transform = "translateX(-" + count + "%)";
    }
  } else {
    if (count > 0) {
      count -= 100;
      imgContainer.style.transform = "translateX(-" + count + "%)";
    }
  }
}

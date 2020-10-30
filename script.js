let x = 50;
let myBlock;
let myOuput;
let manual = false;
let arrayKeys = [];

//myBlock
myBlock = document.createElement("div");
document.body.appendChild(myBlock);

myBlock.textContent = "Hello World!";
myBlock.style.backgroundColor = "rgb(214, 50, 60)";
myBlock.style.width = "100px";
myBlock.style.height = "100px";
myBlock.style.textAlign = "center";
myBlock.style.position = "absolute";
myBlock.style.left = "100px";
myBlock.style.top = "150px";

//myOuput
myOutput = document.createElement("div");
document.body.appendChild(myOutput);

// myOutput.textContent = "Hello again?";
// myOutput.style.backgroundColor = "blue";

// ***********

document.addEventListener("DOMContentLoaded", () => {
  function left() {
    x = myBlock.offsetLeft - 50;
    myBlock.style.left = [x].toString() + "px";
  }

  function up() {
    x = myBlock.offsetTop - 50;
    myBlock.style.top = [x].toString() + "px";
  }
  function down() {
    x = myBlock.offsetTop + 50;
    myBlock.style.top = [x].toString() + "px";
  }

  function rigth() {
    x = myBlock.offsetLeft + 50;
    myBlock.style.left = [x].toString() + "px";
  }

  function changeColor() {
    let r = Math.trunc(Math.random() * Math.floor(255));
    let g = Math.trunc(Math.random() * Math.floor(255));
    let b = Math.trunc(Math.random() * Math.floor(255));

    myBlock.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  function addToArrayKeys(key) {
    let span = document.createElement("span");
    span.innerText = "+" + key;
    span.style.backgroundColor = "blue";
    span.style.border = "solid 1px";
    span.style.margin = "5px";
    span.style.padding = "5px";
    myOutput.appendChild(span);
    span.addEventListener("mouseover", function () {
      this.style.backgroundColor = "yellow";
    });
    span.addEventListener("mouseout", function () {
      this.style.backgroundColor = "blue";
    });
    span.addEventListener("click", function () {
      let index = arrayKeys.indexOf(this);
      arrayKeys.splice(index, 1);
      // span.remove(this);
      myOutput.removeChild(this);
    });
    // arrayKeys.push(key);
    arrayKeys.push(span);
    console.log(arrayKeys);
  }

  function runSequence(arrayKeys) {
    // arrayKeys.map((key) => {
    let el = arrayKeys.shift();
    let item = el.innerText.replace("+", "");
    // let item = el.
    eval(item + "()");
    myOutput.removeChild(el);
    console.log(el);
    // });
  }

  document.addEventListener("keydown", (event) => {
    event.preventDefault(); //good practice to avoid any predifined effect for dis event
    let keyPressed = event.keyCode;
    if (keyPressed == 67) {
      changeColor();
    }
    if (keyPressed == 82) {
      runSequence(arrayKeys);
    }
    if (manual) {
      if (keyPressed == 37) {
        left();
      } else if (keyPressed == 39) {
        rigth();
      } else if (keyPressed == 38) {
        up();
      } else if (keyPressed == 40) {
        down();
      }
    } else {
      if (keyPressed == 37) {
        addToArrayKeys("left");
      } else if (keyPressed == 39) {
        addToArrayKeys("rigth");
      } else if (keyPressed == 38) {
        addToArrayKeys("up");
      } else if (keyPressed == 40) {
        addToArrayKeys("down");
      }

      // arrayKeys.push(keyPressed);
      // myOutput.innerText = arrayKeys;
    }
  });
});

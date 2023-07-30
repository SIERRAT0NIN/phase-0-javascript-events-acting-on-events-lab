// // Your code here
// const game = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";

// function moveDodgerLeft() {
//   const dodger = document.getElementById("dodger");
//   let left = parseInt(dodger.style.left);
//   dodger.style.left = `${left + 1}px`;
// }
// function moveDodgerRight() {
//   const dodger = document.getElementById("dodger");
//   let right = parseInt(dodger.style.right);
//   dodger.style.right = `${right + 1}px`;
// }

function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  let left = parseInt(dodger.style.left);
  dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  let left = parseInt(dodger.style.left);
  dodger.style.left = `${left + 1}px`;
}

moveDodgerLeft();
moveDodgerRight();

// let left = parseInt(dodger.style.left);
// ${left + 1}px

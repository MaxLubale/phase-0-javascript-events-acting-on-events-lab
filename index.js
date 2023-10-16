// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    dodger.style.left = `${left - 1}px`;
  }
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let progress = 0;

let interval = setInterval(blur, 30);

function blur() {
  progress++;
  if (progress >= 100) {
    clearInterval(interval);
  }
  loadingText.innerHTML = `${progress}%`;
}

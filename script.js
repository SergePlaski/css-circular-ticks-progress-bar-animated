const progress = document.querySelector(".progress--wrapper");
const valueLabel = document.querySelector(".progress--value");
const value = +valueLabel.dataset.progress;
console.log(value);

function addTickElements(n) {
  for (let i = 0; i < n; i++) {
    const tickElement = document.createElement("div");
    tickElement.className = "progress--tick";
    tickElement.setAttribute("key", i);
    progress.appendChild(tickElement);
    tickElement.style.transform = `rotate(${i * 3.6}deg)`;
    tickElement.style.animationDelay = `${i / 50}s`;

    if (i <= value) {
      tickElement.setAttribute("active", "true");
    }
  }
}

function animateValueText() {
  valueLabel.textContent = "0";
  let counter = 0;

  const valueDisplay = setInterval(() => {
    counter++;
    if (counter % 5 === 0) {
      valueLabel.textContent = counter;
    }
    if (counter >= value) {
      clearInterval(valueDisplay);
      valueLabel.textContent = value;
      return;
    }
  }, 20);
}

animateValueText();
addTickElements(100);

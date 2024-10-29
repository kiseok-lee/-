let isSpinning = false;

function spinRoulette() {
  if (isSpinning) return;
  isSpinning = true;

  const roulette = document.getElementById("roulette");
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");
  const spinButton = document.getElementById("spinButton");

  const randomValue = Math.random();
  let selectedDegree;
  let prize;

  if (randomValue <= 0.5) {
    selectedDegree = Math.floor(Math.random() * 60);
    prize = "사탕";
  } else if (randomValue <= 0.8) {
    selectedDegree = Math.floor(Math.random() * 60) + 60;
    prize = "과자";
  } else if (randomValue <= 0.95) {
    selectedDegree = Math.floor(Math.random() * 60) + 120;
    prize = "커피";
  } else if (randomValue <= 0.951) {
    selectedDegree = Math.floor(Math.random() * 60) + 180;
    prize = "백화점 5만원 상품권";
  } else if (randomValue <= 0.9511) {
    selectedDegree = Math.floor(Math.random() * 60) + 240;
    prize = "에어팟";
  } else {
    selectedDegree = Math.floor(Math.random() * 60) + 300;
    prize = "LG그램 노트북";
  }

  const totalRotation = selectedDegree + 2880;
  roulette.style.transform = `rotate(${totalRotation}deg)`;

  spinButton.disabled = true;

  setTimeout(() => {
    resultText.textContent = `당첨: ${prize}`;
    resultBox.classList.remove("hidden");
  }, 8000);
}

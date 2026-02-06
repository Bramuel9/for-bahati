const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts");

const modal = document.getElementById("photoModal");
const closeModal = document.getElementById("closeModal");
const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", () => {
  message.textContent =
    "Yayyy! 💖 I knew it! I can’t wait to see you again, I love you! 😘";

  music.play(); 
  modal.style.display = "flex"; 
  createHearts();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

noBtn.addEventListener("touchstart", moveNoBtn);
noBtn.addEventListener("mouseover", moveNoBtn);

function moveNoBtn() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      Math.random() * 3 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}

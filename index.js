document.addEventListener("DOMContentLoaded", function () {
  const giftSection = document.getElementById("gift");
  const balloonsContainer = document.getElementById("balloons");
  const balloonCount = 10;
  let hasGift = false;

  function createBalloons() {
    const giftIndex = Math.floor(Math.random() * balloonCount);

    for (let i = 0; i < balloonCount; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
      if (i === giftIndex) {
        balloon.classList.add("gift");
      }
      balloon.addEventListener("click", () => {
        if (balloon.classList.contains("gift")) {
          giftSection.innerHTML = `
          <div id="birthdayMessage">
          
            <h2>¡Feliz Cumpleaños Amorchito ❤️!</h2>
            <p>¡Has encontrado tu regalo de cumpleaños!</p>
            <div id="gifts">
            <img id= "imgGift" src="./assests/sorpresa.png" alt="Regalo de Cumpleaños">
            <img id= "imgGift" src="./assests/pastel-de-cumpleanos.png" alt="Pastel de Cumpleaños">
            <img id= "imgGift" src="./assests/globos-de-aire.png" class="balloonImage" alt="Globo de Cumpleaños">
            <img id= "imgGift" src="./assests/globos-de-aire.png" class="balloonImage" alt="Globo de Cumpleaños">
            <img id= "imgGift"  src="./assests/globos-de-aire.png" class="balloonImage" alt="Globo de Cumpleaños">
            </div>
            <div id="coupon">
                <p>Tu cupón de cumpleaños:</p>
                <span id="couponCode">CUMPLE2023</span>
            </div>
        </div>
      `;
          startConfetti();
        } else {
          balloon.style.backgroundColor = "transparent";
          balloon.style.backgroundImage = 'url("./assests/holi.png")';
          balloon.removeEventListener("click", null);
        }
      });
      balloonsContainer.appendChild(balloon);
    }
  }

  createBalloons();
});

function startConfetti() {
  const confettiContainer = document.getElementById("confetti");
  for (let i = 0; i < 50; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
    confettiContainer.appendChild(confettiPiece);
  }
}

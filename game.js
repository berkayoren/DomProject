//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1/100 arasi rastgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

//* CheckBtn basildiğinda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  //! eger input girilmediyse uyari ver

  if (!guessInput) {
    msg.innerText = "Please Enter a Number";
    //! eger rastgele sayi == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats you won <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    // document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }

    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basildiginda oyunu baslangic degerlerine kur

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  const randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = randomNumber;
  console.log(randomNumber);
  document.querySelector(".check-btn").dsabled = false;
  document.querySelector("body").classList.remove(".bg-success", ".bg-danger");
  document.querySelector(".guess-input").value = "";
});

//? tebrikler bildiniz.
//? background = green
//? eger score > topScore
//?   topScore = score
//? secret_number = gorunur

//! değilse
// eger score > 0
//!   score = score -1
//?   eger rastgele < input.value
//?     DECREASE
//? degilse
//?     INCREASE
//! degilse
//? uzgunuz kaybettiniz

//* againBtn basildiginda kontrolleri yap

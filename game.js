//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1/100 arasi rastgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//* CheckBtn basildiğinda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = document.querySelector(".guess-input");
});

//! eger rastgele sayi ==input.value
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

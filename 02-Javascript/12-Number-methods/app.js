//round
//ceil
//floor
//random
//parseInt
//parseFloat

let num = 10.2;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// let randomNumber = Math.random() * 10;
// console.log(Math.ceil(randomNumber));

// console.log(Math.ceil(Math.random() * 5));

const masjidImage =
  "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg";

const chandImage =
  "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg";

// random number = 0 | masjid
// 1 | chand

const img = document.querySelector("#img");
const result = document.querySelector("#result");
img.src = chandImage;

function toss(coin) {
  let randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);

  if (
    (coin === "masjid" && randomNum === 0) ||
    (coin === "chand" && randomNum === 1)
  ) {
    result.innerHTML = "YOU WON THE TOSS";
  } else {
    result.innerHTML = "YOU LOSS THE TOSS";
  }

  if (randomNum === 0) {
    img.src = masjidImage;
  } else {
    img.src = chandImage;
  }
}

let submitBox = document.getElementsByClassName("wrp")[0];
let thankBox = document.getElementsByClassName("wrp")[1];
let rating = document.querySelectorAll(".rating");
let btn = document.querySelector(".btn");
let text = document.querySelector(".result p");

let value;
for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    rating.forEach((item) => {
      item.classList.remove("clicked");
    });
    rating[i].classList.add("clicked");
    value = rating[i].textContent;
  });
}

btn.addEventListener("click", function () {
  if (value !== undefined) {
    thankBox.classList.remove("deactivate");
    submitBox.classList.add("deactivate");
    text.textContent = "You selected" + value + "out of 5";
  }
});

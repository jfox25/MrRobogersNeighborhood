// Business Logic
function beepBoop(number) {
  let numberArray = [];
  for (let i = 0; i < number + 1; i++) {
    if ((i + "").indexOf("3") !== -1) {
      numberArray[i] = "Won't you be my neighbor?";
    } else if ((i + "").indexOf("2") !== -1) {
      numberArray[i] = "Boop!";
    } else if ((i + "").indexOf("1") !== -1) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}

// UI Logic
function buildUL(number) {
  $("#output").text("");
  numberArray = beepBoop(number);
  let time = 100;
  numberArray.forEach((num) => {
    setTimeout(function () {
      $("#output").append("<li>" + num + "</li>");
      $("#output").children("li").addClass("show");
    }, time);
    time += 250;
  });
}

$(document).ready(() => {
  $("#submit-button").click((event) => {
    event.preventDefault();
    const number = parseInt($("#number-input").val());
    console.log(number);
    buildUL(number);
  });
  $("#random-number-button").click((event) => {
    event.preventDefault();
    const number = generateRandomNumber();
    console.log(number);
    $("#number-input").val(number);
    buildUL(number);
  });
});

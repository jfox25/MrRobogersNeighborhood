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

//  business logic
function roboger(strInput) {
  let numDetect = /[0-9]/;
  if (strInput.match(numDetect)) {
    //continue
    let numInput = parseInt(strInput);
    if (numInput > 1 && numInput <= 50) {
      //continue
      for (let i = 0; i <= numInput; i++) {
        if (i === 3 || i % 10 === 3 || (i >= 30 && i < 40)) {
          console.log("Won't you be my neighbor?");
          continue;
        }
        if (i === 2 || i % 10 === 2 || (i >= 20 && i < 30)) {
          console.log("Boop!");
          continue;
        }
        if (i === 1 || i % 10 === 1 || (i >= 10 && i < 20)) {
          console.log("Beep!");
          continue;
        }
        console.log(i);
      }
    } else {
      console.log("Please enter only numbers from 1 to 50");
      return;
    }
  } else {
    console.log("Please enter only numbers");
    return;
  }
}


// UI logic
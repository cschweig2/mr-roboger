//  business logic
function roboger(strInput) {
  let numDetect = /[0-9]/;
  if (strInput.match(numDetect)) {
    //continue
    let numInput = parseInt(strInput);
    if (numInput > 1 && numInput <= 50) {
      //continue
      for (let i = 0; i <= numInput; i++) {
        if (i === 1) {
          console.log("Beep!");
          continue;
        }
        if (i === 2) {
          console.log("Boop!");
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
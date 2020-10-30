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
        console.log(i);
      }
      console.log(33 % 100);
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
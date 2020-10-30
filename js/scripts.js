//  business logic
function roboger(strInput) {
  let numDetect = /[0-9]/;
  if (strInput.match(numDetect)) {
    console.log("Thank you");
  } else {
    console.log("Please enter only numbers");
    return;
  }
  let numInput = parseInt(strInput);
  if (numInput > 1 && numInput <= 50) {
    console.log("go ahead");
  } else {
    console.log("Please enter only numbers from 1 to 50");
  }
}



// UI logic
//  business logic
function roboger(strInput) {
  let numDetect = /[0-9]/;
  if (strInput.match(numDetect)) {
    console.log("It is a number!")
  } else {
    console.log("Please enter only numbers!");
  }
}



// UI logic
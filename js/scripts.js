//  business logic
function roboger(strInput) {
  let numDetect = /[0-9]/;
  if (strInput.match(numDetect)) {
    let numInput = parseInt(strInput);
    console.log(numInput);
  } else {
    console.log("Please enter only numbers!");
  }
}



// UI logic
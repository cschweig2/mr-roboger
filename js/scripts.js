//  Business Logic -----------

let warningLetters = false;
let warningNumbers = false;
let outputOverForty = false;

function roboger(strInput) {
  let numDetect = /[0-9]/;
  let strMatch1 = /[1]/;
  let strMatch2 = /[2]/;
  let strMatch3 = /[3]/;
  const resultArray = [];
  if (strInput.match(numDetect)) {
    let numInput = parseInt(strInput);
    if (numInput >= 1) {
      for (let i = 0; i <= numInput; i++) {
        let index = i.toString();
        if (index.match(strMatch3)) {
          resultArray.push("Won't you be my neighbor?");
          continue;
        }
        if (index.match(strMatch2)) {
          resultArray.push("Boop!");
          continue;
        }
        if (index.match(strMatch1)) {
          resultArray.push("Beep!");
          continue;
        }
        resultArray.push(i);
      }
      result(resultArray);
      if (numInput > 45) {
        outputOverForty = true;
      }
    } else {
      warningNumbers = true;
    }
  } else {
    warningLetters = true;
  }
}

// UI Logic ---------------

function result(resultArray) {
  resultArray.forEach(function(element) {
    $("#output").append(element + '<br>');
  });
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    $("#warningLetters, #warningNumbers, #outputOverForty, #startText").hide();
    $("#output").empty();
    $("#startText").show();
    const strInput = $("input#strInput").val();
    roboger(strInput);
    if (warningLetters === true) {
      $("#warningLetters").toggle();
    } 
    if (warningNumbers === true) {
      $("#warningNumbers").toggle();
    }
    if (outputOverForty === true) {
      $("#outputOverForty").toggle();
    }
    warningLetters = false;
    warningNumbers = false;
    outputOverForty = false;
    $("#output").slideDown("slow");
  });
});
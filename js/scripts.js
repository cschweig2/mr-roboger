//  business logic
function roboger(strInput) {
  $("#warningLetters").hide();
  $("#warningNumbers").hide();
  $("outputOverForty").hide();
  $("#output").empty();
  let numDetect = /[0-9]/;
  const resultArray = [];
  if (strInput.match(numDetect)) {
    let numInput = parseInt(strInput);
    if (numInput >= 1 && numInput <= 50) {
      for (let i = 0; i <= numInput; i++) {
        if (i === 3 || i % 10 === 3 || (i >= 30 && i < 40)) {
          resultArray.push("Won't you be my neighbor?");
          continue;
        }
        if (i === 2 || i % 10 === 2 || (i >= 20 && i < 30)) {
          resultArray.push("Boop!");
          continue;
        }
        if (i === 1 || i % 10 === 1 || (i >= 10 && i < 20)) {
          resultArray.push("Beep!");
          continue;
        }
        resultArray.push(i);
      }
      resultArray.forEach(function(element) {
        $("#output").append(element + '<br>');
      });
      if (numInput > 45) {
        $("#outputOverForty").show("Whew, that was a lot!");
      }
    } else {
      $("#warningNumbers").show();
      return;
    }
  } else {
    $("#warningLetters").show();
    return;
  }
}

// UI logic

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const strInput = $("input#strInput").val();
    $("#output").append(roboger(strInput));
    $("#output").slideDown("slow");
  });
});
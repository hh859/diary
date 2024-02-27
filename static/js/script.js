$(document).ready(function () {
  $(".sidenav").sidenav({edge: "right"});
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip();
  $("select").formSelect();
  $(".datepicker").datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
          done: "Select"
      }
  });

  validateMaterializeSelect();
  function validateMaterializeSelect() {
      let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
      let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
      if ($("select.validate").prop("required")) {
          $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
      }
      $(".select-wrapper input.select-dropdown").on("focusin", function () {
          $(this).parent(".select-wrapper").on("change", function () {
              if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                  $(this).children("input").css(classValid);
              }
          });
      }).on("click", function () {
          if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
              $(this).parent(".select-wrapper").children("input").css(classValid);
          } else {
              $(".select-wrapper input.select-dropdown").on("focusout", function () {
                  if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                      if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                          $(this).parent(".select-wrapper").children("input").css(classInvalid);
                      }
                  }
              });
          }
      });
  }
});


function calculateBMI() {
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;

    // Convert height from cm to meters
    var heightInMeters = heightInput / 100;

    // Calculate BMI
    var bmi = weightInput / (heightInMeters * heightInMeters);

    // Display result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Your BMI is: " + bmi.toFixed(2) + "</h2>";

    // Interpret BMI
    var interpretation = "";
    if (bmi < 18.5) {
      interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      interpretation = "Overweight";
    } else {
      interpretation = "Obese";
    }
    resultDiv.innerHTML += "<p>Interpretation: " + interpretation + "</p>";
    }

    function clearResults() {
        document.getElementById("result").innerHTML = "";
  }

// Sleep App 

function analyzeSleep() {
    const hoursSlept = parseFloat(document.getElementById('hoursSlept').value);
    let feedback = '';

    if (isNaN(hoursSlept)) {
      feedback = 'Please enter a valid number of hours.';
    } else if (hoursSlept < 0 || hoursSlept > 24) {
      feedback = 'Please enter a number between 0 and 24.';
    } else if (hoursSlept >= 7 && hoursSlept <= 9) {
      feedback = 'You got a good amount of sleep!';
    } else if (hoursSlept < 7) {
      feedback = 'You may need more sleep for optimal health.';
    } else {
      feedback = 'You may have overslept. Try adjusting your sleep schedule.';
    }

    document.getElementById('feedback').textContent = feedback;
  }
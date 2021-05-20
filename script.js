function addNewSpace() {
  let nameBox = document.createElement("input");
  let gpaBox = document.createElement("input");
  let creditBox = document.createElement("input");
  let courseNames = document.getElementById("course-name");
  let courseGPA = document.getElementById("course-GPA");
  let courseCredit = document.getElementById("course-credit");
  nameBox.placeholder = "Name of course";
  courseNames.appendChild(nameBox);
  gpaBox.placeholder = "GPA of course";
  gpaBox.className = "gpa";
  courseGPA.appendChild(gpaBox);
  creditBox.placeholder = "Credit Hrs";
  courseCredit.appendChild(creditBox);
}
var resultString = "Your Result Is: ";
function calculate() {
  let gpaBoxes = document.getElementsByClassName("gpa");
  let creditBoxes = document.getElementsByClassName("creditHrs");
  let totalCredits = 0;
  let gpaPoints = 0;

  for (let i = 0; i < gpaBoxes.length; i++) {
    if (gpaBoxes[i].value > 0) {
      gpaPoints +=
        parseFloat(gpaBoxes[i].value) * parseFloat(creditBoxes[i].value);
    }
  }

  for (let j = 0; j < creditBoxes.length; j++) {
    if (creditBoxes[j].value > 0) {
      totalCredits += parseFloat(creditBoxes[j].value);
    }
  }

  let theGPA = gpaPoints / totalCredits;
  if (theGPA > 0) {
    let result = document.getElementById("result");
    result.innerText = resultString + theGPA;
  }
}

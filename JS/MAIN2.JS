document.getElementById('marksForm').addEventListener('submit', function (event) {
    event.preventDefault();
   function calculateTotal(){}
    // Get input values
    const name = document.getElementById('name').value;
    const rollNum = document.getElementById('rollNum').value;
    const className = document.getElementById('class').value;
    const school = document.getElementById('school').value;
    const mathMarks = Number(document.getElementById('mathMarks').value);
    const scienceMarks = Number(document.getElementById('scienceMarks').value);
    const englishMarks = Number(document.getElementById('englishMarks').value);
    const historyMarks = Number(document.getElementById('historyMarks').value);
    const PEMarks = Number(document.getElementById('PEMarks').value);
   
    // Calculate average
    const totalMarks = mathMarks + scienceMarks + englishMarks + historyMarks + PEMarks;
    const averageMarks = totalMarks / 5;
   
    // Display the results
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRollNum').innerText = rollNum;
    document.getElementById('displayClass').innerText = className;
    document.getElementById('displaySchool').innerText = school;
    document.getElementById('displayMathMarks').innerText = mathMarks;
    document.getElementById('displayScienceMarks').innerText = scienceMarks;
    document.getElementById('displayEnglishMarks').innerText = englishMarks;
    document.getElementById('displayHistoryMarks').innerText = historyMarks;
    document.getElementById('displayPEMarks').innerText = PEMarks;
    document.getElementById('averageGrade').innerText = averageMarks.toFixed(2);
   
    let recommendation;
    if (averageMarks >= 90) {
     recommendation = "Excellent work! Keep it up!";
    } else if (averageMarks >= 75) {
     recommendation = "Good job! a bit more effort and you will excel.";
    } else {
     recommendation = "Needs improvement. Work harder!";
    }
    document.getElementById('recommendation').innerText = recommendation;
   
    // Show the report card
    document.getElementById('reportCard').style.display = 'block';
   });
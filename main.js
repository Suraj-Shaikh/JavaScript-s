// JavaScript code
var scores = [];
let stnAverage;
function storeInput() {
    // Initialize an empty array
    // Get the input elements
    const input1 = document.getElementById("s1");
    const input2 = document.getElementById("s2");
    const input3 = document.getElementById("s3");
    const input4 = document.getElementById("s4");
    const input5 = document.getElementById("s5");
    const input6 = document.getElementById("s6");
    const input7 = document.getElementById("s7");
    const input8 = document.getElementById("s8");
    const input9 = document.getElementById("s9");
    const input10 = document.getElementById("s10");


    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;
    const value5 = input5.value;
    const value6 = input6.value;
    const value7 = input7.value;
    const value8 = input8.value;
    const value9 = input9.value;
    const value10 = input10.value;

    // Add the values to the array
    scores=[];
    scores.push(Number(value1), Number(value2), Number(value3), Number(value4), Number(value5), Number(value6), Number(value7), Number(value8), Number(value9), Number(value10));
    // console.log(scores);
    document.getElementById('marks').innerText = scores
    return scores
    // Print the array to the console
    
}

function getAverage(scores) {
    let stnScore = storeInput(scores)
    let sum = 0;

    for (const score of stnScore) {
        sum += score;
    }

    stnAverage = sum / stnScore.length;
    console.log(stnAverage)
    document.getElementById('Avg').innerText = stnAverage
    // return stnAverage; // Return the average
    
}


function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}


function studentMsg(totalScores, studentScore) {
    // Calculate the class average
    const classAverage = getAverage(totalScores);

    // Determine the student's grade
    const studentGrade = getGrade(studentScore);

    // Construct the message based on whether the student passed or failed
    if (studentGrade === "F") {
        return "Class average: " + classAverage + ". " + "Your grade: " + studentGrade + ". " + "You failed the course.";
    } else {
        return "Class average: " + classAverage + ". " + "Your grade: " + studentGrade + ". " + "You passed the course.";
    }
}

// storeInput(); // First, populate scores array
// console.log(studentMsg(scores, 37));
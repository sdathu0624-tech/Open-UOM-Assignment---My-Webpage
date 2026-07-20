// Individual course progress
let progress = {
    html: 0,
    js: 0,
    python: 0,
    network: 0,
    db: 0
};

function updateCourseProgress(course, value){
    progress[course] += value;
    if(progress[course] > 100) progress[course] = 100;
    document.getElementById('progress-' + course).textContent = progress[course] + '%';
}

// Quiz function for multiple quizzes
function checkAnswer(answer, quizId){
    const result = document.getElementById(quizId);
    if(answer === 'h1'){
        result.textContent = "Correct! ✅";
        result.style.color = "green";
    } else{
        result.textContent = "Incorrect! ❌";
        result.style.color = "red";
    }
}
function checkAnswer() {
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedRadio === null) {
        document.getElementById('feedback').textContent = "Please select an answer.";
    } else {
        const userAnswer = selectedRadio.value;
        
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
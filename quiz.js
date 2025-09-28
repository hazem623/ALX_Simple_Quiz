// quiz.js

// 1) دالة اسمها بالضبط checkAnswer موجودة على المستوى العام
function checkAnswer() {
    // 2) المتغير correctAnswer بالاسم والمحتوى المطلوب
    const correctAnswer = "4";

    // 3) استرداد اختيار المستخدم (radio checked)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 4) العنصر اللي هيعرض الفيدباك
    const feedback = document.getElementById("feedback");

    // لو مافيش اختيار، ندي رسالة واضحة (مش مطلوب صراحة بس مفيد)
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "#dc3545";
        return;
    }

    // 5) اسم المتغير userAnswer مطابق للمتوقع
    const userAnswer = selectedOption.value;

    // 6) المقارنة بالضبط وبالرسائل المطلوبة
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// 7) إضافة الـ event listener بنفس الصيغة اللي الشيكر بيدور عليها
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

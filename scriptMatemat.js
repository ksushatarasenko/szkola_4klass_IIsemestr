function toggleAnswer(number) {
    event.preventDefault();
    var answer = document.getElementById('answer' + number);
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// 
function checkAnswers() {
    event.preventDefault();
    const form = document.getElementById('quiz-form');
    const questions = form.getElementsByClassName('question');
    let score = 0;
    let total = questions.length;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const correctAnswer = question.getAttribute('data-correct');
        const selectedAnswer = form[`q${i + 1}`].value;
        const resultElement = document.getElementById(`q${i + 1}-result`);

        if (selectedAnswer === correctAnswer) {
            score++;
            resultElement.innerHTML = "Правильно! <img src='https://i.pinimg.com/564x/0b/5d/1f/0b5d1f62c0c6ddaa2c9c465264c5343c.jpg' alt='Correct Smiley' width='60' height='60' />";
            resultElement.className = 'marker correct';
            } else {
            resultElement.innerHTML = "Неправильно! <img src='https://i.pinimg.com/564x/12/7a/db/127adb0185cb2c9c8abac2f28966bb97.jpg' alt='Incorrect Smiley' width='60' height='60' />";
            resultElement.className = 'marker incorrect';
        }

    }

    const result = document.getElementById('result1');
    result.textContent = `Ви відповіли правильно на ${score} з ${total} питань.`;
    if (score === total) {
        result.className = 'correct';
    } else {
        result.className = 'incorrect';
    }
}

// --------------------------------


// checkAnswersOption

// Объект с правильными ответами для каждого упражнения
const correctAnswers = {
    exercise1: {
        select1: 30,  // 3000 : 100 = 30
        select2: 500, // 3000 : 6 = 500
        select3: 10   // 3000 : 300 = 10
    },
    exercise89: {
        select1: 534, // 89 · 6 = 534
        select2: 628, // 157 · 4 = 628
        select3: 627  // 209 · 3 = 627
    },
    exercise91: {
        select1: '6 тис.',  // Здесь строка
        select2: '6 дес.',  // Здесь строка
        select3: 160        // Здесь число
    }
};

function checkAnswersOption(exerciseId) {
    // Получаем правильные ответы для конкретного упражнения
    const answers = correctAnswers[exerciseId];

    // Получаем блок с упражнением по ID
    const exerciseElement = document.getElementById(exerciseId);
    const selects = exerciseElement.getElementsByTagName('select');

    // Флаг для определения правильности всех ответов
    let allCorrect = true;

    // Проверяем все select внутри задания
    for (let select of selects) {
        const selectId = select.id;
        const userAnswer = select.value;  // Получаем значение как строку

        // Сравниваем ответ пользователя с правильным
        if (userAnswer !== String(answers[selectId])) {  // Преобразуем правильный ответ в строку для корректного сравнения
            allCorrect = false;
            break;
        }
    }

    // Выводим результат
    const resultElement = document.getElementById("result");
    if (allCorrect) {
        resultElement.textContent = "Всі відповіді правильні для " + exerciseId + "!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Є помилки в відповідях для " + exerciseId + ".";
        resultElement.style.color = "red";
    }
}

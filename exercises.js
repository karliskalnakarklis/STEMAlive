const scientistImages = {
    isaac: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sir_Isaac_Newton_%281642-1727%29.jpg",
    albert: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    tesla: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
    galileo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg"
};

// Load chapter data
const chapterData = JSON.parse(localStorage.getItem("selectedChapter"));
if (!chapterData) {
    window.location.href = "chapter-choice.html";
}

const exercises = chapterData.exercises;
const scientist = chapterData.scientist;
document.title = `${chapterData.title} Exercises | STEM Alive`;

let currentExercise = 0;
let score = 0;
let startTime = Date.now();
let timerInterval;

// Initialize the exercise
function initExercise() {
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    // Render first exercise
    renderExercise();
}

function updateTimer() {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
    const seconds = String(elapsedSeconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function renderExercise() {
    const exercise = exercises[currentExercise];

    document.getElementById("content").innerHTML = `
        <div class="exercise-container">
            <div class="exercise-card">
                <div class="exercise-number">EXERCISE ${currentExercise + 1} OF ${exercises.length}</div>
                <h2 class="exercise-question">${exercise.question}</h2>
                <input type="text" class="answer-input" id="answer" placeholder="Type your answer here...">
                
                <div class="ai-help-container">
                    <input type="text" class="answer-input" id="ai-help-input" placeholder="Ask AI for help...">
                    <div id="ai-response" class="ai-response"></div>
                </div>
                
                <button class="submit-btn" id="submit-btn">Submit Answer</button>
                <div id="feedback" class="feedback"></div>
            </div>
            <img class="scientist-image" src="${scientistImages[scientist]}" alt="${scientist}">
        </div>
    `;

    // Focus input and set up event listeners
    document.getElementById("answer").focus();
    document.getElementById("submit-btn").addEventListener("click", checkAnswer);
    document.getElementById("answer").addEventListener("keypress", function (e) {
        if (e.key === "Enter") checkAnswer();
    });

    // Set up AI help functionality
    document.getElementById("ai-help-input").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const question = this.value.trim();
            if (question) {
                const responseBox = document.getElementById("ai-response");
                responseBox.innerHTML = `
                    <div class="ai-question">You asked: "${question}"</div>
                    <div class="ai-answer">This is where the AI response would appear.</div>
                `;
                responseBox.style.display = "block";
                this.value = "";
            }
        }
    });
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = exercises[currentExercise].answer.toLowerCase();
    const feedback = document.getElementById("feedback");

    // Disable input and button
    document.getElementById("answer").disabled = true;
    document.getElementById("submit-btn").disabled = true;

    if (userAnswer === correctAnswer || userAnswer.includes(correctAnswer)) {
        feedback.textContent = "✅ Correct! Well done!";
        feedback.className = "feedback correct";
        score++;
    } else {
        feedback.textContent = `❌ Incorrect. The correct answer is: ${exercises[currentExercise].answer}`;
        feedback.className = "feedback incorrect";
    }

    // Move to next exercise after delay
    setTimeout(() => {
        currentExercise++;
        if (currentExercise < exercises.length) {
            renderExercise();
        } else {
            showCompletionScreen();
        }
    }, 1500);
}

function showCompletionScreen() {
    clearInterval(timerInterval);
    const finalTime = document.getElementById("timer").textContent;

    // Get current chapter data
    const chapterData = JSON.parse(localStorage.getItem("selectedChapter"));
    const selectedScientist = localStorage.getItem("selectedScientist") || "isaac";
    const allChapters = JSON.parse(localStorage.getItem("chapters")) || [];

    // Safely find current chapter and next chapter
    let currentChapterIndex = -1;
    let nextChapter = null;

    if (allChapters && allChapters.length > 0) {
        currentChapterIndex = allChapters.findIndex((ch) => ch.title === chapterData.title);
        if (currentChapterIndex !== -1 && currentChapterIndex < allChapters.length - 1) {
            nextChapter = allChapters[currentChapterIndex + 1];
        }
    }

    // Determine result message based on score
    let resultMessage;
    if (score === exercises.length) {
        resultMessage = "Excellent! Perfect score!";
    } else if (score >= exercises.length / 2) {
        resultMessage = "Great! You passed!";
    } else {
        resultMessage = "Keep practicing!";
    }

    // Create buttons HTML safely
    let nextButtonHTML = "";
    if (score >= exercises.length / 2) {
        if (nextChapter && nextChapter.title) {
            nextButtonHTML = `<button class="next-chapter-btn" id="next-chapter-btn">Next: ${nextChapter.title}</button>`;
        } else {
            nextButtonHTML = `<button class="back-to-chapters-btn" id="back-to-chapters-btn">Back to Chapters</button>`;
        }
    } else {
        nextButtonHTML = `<button class="study-more-btn" id="study-more-btn">Review: ${chapterData.title}</button>`;
    }

    document.getElementById("content").innerHTML = `
        <div class="completed-screen">
            <h1 class="completed-title">Exercises Completed!</h1>
            <p class="score-display">Your score: <strong>${score} out of ${exercises.length}</strong></p>
            <p class="result-message">${resultMessage}</p>
            <p class="time-display">Time taken: <strong>${finalTime}</strong></p>
            
            <div class="completion-buttons">
                <button class="try-again-btn" id="try-again-btn">Try Again</button>
                ${nextButtonHTML}
            </div>
        </div>
    `;

    // Add event listeners for buttons
    document.getElementById("try-again-btn").addEventListener("click", function () {
        currentExercise = 0;
        score = 0;
        startTime = Date.now();
        initExercise();
    });

    if (score >= exercises.length / 2) {
        if (nextChapter) {
            document.getElementById("next-chapter-btn").addEventListener("click", function () {
                // Store next chapter data for exercises page
                localStorage.setItem("selectedChapter", JSON.stringify(nextChapter));
                window.location.href = "exercises.html";
            });
        } else {
            document.getElementById("back-to-chapters-btn").addEventListener("click", function () {
                window.location.href = "chapter-choice.html";
            });
        }
    } else {
        document.getElementById("study-more-btn").addEventListener("click", function () {
            // Store current chapter data for learning content
            localStorage.setItem("selectedChapter", JSON.stringify(chapterData));
            window.location.href = "chapter-choice.html";
        });
    }
}

// Start the exercises
initExercise();

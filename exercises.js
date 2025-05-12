const scientistImages = {
    isaac: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sir_Isaac_Newton_%281642-1727%29.jpg",
    albert: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    tesla: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
    galileo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg"
};

// Load current user data
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { id: "guest_user" };
const usersDB = JSON.parse(localStorage.getItem("users")) || [];

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

function initExercise() {
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
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
                <button class="submit-btn" id="submit-btn">Submit Answer</button>
                <div id="feedback" class="feedback"></div>
                
                <div class="ai-help-section">
                    <h3 class="ai-help-title">Need help from ${scientist}?</h3>
                    <div class="ai-chat-container">
                        <div class="messages" id="ai-messages"></div>
                        <div class="ai-input-container">
                            <input type="text" class="ai-help-input" id="ai-help-input" 
                                   placeholder="Ask ${scientist} a question...">
                            <button class="ai-send-btn" id="ai-send-btn">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img class="scientist-image" src="${scientistImages[scientist.toLowerCase()]}" alt="${scientist}">
        </div>
    `;

    document.getElementById("answer").focus();
    document.getElementById("submit-btn").addEventListener("click", checkAnswer);
    document.getElementById("answer").addEventListener("keypress", function(e) {
        if (e.key === "Enter") checkAnswer();
    });

    // Initialize AI chat
    setTimeout(() => {
        initAIChat(scientist, currentUser.id);
    }, 100);
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

    // Save progress to user data
    const chapterKey = `${chapterData.scientist}_${chapterData.title.replace(/\s+/g, "_")}`;

    if (!currentUser.progress) {
        currentUser.progress = {};
    }

    currentUser.progress[chapterKey] = {
        completed: true,
        score: score,
        total: exercises.length,
        lastAttempt: new Date().toISOString(),
        bestScore: Math.max(score, currentUser.progress[chapterKey]?.bestScore || 0)
    };

    // Update the user in the database
    const userIndex = usersDB.findIndex((u) => u.email === currentUser.email);
    if (userIndex !== -1) {
        usersDB[userIndex] = currentUser;
        localStorage.setItem("users", JSON.stringify(usersDB));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    // Get current chapter data
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
document.addEventListener('DOMContentLoaded', initExercise);
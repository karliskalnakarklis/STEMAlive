/**
 * STEM Alive - Authentication System
 * Handles user registration, login, and session management
 */

// Initialize user database in localStorage
const usersDB = JSON.parse(localStorage.getItem("users")) || [];

// DOM Content Loaded event
document.addEventListener("DOMContentLoaded", function () {
    initializeAuthSystem();
    setupEventListeners();
});

function initializeAuthSystem() {
    // Check if user is already logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        redirectToDashboard();
    } else {
        showLoginForm();
    }
}

function setupEventListeners() {
    // Password toggle buttons
    document.querySelectorAll(".password-toggle").forEach((button) => {
        button.addEventListener("click", function () {
            const inputId = this.getAttribute("data-target");
            togglePasswordVisibility(inputId, this);
        });
    });

    // Form submissions
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("register-form").addEventListener("submit", handleRegister);

    // Auth toggle links
    document.querySelectorAll(".auth-toggle-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.textContent.includes("Register")) {
                showRegisterForm();
            } else {
                showLoginForm();
            }
        });
    });

    // Modal continue button
    const modalContinueBtn = document.getElementById("modal-continue-btn");
    if (modalContinueBtn) {
        modalContinueBtn.addEventListener("click", function (e) {
            e.preventDefault();
            hideSuccessModal();
            showLoginForm();
        });
    }

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            hideSuccessModal();
        }
    });
}

// Form Handlers
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const messageElement = document.getElementById("login-message");

    // Validation
    if (!email || !password) {
        showMessage(messageElement, "Please fill in all fields", "error");
        return;
    }

    // Check credentials
    const user = usersDB.find((u) => u.email === email && u.password === password);

    if (user) {
        // Create session
        createUserSession(user);
        showMessage(messageElement, "Login successful! Redirecting...", "success");

        // Redirect after short delay
        setTimeout(redirectToDashboard, 1500);
    } else {
        showMessage(messageElement, "Invalid email or password", "error");
    }
}

function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;
    const messageElement = document.getElementById("register-message");

    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showMessage(messageElement, "Please fill in all fields", "error");
        return;
    }

    if (password !== confirmPassword) {
        showMessage(messageElement, "Passwords do not match", "error");
        return;
    }

    if (password.length < 6) {
        showMessage(messageElement, "Password must be at least 6 characters", "error");
        return;
    }

    if (!validateEmail(email)) {
        showMessage(messageElement, "Please enter a valid email address", "error");
        return;
    }

    if (usersDB.some((u) => u.email === email)) {
        showMessage(messageElement, "Email already registered", "error");
        return;
    }

    // Create new user
    const newUser = {
        id: generateId(),
        name,
        email,
        password,
        createdAt: new Date().toISOString()
    };

    // Save to database
    usersDB.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersDB));

    // Show success modal
    showSuccessModal();

    // Reset form
    e.target.reset();
}

// Auth UI Functions
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    clearMessages();
}

function showRegisterForm() {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    clearMessages();
}

function showSuccessModal() {
    document.getElementById("success-modal").classList.add("active");
}

function hideSuccessModal() {
    document.getElementById("success-modal").classList.remove("active");
}

// Utility Functions
function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

function createUserSession(user) {
    const sessionData = {
        id: user.id,
        name: user.name,
        email: user.email,
        lastLogin: new Date().toISOString()
    };
    localStorage.setItem("currentUser", JSON.stringify(sessionData));
}

function clearMessages() {
    document.getElementById("login-message").style.display = "none";
    document.getElementById("register-message").style.display = "none";
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
    element.style.display = "block";

    // Auto-hide after 5 seconds
    if (type === "success") {
        setTimeout(() => {
            element.style.display = "none";
        }, 5000);
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function redirectToDashboard() {
    window.location.href = "subjects-choice.html";
}

// For protected pages
function protectPage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        window.location.href = "index.html";
    }
}

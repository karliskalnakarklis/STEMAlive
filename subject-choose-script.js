const scientistSelect = document.getElementById("scientistSelect");
const subjectTitle = document.getElementById("subject-title");
const description = document.getElementById("description");

// Account Settings elements
const accountButton = document.getElementById("account-button");
const accountOptions = document.getElementById("account-options");
const logoutLink = document.getElementById("logout");
const changePasswordLink = document.getElementById("change-password");
const accountSettingsLink = document.getElementById("account-settings");

// Modal elements
const changePasswordModal = document.getElementById("change-password-modal");
const accountSettingsModal = document.getElementById("account-settings-modal");
const savePasswordButton = document.getElementById("save-password-button");
const cancelPasswordButton = document.getElementById("cancel-password-button");
const saveAccountButton = document.getElementById("save-account-button");
const cancelAccountButton = document.getElementById("cancel-account-button");

const oldPasswordInput = document.getElementById("old-password");
const newPasswordInput = document.getElementById("new-password");
const confirmNewPasswordInput = document.getElementById("confirm-new-password");

const updateNameInput = document.getElementById("update-name");
const updateEmailInput = document.getElementById("update-email");

const passwordChangeMessage = document.getElementById("password-change-message");
const accountUpdateMessage = document.getElementById("account-update-message");

// Define the content for each option
const content = {
    isaac: {
        title: "Physics, Mathematics, and Scientific Inquiry",
        desc: "Engage with Isaac Newton, the pioneer of classical physics. Journey through his revolutionary contributions that laid the groundwork for modern physics, including his acclaimed laws of motion, the concept of universal gravitation, and the principles of calculus—central to understanding the behavior of the physical world."
    },
    albert: {
        title: "Relativity and Modern Physics",
        desc: "Dive into the world of Albert Einstein, who transformed our understanding of the universe with his theories of special and general relativity. Learn about the intricate details of spacetime, energy-mass equivalence, and how these groundbreaking concepts reshaped physics forever."
    },
    tesla: {
        title: "Electricity and Electromagnetic Innovation",
        desc: "Collaborate with Nikola Tesla, a visionary in electrical engineering. Discover his pioneering work in alternating current (AC) systems, the wireless transmission of energy, and his revolutionary contributions that continue to influence modern technology and electrical power distribution."
    },
    galileo: {
        title: "Mechanics and Astronomical Observations",
        desc: "Join Galileo Galilei on his scientific journey. Examine his groundbreaking contributions to mechanics, the development of the scientific method, and his astronomical observations which confirmed the heliocentric model, forever changing our perception of the cosmos."
    }
};

// Add an event listener to the select element
scientistSelect.addEventListener("change", function () {
    const selectedScientist = this.value;

    // Save selected scientist to localStorage
    localStorage.setItem("selectedScientist", selectedScientist);

    subjectTitle.textContent = content[selectedScientist].title;
    description.innerHTML = content[selectedScientist].desc;
});

document.addEventListener("DOMContentLoaded", function () {
    const selectedScientist = localStorage.getItem("selectedScientist") || "isaac"; // Default to isaac
    scientistSelect.value = selectedScientist;
    subjectTitle.textContent = content[selectedScientist].title;
    description.innerHTML = content[selectedScientist].desc;
});

// Account Settings logic
accountButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click from immediately closing the options
    accountOptions.classList.toggle("hidden");
});

logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
});

changePasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    accountOptions.classList.add("hidden"); // Hide the options
    changePasswordModal.classList.remove("hidden"); // Show the modal
});

accountSettingsLink.addEventListener("click", function (e) {
    e.preventDefault();
    accountOptions.classList.add("hidden"); // Hide the options
    accountSettingsModal.classList.remove("hidden"); // Show the modal

    // Populate the form with current user data
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    updateNameInput.value = currentUser.name;
    updateEmailInput.value = currentUser.email;
});

// Modal button listeners
cancelPasswordButton.addEventListener("click", function (e) {
    e.preventDefault();
    changePasswordModal.classList.add("hidden");
    clearPasswordMessage();
});

cancelAccountButton.addEventListener("click", function (e) {
    e.preventDefault();
    accountSettingsModal.classList.add("hidden");
    clearAccountMessage();
});

savePasswordButton.addEventListener("click", function (e) {
    e.preventDefault();
    handleChangePassword();
});

saveAccountButton.addEventListener("click", function (e) {
    e.preventDefault();
    handleUpdateAccount();
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
    if (event.target === changePasswordModal) {
        changePasswordModal.classList.add("hidden");
        clearPasswordMessage();
    } else if (event.target === accountSettingsModal) {
        accountSettingsModal.classList.add("hidden");
        clearAccountMessage();
    } else if (!event.target.closest(".account-settings")) {
        accountOptions.classList.add("hidden");
    }
});

//Functions to handle changes
function handleChangePassword() {
    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    if (!oldPassword || !newPassword || !confirmNewPassword) {
        showPasswordMessage("Please fill in all fields", "error");
        return;
    }

    if (newPassword !== confirmNewPassword) {
        showPasswordMessage("New passwords do not match", "error");
        return;
    }

    if (newPassword.length < 6) {
        showPasswordMessage("New password must be at least 6 characters", "error");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usersDB = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = usersDB.findIndex((user) => user.email === currentUser.email);

    if (userIndex === -1) {
        showPasswordMessage("User not found", "error");
        return;
    }

    if (usersDB[userIndex].password !== oldPassword) {
        showPasswordMessage("Incorrect old password", "error");
        return;
    }

    // Update the password
    usersDB[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(usersDB));

    // Update the current user's password (if needed)
    currentUser.password = newPassword;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    showPasswordMessage("Password changed successfully!", "success");

    //Clear the form
    oldPasswordInput.value = "";
    newPasswordInput.value = "";
    confirmNewPasswordInput.value = "";

    //Hide the form after 3 seconds
    setTimeout(() => {
        changePasswordModal.classList.add("hidden");
        clearPasswordMessage();
    }, 3000);
}

function handleUpdateAccount() {
    const newName = updateNameInput.value;
    const newEmail = updateEmailInput.value;

    if (!newName || !newEmail) {
        showAccountMessage("Please fill in all fields", "error");
        return;
    }

    if (!validateEmail(newEmail)) {
        showAccountMessage("Please enter a valid email address", "error");
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usersDB = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = usersDB.findIndex((user) => user.email === currentUser.email);

    if (userIndex === -1) {
        showAccountMessage("User not found", "error");
        return;
    }

    //Update properties
    usersDB[userIndex].name = newName;
    usersDB[userIndex].email = newEmail;

    localStorage.setItem("users", JSON.stringify(usersDB));

    //Update the current user
    currentUser.name = newName;
    currentUser.email = newEmail;

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    showAccountMessage("Account updated successfully!", "success");

    setTimeout(() => {
        accountSettingsModal.classList.add("hidden");
        clearAccountMessage();
    }, 3000);
}

//Helper functions
function clearPasswordMessage() {
    passwordChangeMessage.textContent = "";
    passwordChangeMessage.className = "message";
}

function showPasswordMessage(message, type) {
    passwordChangeMessage.textContent = message;
    passwordChangeMessage.className = `message ${type}`;
}

function clearAccountMessage() {
    accountUpdateMessage.textContent = "";
    accountUpdateMessage.className = "message";
}

function showAccountMessage(message, type) {
    accountUpdateMessage.textContent = message;
    accountUpdateMessage.className = `message ${type}`;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Account Dropdown Functionality for Subjects Page
document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        document.getElementById("subjects-user-name").textContent = currentUser.name;
        document.getElementById("subjects-user-email").textContent = currentUser.email;
    }

    const accountToggle = document.getElementById("subjects-account-toggle");
    const dropdownMenu = document.getElementById("subjects-dropdown-menu");

    // Toggle dropdown
    accountToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
    });

    // Logout functionality
    document.getElementById("subjects-logout-btn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });

    // Change password functionality
    document.getElementById("subjects-change-password").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("subjects-password-modal").style.display = "flex";
        dropdownMenu.classList.remove("show");
    });

    // Modal close functionality
    document.getElementById("subjects-cancel-password-btn").addEventListener("click", function () {
        document.getElementById("subjects-password-modal").style.display = "none";
    });

    // Save password functionality
    document.getElementById("subjects-save-password-btn").addEventListener("click", function () {
        const currentPassword = document.getElementById("subjects-current-password").value;
        const newPassword = document.getElementById("subjects-new-password").value;
        const confirmPassword = document.getElementById("subjects-confirm-new-password").value;
        const messageElement = document.getElementById("subjects-password-message");

        // Validate inputs
        if (!currentPassword || !newPassword || !confirmPassword) {
            showSubjectsMessage(messageElement, "Please fill in all fields", "error");
            return;
        }

        if (newPassword.length < 6) {
            showSubjectsMessage(messageElement, "Password must be at least 6 characters", "error");
            return;
        }

        if (newPassword !== confirmPassword) {
            showSubjectsMessage(messageElement, "New passwords do not match", "error");
            return;
        }

        // Get current user
        const usersDB = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const userIndex = usersDB.findIndex((u) => u.email === currentUser.email);

        if (userIndex === -1 || usersDB[userIndex].password !== currentPassword) {
            showSubjectsMessage(messageElement, "Current password is incorrect", "error");
            return;
        }

        // Update password
        usersDB[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(usersDB));

        // Update current user session
        currentUser.lastLogin = new Date().toISOString();
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        showSubjectsMessage(messageElement, "Password changed successfully!", "success");

        // Clear and close after success
        setTimeout(() => {
            document.getElementById("subjects-current-password").value = "";
            document.getElementById("subjects-new-password").value = "";
            document.getElementById("subjects-confirm-new-password").value = "";
            document.getElementById("subjects-password-modal").style.display = "none";
            messageElement.style.display = "none";
        }, 2000);
    });

    function showSubjectsMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`;
        element.style.display = "block";
    }
});

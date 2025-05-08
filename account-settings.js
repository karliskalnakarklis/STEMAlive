document.addEventListener("DOMContentLoaded", function () {
    // Load current user data
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usersDB = JSON.parse(localStorage.getItem("users")) || [];

    // Account Settings Modal Elements
    const accountSettingsBtn = document.getElementById("subjects-account-settings");
    const accountModal = document.getElementById("subjects-account-modal");
    const cancelAccountBtn = document.getElementById("subjects-cancel-account-btn");
    const saveAccountBtn = document.getElementById("subjects-save-account-btn");
    const accountMessage = document.getElementById("subjects-account-message");

    // Form Fields
    const accountName = document.getElementById("subjects-account-name");
    const accountEmail = document.getElementById("subjects-account-email");
    const accountPhone = document.getElementById("subjects-account-phone");

    // Initialize form with current user data
    if (currentUser) {
        accountName.value = currentUser.name || "";
        accountEmail.value = currentUser.email || "";
        accountPhone.value = currentUser.phone || "";
    }

    // Open Account Settings Modal
    accountSettingsBtn.addEventListener("click", function (e) {
        e.preventDefault();
        accountModal.style.display = "flex";
        document.getElementById("subjects-dropdown-menu").classList.remove("show");
    });

    // Close Account Settings Modal
    cancelAccountBtn.addEventListener("click", function () {
        accountModal.style.display = "none";
        resetAccountForm();
    });

    // Save Account Changes
    saveAccountBtn.addEventListener("click", function () {
        const newName = accountName.value.trim();
        const newEmail = accountEmail.value.trim();
        const newPhone = accountPhone.value.trim();

        // Validate inputs
        if (!newName || !newEmail) {
            showAccountMessage("Please fill in all required fields", "error");
            return;
        }

        if (!validateEmail(newEmail)) {
            showAccountMessage("Please enter a valid email address", "error");
            return;
        }

        // Check if email is already taken by another user
        const emailTaken = usersDB.some((user) => user.email === newEmail && user.email !== currentUser.email);

        if (emailTaken) {
            showAccountMessage("This email is already registered", "error");
            return;
        }

        // Update user in database
        const userIndex = usersDB.findIndex((u) => u.email === currentUser.email);
        if (userIndex !== -1) {
            usersDB[userIndex].name = newName;
            usersDB[userIndex].email = newEmail;
            usersDB[userIndex].phone = newPhone;
            localStorage.setItem("users", JSON.stringify(usersDB));
        }

        // Update current session
        currentUser.name = newName;
        currentUser.email = newEmail;
        currentUser.phone = newPhone;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // Update UI
        document.getElementById("subjects-user-name").textContent = newName;
        document.getElementById("subjects-user-email").textContent = newEmail;

        showAccountMessage("Account updated successfully!", "success");

        // Close after delay
        setTimeout(() => {
            accountModal.style.display = "none";
            accountMessage.style.display = "none";
        }, 2000);
    });

    // Helper Functions
    function resetAccountForm() {
        if (currentUser) {
            accountName.value = currentUser.name || "";
            accountEmail.value = currentUser.email || "";
            accountPhone.value = currentUser.phone || "";
        }
        accountMessage.style.display = "none";
    }

    function showAccountMessage(message, type) {
        accountMessage.textContent = message;
        accountMessage.className = `message ${type}`;
        accountMessage.style.display = "block";
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

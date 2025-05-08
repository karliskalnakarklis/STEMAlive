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

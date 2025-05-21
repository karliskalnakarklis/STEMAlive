
const translations = {
    en: {
        subjectTitle: "Select a Scientist to Explore",
        chapterTitle: "Select a Chapter to Begin Your Learning Journey",
        next: "Next",
        logout: "Log Out",
        accountSettings: "Account Settings",
        changePassword: "Change Password"
    },
    nl: {
        subjectTitle: "Selecteer een wetenschapper om te verkennen",
        chapterTitle: "Selecteer een hoofdstuk om je leertraject te beginnen",
        next: "Volgende",
        logout: "Uitloggen",
        accountSettings: "Accountinstellingen",
        changePassword: "Wachtwoord wijzigen"
    },
    fr: {
        subjectTitle: "Sélectionnez un scientifique à explorer",
        chapterTitle: "Sélectionnez un chapitre pour commencer votre apprentissage",
        next: "Suivant",
        logout: "Se déconnecter",
        accountSettings: "Paramètres du compte",
        changePassword: "Changer le mot de passe"
    }
};

function applyTranslations(context) {
    const lang = localStorage.getItem("preferredLang") || "en";
    const t = translations[lang];

    if (context === "subject") {
        document.getElementById("subject-title-header").textContent = t.subjectTitle;
        document.getElementById("next-button").textContent = t.next;
    }

    if (context === "chapter") {
        document.getElementById("chapter-title-header").textContent = t.chapterTitle;
        document.getElementById("next-button").textContent = t.next;
    }

    const logoutBtn = document.getElementById("subjects-logout-btn");
    const accSettings = document.getElementById("subjects-account-settings");
    const passChange = document.getElementById("subjects-change-password");

    if (logoutBtn) logoutBtn.textContent = t.logout;
    if (accSettings) accSettings.textContent = t.accountSettings;
    if (passChange) passChange.textContent = t.changePassword;
}

document.addEventListener("DOMContentLoaded", function () {
    const context = document.body.getAttribute("data-context");
    applyTranslations(context);
});

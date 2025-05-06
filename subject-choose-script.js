// subject-choose-script.js

// Get the select element and description elements
const scientistSelect = document.getElementById('scientistSelect');
const subjectTitle = document.getElementById('subject-title');
const description = document.getElementById('description');

// Define the content for each option
const content = {
    isaac: {
        title: "Physics, Mathematics, and Scientific Inquiry",
        desc: "Students interact with Isaac Newton, the father of classical physics, to learn about his groundbreaking discoveries, including the laws of motion, universal gravitation, and calculus."
    },
    albert: {
        title: "Relativity and Modern Physics",
        desc: "Students explore with Albert Einstein the revolutionary theories of special and general relativity, learning about spacetime, energy-mass equivalence, and how these concepts changed our understanding of the universe."
    },
    tesla: {
        title: "Electricity and Electromagnetic Innovation",
        desc: "Students collaborate with Nikola Tesla to understand his pioneering work in electrical engineering, including alternating current (AC) power systems, wireless transmission of energy, and revolutionary contributions to electromagnetism."
    },
    galileo: {
        title: "Mechanics and Astronomical Observations",
        desc: "Students join Galileo Galilei in his scientific journey, examining his contributions to mechanics, the development of the scientific method, and his astronomical observations that supported the heliocentric model."
    }
};

// Add an event listener to the select element
scientistSelect.addEventListener('change', function () {
    const selectedScientist = this.value;

    // Save selected scientist to localStorage
    localStorage.setItem('selectedScientist', selectedScientist);

    subjectTitle.textContent = content[selectedScientist].title;
    description.innerHTML = content[selectedScientist].desc;
});

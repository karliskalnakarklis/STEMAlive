// subject-choose-script.js

// Get the select element and description elements
const scientistSelect = document.getElementById('scientistSelect');
const subjectTitle = document.getElementById('subject-title');
const description = document.getElementById('description');

// Define the content for each option
const content = {
    isaac: {
        title: "Physics, Motion, and Gravitation",
        desc: "Interact with Isaac Newton to explore classical mechanics—from the laws of motion to universal gravitation—using hands-on STEM activities."
    },
    albert: {
        title: "Relativity and the Nature of Spacetime",
        desc: "Explore Einstein’s special and general relativity, learning how time, space, and gravity intertwine in our universe."
    },
    tesla: {
        title: "Electricity, Innovation, and Wireless Power",
        desc: "Discover Tesla’s legacy in AC power, wireless energy transfer, and modern electrical engineering innovations."
    },
    galileo: {
        title: "Scientific Method and Space Discoveries",
        desc: "Join Galileo to understand motion, invent the scientific method, and unlock the secrets of the cosmos through telescopic observations."
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

// chapter-loader.js

const chaptersByScientist = {
    isaac: [
        { title: "Foundations of Motion", desc: "Explore Newton’s Laws of Motion and how they govern everything from falling apples to orbiting planets." },
        { title: "Gravitation and Orbits", desc: "Understand universal gravitation and how Newton explained planetary motion." }
    ],
    albert: [
        { title: "Special Relativity", desc: "Learn about time dilation, length contraction, and the relativity of simultaneity." },
        { title: "General Relativity", desc: "Explore how gravity works as a curvature of spacetime." }
    ],
    tesla: [
        { title: "Alternating Current", desc: "Understand AC power, Tesla's innovations, and how electricity reaches your home." },
        { title: "Wireless Energy", desc: "Discover Tesla's ideas and experiments on wireless transmission of electricity." }
    ],
    galileo: [
        { title: "Astronomical Discoveries", desc: "Explore Galileo's telescope work, Jupiter’s moons, and heliocentrism." },
        { title: "The Scientific Method", desc: "See how Galileo's experiments laid the groundwork for modern science." }
    ]
};

const selectedScientist = localStorage.getItem('selectedScientist') || 'isaac';
const chapterSelect = document.getElementById('chapterSelect');
const chapterTitle = document.getElementById('chapter-title');
const description = document.getElementById('description');

const chapters = chaptersByScientist[selectedScientist];

// Populate the dropdown
chapterSelect.innerHTML = '';
chapters.forEach((ch, index) => {
    const option = document.createElement('option');
    option.value = `chapter-${index + 1}`;
    option.textContent = ch.title;
    chapterSelect.appendChild(option);
});

function updateChapterInfo(index) {
    chapterTitle.textContent = chapters[index].title;
    description.textContent = chapters[index].desc;
}

// Set initial info
updateChapterInfo(0);

// Update on dropdown change
chapterSelect.addEventListener('change', function () {
    updateChapterInfo(this.selectedIndex);
});

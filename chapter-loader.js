// chapter-loader.js

const chaptersByScientist = {
    isaac: [
        {
            title: "Foundations of Motion",
            desc: `
                <strong>Newton's Laws of Motion:</strong><br>
                - First Law (Inertia): Objects remain at rest or move uniformly unless acted upon.<br>
                - Second Law (F = ma): Acceleration depends on mass and force.<br>
                - Third Law: Every action has an equal and opposite reaction.<br><br>

                <strong>STEM Activity:</strong> Push carts of varying mass to compare acceleration.`
        },
        {
            title: "Gravitation and Orbits",
            desc: `
                <strong>Universal Gravitation:</strong><br>
                - F = G(m₁·m₂)/r², all objects attract each other.<br>
                - Applications to satellites, the Moon, tides.<br><br>

                <strong>STEM Activity:</strong> Model planetary orbits using string or simulation.`
        }
    ],
    albert: [
        {
            title: "Special Relativity",
            desc: `
                <strong>Time Dilation:</strong> Moving clocks run slower.<br>
                <strong>Length Contraction:</strong> Objects contract along the direction of motion.<br>
                <strong>Relativity of Simultaneity:</strong> Simultaneous events depend on the observer’s frame.<br><br>

                <strong>STEM Activity:</strong> Simulate GPS time correction or light clock experiments.`
        },
        {
            title: "General Relativity",
            desc: `
                <strong>Spacetime Curvature:</strong> Gravity as curved space.<br>
                <strong>Black Holes:</strong> Extreme gravity traps even light.<br>
                <strong>Gravitational Time Dilation:</strong> Time slows near massive bodies.<br><br>

                <strong>STEM Activity:</strong> Rubber sheet models of gravity wells.`
        }
    ],
    tesla: [
        {
            title: "Wireless Energy",
            desc: `
                <strong>Tesla Coil:</strong> Demonstrates power transmission through air.<br>
                <strong>Wardenclyffe Tower:</strong> Tesla’s global wireless dream.<br>
                <strong>Modern Uses:</strong> Wireless charging and satellite energy tests.<br><br>

                <strong>STEM Activity:</strong> Build safe inductive coils or Tesla coil demos.`
        },
        {
            title: "Alternating Current",
            desc: `
                <strong>AC vs DC:</strong> AC alternates; DC flows one way.<br>
                <strong>Advantages:</strong> Efficient transmission over long distances.<br>
                <strong>Tesla's Impact:</strong> Enabled modern electric power grids.<br><br>

                <strong>STEM Activity:</strong> Use AC/DC motors or coil transformer demos.`
        }
    ],
    galileo: [
        {
            title: "Motion Experiments",
            desc: `
                <strong>Inclined Planes:</strong> Disproved Aristotle, found uniform acceleration.<br>
                <strong>Distance-Time:</strong> d ∝ t² for uniformly accelerating objects.<br><br>

                <strong>STEM Activity:</strong> Drop tests, ramps, and graph plotting.`
        },
        {
            title: "Scientific Method",
            desc: `
                <strong>Scientific Steps:</strong> Observation → Hypothesis → Experiment → Conclusion.<br>
                <strong>Legacy:</strong> Promoted evidence-based science.<br><br>

                <strong>STEM Activity:</strong> Design and test your own experiment.`
        },
        {
            title: "Astronomical Observations",
            desc: `
                <strong>Jupiter's Moons:</strong> Not all bodies orbit Earth.<br>
                <strong>Phases of Venus:</strong> Proved heliocentrism.<br><br>

                <strong>STEM Activity:</strong> Track planets/moons using apps or simulations.`
        }
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
    description.innerHTML = chapters[index].desc;
}

// Set initial info
updateChapterInfo(0);

// Update on dropdown change
chapterSelect.addEventListener('change', function () {
    updateChapterInfo(this.selectedIndex);
});

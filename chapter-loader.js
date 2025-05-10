const chaptersByScientist = {
    isaac: [
        {
            title: "Foundations of Motion",
            desc: "Explore Newton's Laws of Motion and how they govern everything from falling apples to orbiting planets.",
            exercises: [
                { question: "What is Newton's First Law called?", answer: "law of inertia" },
                { question: "What does Newton's First Law state?", answer: "objects in motion stay in motion" },
                { question: "What is the formula for Newton's Second Law?", answer: "F=ma" },
                { question: "What does the 'F' stand for in F=ma?", answer: "force" },
                { question: "What does Newton's Third Law describe?", answer: "action-reaction pairs" },
                { question: "Give an example of Newton's Third Law.", answer: "rocket propulsion" },
                { question: "What is the unit of force?", answer: "newton" },
                { question: "What property resists changes in motion?", answer: "inertia" },
                { question: "How does mass relate to inertia?", answer: "directly proportional" },
                { question: "What happens when net force is zero?", answer: "constant velocity" }
            ],
            learningContent: `
                <h4>Newton's Laws of Motion</h4>
                <p>Sir Isaac Newton's three laws of motion describe the relationship between a body and the forces acting upon it, and its motion in response to those forces.</p>
                
                <h4>First Law: Law of Inertia</h4>
                <p>An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.</p>
                <ul>
                    <li>Inertia is the tendency of objects to resist changes in their state of motion</li>
                    <li>Examples: Seatbelts protect you in car crashes (your body wants to keep moving forward)</li>
                </ul>
                
                <h4>Second Law: F=ma</h4>
                <p>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
                <ul>
                    <li>Force (F) is measured in Newtons (N)</li>
                    <li>Mass (m) is measured in kilograms (kg)</li>
                    <li>Acceleration (a) is measured in meters per second squared (m/s²)</li>
                </ul>
                
                <h4>Third Law: Action-Reaction</h4>
                <p>For every action, there is an equal and opposite reaction.</p>
                <ul>
                    <li>Forces always occur in pairs</li>
                    <li>Examples: Rockets push exhaust gases downward (action), gases push rocket upward (reaction)</li>
                </ul>
            `
        },
        {
            title: "Gravitation and Orbits",
            desc: "Delve into universal gravitation and its implications on planetary movements.",
            exercises: [
                { question: "What is Newton's Law of Gravitation?", answer: "F=G(m1m2)/r²" },
                { question: "What does 'G' represent?", answer: "gravitational constant" },
                { question: "How does force change with distance?", answer: "inverse square" },
                { question: "What shape are planetary orbits?", answer: "elliptical" },
                { question: "What keeps satellites in orbit?", answer: "centripetal force" },
                { question: "What is escape velocity?", answer: "speed to leave gravity" },
                { question: "How does weight differ from mass?", answer: "weight depends on gravity" },
                { question: "What causes tides?", answer: "moon's gravity" },
                { question: "What did Newton compare to the Moon's orbit?", answer: "falling apple" },
                { question: "What's special about geostationary orbit?", answer: "matches Earth's rotation" }
            ],
            learningContent: `
                <h4>Newton's Law of Universal Gravitation</h4>
                <p>Every particle attracts every other particle in the universe with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.</p>
                <p>Formula: F = G(m₁m₂)/r²</p>
                <ul>
                    <li>F = gravitational force</li>
                    <li>G = gravitational constant (6.674×10⁻¹¹ N·m²/kg²)</li>
                    <li>m₁, m₂ = masses of objects</li>
                    <li>r = distance between centers</li>
                </ul>
                
                <h4>Planetary Orbits</h4>
                <p>Kepler's laws describe planetary motion:</p>
                <ol>
                    <li>Planets move in elliptical orbits with the Sun at one focus</li>
                    <li>A line connecting a planet to the Sun sweeps out equal areas in equal times</li>
                    <li>The square of a planet's orbital period is proportional to the cube of its average distance from the Sun</li>
                </ol>
                
                <h4>Key Concepts</h4>
                <ul>
                    <li><strong>Escape velocity:</strong> Minimum speed needed to break free from gravitational pull (11.2 km/s for Earth)</li>
                    <li><strong>Geostationary orbit:</strong> Satellite orbits at 35,786 km altitude, matching Earth's rotation</li>
                    <li><strong>Tidal forces:</strong> Differential gravitational pull causing ocean tides</li>
                </ul>
            `
        }
    ],
    albert: [
        {
            title: "Special Relativity",
            desc: "Learn about time dilation, length contraction, and the speed of light.",
            exercises: [
                { question: "What is the cosmic speed limit?", answer: "speed of light" },
                { question: "What happens to time at light speed?", answer: "stops" },
                { question: "What famous equation relates mass and energy?", answer: "E=mc²" },
                { question: "What is time dilation?", answer: "time slows at high speed" },
                { question: "What is length contraction?", answer: "objects shrink at speed" },
                { question: "What remains constant for all observers?", answer: "light speed" },
                { question: "What is relativity's effect on simultaneity?", answer: "it's relative" },
                { question: "What paradox involves twins aging differently?", answer: "twin paradox" },
                { question: "What is spacetime?", answer: "4D continuum" },
                { question: "What does special relativity not include?", answer: "gravity" }
            ],
            learningContent: `
                <h4>Einstein's Postulates</h4>
                <ol>
                    <li>The laws of physics are identical in all inertial frames of reference</li>
                    <li>The speed of light in vacuum is constant (c ≈ 3×10⁸ m/s) regardless of the motion of the source or observer</li>
                </ol>
                
                <h4>Key Phenomena</h4>
                <p><strong>Time Dilation:</strong> Moving clocks run slower than stationary ones</p>
                <p>Formula: t = t₀/√(1-v²/c²)</p>
                
                <p><strong>Length Contraction:</strong> Objects shorten along direction of motion</p>
                <p>Formula: L = L₀√(1-v²/c²)</p>
                
                <p><strong>Mass-Energy Equivalence:</strong> E = mc²</p>
                <ul>
                    <li>Energy and mass are interchangeable</li>
                    <li>Tiny amounts of mass can be converted to enormous energy</li>
                </ul>
                
                <h4>Relativistic Effects</h4>
                <ul>
                    <li>Simultaneity is relative - events simultaneous in one frame may not be in another</li>
                    <li>Twin Paradox: Traveling twin ages slower than Earth-bound twin</li>
                    <li>Nothing with mass can reach light speed (requires infinite energy)</li>
                </ul>
            `
        },
        {
            title: "General Relativity",
            desc: "Explore gravity as curvature of spacetime and its effects on the universe.",
            exercises: [
                { question: "What causes gravity in general relativity?", answer: "spacetime curvature" },
                { question: "What bends light near massive objects?", answer: "gravity" },
                { question: "What was Einstein's 'happiest thought'?", answer: "falling man" },
                { question: "What do objects follow in spacetime?", answer: "geodesics" },
                { question: "What phenomenon confirms general relativity?", answer: "gravitational lensing" },
                { question: "What affects time's passage?", answer: "gravity" },
                { question: "What are ripples in spacetime called?", answer: "gravitational waves" },
                { question: "What extreme object warps spacetime severely?", answer: "black hole" },
                { question: "What is the event horizon?", answer: "point of no return" },
                { question: "What did Eddington's eclipse prove?", answer: "light bending" }
            ],
            learningContent: `
                <h4>Core Principles</h4>
                <p>Gravity is not a force but the curvature of spacetime caused by mass and energy.</p>
                <p>Einstein's Field Equations: Gμν = 8πTμν</p>
                
                <h4>Key Predictions</h4>
                <ol>
                    <li><strong>Gravitational Time Dilation:</strong> Clocks run slower in stronger gravitational fields</li>
                    <li><strong>Light Bending:</strong> Light follows curved paths near massive objects (confirmed during 1919 eclipse)</li>
                    <li><strong>Gravitational Waves:</strong> Ripples in spacetime propagating at light speed (first detected 2015)</li>
                </ol>
                
                <h4>Black Holes</h4>
                <p>Regions where spacetime curvature becomes infinite:</p>
                <ul>
                    <li><strong>Event Horizon:</strong> Boundary from which nothing can escape</li>
                    <li><strong>Singularity:</strong> Infinite density at center</li>
                    <li><strong>Hawking Radiation:</strong> Quantum effects cause black holes to slowly evaporate</li>
                </ul>
                
                <h4>Cosmological Implications</h4>
                <ul>
                    <li>Expanding universe (Friedmann equations)</li>
                    <li>Big Bang theory framework</li>
                    <li>Dark matter and dark energy effects</li>
                </ul>
            `
        }
    ],
    tesla: [
        {
            title: "Alternating Current",
            desc: "Understand AC power and how electricity is transmitted to your home.",
            exercises: [
                { question: "What's AC's main advantage over DC?", answer: "voltage transformation" },
                { question: "What device changes AC voltage?", answer: "transformer" },
                { question: "How many direction changes in 60Hz AC?", answer: "120" },
                { question: "What's AC's waveform shape?", answer: "sine wave" },
                { question: "Who developed AC power systems?", answer: "Tesla" },
                { question: "What's the standard US household voltage?", answer: "120V" },
                { question: "What's three-phase power?", answer: "three AC waveforms" },
                { question: "Why is AC safer for power lines?", answer: "high voltage" },
                { question: "What reduces current in power lines?", answer: "higher voltage" },
                { question: "What's the purpose of a rectifier?", answer: "AC to DC" }
            ],
            learningContent: `
                <h4>AC Fundamentals</h4>
                <p>Alternating current periodically reverses direction, typically following a sinusoidal waveform.</p>
                <p>Key parameters:</p>
                <ul>
                    <li><strong>Frequency:</strong> Cycles per second (Hz) - 50/60 Hz standard</li>
                    <li><strong>Voltage:</strong> RMS value (120V/230V typical)</li>
                    <li><strong>Phase:</strong> Multiple waveforms offset in time (3-phase common)</li>
                </ul>
                
                <h4>AC vs DC</h4>
                <p>Advantages of AC:</p>
                <ol>
                    <li>Voltage can be easily transformed (step-up/down with transformers)</li>
                    <li>More efficient long-distance transmission (high voltage, low current)</li>
                    <li>Easier to interrupt (current naturally goes to zero)</li>
                </ol>
                
                <h4>Power Transmission</h4>
                <p>Typical system components:</p>
                <ol>
                    <li>Generation (power plants at 10-25kV)</li>
                    <li>Step-up to transmission voltage (115-765kV)</li>
                    <li>Long-distance transmission</li>
                    <li>Step-down to distribution voltage (4-35kV)</li>
                    <li>Final step-down to utilization voltage (120/240V)</li>
                </ol>
                
                <h4>Key Components</h4>
                <ul>
                    <li><strong>Transformers:</strong> Change voltage levels using electromagnetic induction</li>
                    <li><strong>Rectifiers:</strong> Convert AC to DC (diodes, thyristors)</li>
                    <li><strong>Inverters:</strong> Convert DC to AC (solar systems, UPS)</li>
                </ul>
            `
        },
        {
            title: "Wireless Energy",
            desc: "Discover Tesla's visionary ideas on wireless electricity transmission.",
            exercises: [
                { question: "What principle enables wireless power?", answer: "electromagnetic induction" },
                { question: "What famous tower did Tesla build?", answer: "Wardenclyffe" },
                { question: "What modern tech uses wireless power?", answer: "inductive charging" },
                { question: "What natural phenomenon inspired Tesla?", answer: "lightning" },
                { question: "What was Tesla's global power vision?", answer: "worldwide electricity" },
                { question: "What device demonstrates wireless power?", answer: "Tesla coil" },
                { question: "What current do Tesla coils produce?", answer: "high frequency" },
                { question: "What's resonant inductive coupling?", answer: "efficient wireless transfer" },
                { question: "What limits wireless power distance?", answer: "energy dissipation" },
                { question: "What medical tech uses wireless power?", answer: "implant charging" }
            ],
            learningContent: `
                <h4>Tesla's Vision</h4>
                <p>Nikola Tesla envisioned a worldwide wireless power distribution system using:</p>
                <ul>
                    <li>Earth's natural conductivity</li>
                    <li>Resonant inductive coupling</li>
                    <li>Atmospheric conduction</li>
                </ul>
                
                <h4>Wardenclyffe Tower</h4>
                <p>Tesla's 1901-1917 experimental station aimed to demonstrate:</p>
                <ol>
                    <li>Wireless power transmission</li>
                    <li>Worldwide communication</li>
                    <li>Atmospheric energy harvesting</li>
                </ol>
                
                <h4>Modern Wireless Power</h4>
                <p>Current technologies based on Tesla's work:</p>
                <ul>
                    <li><strong>Inductive Charging:</strong> Qi standard for phones, electric toothbrushes</li>
                    <li><strong>Resonant Coupling:</strong> Mid-range power transfer (several cm to meters)</li>
                    <li><strong>RF Harvesting:</strong> Low-power devices using ambient radio waves</li>
                </ul>
                
                <h4>Technical Principles</h4>
                <p><strong>Electromagnetic Induction:</strong> Changing magnetic field induces current in conductor</p>
                <p><strong>Resonance:</strong> Matching transmitter/receiver frequencies increases efficiency</p>
                <p><strong>Near-field vs Far-field:</strong> Different techniques for short/long range</p>
            `
        }
    ],
    galileo: [
        {
            title: "Astronomical Discoveries",
            desc: "Explore Galileo's telescope observations and support for heliocentrism.",
            exercises: [
                { question: "What did Galileo discover about Jupiter?", answer: "four moons" },
                { question: "What model did Galileo support?", answer: "heliocentric" },
                { question: "What did Galileo see on the Moon?", answer: "mountains" },
                { question: "What planet has phases like the Moon?", answer: "Venus" },
                { question: "What did Galileo observe about sunspots?", answer: "they move" },
                { question: "What instrument did Galileo improve?", answer: "telescope" },
                { question: "What did the Church accuse Galileo of?", answer: "heresy" },
                { question: "What book got Galileo in trouble?", answer: "Dialogue" },
                { question: "How did Galileo study acceleration?", answer: "inclined planes" },
                { question: "What's Galileo's famous leaning tower experiment?", answer: "falling objects" }
            ],
            learningContent: `
                <h4>Key Discoveries (1609-1610)</h4>
                <p>Using his improved telescope (20x magnification), Galileo observed:</p>
                <ol>
                    <li><strong>Jupiter's Moons:</strong> Four large satellites (Io, Europa, Ganymede, Callisto) - now called Galilean moons</li>
                    <li><strong>Lunar Surface:</strong> Mountains and craters proving Moon wasn't perfect sphere</li>
                    <li><strong>Venus Phases:</strong> Complete cycle proving it orbits Sun</li>
                    <li><strong>Sunspots:</strong> Imperfections on Sun's surface contradicting Aristotelian perfection</li>
                    <li><strong>Milky Way:</strong> Composed of countless stars</li>
                </ol>
                
                <h4>Support for Copernican System</h4>
                <p>Galileo's observations challenged the geocentric model:</p>
                <ul>
                    <li>Jupiter's moons showed not everything orbits Earth</li>
                    <li>Venus phases matched Copernican predictions</li>
                    <li>Sunspots demonstrated solar rotation</li>
                </ul>
                
                <h4>Conflict with the Church</h4>
                <p>1616: Catholic Church declares heliocentrism "foolish and absurd"</p>
                <p>1633: Galileo tried for heresy, forced to recant, placed under house arrest</p>
                <p>1992: Vatican formally acknowledges error in condemning Galileo</p>
            `
        },
        {
            title: "The Scientific Method",
            desc: "See how Galileo's experiments laid groundwork for modern science.",
            exercises: [
                { question: "What approach did Galileo emphasize?", answer: "experimental" },
                { question: "What did Galileo demonstrate about falling objects?", answer: "same acceleration" },
                { question: "What did Galileo challenge about motion?", answer: "Aristotelian physics" },
                { question: "What's Galileo's contribution to science?", answer: "scientific method" },
                { question: "What did Galileo use to measure time?", answer: "water clock" },
                { question: "What's Galileo's principle of relativity?", answer: "laws same in all frames" },
                { question: "What math did Galileo apply to physics?", answer: "geometry" },
                { question: "What did Galileo discover about pendulums?", answer: "isochronism" },
                { question: "What's Galileo's view on mathematics?", answer: "language of nature" },
                { question: "What did Galileo say about the universe?", answer: "it's written in math" }
            ],
            learningContent: `
                <h4>Galileo's Experimental Approach</h4>
                <p>Pioneered the combination of:</p>
                <ol>
                    <li>Controlled experiments</li>
                    <li>Quantitative measurements</li>
                    <li>Mathematical analysis</li>
                </ol>
                
                <h4>Famous Experiments</h4>
                <p><strong>Falling Objects:</strong> Demonstrated all objects accelerate equally regardless of mass (contrary to Aristotle)</p>
                <p><strong>Inclined Planes:</strong> Used to "dilute gravity" and measure acceleration</p>
                <p><strong>Pendulums:</strong> Discovered isochronism (constant period regardless of amplitude)</p>
                
                <h4>Key Contributions to Scientific Method</h4>
                <ul>
                    <li>Emphasis on reproducible experiments over philosophical reasoning</li>
                    <li>Use of mathematics to describe physical laws</li>
                    <li>Separation of science from religious doctrine</li>
                    <li>Concept of inertial frames (precursor to relativity)</li>
                </ul>
                
                <h4>Legacy</h4>
                <p>"Father of modern observational astronomy", "father of modern physics", and "father of science"</p>
                <p>His approaches became foundation of the scientific method:</p>
                <ol>
                    <li>Observation</li>
                    <li>Hypothesis</li>
                    <li>Experiment</li>
                    <li>Analysis</li>
                    <li>Conclusion</li>
                </ol>
            `
        }
    ]
};

const selectedScientist = localStorage.getItem("selectedScientist") || "isaac";
const chapterSelect = document.getElementById("chapterSelect");
const chapterTitle = document.getElementById("chapter-title");
const description = document.getElementById("description");
const nextButton = document.getElementById("next-button");
const learningContent = document.getElementById("learning-content");

const chapters = chaptersByScientist[selectedScientist];

// Store chapters in localStorage for reference
localStorage.setItem("chapters", JSON.stringify(chapters));

// Function to get progress color based on percentage
function getProgressColor(percentage) {
    if (percentage >= 80) return "#4CAF50"; // Green
    if (percentage >= 50) return "#FFC107"; // Yellow
    if (percentage > 0) return "#FF9800"; // Orange
    return "#F44336"; // Red
}

// Populate the dropdown with progress indicators
function populateChapterSelect() {
    chapterSelect.innerHTML = "";
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    chapters.forEach((ch, index) => {
        const option = document.createElement("option");
        option.value = index;

        // Default styling for no progress
        option.style.color = "";
        let progressText = "";

        if (currentUser?.progress) {
            const chapterKey = `${selectedScientist}_${ch.title.replace(/\s+/g, "_")}`;
            const progress = currentUser.progress[chapterKey];

            // Only show progress if it exists and has a bestScore
            if (progress && progress.bestScore !== undefined) {
                const percentage = Math.round((progress.bestScore / ch.exercises.length) * 100);
                progressText = ` (${progress.bestScore}/${ch.exercises.length})`;
                option.style.color = getProgressColor(percentage);
            }
        }

        option.textContent = ch.title + progressText;
        chapterSelect.appendChild(option);
    });
}
function updateChapterInfo(index) {
    chapterTitle.textContent = chapters[index].title;
    description.textContent = chapters[index].desc;
    learningContent.innerHTML = chapters[index].learningContent;

    // Clear any existing progress indicator first
    const existingProgress = document.querySelector(".progress-indicator");
    if (existingProgress) {
        existingProgress.remove();
    }

    // Add progress indicator if available and for the current chapter
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser?.progress) {
        const chapterKey = `${selectedScientist}_${chapters[index].title.replace(/\s+/g, "_")}`;
        const progress = currentUser.progress[chapterKey];

        // Only show progress if it exists for this specific chapter
        if (progress && progress.bestScore !== undefined) {
            const percentage = Math.round((progress.bestScore / chapters[index].exercises.length) * 100);
            const progressText = `Progress: ${progress.bestScore}/${chapters[index].exercises.length} (${percentage}%)`;
            const progressElement = document.createElement("div");
            progressElement.className = "progress-indicator";
            progressElement.textContent = progressText;
            progressElement.style.color = getProgressColor(percentage);

            chapterTitle.insertAdjacentElement("afterend", progressElement);
        }
    }
}

function updateProgressOverview() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const progressChart = document.getElementById("progress-chart");

    if (!currentUser?.progress || !progressChart) return;

    let html = "";
    let totalCompleted = 0;
    let totalExercises = 0;

    chapters.forEach((chapter) => {
        const chapterKey = `${selectedScientist}_${chapter.title.replace(/\s+/g, "_")}`;
        const progress = currentUser.progress[chapterKey];
        const percentage = progress ? Math.round((progress.bestScore / chapter.exercises.length) * 100) : 0;
        const progressColor = getProgressColor(percentage);

        totalExercises += chapter.exercises.length;
        if (progress) {
            totalCompleted += progress.bestScore;
        }

        html += `
            <div class="progress-item">
                <div class="progress-title">
                    <span>${chapter.title}</span>
                    <span>${progress ? `${progress.bestScore}/${chapter.exercises.length}` : "Not started"} 
                    <span style="color: ${progressColor}">(${percentage}%)</span></span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%; background-color: ${progressColor}"></div>
                </div>
            </div>
        `;
    });

    // Add total progress
    const totalPercentage = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0;
    const totalColor = getProgressColor(totalPercentage);
    html =
        `
        <div class="progress-item total-progress">
            <div class="progress-title">
                <strong>Total Progress</strong>
                <strong>${totalCompleted}/${totalExercises} <span style="color: ${totalColor}">(${totalPercentage}%)</span></strong>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${totalPercentage}%; background-color: ${totalColor}"></div>
            </div>
        </div>
    ` + html;

    progressChart.innerHTML = html;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    populateChapterSelect();
    updateChapterInfo(0);
    updateProgressOverview();

    // Update when chapter selection changes
    chapterSelect.addEventListener("change", function () {
        updateChapterInfo(this.value);
        updateProgressOverview();
    });
});

// Handle next button click
nextButton.addEventListener("click", function () {
    const selectedChapterIndex = chapterSelect.value;
    const selectedChapter = chapters[selectedChapterIndex];

    // Store chapter data for exercises page
    localStorage.setItem(
        "selectedChapter",
        JSON.stringify({
            title: selectedChapter.title,
            exercises: selectedChapter.exercises,
            scientist: selectedScientist
        })
    );

    // Redirect to exercises page
    window.location.href = "exercises.html";
});

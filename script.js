const categories = {
    interior: [
        { name: "Kitchen Renovation", question: "Are you changing plumbing, electrical, or moving walls?", yes: "Permit required.", no: "No permit needed for cosmetic changes." },
        { name: "Bathroom Renovation", question: "Are you altering plumbing lines or wiring?", yes: "Permit required.", no: "No permit needed for replacing fixtures in the same location." }
    ],
    exterior: [
        { name: "Building a Deck", question: "Will the deck be more than 30 inches above ground?", yes: "Permit required.", no: "No permit needed for low decks (check local codes)." }
    ]
};

function handleCategoryChange() {
    const category = document.getElementById("category").value;
    const projectSelect = document.getElementById("project");
    const projectContainer = document.getElementById("project-container");

    projectSelect.innerHTML = '<option value="" selected disabled>Select a project</option>';

    if (category && categories[category]) {
        categories[category].forEach(project => {
            const option = document.createElement("option");
            option.value = project.name;
            option.textContent = project.name;
            projectSelect.appendChild(option);
        });
        projectContainer.style.display = "block";
    } else {
        projectContainer.style.display = "none";
        document.getElementById("follow-up-container").style.display = "none";
    }
}

function handleProjectChange() {
    const category = document.getElementById("category").value;
    const projectName = document.getElementById("project").value;
    const followUpContainer = document.getElementById("follow-up-container");
    const questionElement = document.getElementById("question");

    const selectedProject = categories[category].find(project => project.name === projectName);

    if (selectedProject) {
        questionElement.textContent = selectedProject.question;
        followUpContainer.style.display = "block";
    }
}

function setResult(answer) {
    const category = document.getElementById("category").value;
    const projectName = document.getElementById("project").value;
    const resultDiv = document.getElementById("result");

    const selectedProject = categories[category].find(project => project.name === projectName);

    resultDiv.textContent = answer === "yes" ? selectedProject.yes : selectedProject.no;
    resultDiv.style.display = "block";
}

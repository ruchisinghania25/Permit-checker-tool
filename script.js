/* 
    © 2025 Built Basics. All rights reserved.
    Author: Ruchi Singhania
    Description: Script for handling category and project logic in Permit Checker Tool
*/

const categories = {
    interior: [
        { name: "Kitchen Renovation", question: "Are you changing plumbing, electrical, or moving walls?", yes: "Permit required.", no: "No permit typically needed for cosmetic changes like painting, new cabinets, or countertops." },
      { name: "Bathroom Renovation", question: "Are you altering plumbing lines, electrical wiring, or the room layout?", yes: "Permit required.", no: "No permit typically needed for replacing fixtures in the same location." },
      { name: "Removing or Adding Interior Walls", question: "Is the wall load-bearing?", yes: "Permit required.", no: "Permit may not be required, but check with the local building department." },
      { name: "Changing Room Layout or Floor Plan", question: "Are you altering structural elements or changing room use?", yes: "Permit required.", no: "No permit typically needed for non-structural layout changes (e.g., moving furniture)." },
      { name: "Installing or Replacing Fireplaces", question: "Are you installing a gas line or venting system?", yes: "Permit required.", no: "No permit typically needed for electric fireplaces that plug into an outlet." },
      { name: "Attic or Basement Conversion", question: "Will this create a new livable space?", yes: "Permit required.", no: "No permit needed for storage use only." },
      { name: "Installing New Flooring", question: "Are you making structural modifications to support the new flooring?", yes: "Permit required.", no: "No permit typically needed for surface flooring changes like carpet, tile, or hardwood." },
      { name: "Electrical Work", question: "Are you adding new circuits, panels, or rewiring?", yes: "Permit required.", no: "No permit typically needed for replacing an outlet or light fixture." },
      { name: "Plumbing Changes", question: "Are you moving or installing new plumbing lines?", yes: "Permit required.", no: "No permit typically needed for replacing a faucet or toilet in the same location." },
      { name: "HVAC System Installation or Upgrades", question: "Are you adding or replacing ductwork, vents, or an outdoor unit?", yes: "Permit required.", no: "No permit typically needed for changing air filters or a thermostat." },
      { name: "Installing or Replacing Stairs", question: "Are you modifying their height, width, or structural support?", yes: "Permit required.", no: "No permit typically needed for cosmetic upgrades like new treads, railings, or refinishing." },
      { name: "Replacing Windows or Doors", question: "Are you changing the size or location?", yes: "Permit required.", no: "No permit typically needed for replacing windows or doors with the same size in the same location." },
    ],
    exterior: [
      { name: "Building or Expanding a Deck or Patio", question: "Will the deck be more than 30 inches above ground?", yes: "Permit required.", no: "No permit typically needed for low decks and patios (check local height limits)." },
      { name: "Building a Garage", question: "Will it be attached to the house or require utilities?", yes: "Permit required.", no: "No permit typically needed for small detached garages (check size limits with local code)." },
      { name: "Adding a Porch or Sunroom", question: "Will it be enclosed or change the home’s footprint?", yes: "Permit required.", no: "No permit typically needed for an open-air porch without a roof, but check with the local building department." },
      { name: "Installing Fencing or Walls", question: "Will the fence be taller than the city’s height limit?", yes: "Permit required.", no: "No permit typically needed for fences below height limits, but check with the local building department." },
      { name: "Building a Shed or Outdoor Structure", question: "Will it be larger than your city’s limit?", yes: "Permit required.", no: "No permit typically needed for smaller sheds." },
      { name: "Roof Replacement or Repair", question: "Are you replacing a big part of the roof?", yes: "Permit required.", no: "No permit typically needed for minor repairs." },
      { name: "Window or Door Replacement (on exterior walls)", question: "Are you altering the size or structure of the opening?", yes: "Permit required.", no: "No permit typically needed for replacing windows/doors of exactly the same attributes." },
      { name: "Landscaping Changes", question: "Will it change water drainage or involve major grading?", yes: "Permit required.", no: "No permit typically needed for regular landscaping like planting trees, shrubs, or grass." },
      { name: "Exterior Painting", question: "Are you in a historic district or HOA-restricted area?", yes: "Permit may be required (check local regulations and HOA guidelines).", no: "No permit typically needed for painting in unrestricted areas." },
    ],
    structural: [
      { name: "Adding a Second Story or Expanding the Home’s Footprint", question: "", yes: "Permit required.", no: "" },
      { name: "Foundation Repairs or Modifications", question: "Will you be altering load-bearing elements?", yes: "Permit required.", no: "No permit needed for sealing cracks." },
      { name: "Building a New Room or Extension", question: "", yes: "Permit required.", no: "" },
      { name: "Raising or Lowering a Structure", question: "", yes: "Permit required.", no: "" },
    ],
    environmental: [
      { name: "Installing Rainwater Harvesting Systems", question: "Are you connecting it to indoor plumbing?", yes: "Permit required.", no: "No permit typically needed for standalone rain barrels or garden irrigation systems." },
      { name: "Installing or Modifying a Septic System", question: "Will the modifications affect capacity or drain field placement?", yes: "Permit required.", no: "No permit typically needed for minor maintenance like replacing a pump or baffle." },
      { name: "Energy Efficiency Improvements", question: "Are you making modifications to exterior walls or major systems?", yes: "Permit required (e.g., insulation changes affecting ventilation, upgrading HVAC).", no: "No permit typically needed for minor changes like LED bulbs, smart thermostats, or weather stripping." },
      { name: "Installing Geothermal Heating/Cooling", question: "Will it require underground drilling?", yes: "Permit required (due to environmental and utility considerations).", no: "No permit typically needed for heat pumps that use existing ductwork." },
      { name: "Installing a Green Roof", question: "Will it add significant weight to the structure?", yes: "Permit required (structural reinforcements may be needed).", no: "No permit typically needed for lightweight rooftop gardens in removable containers." },
      { name: "Installing Electric Vehicle Charging Stations", question: "Will it require a new circuit or electrical panel upgrade?", yes: "Permit required.", no: "No permit typically needed for plugging into an existing 120V outlet." },
      { name: "Installing Solar Panels or Wind Energy Systems", question: "Will it involve new structural supports or electrical modifications?", yes: "Permit required (for roof-mounted solar, battery storage, or wind turbines).", no: "No permit typically needed for small, portable solar panels or plug-in systems." },
    ],
    miscellaneous: [
      { name: "Changing the Exterior of the Home", question: "Are you changing materials in a historic district?", yes: "Permit required.", no: "No permit typically needed in non-restricted areas." },
      { name: "Installing a Home Elevator or Lift", question: "Are you modifying walls or electrical systems?", yes: "Permit required.", no: "No permit typically needed for stair lifts that don’t alter the structure." },
      { name: "Adding Skylights or Sun Tunnels", question: "Will you be cutting new openings in the roof?", yes: "Permit required.", no: "No permit typically needed for replacements." },
      { name: "Changing the Home's Electrical or Gas Service", question: "Will this require utility company approval or service upgrades?", yes: "Permit required.", no: "No permit typically needed for basic fixture replacements." },
      { name: "Home Security System Installation", question: "Will it involve new electrical wiring or hardwired components?", yes: "Permit required.", no: "No permit typically needed for wireless systems." },
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
    document.getElementById('contact-info').style.display = 'block';
}

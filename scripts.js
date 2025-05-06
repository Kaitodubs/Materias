const predefinedUsers = {
  "Davi": 1,
  "Isaque": 1,
  "Isabella": 1,
  "Thamires": 1,
  "Ana Clara": 1,
  "Antônio": 1,
  "Lucas Maciel": 1,
  "Samuel": 1
};

const subjects = [
  "Mathemagix",  // Matemática
  "Biocódice",   // Biologia
  "Quimicraft",  // Química
  "Física Nova", // Física
  "Literaris",   // Literatura/Português
  "História Arcana", // História
  "GeoMundos",   // Geografia
  "Lingualia"    // Inglês
];

function createProfile() {
  const username = document.getElementById("usernameInput").value.trim();
  if (!username) return;

  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = ""; // Clear previous

  const level = predefinedUsers.hasOwnProperty(username) ? 1 : 0;

  const profileHeader = document.createElement("div");
  profileHeader.className = "profile-name";
  profileHeader.innerText = `Perfil de ${username}`;
  profileContainer.appendChild(profileHeader);

  subjects.forEach(subject => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    const skillName = document.createElement("div");
    skillName.className = "skill-name";
    skillName.innerText = `${subject} - Nível ${level}`;

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const progressFill = document.createElement("div");
    progressFill.className = "progress-fill";
    progressFill.style.width = `${level * 5}%`; // Só um efeito visual
    progressFill.innerText = `${level}`;

    progressBar.appendChild(progressFill);
    skillDiv.appendChild(skillName);
    skillDiv.appendChild(progressBar);
    profileContainer.appendChild(skillDiv);
  });
}


```dataviewjs
// === CONFIG ===
const xpPerLevel = 100;
const barLength = 20;

// Helper function to find image file
function findImage(filename) {
  const files = app.vault.getFiles();
  const imageFile = files.find(f => f.name === filename || f.path.includes(filename));
  if (imageFile) {
    // Use Obsidian's resource URL format
    return app.vault.getResourcePath(imageFile);
  }
  return "https://placehold.co/150x150/4a90e2/ffffff?text=Avatar+Missing";
}

// Character Info
const character = {
  name: "Aarón",
  age: 24,
  role: "Cloud Sorcerer/Data Alchemist/MMA Practitioner",
  role: "Computer Systems Engineer Student",
  avatar: findImage("characterRPG.jpg"),
  classes: [
    { tag: "aws", label: "AWS Sorcerer", folders: ["00-Quests", "03-Vault"] },
    { tag: "dataanalysis", label: "Data Alchemist", folders: ["00-Quests", "03-Vault"] },
    { tag: "MMA", label: "MMA Fighter", folders: ["00-Quests", "03-Vault", "08-Training-Sessions"] },
    { tag: ["leetcode", "DSA"], label: "Code Strategist", folders: ["00-Quests", "03-Vault"] }
  ]
};

// === HELPERS ===
function getXP(tag, folders) {
  let totalXP = 0;
  
  // Normalize tag to always be an array
  const tagsToCheck = Array.isArray(tag) ? tag : [tag];
  
  // Iterate through all folders
  for (const folder of folders) {
    const pages = dv.pages(`"${folder}"`).where(p => p.XP);
    const filtered = pages.where(p => {
      const tags = (p.tags ?? p.file?.tags ?? []);
      const normalized = Array.isArray(tags)
        ? tags.map(t => t.toString().replace(/^#/, "").toLowerCase())
        : [String(tags).replace(/^#/, "").toLowerCase()];
      
      // Check if any of the tags we're looking for exists in the page's tags
      return tagsToCheck.some(tagToFind => 
        normalized.includes(tagToFind.toLowerCase())
      );
    });

    for (const p of filtered) {
      const reward = Number(p.XP ?? 0);
      if (!isNaN(reward) && reward > 0) totalXP += reward;
    }
  }

  const level = Math.floor(totalXP / xpPerLevel);
  const currentXP = totalXP % xpPerLevel;
  return { level, currentXP };
}

function progressBar(value, max, length = barLength) {
  return `
  <div class="xp-bar">
    <div class="xp-bar-fill" style="width:${(value / max) * 100}%"></div>
    <span class="xp-label">${value}/${max}</span>
  </div>
  `;
}

// === OUTPUT ===
// Render Character Info
let htmlChar = `
<div class="character-sheet">
	<div class="character-header">
		<img src="${character.avatar}" class="character-avatar"/>
		<div class="character-info">
			<h2>${character.name}</h2>
			<p><strong>Age:</strong> ${character.age}</p>
			<p><strong>Role:</strong> ${character.role}</p>
		</div>
	</div>
</div>
`;

// Render Classes + Progress
let htmlXP = `
<div class="character-sheet">
`;

for (const c of character.classes) {
  const xp = getXP(c.tag, c.folders);
  htmlXP += `
    <div class="class-section">
      <h3>${c.label}</h3>
      <p><strong>Level:</strong> ${xp.level}</p>
      ${progressBar(xp.currentXP, xpPerLevel)}
    </div>
  `;
}

htmlXP += `</div>`;

// inject all HTML at once
dv.container.innerHTML = htmlChar + htmlXP;
```

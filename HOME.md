![150](/02-Library/Assets/00-dashboard/characterRPG.jpg)

```dataviewjs
// === CONFIG ===
const folder = "00-Quests";
const folders = ["00-Quests", "03-Vault"]
const xpPerLevel = 100;
const barLength = 20;

// Character Info
const character = {
  name: "Aarón",
  age: 24,
  role: "Cloud Sorcerer/Data Alchemist",
  avatar: "https://placehold.co/150x150/4a90e2/ffffff?text=Aarón",
  classes: [
    { tag: "aws", label: "AWS Adventurer" },
    { tag: "dataanalysis", label: "Data Analysis Adventurer" }
  ]
};

// === HELPERS ===
function getXP(tag) {
  const pages = dv.pages(`"${folder}"`).where(p => p.XP);
  const filtered = pages.where(p => {
    const tags = (p.tags ?? p.file?.tags ?? []);
    const normalized = Array.isArray(tags)
      ? tags.map(t => t.toString().replace(/^#/, "").toLowerCase())
      : [String(tags).replace(/^#/, "").toLowerCase()];
    return normalized.includes(tag.toLowerCase());
  });

  let totalXP = 0;
  for (const p of filtered) {
    const reward = Number(p.XP ?? 0);
    if (!isNaN(reward) && reward > 0) totalXP += reward;
  }

  const level = Math.floor(totalXP / xpPerLevel);
  const currentXP = totalXP % xpPerLevel;
  return { level, currentXP };
}

function progressBar(value, max, length = barLength) {
  const filled = Math.round((value / max) * length);
  const empty = Math.max(0, length - filled);
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
  const xp = getXP(c.tag);
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



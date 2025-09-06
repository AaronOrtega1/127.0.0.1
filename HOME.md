
```dataviewjs
// === CONFIG ===
const folder = "00-Quests";       // check exact folder name
const targetTag = "aws";          // target tag (no #)
const xpPerLevel = 100;
const barLength = 20;
// ===============

// Query notes in the folder
const pages = dv.pages(`"${folder}"`)
    .where(p => p.XP); // must have XP property

// Normalize tags and filter by target tag
const filtered = pages.where(p => {
    const tags = (p.tags ?? p.file?.tags ?? []);
    const normalized = Array.isArray(tags)
        ? tags.map(t => t.toString().replace(/^#/, "").toLowerCase())
        : [String(tags).replace(/^#/, "").toLowerCase()];
    return normalized.includes(targetTag.toLowerCase());
});

// Sum XP
let totalXP = 0;
let contributors = [];
for (const p of filtered) {
    const reward = Number(p.XP ?? 0);
    if (!isNaN(reward) && reward > 0) {
        totalXP += reward;
        contributors.push({ title: p.file.name, reward });
    }
}

// Level calc
const level = Math.floor(totalXP / xpPerLevel);
const currentXP = totalXP % xpPerLevel;

// Progress bar
function progressBar(value, max, length = barLength) {
    const filled = Math.round((value / max) * length);
    const empty = Math.max(0, length - filled);
    return "🟩".repeat(filled) + "⬛".repeat(empty) + ` ${value}/${max}`;
}

// Output
dv.header(2, `${targetTag.toUpperCase()} Progress`);
dv.paragraph(`**Level:** ${level}`);
dv.paragraph(progressBar(currentXP, xpPerLevel));

if (!contributors.length) {
    dv.paragraph("_No quests with this tag and XP found._");
}
```

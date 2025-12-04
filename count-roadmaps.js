// Count roadmaps by looking for main roadmap patterns
const fs = require('fs');
const path = require('path');

// Read the roadmaps data file
const filePath = path.join(__dirname, 'src', 'lib', 'roadmaps-data.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Split into lines and find main roadmaps
const lines = content.split('\n');
const mainRoadmaps = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Look for main roadmap IDs (starts with 4 spaces, not 8+ spaces which are steps)
  if (line.match(/^\s{4}id:\s*'[^']+',\s*$/) && !line.match(/^\s{8,}/)) {
    const id = line.match(/id:\s*'([^']+)'/)[1];
    
    // Find the title for this roadmap
    let title = '';
    for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
      const titleLine = lines[j].trim();
      if (titleLine.match(/^title:\s*'[^']+',\s*$/)) {
        title = titleLine.match(/title:\s*'([^']+)'/)[1];
        break;
      }
    }
    
    mainRoadmaps.push({
      id: id,
      title: title
    });
  }
}

console.log(`Total Main Roadmaps: ${mainRoadmaps.length}`);
console.log('\n=== COMPLETE LIST OF ROADMAPS ===\n');

mainRoadmaps.forEach((roadmap, index) => {
  console.log(`${index + 1}. ${roadmap.title} (${roadmap.id})`);
});
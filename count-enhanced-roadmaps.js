const fs = require('fs');

try {
  const content = fs.readFileSync('src/lib/roadmaps-data.ts', 'utf8');
  
  // Extract all roadmap objects
  const roadmapPattern = /\{\s*id:\s*'[^']+',[\s\S]*?(?=\s*\{|\s*\]\s*export)/g;
  const roadmaps = content.match(roadmapPattern) || [];
  
  let enhancedCount = 0;
  let totalCount = 0;
  const enhancedRoadmaps = [];
  
  roadmaps.forEach(roadmap => {
    totalCount++;
    
    // Extract roadmap ID
    const idMatch = roadmap.match(/id:\s*'([^']+)'/);
    const roadmapId = idMatch ? idMatch[1] : 'unknown';
    
    // Count steps with enhanced pattern (step-X-*)
    const enhancedSteps = roadmap.match(/id:\s*'step-\d+-[^']*'/g) || [];
    
    // Consider it enhanced if it has 4+ structured steps
    if (enhancedSteps.length >= 4) {
      enhancedCount++;
      enhancedRoadmaps.push({
        id: roadmapId,
        stepCount: enhancedSteps.length
      });
    }
  });
  
  console.log('🎯 ROADMAP ENHANCEMENT PROGRESS 🎯');
  console.log('=====================================');
  console.log(`✅ Enhanced Roadmaps: ${enhancedCount}/107`);
  console.log(`📊 Completion Rate: ${(enhancedCount/107*100).toFixed(1)}%`);
  console.log(`⏳ Remaining: ${107 - enhancedCount}`);
  console.log('');
  
  if (enhancedRoadmaps.length > 0) {
    console.log('📋 ENHANCED ROADMAPS LIST:');
    console.log('==========================');
    enhancedRoadmaps.forEach((roadmap, index) => {
      console.log(`${index + 1}. ${roadmap.id} (${roadmap.stepCount} steps)`);
    });
  }
  
} catch (error) {
  console.error('Error reading file:', error.message);
}
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const matter = require('gray-matter');

// Configuration
const WRITING_DIR = path.join(__dirname, '../_writing');
const OUTPUT_DIR = path.join(__dirname, '../assets/og-images');
const VIEWPORT_WIDTH = 1200;
const VIEWPORT_HEIGHT = 630;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all markdown files in the _writing directory
const markdownFiles = fs.readdirSync(WRITING_DIR)
  .filter(file => file.endsWith('.md'));

// Main function to generate OG images
async function generateOgImages() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: VIEWPORT_WIDTH,
    height: VIEWPORT_HEIGHT,
    deviceScaleFactor: 1
  });
  
  // Process each markdown file
  for (const file of markdownFiles) {
    const filePath = path.join(WRITING_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse front matter
    const { data } = matter(fileContent);
    const { title } = data;
    
    if (!title) continue;
    
    // Generate filename without extension
    const baseFilename = file.replace(/\.md$/, '');
    const outputPath = path.join(OUTPUT_DIR, `${baseFilename}.png`);
    
    // Navigate to the OG image page (assumes Jekyll server is running)
    try {
      await page.goto(`http://localhost:4000/og-images/${baseFilename}/`, {
        waitUntil: 'networkidle2'
      });
      
      // Take a screenshot
      await page.screenshot({
        path: outputPath,
        type: 'png',
        fullPage: false
      });
      
      console.log(`Generated OG image for: ${file}`);
    } catch (error) {
      console.error(`Error generating OG image for ${file}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('OG image generation complete!');
}

// Run the generator
generateOgImages().catch(error => {
  console.error('Error generating OG images:', error);
  process.exit(1);
});

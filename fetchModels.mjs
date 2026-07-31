import fs from 'fs';

async function check() {
  try {
    const env = fs.readFileSync('.env.local', 'utf8');
    const match = env.match(/VITE_GEMINI_API_KEY="?([^"\r\n]+)"?/);
    if (!match) return fs.writeFileSync('models.txt', "NO KEY FOUND IN .env.local");
    
    const key = match[1].trim();
    console.log("Key found, length:", key.length);
    
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key);
    const data = await res.json();
    
    if (data.error) {
      fs.writeFileSync('models.txt', JSON.stringify(data.error, null, 2));
    } else {
      const modelNames = data.models.map(m => m.name).join('\n');
      fs.writeFileSync('models.txt', modelNames);
      console.log("Models saved!");
    }
  } catch (e) {
    fs.writeFileSync('models.txt', e.toString());
  }
}

check();

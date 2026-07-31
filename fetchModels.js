const fs = require('fs');

async function check() {
  try {
    const env = fs.readFileSync('.env.local', 'utf8');
    const match = env.match(/VITE_GEMINI_API_KEY="?([^"\r\n]+)"?/);
    if (!match) return console.log("NO KEY FOUND");
    
    const key = match[1].trim();
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key);
    const data = await res.json();
    
    if (data.error) {
      fs.writeFileSync('models.txt', JSON.stringify(data.error));
    } else {
      fs.writeFileSync('models.txt', data.models.map(m=>m.name).join('\n'));
    }
  } catch (e) {
    fs.writeFileSync('models.txt', e.toString());
  }
}

check();

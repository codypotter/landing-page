const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://gitlab.com/users/cody.potter/calendar.json';
const dest = path.join(__dirname, '../src/calendar-data.js');

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const fetchedAt = new Date().toISOString().split('T')[0];
    const output = `window.__calendarData = ${JSON.stringify({ fetchedAt, commits: JSON.parse(data) })};`;
    fs.writeFileSync(dest, output);
    console.log(`GitLab calendar data fetched (${fetchedAt}).`);
  });
}).on('error', (e) => {
  console.error('Failed to fetch GitLab calendar:', e.message);
  if (!fs.existsSync(dest)) {
    const fetchedAt = new Date().toISOString().split('T')[0];
    fs.writeFileSync(dest, `window.__calendarData = ${JSON.stringify({ fetchedAt, commits: {} })};`);
  }
});

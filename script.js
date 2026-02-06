if (ENABLE_CNY) {
document.body.classList.add("cny-horse");
const ENABLE_CNY = true;

document.body.classList.add("cny-horse");

const luckMessages = [
  "🐎 Great momentum today. Start something new.",
  "🧧 Small luck is still luck. Be patient.",
  "🍊 Wealth follows consistency.",
  "🔥 Energy is high. Speak up.",
  "🌸 A helpful person appears today."
];

function getRandomLuck() {
  return luckMessages[Math.floor(Math.random() * luckMessages.length)];
}

const banner = document.getElementById("cnyBanner");
if (banner) {
  banner.innerHTML += `<div style="margin-top:6px;font-size:14px;">
    Your luck today: ${getRandomLuck()}
  </div>`;
}

function dailyLuckForUser(username) {
  const seed = new Date().toDateString() + username;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return luckMessages[Math.abs(hash) % luckMessages.length];
}
}

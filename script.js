const chips = ["LIVE", "New", "Girls", "Voice", "Video", "Trending"];
const features = [
  ["💗 Audio Call Live", "+33"],
  ["🎁 Offer Zone", "HOT"],
  ["🕒 Last 10 Min Online", "NOW"]
];

const creators = [
  ["Riya Sharma", "Delhi", "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"],
  ["Pooja Verma", "Lucknow", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"],
  ["Ananya Das", "Kolkata", "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"],
  ["Megha Jain", "Indore", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"],
  ["Aarohi Mehta", "Ahmedabad", "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"],
  ["Neha Kumari", "Patna", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"]
];

const topChips = document.getElementById("top-chips");
const featuresBox = document.getElementById("features");
const trendingBox = document.getElementById("trending");
const activeBox = document.getElementById("active");
const exploreBox = document.getElementById("explore");
const statsBox = document.getElementById("stats");

topChips.innerHTML = chips.map((item) => `<span class="chip">${item}</span>`).join("");

featuresBox.innerHTML = features
  .map(([title, pill]) => `<div class="list-item"><span>${title}</span><span class="pill">${pill}</span></div>`)
  .join("");

const profileCard = ([name, city, img]) => `
  <article class="profile">
    <img src="${img}" alt="${name}">
    <div class="meta">
      <div class="name">${name}</div>
      <div class="city">${city} • Online</div>
    </div>
  </article>
`;

trendingBox.innerHTML = creators.slice(0, 4).map(profileCard).join("");
activeBox.innerHTML = creators.concat(creators).slice(0, 9).map(profileCard).join("");
exploreBox.innerHTML = creators.concat(creators).slice(2, 11).map(profileCard).join("");

statsBox.innerHTML = [
  ["1.8k", "Users"],
  ["620", "Calls"],
  ["4.9★", "Rating"]
].map(([number, label]) => `<div><strong>${number}</strong><span>${label}</span></div>`).join("");

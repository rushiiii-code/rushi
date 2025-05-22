// Load achievements from data.json
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('achievements-list');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = "border-b pb-2";
      div.innerHTML = `<strong>${item.title}</strong> (${item.year})`;
      list.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load data.json", err));

// Load a random quote
fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => {
    document.getElementById('quote').innerText = `"${data.content}"`;
  })
  .catch(() => {
    document.getElementById('quote').innerText = "“Keep pushing your limits.”";
  });

function renderChallengeList() {
  const url = "http://localhost:3000/api/challenges";
  main.innerHTML = "";
  axios.get(url).then((res) => {
    const challengesArr = res.data.data;
    const currentTime = res.data.currentTime;
    for (let challenge of challengesArr) {
      const p = document.createElement("p");
      const a = document.createElement("a");
      a.classList.add("itemsBtn");
      a.textContent = challenge.name;
      p.appendChild(a);
      p.classList.add("items");
      main.appendChild(p);
      const item = {
        id: challenge.id,
        name: challenge.name,
      };
      currentContent.push(item);
      // =============
      a.addEventListener("click", () => {
        renderDetail(challenge.id, url);
      });
    }
    lastDate = currentTime;
  });
}

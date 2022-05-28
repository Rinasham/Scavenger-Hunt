function renderCurrentContent(obj) {
  main.innerHTML = "";
  const url = "http://localhost:3000/api/challenges";
  for (let challenge of obj) {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.classList.add("itemsBtn");
    a.textContent = challenge.name;
    p.appendChild(a);
    p.classList.add("items");
    main.appendChild(p);

    // =============
    a.addEventListener("click", () => {
      renderDetail(challenge.id, url);
    });
  }
}

function renderRules() {
  main.innerHTML = "";
  const rules = [
    "You have a pictire of it",
    "The pictures is posted on Instagram with your team name, name of the task, and the hashtah #SEIisAwesome",
  ];
  const title = document.createElement("h1");
  title.textContent = "Rules!";
  const instruction = document.createElement("h2");
  instruction.textContent = "A task ONLY counts if: ";
  const div = document.createElement("div");
  div.appendChild(title);
  div.appendChild(instruction);
  for (let [idx, rule] of rules.entries()) {
    const p = document.createElement("p");
    p.textContent = `${idx + 1}:    ${rule}`;
    div.appendChild(p);
  }
  main.appendChild(div);
}

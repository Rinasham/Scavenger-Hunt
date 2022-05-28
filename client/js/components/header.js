function createHeader() {
  const menuList = [
    {
      title: "All Challenges",
      id: "all-challenge",
    },
    {
      title: "Rules",
      id: "rule",
    },
  ];
  const header = document.getElementById("header");
  const ul = document.createElement("ul");
  for (let item of menuList) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.title;
    a.id = item.id;
    a.classList.add("menu");
    li.appendChild(a);
    ul.appendChild(li);
  }

  header.appendChild(ul);
}

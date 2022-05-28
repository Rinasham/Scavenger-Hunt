function renderDetail(id, url) {
  main.innerHTML = "";
  const detailUrl = `${url}/${id}`;
  axios.get(detailUrl).then((detailRes) => {
    const detailObj = detailRes.data[0];
    const div = document.createElement("div");
    div.classList.add("detail");
    const name = document.createElement("h1");
    const detail = document.createElement("p");
    const address = document.createElement("p");
    //============
    name.textContent = detailObj.name;
    detail.textContent = detailObj.description;
    address.textContent = detailObj.address;
    //============
    div.appendChild(name);
    div.appendChild(detail);
    div.appendChild(address);
    main.appendChild(div);
  });
}

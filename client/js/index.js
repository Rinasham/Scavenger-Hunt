createHeader();

const main = document.getElementById("main");
let lastDate = 0;
const currentContent = [];

const allChallengeBtn = document.getElementById("all-challenge");
allChallengeBtn.addEventListener("click", () => {
  const currentDate = new Date().getTime();

  let timeDiff = Math.floor((currentDate - lastDate) / 1000); // seconds (int)
  if (timeDiff < 120) {
    renderCurrentContent(currentContent);
  } else {
    renderChallengeList();
  }
});

const ruleBtn = document.getElementById("rule");
ruleBtn.addEventListener("click", () => {
  renderRules();
});

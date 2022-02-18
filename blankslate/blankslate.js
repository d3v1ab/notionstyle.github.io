const pages = {
  home: "block-daaa9cf03d62486a9a220b20d595f86a",
  team: "block-team",
  work: "block-work",
  clients: "block-clients",
  carreers: "block-carreers",
  connect: "block-connect",
};

const autoPlayVideo = () => {
  const vid = document.querySelector(".notion-video video");

  if (vid) {
    vid.muted = true;
    vid.controls = false;
    vid.loop = true;
    vid.play();
  }
};

const doHomeTasks = () => {
  // autoPlay cover video
  autoPlayVideo();
};

const workTaks = () => {
  console.log("hheheheh");
  const header = document.querySelector(".notion-header");
  const options = document.querySelectorAll(".notion-dropdown__option");
  const currentTab = document.querySelector(
    ".notion-dropdown__button-title"
  ).textContent;

  const setActiveTab = () => {
    const active = Array.from(options).find(
      (el) => el.textContent === currentTab
    );
    active.classList.add("active-filter");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const activeFilter = document.querySelector(".active-filter");
        if (activeFilter) {
          activeFilter.classList.remove("active-filter");
        }
        option.classList.add("active-filter");
      });
    });
  };
  setActiveTab();

  const config = { subtree: true, characterData: true };
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "characterData") {
        setActiveTab();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(header, config);
};

const checkPage = () => {
  const article = document.querySelector(".super-content article");

  switch (article.id) {
    case pages["home"]:
      doHomeTasks();
      break;
    case pages["work"]:
      workTaks();
      break;
  }
};

// Detect Change
window.onload = () => {
  const superContent = document.querySelector(".super-content");
  const observer = new MutationObserver(checkPage);

  checkPage();
  observer.observe(superContent, { childList: true });
};

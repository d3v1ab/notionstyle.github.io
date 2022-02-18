const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const animateBlock = (animation, selector) => {
  const div = document.querySelector(selector);
  // if (isInViewport(div)) {
  div.classList.add("xyz-in");
  div.setAttribute("xyz", animation);
  // }
};

const setAnimations = (blocks) => {
  // document.addEventListener(
  //   "scroll",
  //   () => {
  blocks.forEach((block) => {
    console.log("here");
    animateBlock(block.animation, block.id);
  });
  //   },
  //   {
  //     passive: true,
  //   }
  // );
};

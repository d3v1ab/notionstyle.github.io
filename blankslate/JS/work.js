const addAnimationToBlocks = () => {
  let workBlocks = [];

  let columns = Array.from(
    document.querySelectorAll(".notion-collection-card")
  );

  columns.forEach((column, i) => {
    workBlocks.push({
      id: `#${column.id}`,
      animation: `fade ease-in-out  down delay-${i}`,
    });
  });
  setAnimations(workBlocks);
};

window.onload = () => {
  // window.scroll(0, 2);
  const gallery = document.querySelector(".notion-collection-gallery");
  console.log("gallery: ", gallery);
  const observer = new MutationObserver(addAnimationToBlocks);
  observer.observe(gallery, { childList: true, subtree: true });
  // Animate on scroll
};

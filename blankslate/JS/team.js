window.onload = () => {
  window.scroll(0, 2);

  let teamBlocks = [];

  let columns = Array.from(document.querySelectorAll(".notion-column"));

  columns.forEach((column, i) => {
    teamBlocks.push({
      id: `#${column.id}`,
      animation: `fade ease-in-out  down delay-${i}`,
    });
  });

  // Animate on scroll
  setAnimations(teamBlocks);
};

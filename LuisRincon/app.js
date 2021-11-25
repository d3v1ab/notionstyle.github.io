window.addEventListener("load", function () {
  let elements = Array.from(
    document.querySelectorAll(".notion-collection-card")
  );
  let blocks = elements.map((block) => {
    return { id: block.getAttribute("id"), animation: "zoom-in" };
  });
  blocks = [
    ...blocks,
    { id: "block-088cd82d53eb4658bd2af0d121d85e77", animation: "fade-up" },
    { id: "block-896cc062886d425ca965583c65292532", animation: "fade-up" },
    { id: "block-e1707b043ab94cca9d0776c1b4fb556b", animation: "fade-up" },
  ];
  AOS.init();
  console.log("dls");
  blocks.forEach((block) => {
    console.log("block ", block);
    addAnimation(block);
  });
});

function addAnimation(block) {
  const el = document.getElementById(block.id);
  el.setAttribute("data-aos", block.animation);
}

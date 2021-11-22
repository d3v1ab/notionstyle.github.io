window.addEventListener("load", function () {
  let blocks = [
    { id: "block-1aa355c6d5d04406a8e0e3670b080366", animation: "fade-down" },
    { id: "block-6f7007a236aa44259c5463e17ce75991", animation: "fade-left" },
    { id: "block-7c23c29eec4f40678805a16447465b62", animation: "fade-right" },
    { id: "block-3c4317dc45e24cbba73de68745d7c986", animation: "fade-up" },
    { id: "block-088cd82d53eb4658bd2af0d121d85e77", animation: "zoom-in" },
    { id: "block-896cc062886d425ca965583c65292532", animation: "zoom-in" },
    { id: "block-f75993332e55445ab1c6653ae1995522", animation: "zoom-in" },
  ];

  AOS.init();
  blocks.forEach((block) => {
    addAnimation(block);
  });
});

function addAnimation(block) {
  const el = document.getElementById(block.id);
  el.setAttribute("data-aos", block.animation);
}

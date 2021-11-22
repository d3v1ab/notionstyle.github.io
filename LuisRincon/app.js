window.addEventListener("load", function () {
  let blocks = [
    { id: "block-8528067e63d34d10ad6a8269619a418f", animation: "fade-down" },
    { id: "block-98f96e4c717e4532a9f3e692fde63377", animation: "fade-left" },
    { id: "block-754706237af94d7c8a0b250150e8f070", animation: "fade-right" },
    { id: "block-a78233bab0e147abacdb42d94c6a1c81", animation: "fade-up" },
    { id: "block-3cef7952f9ef4b6aaf7fec853e301055", animation: "zoom-in" },
    { id: "block-1c48b93209c44d8580a9939246544736", animation: "zoom-in" },
    { id: "block-85efc80540fb49e5bcb6d82926a2fc06", animation: "zoom-in" },
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

const autoPlayVideo = () => {
  const vid = document.querySelector(".notion-video video");
  vid.muted = true;
  vid.controls = false;
  vid.loop = true;
  vid.play();
};

window.onload = () => {
  window.scroll(0, 1);

  const homeAnimatedBlocks = [
    {
      id: "#block-b62dbf5d88b74c88b8c92150e3b1072f",
      animation: "absolute fade in big short-1 delay-0.5",
    },
    {
      id: "#block-fe18c9ee2c1e45cbb6ebea1d4b37c59b",
      animation: "absolute fade up big short-1 delay-0.5",
    },
    {
      id: "#block-9f93e595e54d471887c89f26c65720c8",
      animation: "absolute fade down delay-0.5",
    },
    {
      id: "#block-997304227ed948c1aae31bbebc657ab5",
      animation: "absolute fade down delay-0.5",
    },
    {
      id: "#block-8808a9c3eace4efe9db9c913164c050e",
      animation: "absolute fade down delay-0.5",
    },
    {
      id: "#block-b20ae4a9e3c446269f56b5afe131395f",
      animation: "fade down delay-0.5",
    },
  ];
  // Auto Play Video
  autoPlayVideo();
  // Animate on scroll
  setAnimations(homeAnimatedBlocks);
};

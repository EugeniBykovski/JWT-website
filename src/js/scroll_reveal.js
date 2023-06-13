const sr = ScrollReveal({
  distance: "65px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".up-block", {
  delay: 200,
  origin: "top",
});

sr.reveal(".left-block", {
  delay: 200,
  origin: "left",
});

sr.reveal(".right-block", {
  delay: 200,
  origin: "right",
});

sr.reveal(".bottom-block", {
  delay: 200,
  origin: "bottom",
});

const scene = document.getElementById("scene");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  invertX: false,
  invertY: false,
  limitX: false,
  limitY: false,
  frictionX: 0.07,
  frictionY: 0.07,
});

const parallaxInstance2 = new Parallax(scene2, {
  relativeInput: true,
  frictionX: 0.09,
  frictionY: 0.09,
});

const parallaxInstance3 = new Parallax(scene3, {
  relativeInput: true,
  frictionX: 0.09,
  frictionY: 0.09,
});

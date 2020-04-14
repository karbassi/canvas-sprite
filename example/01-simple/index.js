const canvas = document.querySelector(".world");
const ctx = canvas.getContext("2d");

let walkingLeft;

function init() {
  walkingLeft = new Sprite({
    frameCount: 9,
    src: "./img/right.png",
  });

  walkingLeft.onload = () => {
    walkingLeft.draw();
  };

  update();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move to center
  walkingLeft.x = (canvas.width - walkingLeft.width) / 2;
  walkingLeft.y = (canvas.height - walkingLeft.height) / 2;

  walkingLeft.draw();
  walkingLeft.nextFrame();

  window.requestAnimationFrame(update);
}

init();

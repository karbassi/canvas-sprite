const canvas = document.querySelector(".world");
const ctx = canvas.getContext("2d");

let walkingSprite;

function init() {
  walkingSprite = new Sprite({
    x: 0,
    y: 0,
    frameCount: 6,
    src: "guy.png",
  });

  update();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move to center
  walkingSprite.x = (canvas.width - walkingSprite.width) / 2;
  walkingSprite.y = (canvas.height - walkingSprite.height) / 2;

  walkingSprite.draw();
  walkingSprite.nextFrame();

  window.requestAnimationFrame(update);
}

init();

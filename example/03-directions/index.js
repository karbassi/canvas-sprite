const canvas = document.querySelector(".world");
const ctx = canvas.getContext("2d");

let guy;
let sprites = [];
let walkingRight;
let walkingLeft;
let walkingUp;
let walkingDown;

const moveSpeed = 5;

function init() {
  walkingRight = new Sprite({
    src: "./img/right.png",
    frameCount: 9,
  });

  walkingRight.onload = () => {
    walkingRight.draw();
  };

  walkingLeft = new Sprite({
    src: "./img/left.png",
    frameCount: 9,
  });

  walkingUp = new Sprite({
    src: "./img/up.png",
    frameCount: 9,
  });

  walkingDown = new Sprite({
    src: "./img/down.png",
    frameCount: 9,
  });

  sprites.push(walkingRight, walkingLeft, walkingUp, walkingDown);

  guy = walkingRight;

  tick();
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  guy.draw();
  guy.nextFrame();

  window.requestAnimationFrame(tick);
}

function updateLocation(x, y) {
  sprites.forEach(function (sprite) {
    sprite.x = x;
    sprite.y = y;
  });
}

function onKeyDown(event) {
  const key = event.key.toLowerCase();

  if (key === "a" || key === "arrowleft") {
    guy = walkingLeft;
    guy.x -= moveSpeed;
  } else if (key === "d" || key === "arrowright") {
    guy = walkingRight;
    guy.x += moveSpeed;
  } else if (key === "w" || key === "arrowup") {
    guy = walkingUp;
    guy.y -= moveSpeed;
  } else if (key === "s" || key === "arrowdown") {
    guy = walkingDown;
    guy.y += moveSpeed;
  }

  updateLocation(guy.x, guy.y);
}

document.addEventListener("keydown", onKeyDown);

init();

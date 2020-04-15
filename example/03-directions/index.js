const canvas = document.querySelector(".world");
const ctx = canvas.getContext("2d");

let guy;
let walkingRight;
let walkingLeft;
let walkingUp;
let walkingDown;

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

  guy = walkingRight;

  tick();
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  guy.draw();
  guy.nextFrame();

  window.requestAnimationFrame(tick);
}

function onKeyDown(event) {
  const key = event.key.toLowerCase();

  if (key === "a" || key === "arrowleft") {
    guy = walkingLeft;
    guy.x -= 1;
  } else if (key === "d" || key === "arrowright") {
    guy = walkingRight;
    guy.x += 1;
  } else if (key === "w" || key === "arrowup") {
    guy = walkingUp;
    guy.y -= 1;
  } else if (key === "s" || key === "arrowdown") {
    guy = walkingDown;
    guy.y += 1;
  }
}

document.addEventListener("keydown", onKeyDown);

init();

class Sprite {
  image;
  src = undefined;

  width;
  height;

  frameCount;
  currentFrame = 0;

  x = 0;
  y = 0;

  constructor(
    options = {
      x: 0,
      y: 0,
      src: "",
      frameCount: -1,
    }
  ) {
    if (options.frameCount <= 0) {
      throw Error("Sprite: 'frameCount' needs to be greater than 0.");
    }

    if (options.src === "") {
      throw Error("Sprite: 'src' must be set.");
    }

    this.frameCount = options.frameCount;
    this.src = options.src;

    this._loadImage();
  }

  _loadImage() {
    this.image = new Image();
    this.image.onload = (event) => this.onload(event);
    this.image.onerror = (event) => this.onerror(event);
    this.image.src = this.src;
  }

  onload(event) {
    const obj = event.target;

    // Update the class's image width/height
    this.width = obj.width / this.frameCount;
    this.height = obj.height;
  }

  onerror(event) {
    throw Error("Sprite image could not load at location: " + event.target.src);
  }

  draw() {
    // Calculate the location of the current sprite
    const spriteX = this.width * this.currentFrame;

    ctx.beginPath();
    ctx.drawImage(
      this.image,
      spriteX,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  nextFrame() {
    this.currentFrame++;

    if (this.currentFrame % this.frameCount == 0) {
      this.currentFrame = 0;
    }
  }
}

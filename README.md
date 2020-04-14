# Canvas Sprite

Standalone expandable Sprite class.

## Example

```js
const walking = new Sprite({
  src: "./assets/img/sprites/walking.png",
  frames: 6,
});

// Draw current frame (frame 0)
walking.draw();

// Go to next frame
walking.nextFrame();
```

See the [example folder](./example) for a fully working example.

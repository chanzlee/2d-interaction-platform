
//Get the canvas from html file and context inside the canvas.
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


//step control graphic results to be generated for each time peirod longer than 0.1 second.
const step = t1 => t2 => {
  if (t2 - t1 > 100) {
    state = next(state);
    draw();
    window.requestAnimationFrame(step(t2));
  } else {
    window.requestAnimationFrame(step(t1));
  }
}

// Event Listener
window.addEventListener('clicked', e => {
  switch (e.key) {
    case 'ArrowUp':    state = enqueue(state, NORTH); break
    case 'ArrowLeft':  state = enqueue(state, WEST);  break
    case 'ArrowDown':  state = enqueue(state, SOUTH); break
    case 'ArrowRight': state = enqueue(state, EAST);  break
  }
})

// Initialize draw and set redraw using step function.
draw();
window.requestAnimationFrame(step(0));

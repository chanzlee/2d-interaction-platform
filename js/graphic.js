// initialize draw, when next time redraw, use this function: "step"

// Requestanimation will be called depends on the performance of terminals. Setting "step" will prevent it and make every terminal will redraw the animation based on time set between the steps, which will be more than 0.1 second. (assume it cannot be slower than this.)

draw();
window.requestAnimationFrame(step(0));


// I think t1 and t2 are time index.
// If 0.1 second is past, since the last time when step was called back to redraw (i.e. stepped at t1), redraw the animation using next time index, t2 while also changing "state."


const step = t1 => t2 => {
  if (t2 - t1 > 100) {
    state = next(state)
    draw()
    window.requestAnimationFrame(step(t2))
  } else {
    window.requestAnimationFrame(step(t1))
  }
}

// So, step make sure new graphic is not rendering based on the computer performance, but at least more than 0.1 second, and set up a new standard of indexing the time. when one time unit passed, "step" function make sure "state" also changes accordingly. Else, regenerate the same animation we already have.

// ** let state = initialState();

// initialState() is defined in core.js which precedes the load of this graphic js script. It sets initial state in object (coordinates)

// Note that state is a variable set to global scope intentially to pass on to step function to continuously modify global funcion which will affect throughout whole set of functions.

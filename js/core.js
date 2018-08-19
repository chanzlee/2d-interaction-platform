// Constants
const NORTH = { x: 0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }
const NONE  = { x: 0, y: 0 }


const initialState = () => ({
  cols:  20,
  rows:  20,
  moves: [NONE],
  snake: [],
});

// Randomness
const rndPos = table => ({
  x: rnd(0)(table.cols - 1),
  y: rnd(0)(table.rows - 1)
})

//append this move to the last move
const enqueue = (state, move) =>  merge(state)({ moves: state.moves.concat([move]) })

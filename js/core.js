const core = require('./base')
Object.getOwnPropertyNames(base).map(p => global[p] = base[p])


// point equals should be re-equalized in deep quality since javaScript is based on pointer, reference of the deep data.
const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y


// Constants
const NORTH = { x: 0, y:-1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }
const NONE  = { x: 0, y: 0 }


const initialState = () => ({
  cols:  20,
  rows:  20,
  moves: [EAST],
  snake: [],
});

// Next values based on state
// User can instantly change the move if it's not made.
const nextMoves = state => state.moves.length > 1 ? dropFirst(state.moves) : state.moves
const nextHead  = state => state.snake.length == 0

//initially gened at (2,2)
  ? { x: 2, y: 2 }
  : {
// mode function allows two polars are actually connected to each other.(Just think of the Earth is round )
    x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
    y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
  }

// snake consists of next head and drop the last head, moving forward by generate something on the next coordinates while erasing something on the previous coordinates.

const nextSnake = state => ([nextHead(state)].concat(dropLast(state.snake)))


// spec (objects, value) grab keys and map to construct the new object runs function inside object that merge previous values with inputted value(state).


const next = spec({
  rows:  prop('rows'),
  cols:  prop('cols'),
  moves: nextMoves,
  snake: nextSnake,
})

//append this move to the last move
const enqueue = (state, move) =>  merge(state)({ moves: state.moves.concat([move]) })

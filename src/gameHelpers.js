export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  )

// collision detection
export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {

      // check that we're on actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        // check if the block is inside the game area height (y)
        // we shouldn't go through the bottom of the play area
        if(
          !stage[y + player.pos.y + moveY] ||
          // check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x +moveX][1] !== "clear"
        ) {
        return true;
      }
      }
    }
  }
}

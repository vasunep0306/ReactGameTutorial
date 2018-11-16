import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

export default function handleMovement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }
  function dispatchMove(direction) {
    const oldPos = store.getState().player.position;
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: observeBoundaries(oldPos, getNewPosition(direction))
      }
    });
  }
  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST");
      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      default:
        console.log(e.keyCode);
    }
  }

  function observeBoundaries(oldPos, newPos) {
    let statementA = newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE;
    let statementB = newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE;
    return statementA && statementB ? newPos : oldPos;
  }
  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}

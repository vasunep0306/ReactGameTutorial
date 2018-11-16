import store from "../../config/store";

export default function handleMovement(player) {
  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return directionMove("WEST");
      case 38:
        return directionMove("NORTH");
      case 39:
        return directionMove("EAST");
      case 40:
        return directionMove("SOUTH");
      default:
        console.log(e.keyCode);
    }
  }
  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}

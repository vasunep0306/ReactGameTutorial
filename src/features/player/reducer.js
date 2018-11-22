const initialState = {
  position: [0, 0],
  spriteLocation: "0px 0px"
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER": // 4:22 video 3.
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;

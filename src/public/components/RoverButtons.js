import { store, updateStore } from "../client.js";

export const RoverButton = (state, index) => {
  let { currentRoverIndex } = state;

  function loadRover(index) {
    console.log("loadRover");
    let _index = index;
    _index += 1;
    updateStore(store, { currentRoverIndex: _index });
  }

  return `
  <button onclick="${loadRover(currentRoverIndex)}">${
    store.rovers[index]
  }</button>
  `;
};

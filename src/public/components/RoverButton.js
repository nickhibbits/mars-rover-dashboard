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

  <style>
  
  .rover-link {
    cursor: pointer;
    font-family: var(--secondary-font);
  }
  </style>

  <button class=rover-link onclick="${loadRover(currentRoverIndex)}"> 
  `;
};

{
  /* <div class="rover-link">${store.rovers[index]}</div> */
}

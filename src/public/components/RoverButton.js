import { store, updateStore } from "../client.js";

export const RoverButton = (state, index) => {
  let { currentRoverIndex } = state;
  // console.log("state", state);

  // function loadRover(index) {
  //   console.log("loadRover");
  //   let _index = index;
  //   _index += 1;
  //   updateStore(store, { currentRoverIndex: _index });
  // }

  // const roverButton = document.getElementById("rover-link");
  // roverButton.addEventListener("click", loadRover(index));

  return `

  <style>
  
  .rover-link {
    cursor: pointer;
    font-family: var(--secondary-font);
  }
  </style>

  <div class=rover-link onclick="loadRover(${currentRoverIndex})">${state.rovers[index]}  </div>
  `;
};

import { store, updateStore } from "../client.js";

export const RoverButton = (state, index) => {
  return `

  <style>
  
  .rover-link {
    cursor: pointer;
    font-family: var(--secondary-font);
  }
  </style>

  <div class=rover-link onclick="loadRover(${index})">${state.roverNames[index]}  </div>
  `;
};

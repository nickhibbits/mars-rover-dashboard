import { store } from "../client.js";
import { Rover } from "./Rover.js";
import { RoverButton } from "./RoverButtons.js";

// create content
export const App = (state) => {
  let { rovers, apod } = state;

  return `
  <style>
    .button-container {
      display: flex;
      justify-content: space-evenly;
    }
  </style>
      <header></header>
      <main>
        <div class=button-container>
          ${RoverButton(store, 0)}
          ${RoverButton(store, 1)}
          ${RoverButton(store, 2)}
        </div>
        <section>
        ${Rover(store.rovers[store.currentRoverIndex])}
        </section>
      </main>
      <footer></footer>
  `;
};

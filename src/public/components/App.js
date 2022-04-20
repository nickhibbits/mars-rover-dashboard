import { Greeting } from "./Greeting.js";
import { ImageOfTheDay } from "./ImageOfTheDay.js";
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
          ${RoverButton(0)}
          ${RoverButton(1)}
          ${RoverButton(2)}
        </div>
        <section>
        ${Rover(store.rovers[store.currentRoverIndex])}
        </section>
      </main>
      <footer></footer>
  `;
};

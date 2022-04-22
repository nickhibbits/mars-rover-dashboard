import { store } from "../client.js";
import { Rover } from "./Rover.js";
import { RoverButton } from "./RoverButton.js";

// create content
export const App = (state) => {
  let { rovers, apod } = state;

  return `
  <style>
    .button-container {
      display: flex;
      justify-content: space-evenly;
      font-size: 2rem;
    }

    .main-header {
      font-family: var(--main-font);
      font-size: 2.5rem;
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      border-bottom: solid 5px;
      border-radius: 3px;
    }
  </style>
      <main>
      <h1 class=main-header>Mars Rover Dashboard</h1>
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

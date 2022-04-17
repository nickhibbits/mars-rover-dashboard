import { Greeting } from "./Greeting.js";
import { ImageOfTheDay } from "./ImageOfTheDay.js";
import { store } from "../client.js";
import { Rover } from "./Rover.js";

// create content
export const App = (state) => {
  let { rovers, apod } = state;

  return `
      <header></header>
      <main>
          <section>
          ${Rover(store.rovers[0])}
          </section>
      </main>
      <footer></footer>
  `;
};

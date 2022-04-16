import { Greeting } from "./Greeting.js";
import { ImageOfTheDay } from "./ImageOfTheDay.js";
import { roversStore, store } from "../client.js";
import { Rover } from "./Rover.js";

// create content
export const App = (state) => {
  let { rovers, apod } = state;

  return `
      <header></header>
      <main>
          ${Greeting(store.user.name)}
          <section>
              <h3>Put things on the page!</h3>
              <p>Here is an example section.</p>
              <p>
                  One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
                  the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
                  This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
                  applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
                  explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
                  but generally help with discoverability of relevant imagery.
              </p>
              ${ImageOfTheDay(apod)}
          </section>
          <section>
          ${Rover(
            store.rovers.Curiosity
              ? store.rovers.Curiosity
              : roversStore.Curiosity
          )}
          ${Rover(
            store.rovers.Opportunity
              ? store.rovers.Opportunity
              : roversStore.Opportunity
          )}
          ${Rover(
            store.rovers.Spirit ? store.rovers.Spirit : roversStore.Spirit
          )}
          </section>
      </main>
      <footer></footer>
  `;
};

import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getImageOfTheDay = (state) => {
  let { apod } = state;

  fetch(`http://localhost:3000/apod`)
    .then((res) => res.json())
    .then((apod) => updateStore(store, { apod }));

  // return data;
};

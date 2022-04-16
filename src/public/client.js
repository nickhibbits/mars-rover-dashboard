import { App } from "./components/App.js";

export let store = {
  user: { name: "Student" },
  apod: "",
  rovers: {},
};

export let roversStore = {
  Curiosity: {
    name: "Curiosity",
  },
  Opportunity: {
    name: "Opportunity",
  },
  Spirit: {
    name: "Spirit",
  },
};

// add our markup to the page
const root = document.getElementById("root");

export const updateStore = (store, newState) => {
  store = Object.assign(store, newState);
  console.log("newStore", store);
  render(root, store);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  render(root, store);
});

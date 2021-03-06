import { App } from "./components/App.js";

export let store = {
  user: { name: "Student" },
  roverNames: ["Curiosity", "Opportunity", "Spirit"],
  roverData: {
    Curiosity: {
      roverManifest: {},
    },
    Opportunity: {
      roverManifest: {},
    },
    Spirit: {
      roverManifest: {},
    },
  },
  roverPhotos: {
    Curiosity: {
      recentPhotos: [],
    },
    Opportunity: {
      recentPhotos: [],
    },
    Spirit: {
      recentPhotos: [],
    },
  },
  currentRoverIndex: 0,
};

// add our markup to the page
const root = document.getElementById("root");

export const updateStore = (store, newState) => {
  store = Object.assign(store, newState);
  render(root, store);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

window.loadRover = (index) => {
  updateStore(store, { currentRoverIndex: index });
};

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  render(root, store);
});

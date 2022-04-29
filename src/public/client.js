import { App } from "./components/App.js";

export let store = {
  user: { name: "Student" },
  apod: "",
  rovers: ["Curiosity", "Opportunity", "Spirit"],
  roverManifiests: {
    Curiosity: {
      name: "Curiosity",
      _: "",
    },
    Opportunity: {
      name: "Opportunity",
      _: "",
    },
    Spirit: {
      name: "Spirit",
      _: "",
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
  // console.log("newStore", store);
  render(root, store);
};

const render = async (root, state) => {
  root.innerHTML = App(state);
};

window.loadRover = (index) => {
  console.log("currentRoverIndex", index);
  let _index = index;
  _index += 1;
  updateStore(store, { currentRoverIndex: _index });
};

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  render(root, store);
});

import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRover = async (roverName) => {
  console.log("roverName", roverName);

  await fetch(`http://localhost:3000/rover?roverName=${roverName}`)
    .then((res) => res.json())
    .then((roverObject) => {
      const roverData = store.roverData;

      updateStore(store, {
        roverData: {
          ...roverData,
          [roverName]: {
            roverManifest: roverObject.rover,
          },
        },
      });
    });
};

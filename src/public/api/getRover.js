import { updateStore } from "../client.js";
import { roversStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRover = async (roverName) => {
  console.log("roverName", roverName);

  await fetch(`http://localhost:3000/rover?roverName=${roverName}`)
    .then((res) => res.json())
    .then((roverObject) => {
      // console.log("roverObject", roverObject);

      const newRoversObject = {
        ...roversStore,
        [roverName]: {
          ...roverObject.rover.photo_manifest,
        },
      };

      const rovers = Object.assign(roversStore, newRoversObject);

      updateStore(store, { rovers });
    });

  // return roverResponse;
};

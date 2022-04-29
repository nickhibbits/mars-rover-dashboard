import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRover = async (roverName) => {
  console.log("roverName", roverName);

  await fetch(`http://localhost:3000/rover?roverName=${roverName}`)
    .then((res) => res.json())
    .then((roverObject) => {
      // console.log("roverObject", roverObject);

      const roverManifiest = {
        ...store.roverData[roverName].roverManifiests,
        [roverName]: roverObject.rover,
      };

      // console.log("_roverManifiests", roverManifiests);

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

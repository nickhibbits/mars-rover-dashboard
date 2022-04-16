import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRover = async (roverName) => {
  console.log("roverName", roverName);

  await fetch(`http://localhost:3000/rover?roverName=${roverName}`)
    .then((res) => res.json())
    .then((roverObject) => {
      // console.log("roverObject", roverObject);

      const roverManifiests = {
        ...store.roverManifiests,
        [roverName]: roverObject.rover,
      };

      // console.log("_roverManifiests", roverManifiests);

      updateStore(store, { roverManifiests });
    });

  // return roverResponse;
};

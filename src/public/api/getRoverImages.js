import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRoverImages = async (roverName) => {
  console.log("roverName", roverName);

  const roverResponse = await fetch(
    // `http://localhost:3000/rover?name=${roverName}`
    `http://localhost:3000/roverImages`
  ).then((res) => res.json());

  // console.log("roverImagesResponse", roverResponse);

  return roverResponse;
};

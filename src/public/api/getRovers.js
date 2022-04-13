import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRovers = async (roverName) => {
  const roverResponse = await fetch(
    // `http://localhost:3000/rover?name=${roverName}`
    `http://localhost:3000/rover`
  ).then((res) => res.json());

  console.log("roverResponse", roverResponse);

  return roverResponse;
};

import { getRovers } from "../api/getRovers.js";
import { store } from "../client.js";

export const Rover = (roverName) => {
  let landingDate;
  let launchDate;
  let status;
  let mostRecentPhotos;
  let mostRecentPhotoDates;

  getRovers(roverName);
  `<div>${getRovers(roverName)}</div>`;
};

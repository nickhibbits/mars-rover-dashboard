import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { store } from "../client.js";

export const Rover = (roverName) => {
  let landingDate;
  let launchDate;
  let status;
  let mostRecentPhotos;
  let mostRecentPhotoDates;

  getRover(roverName);
  // `<div>${getRover(roverName)}</div>`;

  getRoverImages(roverName);
};

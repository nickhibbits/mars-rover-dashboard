import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { store } from "../client.js";

export const Rover = (rover) => {
  console.log("rover", rover);

  let landingDate;
  let launchDate;
  let status;
  let mostRecentPhotos;
  let mostRecentPhotoDates;

  if (
    // spreading the Curiosity object from the api call into each rover object
    // need a check to make sure the indidvidual rover is not populated, NOT just the rovers object as whole

    !Object.values(store.rovers).find((_rover) => _rover.name == rover.name)
  ) {
    console.log("no rovers in main store -- fetching");
    const roverName = rover.name;
    getRover(roverName);
  }

  // getRoverImages(roverName);
};

import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { store } from "../client.js";

export const Rover = (roverName) => {
  // console.log("rover", rover);

  let name;
  let landingDate;
  let launchDate;
  let status;
  let mostRecentPhotos;
  let mostRecentPhotoDates;

  if (
    // spreading the Curiosity object from the api call into each rover object
    // need a check to make sure the indidvidual rover is not populated, NOT just the rovers object as whole

    Object.values(store.roverManifiests[roverName]).length == 2
  ) {
    // console.log("this rover is not in the populated -- fetching");
    getRover(roverName);
  } else {
    // console.log(
    //   "store populated, adding rover",
    //   store.roverManifiests[roverName]
    // );

    name = store.roverManifiests[roverName].photo_manifest.name;
    landingDate = store.roverManifiests[roverName].photo_manifest.landing_date;
    launchDate = store.roverManifiests[roverName].photo_manifest.launch_date;
    status = store.roverManifiests[roverName].photo_manifest.status;
    // mostRecentPhotos = store.roverManifiests[roverName].photo_manifest.;
    // mostRecentPhotoDates = store.roverManifiests[roverName].photo_manifest.;
    return `<ul>
    <h2>${name}</h2>
    <li>Launch Date: ${launchDate}</li>
    <li>Landing Date: ${landingDate}</li>
    <li>Status: ${status}</li>
    </ul>`;
  }

  // getRoverImages(roverName);
};

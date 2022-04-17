import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { store } from "../client.js";

export const Rover = (roverName) => {
  // console.log("rover", rover);

  if (Object.values(store.roverManifiests[roverName]).length == 2) {
    getRover(roverName);
  } else {
    const name = store.roverManifiests[roverName].photo_manifest.name;
    const landingDate =
      store.roverManifiests[roverName].photo_manifest.landing_date;
    const launchDate =
      store.roverManifiests[roverName].photo_manifest.launch_date;
    const status = store.roverManifiests[roverName].photo_manifest.status;
    const photoCount =
      store.roverManifiests[roverName].photo_manifest.photos.length;
    const latestPhotoDate =
      store.roverManifiests[roverName].photo_manifest.max_date;

    if (store.roverPhotos[roverName].recentPhotos.length == 0) {
      getRoverImages(roverName, latestPhotoDate);
    } else {
      return `<ul>
      <h2>${name}</h2>
      <img href="${store.roverPhotos[roverName].recentPhotos[0].img_src}></img>
      <li>Launch Date: ${launchDate}</li>
      <li>Landing Date: ${landingDate}</li>
      <li>Status: ${status}</li>
      <li>Photos: ${photoCount}</li>
      </ul>`;
    }
  }
};

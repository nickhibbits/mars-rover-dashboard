import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { store } from "../client.js";

export const Rover = (roverName) => {
  // console.log("rover", rover);

  if (Object.values(store.roverManifiests[roverName]).length == 2) {
    getRover(roverName);
    return `<div>Loading...</div>`;
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
      return `<div>Loading...</div>`;
    } else {
      const imageSourceArray = store.roverPhotos[roverName].recentPhotos.map(
        (photo) => {
          return `<img src=${photo.img_src}></img>`;
        }
      );

      return `
      <style>

      .header {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      img {
        height: 400px;
        width: 400px;
      }

      .image-container {
        display: flex;
        justify-content: row;
        justify-content: space-evenly;
        overflow-x: scroll;
      }

      .button-container {
        display: flex;
        align-items: center;
      }
     
      </style>

      <h1 class=header>${name}</h1>
      <div class=image-container>
        ${imageSourceArray}
      </div>
      <ul>
        <li>Launch Date: ${launchDate}</li>
        <li>Landing Date: ${landingDate}</li>
        <li>Status: ${status}</li>
        <li>Latest Photo: ${latestPhotoDate}</li>
      </ul>
     `;
    }
  }
};

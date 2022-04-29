import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";

export const Rover = (state, roverName) => {
  console.log("roverName", roverName);
  console.log("state", state);
  if (Object.values(state.roverData[roverName].roverManifest).length == 0) {
    getRover(roverName);
    return `<div>Loading...</div>`;
  } else {
    const name = state.roverData[roverName].roverManifest.photo_manifest.name;
    const landingDate =
      state.roverData[roverName].roverManifest.photo_manifest.landing_date;
    const launchDate =
      state.roverData[roverName].roverManifest.photo_manifest.launch_date;
    const status =
      state.roverData[roverName].roverManifest.photo_manifest.status;
    const latestPhotoDate =
      state.roverData[roverName].roverManifest.photo_manifest.max_date;

    if (state.roverPhotos[roverName].recentPhotos.length == 0) {
      getRoverImages(roverName, latestPhotoDate);
      return `<div>Loading...</div>`;
    } else {
      const imageSourceArray = state.roverPhotos[roverName].recentPhotos.map(
        (photo) => {
          return `<img src=${photo.img_src}></img>`;
        }
      );

      return `
      <style>

      .header {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-family: var(--main-font);
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

      ul {
        list-style: none;
      }

      .rover-info-header {
        font-family: var(--main-font);
        font-size: 35px;
        height: 20px;
        margin-top: 10px;
        font-weight: 900;
      }

      li {
        font-family: var(--secondary-font);
        font-size: 2rem;
        display: flex;
        flex-direction: row;
        
      }

      .info-key {
        font-weight: 900;
      }
     
      </style>

      <h1 class=header>${name}</h1>
      <div class=image-container>
        ${imageSourceArray}
      </div>
        <h3 class=rover-info-header>Info</h3>
      <ul>
        <li>
          <div class=info-key>Launch Date</div>
          <div class=info-value>: ${launchDate}</div>
        </li>
        <li>
          <div class=info-key>Landing Date</div>
          <div class=info-value>: ${landingDate}</div>
        </li>
        <li>
          <div class=info-key>Status</div>
          <div class=info-value>: ${status}</div>
        </li>
        <li>
          <div class=info-key>Latest Photo</div>
          <div class=info-value>: ${latestPhotoDate}</div>
        </li>
      </ul>
     `;
    }
  }
};

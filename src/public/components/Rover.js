import { getRover } from "../api/getRover.js";
import { getRoverImages } from "../api/getRoverImages.js";
import { RoverInfoList } from "./RoverInfoList.js";

export const Rover = (state, roverName) => {
  console.log("roverName", roverName);
  console.log("state", state);
  if (Object.values(state.roverData[roverName].roverManifest).length == 0) {
    getRover(roverName);
    return `<div>Loading...</div>`;
  } else {
    const { name, max_date } =
      state.roverData[roverName].roverManifest.photo_manifest;

    if (state.roverPhotos[roverName].recentPhotos.length == 0) {
      getRoverImages(roverName, max_date);
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
      ${RoverInfoList(state.roverData[roverName].roverManifest)}
     `;
    }
  }
};

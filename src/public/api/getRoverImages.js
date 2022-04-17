import { updateStore } from "../client.js";
import { store } from "../client.js";

// Example API call
export const getRoverImages = async (roverName, latestPhotoDate) => {
  console.log("roverName", roverName);

  await fetch(
    `http://localhost:3000/roverImages?roverName=${roverName}&maxDate=${latestPhotoDate}`
  )
    .then((res) => res.json())
    .then((roverImageResponse) => {
      // console.log("roverImageResponse", roverImageResponse);
      const roverImagesArray = roverImageResponse.rover;
      const _roverPhotos = roverImagesArray.photos.slice(0, 5);
      console.log("_roverPhotos", _roverPhotos);

      const roverPhotos = {
        ...store.roverManifiests,
        [roverName]: {
          recentPhotos: [..._roverPhotos],
        },
      };

      console.log("roverPhotos", roverPhotos);

      updateStore(store, { roverPhotos });
    });
};

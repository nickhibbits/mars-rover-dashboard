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
      const roverPhotos = roverImagesArray.photos.slice(0, 10);
      console.log("_roverPhotos", roverPhotos);

      const roverData = store.roverData;

      updateStore(store, {
        roverData: {
          ...roverData,
          [roverName]: {
            recentPhotos: [...roverPhotos],
          },
        },
      });
    });
};

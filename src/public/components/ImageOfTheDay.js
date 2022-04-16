import { getImageOfTheDay } from "../api/getImageOfTheDay.js";
import { store } from "../client.js";

// Example of a pure function that renders infomation requested from the backend
export const ImageOfTheDay = (apod) => {
  const today = new Date();
  const photodate = new Date(apod.date);

  if (!apod || apod.date === today.getDate()) {
    getImageOfTheDay(store);
  }

  // check if the photo of the day is actually type video!
  if (apod.media_type === "video") {
    return `
            <p>See today's featured video <a href="${apod.url}">here</a></p>
            <p>${apod.title}</p>
        `;
  } else {
    return `
            <img src="${apod.image.url}" height="350px" width="100%" />
            
        `;
  }
};

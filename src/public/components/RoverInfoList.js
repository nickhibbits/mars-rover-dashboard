export const RoverInfoList = (roverManifest) => {
  const { landingDate, launchDate, status, latestPhotoDate } =
    roverManifest.photo_manifest.landing_date;

  return `
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
};

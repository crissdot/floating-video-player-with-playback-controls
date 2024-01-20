function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    const video = document.getElementsByTagName("video")[0];
    if (!video) return;

    video.requestPictureInPicture();
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        const backwardTime = video.currentTime - 5;
        video.currentTime = backwardTime <= 0 ? 0 : backwardTime;
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        const fordwardTime = video.currentTime + 5;
        video.currentTime = fordwardTime >= video.duration ? video.duration : fordwardTime;
      });
    }
  }
}

togglePictureInPicture();
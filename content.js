function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    console.log("exiting picture in picture");
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    console.log("requesting picture in picture");
    const video = document.getElementsByTagName("video")[0];
    video.requestPictureInPicture();
  }
}

togglePictureInPicture();
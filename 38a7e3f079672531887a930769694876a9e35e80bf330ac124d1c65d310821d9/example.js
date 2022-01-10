DeviceInfo.isCameraPresent()
  .then(isCameraPresent => {
    // true or false
  })
  .catch(cameraAccessException => {
    // is thrown if a camera device could not be queried or opened by the CameraManager on Android
  });

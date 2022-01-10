const supported = await (async () => 'FaceDetector' in window &&
    await new FaceDetector().detect(document.createElement('canvas'))
    .then(_ => true)
    .catch(e => e.name === 'NotSupportedError' ? false : true))();

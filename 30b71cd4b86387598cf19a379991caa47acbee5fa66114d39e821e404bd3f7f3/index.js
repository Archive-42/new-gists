function getNewFileHandle() {
  const opts = {
	type: 'saveFile',
	accepts: [{
  	description: 'Text file',
  	extensions: ['txt'],
	  mimeTypes: ['text/plain'],
    }],
  };
  const handle = window.chooseFileSystemEntries(opts);
  return handle;
}

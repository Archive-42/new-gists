async function getClipboardContents() {
  try {
	const clipboardItems = await navigator.clipboard.read();
	for (const clipboardItem of clipboardItems) {
  	try {
    	for (const type of clipboardItem.types) {
      	const blob = await clipboardItem.getType(type);
      	console.log(URL.createObjectURL(blob));
    	}
  	} catch (e) {
    	console.error(e, e.message);
  	}
	}
  } catch (e) {
	console.error(e, e.message);
  }
}

try {
  const imgURL = '/images/generic/file.png';
  const data = await fetch(imgURL);
  const blob = await data.blob();
  await navigator.clipboard.write([
	new ClipboardItem({
  	[blob.type]: blob
	})
  ]);
  console.log('Image copied.');
} catch(e) {
  console.error(e, e.message);
}

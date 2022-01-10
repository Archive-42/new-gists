async function writeFile(fileHandle, contents) {
  // Create a writer (request permission if necessary).
  const writer = await fileHandle.createWriter();
  // Write the full length of the contents
  await writer.write(0, contents);
  // Close the file and write the contents to disk
  await writer.close();
}

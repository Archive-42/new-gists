// The wake lock sentinel.
let wakeLock = null; 
// Function that attempts to request a wake lock.
const requestWakeLock = async () => {
  try {
	wakeLock = await navigator.wakeLock.request('screen');
	wakeLock.addEventListener('release', () => {
  	console.log('Wake Lock was released');
	});
	console.log('Wake Lock is active');
  } catch (err) {
	console.error(`${err.name}, ${err.message}`);
  }
}; 
// Request a wake lock…
await requestWakeLock();
// …and release it again after 5s.
window.setTimeout(() => {
  wakeLock.release();
  wakeLock = null;
}, 5000);

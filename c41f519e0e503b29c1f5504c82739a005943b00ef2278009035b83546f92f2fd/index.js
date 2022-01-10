const handleVisibilityChange = () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
	requestWakeLock();
  }
};
document.addEventListener('visibilitychange', handleVisibilityChange);
document.addEventListener('fullscreenchange', handleVisibilityChange);

// Checking for payment app availability without checking for instrument presence.
if (request.hasEnrolledInstrument) {
  // `canMakePayment()` behavior change corresponds to
  // `hasEnrolledInstrument()` availability.
  request.canMakePayment().then(handlePaymentAppAvailable).catch(handleError);
} else {
  console.log("Cannot check for payment app availability without checking for instrument presence.");
}

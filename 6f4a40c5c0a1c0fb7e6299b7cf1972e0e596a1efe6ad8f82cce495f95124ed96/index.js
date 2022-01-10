var steps = [{
  // this is a step object
  content: '<p>Hey user, check this out!</p>',
  highlightTarget: true,
  nextButton: true,
  target: $('#thing1'),
  my: 'bottom center',
  at: 'top center'
}, {
  ...
}, ...]

var tour = new Tourist.Tour({
  steps: steps,
  tipOptions:{ showEffect: 'slidein' }
});
tour.start();
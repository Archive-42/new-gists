$('body').chardinJs();
$('body').on('click', 'button[data-toggle="chardinjs"]', function (e) {
    e.preventDefault();
    return ($('body').data('chardinJs')).toggle();
});

// Run Explicitly
$('body').chardinJs('start')

// Confine to container
$('.container').chardinJs('start')
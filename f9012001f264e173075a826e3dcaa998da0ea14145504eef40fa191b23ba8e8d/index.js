toolTipFormatFunction: function (value, itemIndex, series, group, xAxisValue, xAxis) {
    const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
    return value.getDate() + '-' + monthFormatter.format(value) + '-' + value.getFullYear();
}

dataAdapter,
{
    customAggregationFunctions: {
        'var': function (values) {
        if (values.length <= 1)
        return 0;
        // sample's mean
        var mean = 0;
        for (var i = 0; i < values.length; i++)
        mean += values[i];
        mean /= values.length;
        // calc squared sum
        var ssum = 0;
        for (var i = 0; i < values.length; i++)
            ssum += Math.pow(values[i] - mean, 2)
            // calc the variance
            var variance = ssum / values.length;
            return variance;
        }
    },
}    
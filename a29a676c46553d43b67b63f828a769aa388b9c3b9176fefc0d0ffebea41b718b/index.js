xAxis:
{
    labels: {
        formatFunction: function (value) {
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            return days[value];
        }
    }
}

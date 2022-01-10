data: function () {
	return {
		sampleData: [
// SET SAMPLE DATA
                ],
          padding: { left: 10, top: 10, right: 15, bottom: 10 },
          titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
          xAxis: {
                    dataField: 'Day',
                    unitInterval: 1,
                    tickMarks: { visible: true, interval: 1 },
                    gridLinesInterval: { visible: true, interval: 1 },
                    valuesOnTicks: false,
                    padding: { bottom: 10 }
          },
          valueAxis: {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 50,
                    title: { text: 'Time in minutes<br><br>' },
                    labels: { horizontalAlignment: 'right' }
          },
//…

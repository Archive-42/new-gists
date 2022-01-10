let xAxis = {
  dataField: "ID",
  formatFunction: function(value) {
    return (
      value.getDate() +
      "-" +
      year[value.getFullYear()] +
      "-" +
      value.getFullYear()
    );
  },
  type: "ID",
  baseUnit: "year",
  valuesOnTicks: true,
  minValue: "2010",
  maxValue: "2016",
  tickMarks: {
    visible: true,
    interval: 1
  },
  unitInterval: 1,
  gridLines: {
    visible: true,
    interval: 3
  },
  labels: {
    angle: -45,
    rotationPoint: "topright",
    offset: { x: 0, y: -25 }
  }
};

let valueAxis = {
  visible: true,
  title: { text: "Closing Price<br>" }
};

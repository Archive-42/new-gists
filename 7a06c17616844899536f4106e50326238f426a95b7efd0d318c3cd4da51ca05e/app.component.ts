let data = new Array();
for (let i = 0; i < year.length * 2; i++) {
    let row = {};
     let value = parseFloat(dataPoints[Math.round((Math.random() * 100)) % dataPoints.length]);
     row["year"] = year[i % year.length];
     row["value"] = value;
     data[i] = row;
}
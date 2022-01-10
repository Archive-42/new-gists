seriesGroups: [
  {
      series: [
          { dataField: 'GDP', displayText: 'GDP per Capita' },
          { dataField: 'Debt', displayText: 'Debt per Capita' }
      ],
      type: 'column',
      valueAxis:
      {
          title: { text: 'GDP & Debt per Capita($)<br>' },
          unitInterval: 5000,
          visible: true
      }
  },
  {
      series: [
          { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
      ],
      type: 'line',
      valueAxis:
      {
          gridLines: { visible: false },
          labels: { horizontalAlignment: 'left' },
          position: 'right',
          title: { text: 'Debt (% of GDP)' },
          unitInterval: 10,
          visible: true
      }
  }
],

values: [
    { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2, align: 'right' } },
    { dataField: 'price', 'function': 'count', text: 'count' },
    {
       dataField: 'quantity',
       text: 'variance',
       'function': 'var',
       formatSettings: { decimalPlaces: 2 }
    }
]
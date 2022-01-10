// create a data source and data adapter
let source ={
            localdata: data,
            datatype: "array",
            datafields:
            [
                { name: 'year', type: 'string' },
                { name: 'value', type: 'number' }
            ]
        };
        let dataAdapter = new jqx.dataAdapter(source);
        dataAdapter.dataBind();
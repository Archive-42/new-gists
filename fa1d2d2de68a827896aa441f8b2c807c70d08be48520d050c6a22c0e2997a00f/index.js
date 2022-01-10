// …
let source =
    { // defining the source 
        datatype: "csv",
        datafields: [
            { name: 'ID' },
            { name: 'Year' },
            { name: 'Rate' }
        ],
        url: 'sampledata/sample.txt'
    };
 
    let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
 
    let year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
 
    let padding = { left: 10, top: 5, right: 10, bottom: 5 };
 
    let titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
… //

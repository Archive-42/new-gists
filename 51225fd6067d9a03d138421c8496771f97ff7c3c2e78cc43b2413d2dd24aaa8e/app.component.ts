resourcesAdapterFunc = (): any => {
  let resourcesSource =
      {
          localData:
          [
              { id: 0, name: 'No name', image: '../jqwidgets/styles/images/common.png', common: true },
              { id: 1, name: 'Andrew Fuller', image: '../images/andrew.png' },
              { id: 2, name: 'Janet Leverling', image: '../images/janet.png' },
              { id: 3, name: 'Steven Buchanan', image: '../images/steven.png' },
              { id: 4, name: 'Nancy Davolio', image: '../images/nancy.png' },
              { id: 5, name: 'Michael Buchanan', image: '../images/Michael.png' },
              { id: 6, name: 'Margaret Buchanan', image: '../images/margaret.png' },
              { id: 7, name: 'Robert Buchanan', image: '../images/robert.png' },
              { id: 8, name: 'Laura Buchanan', image: '../images/Laura.png' },
              { id: 9, name: 'Laura Buchanan', image: '../images/Anne.png' }
          ],
          dataType: 'array',
          dataFields:
          [
              { name: 'id', type: 'number' },
              { name: 'name', type: 'string' },
              { name: 'image', type: 'string' },
              { name: 'common', type: 'boolean' }
          ]
      };
  let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
  return resourcesDataAdapter;
}
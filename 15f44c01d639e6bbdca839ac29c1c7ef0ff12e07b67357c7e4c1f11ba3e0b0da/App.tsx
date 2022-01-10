export class App extends React.PureComponent<{}, IGridProps> {
	constructor(props: {}) {
        super(props);
        const source: any = {
            datafields: [
                { name: 'Name', type: 'string' },
                { name: 'Sex'  , type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Address', type: 'string },
            ],
            datatype: 'xml',	
            id: 'NameID',
            record: 'Name',
            root: 'Name',
            url: './../sampledata/Details.xml'
        };	
//set the state for widget.
    this.state = {
        columns: [
            { text: 'Name', datafield: 'Name', width: 250 },
            { text: 'Sex', datafield: 'Sex', width: 100 },
            { text: 'City', datafield: 'City', width: 80 },                                               		 { text: 'Address', datafield: 'Address', width: 350 },
        ],
        source: new jqx.dataAdapter(source)
    }
}
public render() {
    return (
        <JqxGrid
        // @ts-ignore
            width={this.state.width} source={this.state.source} columns={this.state.columns} autoheight={true} altrows={true}
        } />
      )
    }  
}

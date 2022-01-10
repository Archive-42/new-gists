// Get access to pivotGrid defined in html.
@ViewChild('pivotGridReference') myPivotGrid: jqxPivotGridComponent;
 
//Get Methods
const pivotRows = this.myPivotGrid.getPivotRows();
 
//Set Methods
this.myPivotGrid.refresh();
 
//Get Properties
const autoResize = this.myPivotGrid.autoResize();
 
//Set Properties
this.myPivotGrid.autoResize(false);
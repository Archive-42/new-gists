@ViewChild('pivotGridReference') myPivotGrid: jqxPivotGridComponent;
 
ngAfterViewInit(): void
{
    this.myPivotGrid.createComponent(this.pivotGridSettings);
}
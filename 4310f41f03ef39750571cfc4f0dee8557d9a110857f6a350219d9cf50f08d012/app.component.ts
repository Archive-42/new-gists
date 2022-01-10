@Component({
    selector: 'app-root',
    template:
        `<jqxPivotGrid #pivotGridReference
              [width]="800" [height]="400" [source]="pivotDataSource"
              [treeStyleRows]="true" [autoResize]="false"
              [multipleSelectionEnabled]="true">
        </jqxPivotGrid>`
})
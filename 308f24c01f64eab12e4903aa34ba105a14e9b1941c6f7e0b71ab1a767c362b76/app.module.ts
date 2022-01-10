<jqxSplitter [width]="getWidth()" [height]='600' [panels]='mainSplitterPanels'>
    <div>
        <jqxKanban id="kanban1" #myKanbanOne
                   [width]='"100%"' [height]='"100%"' [source]='dataAdapter'
                   [columns]='kanbanOneColumns' [connectWith]='"#kanban2, #kanban3"'
                   [resources]='resourcesAdapterFunc()' [columnRenderer]='kanbanOneColumnRenderer'>
        </jqxKanban>
    </div>
    <div>
    <jqxSplitter [width]='"100%"' [height]='"100%"'
        [orientation]='"horizontal"' [panels]='rightSplitterPanels'>
        <div>
            <jqxKanban id="kanban2" #myKanbanTwo
                       [width]='"100%"' [height]='"100%"' [source]='dataAdapter2'
                       [columns]='kanbanTwoColumns' [connectWith]='"#kanban1, #kanban3"'
                       [resources]='resourcesAdapterFunc()' [columnRenderer]='kanbanTwoColumnRenderer'>
            </jqxKanban>
        </div>
    </jqxSplitter>
    </div>
</jqxSplitter>
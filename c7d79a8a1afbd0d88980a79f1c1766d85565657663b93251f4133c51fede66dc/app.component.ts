kanbanOneColumns: any[] =
    [
        { text: 'Backlog', dataField: 'new', maxItems: 10 }
    ];
    kanbanOneColumnRenderer: any = (element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            let headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            let columnItems = this.myKanbanOne.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
        }
    }
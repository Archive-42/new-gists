public render() {
        return (
            <div>
                <JqxGrid onCellbeginedit={this.cellBeginEditEvent} onCellendedit={this.cellEndEditEvent}
                    // @ts-ignore
                    width={getWidth('grid')} source={this.state.source} columns={this.state.columns}
                    editable={true} enabletooltips={true} selectionmode={'multiplecellsadvanced'} />
                <div style={{ fontSize: '12px', fontFamily: 'Verdana', marginTop: '30px' }}>
                    <div ref={this.beginEdit} />
                    <div ref={this.endEdit} style={{ marginTop: '10px' }} />
                </div>
            </div>
        );
    }
    private cellBeginEditEvent(event: any): void {
        const args = event.args;
        this.beginEdit.current!.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }
    private cellEndEditEvent(event: any): void {
        const args = event.args;
        this.endEdit.current!.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }

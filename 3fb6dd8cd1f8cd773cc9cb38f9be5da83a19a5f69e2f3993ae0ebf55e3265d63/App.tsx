<JqxGrid ref={this.myGrid} onFilter={this.onFilter}
     width={getWidth('grid')} source={this.state.source} columns={this.state.columns}
    filterable={true} sortable={true} ready={this.state.ready} autoshowfiltericon={true} />

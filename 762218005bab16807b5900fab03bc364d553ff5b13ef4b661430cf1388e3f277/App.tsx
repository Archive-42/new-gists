<JqxGrid ref={this.myGrid}
	onPagechanged={this.onPageChanged} 	onPagesizechanged={this.onPageSizeChanged}
          // @ts-ignore
          width={getWidth('grid')} source={this.state.source} 	columns={this.state.columns}
          pageable={true} sortable={true} columnsresize={true}
          autoheight={true} selectionmode={'multiplerowsextended'} />

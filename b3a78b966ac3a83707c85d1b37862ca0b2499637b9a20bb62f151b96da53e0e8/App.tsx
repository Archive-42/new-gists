<JqxGrid ref={this.myGrid}
    onGroupexpand={this.onGroupExpand} onGroupcollapse={this.onGroupCollapse}
                    // @ts-ignore
    width={getWidth('grid')} groupable={true} columns={this.state.columns}
    source={this.state.source} groups={['Country']} />

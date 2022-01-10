<Motion style={{d: spring(this.state.click ? 700 : 0)}}>
  {({d}) =>
    <div className="bowling-alley">
      <div className="ball" style={{
        webkitTransform: 'translate3d(${d}px, 0, 0)'
      }}
      onMouseDown={this.handleMouseDown}
      onTouchStart={this.handleTouchStart}>
      </div>

    </div>
  }
</Motion>
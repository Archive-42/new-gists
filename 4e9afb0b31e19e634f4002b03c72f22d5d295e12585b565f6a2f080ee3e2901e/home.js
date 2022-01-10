constructor(props) {
    super(props);
 
    this.state = { progress: 0, color: "blue" };
 
    const interval = setInterval(() => {
      if (this.state.progress >= 100) return clearInterval(interval);
 
      this.setState({ progress: this.state.progress + 1 });
    }, 50);
  }
 
  render() {
    const { progress } = this.state,
      label = `Progress - ${progress}%`;
 
    // See the `onComplete` prop
    return (
      <progressbar
        height="50%"
        width="100%"
        label={label}
        onComplete={() => this.setState({ color: "green" })}
        filled={progress}
        style={{ bar: { bg: this.state.color } }}
      />
    );
  }

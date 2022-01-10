const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "React Blessed Example",
});
screen.key(["escape", "q", "C-c"], () => process.exit(0));
const component = render(<ProgressBar />, screen);
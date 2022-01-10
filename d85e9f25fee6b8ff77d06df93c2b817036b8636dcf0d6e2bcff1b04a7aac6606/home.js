const Home = () => {
  let dateTime = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <box
      top="center"
      left="center"
      width="50%"
      height="50%"
      border={{ type: "line" }}
      style={{
        border: { fg: "green" },
      }}
    >
      
      {`Welcome to React-Blessed World! Today: ${dateTime}`}
    </box>
  );
};
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "React Blessed Example",
});
screen.key(["escape", "q", "C-c"], () => process.exit(0));
const component = render(<Home />, screen);
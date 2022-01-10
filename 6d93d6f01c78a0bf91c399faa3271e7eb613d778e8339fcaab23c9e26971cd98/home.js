const Home = () => {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer.current);
  }, [count]);
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
        border: { fg: "red" },
      }}
    >
      {` Welcome to React-Blessed World! Today: ${dateTime}`}
      {`Counter has been started since ${count}`}
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
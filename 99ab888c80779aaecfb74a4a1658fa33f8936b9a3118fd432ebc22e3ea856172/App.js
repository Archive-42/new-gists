const ObserverDemo = () => {
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    setTimeout(() => setShouldRender(false), 3000);
  }, []);
  return (
 
  );
};

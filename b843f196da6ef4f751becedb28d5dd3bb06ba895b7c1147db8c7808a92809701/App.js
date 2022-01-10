import { useResponse } from "@curi/react-dom";
import NavLinks from  ./NavLinks";

export default function App() {
  let { response } = useResponse();
 
  let { body: Body } = response;
  return (
    <>
      <NavLinks />
      <div className="container" style={{ textAlign: "center" }}>
        <Body response={response} />
      </div>
    </>
  );
}

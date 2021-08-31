import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponents";

function App() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      <button onClick ={ () =>setVisible(!isVisible) }>Button </button>
      {/* <ClassComponent/> */}
      {isVisible ? <ClassComponent/> : <FunctionalComponent/>}
    </div>
  )
};
export default App;
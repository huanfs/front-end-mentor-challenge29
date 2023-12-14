import { useState, useEffect } from "react";
import "./App.scss";
/*comonents*/
import Text from "./components/text";
import Slider from "./components/slider";
function App() {
  const[option, setOption] = useState(true);
  return (
    <>
      <Text state={option}/>
      <Slider state={option} changeState={setOption}/>
    </>
  )
}

export default App

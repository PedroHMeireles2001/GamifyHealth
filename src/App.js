import SectionContainer from "./Components/SectionContainer";
import WeightInput from "./Components/WeightInput";
import MetricsContainer from "./Components/MetricsContainer";
import { useMetrics } from "./Context/MetricsContext";
import { useEffect, useState } from "react";

function App() {
  const { calcPoints, metrics } = useMetrics()
  const [ points, setPoints ] = useState(0)
  
  useEffect(()=>(setPoints(calcPoints())), [metrics, calcPoints])
  return (
    <main>
      <SectionContainer title={`Metrics ${points}PTS`}>
        <WeightInput/>
        <MetricsContainer />
      </SectionContainer>
    </main>
  );

}



export default App;

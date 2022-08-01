import { Profiler } from "react";
import List from "./List";

const NUM_NUMBERS = 300;

function App() {
  function renderHandler(
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: any // i use any because Set<SchedulerInteraction> is not found
  ): void {
    console.log(`id : ${id} \nphase : ${phase} \nactualDuration : ${actualDuration} \nbaseDuration : ${baseDuration} \nstartTime : ${startTime} \ncommitTime : ${commitTime} \ninteractions : ${interactions}`);
    
  }

  return (
    <div>
      <Profiler id="List" onRender={renderHandler}>
        <List numNumbers={NUM_NUMBERS} />
      </Profiler>
    </div>
  );
}

export default App;

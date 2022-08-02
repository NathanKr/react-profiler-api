import { Profiler } from "react";
import List from "./components/List";
import { NUM_NUMBERS, optimizeWithMemo } from "./constants";

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
    console.log(
      `id : ${id} \nphase : ${phase} \nactualDuration [ms] : ${actualDuration} \nbaseDuration [ms] : ${baseDuration} \nstartTime [ms] : ${startTime} \ncommitTime [ms] : ${commitTime} \ninteractions : ${interactions}`
    );
  }

  return (
    <div>
      <Profiler id="List" onRender={renderHandler}>
        <List numNumbers={NUM_NUMBERS} optimizeWithMemo={optimizeWithMemo} />
      </Profiler>
    </div>
  );
}

export default App;

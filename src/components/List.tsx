import { FC, useState } from "react";
import ListItem from "./ListItem";
import { ListItemWithMemo } from "./ListItemWithMemo";
import { NUM_NUMBERS_IN_ROW } from "../constants";

interface IProps {
  numNumbers: number;
  optimizeWithMemo: boolean;
}

const List: FC<IProps> = ({ numNumbers, optimizeWithMemo }) => {
  const [numbers, setNumbers] = useState(Array.from(Array(numNumbers).keys()));
  const elems = numbers.map((it, i) => {
    const item = optimizeWithMemo ? (
      <ListItemWithMemo  num={it} />
    ) : (
      <ListItem  num={it} />
    );
    return i % NUM_NUMBERS_IN_ROW ? (
      <span key={i}>{item},</span>
    ) : (
      <span key={i}>
        {item}
        <br />
      </span>
    );
  });

  function pushEnd() {
    const tmp = [...numbers];
    tmp.push(tmp[tmp.length - 1] + 1);
    setNumbers(tmp);
  }

  return (
    <div>
      <button onClick={pushEnd}>Push end</button>
      <p>numNumbers : {numNumbers}</p>
      <p>optimizeWithMemo : {optimizeWithMemo ? "true" : "false"}</p>
      <p>check the console for actualDuration </p>
      {elems}
    </div>
  );
};

export default List;

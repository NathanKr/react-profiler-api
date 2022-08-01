import { FC, useState } from "react";
import ListItem from "./ListItem";

interface IProps {
  numNumbers: number;
}

const List: FC<IProps> = ({ numNumbers }) => {
  const [numbers, setNumbers] = useState(Array.from(Array(numNumbers).keys()));
  const elems = numbers.map((it, i) => <ListItem key={i} num={it}/>)
  function pushEnd() {
    const tmp = [...numbers];
    tmp.push(tmp[tmp.length-1]+1);
    setNumbers(tmp);
  }

  return (
    <div>
      <button onClick={pushEnd}>Push end</button>
      {elems}
    </div>
  );
};

export default List;

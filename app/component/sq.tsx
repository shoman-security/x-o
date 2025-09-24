import { Dispatch, SetStateAction } from "react";

type sqprops = {
  id: number;
  go: string;
  Setgo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setcells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  WinningMessage: string;
};

const Cell = ({
  go,
  Setgo,
  id,
  cells,
  setcells,
  cell,
  WinningMessage,
}: sqprops) => {
  const Handlclick = () => {
    if (WinningMessage) {
      return;
    }
    const nottaken = !cells[id];
    if (nottaken) {
      if (go === "circle") {
        handlchange("circle");
        Setgo("cross");
      } else if (go === "cross") {
        handlchange("cross");

        Setgo("circle");
      }
    }
  };
  const handlchange = (celltochange: string) => {
    let copycells = [...cells];
    copycells[id] = celltochange;
    setcells(copycells);
  };
  return (
    <div onClick={Handlclick} className="square">
      <div className={cell}>{cell ? (cell === "circle" ? "o" : "x") : ""}</div>
    </div>
  );
};
export default Cell;

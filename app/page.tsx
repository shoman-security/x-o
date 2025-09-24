"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Cell from "./component/sq";
import { Combo, Elsie } from "next/font/google";
const winingc = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setcells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, Setgo] = useState("circle");
  const [WinningMessage, setWinningMessage] = useState("");
  useEffect(() => {
    winingc.forEach((Combo) => {
      const cwin = Combo.every((cell) => cells[cell] === "circle");
      const xwin = Combo.every((cell) => cells[cell] === "cross");

      if (cwin) {
        setWinningMessage("o-win");
      } else if (xwin) {
        setWinningMessage("v-win");
      }
    });
  }, [cells, WinningMessage]);
  useEffect(() => {
    if (cells.every((cell) => cell !== "" && !WinningMessage))
      setWinningMessage("draw!");
  }, [cells, WinningMessage]);

  return (
    <div className="container">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            Setgo={Setgo}
            key={index}
            cells={cells}
            setcells={setcells}
            cell={cell}
            WinningMessage={WinningMessage}
          />
        ))}
      </div>
      <div>{WinningMessage}</div>
      {!WinningMessage && <div>{`${go} can you play now `}</div>}
    </div>
  );
}

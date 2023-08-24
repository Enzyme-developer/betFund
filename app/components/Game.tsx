import { cn } from "@/lib/utils";
import React from "react";
import { nunito } from "../utils/fonts";

type gameProp = {
  title: string;
};

const Game = ({ title }: gameProp) => {
  return (
    <div
      className={cn(
        "mt-12 flex flex-col justify-center items-center",
        nunito.className
      )}
    >
      <h2 className={cn("font-black text-3xl uppercase text-center mb-4 px-4")}>
        {title}
      </h2>
      <div className="w-4/5 max-w-[840px] px-16 py-6 bg-white rounded-[14px] flex items-center space-between">
        <div className="flex flex-col items-center justify-center space-y-4 mr-4">
          <p className="font-semibold text-center text-lg uppercase">Virtual Money</p>
          <p className="text-2xl font-bold text-center">#30,000</p>
        </div>
        <div className="w-full">
          <table className="w-full border-none text-center">
            <thead>
              <tr className="text-lg font-black uppercase">
                <th>Bet</th>
                <th>Stake</th>
                <th>Odds</th>
                <th>Win</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
                <td>Column 5</td>
              </tr>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
                <td>Column 5</td>
              </tr>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
                <td>Column 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Game;

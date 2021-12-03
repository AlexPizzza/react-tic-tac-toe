import "./Board.css";

import Card from "../Card/Card";

type BoardProps = {
  board: any[];
  onClick: (i: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  return (
    <div className="grid">
      {board.map((value, index) => (
        <Card key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;

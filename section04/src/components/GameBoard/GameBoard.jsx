export const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id={"game-board"}>
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, columnIdx) => (
              <li key={columnIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, columnIdx)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

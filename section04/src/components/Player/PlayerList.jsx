import { Player } from "./Player.jsx";

export const PlayerList = ({ activePlayer, onChangeName, players }) => {
  return (
    <ol id={"players"} className={"highlight-player"}>
      <Player
        initialName={players.X}
        symbol={"X"}
        isActive={activePlayer === "X"}
        onChangeName={onChangeName}
      />
      <Player
        initialName={players.O}
        symbol={"O"}
        isActive={activePlayer === "O"}
        onChangeName={onChangeName}
      />
    </ol>
  );
};

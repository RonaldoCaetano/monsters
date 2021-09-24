import { CardListProps } from "../../types";
import Card from "../Card";
import "./styles.css";

const CardList = ({ filteredMonsters }: CardListProps) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((m) => (
        <Card monster={m} key={m.id} />
      ))}
    </div>
  );
};

export default CardList;

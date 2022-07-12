import { useContext } from "react";
import { MonstersContext } from "../../context/MonstersContext";
import { CardProps } from "../../types";
import "./styles.css";

const Card = ({ monster }: CardProps) => {
  const { setCurrentMonster, setShowModal } = useContext(MonstersContext);

  const handleCardClick = () => {
    setCurrentMonster(monster);
    setShowModal(true);
  };

  return (
    <div
      className="card-container"
      data-testid="card-container"
      onClick={handleCardClick}
    >
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={monster.name}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;

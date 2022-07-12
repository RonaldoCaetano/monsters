import { useContext } from "react";
import { MonstersContext } from "../../context/MonstersContext";
import "./styles.css";

const Modal = () => {
  const { currentMonster, setShowModal } = useContext(MonstersContext);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="card-modal">
        <button onClick={handleCloseModal}>X</button>
        <img
          src={`https://robohash.org/${currentMonster?.id}?set=set2&size=180x180`}
          alt={currentMonster?.name}
        />
        <h2>{currentMonster?.name}</h2>
        <p>{currentMonster?.email}</p>
        <p>{currentMonster?.address?.street}, {currentMonster?.address?.city}</p>
      </div>
    </>
  );
};

export default Modal;

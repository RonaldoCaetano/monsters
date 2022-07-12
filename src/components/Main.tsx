import { useState, useContext } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

import { MonstersContext } from "../context/MonstersContext";
import Modal from "./Modal";

const Main = () => {
  const { monsters, showModal } = useContext(MonstersContext);
  const [searchField, setSearchField] = useState<string>("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters..."
        handleChange={setSearchField}
      />
      <CardList filteredMonsters={filteredMonsters} />

      {showModal && (
        <Modal />
      )}
    </div>
  );
};

export default Main;

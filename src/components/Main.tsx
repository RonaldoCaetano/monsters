import { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

import { Monster } from "../types";

const Main = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState<string>("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters..."
        handleChange={setSearchField}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default Main;

import React, { createContext, useState, useEffect } from 'react';
import { Monster } from '../types';

interface MonsterProviderProps {
  children: JSX.Element;
}

interface MonstersContextProps {
  monsters: Monster[];
  currentMonster: Monster;
  setCurrentMonster: (m: Monster) => void;
  showModal: boolean;
  setShowModal: (param: boolean) => void;
}

export const MonstersContext = createContext({} as MonstersContextProps);

export const MonstersProvider = ({ children }: MonsterProviderProps) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [currentMonster, setCurrentMonster] = useState<Monster>({} as Monster);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <MonstersContext.Provider value={{
      monsters,
      currentMonster, 
      setCurrentMonster,
      showModal,
      setShowModal,
    }}>
      {children}
    </MonstersContext.Provider>
  )
}
